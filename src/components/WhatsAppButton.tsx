const PHONE_DISPLAY = "+1 (705) 255-0270";
const PHONE_TEL = "+17052550270"; // keep + for tel links

type Props = {
  tel?: string; // override if needed
  label?: string;
  className?: string;
};

const CallButton = ({
  tel = PHONE_TEL,
  label = `Call ${PHONE_DISPLAY}`,
  className = "",
}: Props) => {
  const href = `tel:${tel}`;

  return (
    <a
      href={href}
      aria-label={label}
      className={[
        "fixed z-[70] bottom-6 right-6",
        "h-14 w-14 rounded-full",
        "bg-red-600 hover:bg-red-700",
        "shadow-[0_18px_45px_rgba(0,0,0,0.35)]",
        "grid place-items-center",
        "transition-transform duration-300 hover:scale-105",
        "call-pulse",
        className,
      ].join(" ")}
    >
      {/* Phone SVG icon */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
          fill="white"
        />
      </svg>

      <style>{`
        .call-pulse {
          animation: callPulse 1.8s ease-in-out infinite;
        }
        @keyframes callPulse {
          0%, 100% { box-shadow: 0 18px 45px rgba(0,0,0,0.35), 0 0 0 0 rgba(239,68,68,0.35); }
          50% { box-shadow: 0 18px 45px rgba(0,0,0,0.35), 0 0 0 14px rgba(239,68,68,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .call-pulse { animation: none !important; }
        }
      `}</style>
    </a>
  );
};

export default CallButton;