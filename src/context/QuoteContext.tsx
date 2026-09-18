"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuoteContextType {
  selectedService: string;
  setSelectedService: (service: string) => void;
  scrollToContact: (serviceTitle?: string) => void;
}

const QuoteContext = createContext<QuoteContextType | null>(null);

export const QuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedService, setSelectedService] = useState<string>("");

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    const el = document.getElementById("contacto");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <QuoteContext.Provider
      value={{
        selectedService,
        setSelectedService,
        scrollToContact,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    return {
      selectedService: "",
      setSelectedService: () => {},
      scrollToContact: (serviceTitle?: string) => {
        const el = document.getElementById("contacto");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    };
  }
  return context;
};
