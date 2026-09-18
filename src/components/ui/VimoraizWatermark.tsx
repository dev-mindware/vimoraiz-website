import Image from "next/image";

interface VimoraizWatermarkProps {
  className?: string;
}

export const VimoraizWatermark: React.FC<VimoraizWatermarkProps> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-0 right-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <div className="relative w-[340px] sm:w-[440px] lg:w-[560px] aspect-square">
        <Image
          src="/images/vimoraiz-v-watermark.png"
          alt=""
          fill
          sizes="(max-width: 768px) 340px, 560px"
          className="object-contain object-top-right opacity-80"
          priority
        />
      </div>
    </div>
  );
};
