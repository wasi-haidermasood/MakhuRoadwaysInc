const WHATSAPP_NUMBER = "17052550270"; // no + sign, no spaces
const DEFAULT_MESSAGE =
  "Hi Makhu Road Ways Inc, I’d like to request a quote. (Service: Dry Van / Reefer / Power Only)";

type Props = {
  number?: string; // override if needed
  message?: string;
  className?: string;
};

const WhatsAppButton = ({
  number = WHATSAPP_NUMBER,
  message = DEFAULT_MESSAGE,
  className = "",
}: Props) => {
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={[
        "fixed z-[70] bottom-6 right-6",
        "h-14 w-14 rounded-full",
        "bg-[#25D366] hover:bg-[#1fb659]",
        "shadow-[0_18px_45px_rgba(0,0,0,0.35)]",
        "grid place-items-center",
        "transition-transform duration-300 hover:scale-105",
        "wa-pulse",
        className,
      ].join(" ")}
    >
      {/* WhatsApp SVG icon */}
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          fill="white"
          d="M19.11 17.53c-.26-.13-1.52-.75-1.75-.83-.24-.09-.41-.13-.58.13-.17.26-.67.83-.82 1-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.09-1.28-.77-.68-1.29-1.52-1.44-1.77-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.5-.42-.43-.58-.44h-.5c-.17 0-.45.06-.68.32-.23.26-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.82 2.78 4.41 3.9.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.52-.62 1.73-1.22.21-.6.21-1.1.15-1.22-.06-.11-.23-.17-.49-.3Z"
        />
        <path
          fill="white"
          fillRule="evenodd"
          d="M16 3C8.82 3 3 8.7 3 15.73c0 2.8.93 5.39 2.5 7.48L4 29l5.95-1.55A13.2 13.2 0 0 0 16 28.45c7.18 0 13-5.7 13-12.72C29 8.7 23.18 3 16 3Zm0 23.11c-2 0-3.87-.55-5.45-1.51l-.39-.23-3.53.92.95-3.38-.26-.38a10.9 10.9 0 0 1-1.8-5.8C5.52 9.9 10.2 5.35 16 5.35c5.8 0 10.48 4.55 10.48 10.38S21.8 26.11 16 26.11Z"
          clipRule="evenodd"
        />
      </svg>

      <style>{`
        .wa-pulse {
          box-shadow: 0 18px 45px rgba(0,0,0,0.35);
          animation: waPulse 1.8s ease-in-out infinite;
        }
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 18px 45px rgba(0,0,0,0.35), 0 0 0 0 rgba(37, 211, 102, 0.35); }
          50% { box-shadow: 0 18px 45px rgba(0,0,0,0.35), 0 0 0 14px rgba(37, 211, 102, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-pulse { animation: none !important; }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;