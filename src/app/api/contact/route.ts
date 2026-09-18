import { NextRequest, NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  company?: string;
  phone: string;
  email: string;
  service: string;
  message?: string;
  website?: string; // Honeypot antispam
}

// Sanitização básica para evitar XSS e injeção em e-mails
function sanitizeText(str: string): string {
  return str
    .replace(/[<>]/g, "")
    .replace(/&/g, "&amp;")
    .trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();

    // 1. Verificação Honeypot (campo invisível preenchido por bots)
    if (body.website && body.website.trim() !== "") {
      // Falso positivo silencioso para enganar bots
      return NextResponse.json(
        { success: true, message: "Mensagem recebida com sucesso." },
        { status: 200 }
      );
    }

    const name = sanitizeText(body.name || "");
    const company = sanitizeText(body.company || "Não informada");
    const phone = sanitizeText(body.phone || "");
    const email = sanitizeText(body.email || "");
    const service = sanitizeText(body.service || "Geral");
    const message = sanitizeText(body.message || "Sem mensagem adicional");

    // 2. Validação dos campos obrigatórios
    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Por favor, introduza o seu nome completo." },
        { status: 400 }
      );
    }

    if (!phone || phone.length < 6) {
      return NextResponse.json(
        { error: "Por favor, introduza um número de telefone válido." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Por favor, introduza um endereço de e-mail corporativo válido." },
        { status: 400 }
      );
    }

    // 3. Preparação do payload para envio a geral@vimoraiz.com
    const emailPayload = {
      to: "geral@vimoraiz.com",
      replyTo: email,
      subject: `[VIMORAIZ Website] Novo Pedido de Orçamento: ${name} (${company})`,
      timestamp: new Date().toISOString(),
      details: {
        cliente: name,
        empresa: company,
        telefone: phone,
        email: email,
        servico: service,
        mensagem: message,
      },
    };

    // 4. Integração com Provedor de E-mail (Resend, Sendgrid, Brevo ou SMTP)
    // Se variáveis de ambiente estiverem configuradas, executa o envio
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || "VIMORAIZ Web <notificacoes@vimoraiz.com>",
            to: ["geral@vimoraiz.com"],
            reply_to: email,
            subject: emailPayload.subject,
            html: `
              <h2>Novo Pedido de Orçamento Recebido no Website</h2>
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Empresa:</strong> ${company}</p>
              <p><strong>Telefone / WhatsApp:</strong> ${phone}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              <p><strong>Serviço Solicitado:</strong> ${service}</p>
              <p><strong>Mensagem / Detalhes:</strong></p>
              <p style="background: #f4f4f4; padding: 12px; border-radius: 6px;">${message}</p>
              <hr/>
              <small>Enviado em ${new Date().toLocaleString("pt-AO")}</small>
            `,
          }),
        });
      } catch (emailErr) {
        console.error("[Contact API] Erro ao despachar via Resend:", emailErr);
      }
    } else {
      // Em ambiente de desenvolvimento ou antes de configurar credenciais SMTP:
      console.log(
        "[Contact API] Novo pedido de contacto recebido:",
        JSON.stringify(emailPayload, null, 2)
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "O seu pedido de orçamento foi enviado com sucesso para a equipa VIMORAIZ. Entraremos em contacto no prazo de 24 horas úteis.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Erro interno:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao processar o seu pedido. Por favor, tente novamente ou contacte-nos pelo WhatsApp." },
      { status: 500 }
    );
  }
}
