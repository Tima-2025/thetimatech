import React from "react";

const WHATSAPP_NUMBER = "+91 93637 21147"; // e.g. 919999999999
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppBubble() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed left-4 bottom-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path
          d="M23.472 19.615c-.355-.177-2.104-1.037-2.43-1.156-.326-.119-.563-.177-.8.178-.237.355-.914 1.156-1.12 1.393-.207.237-.414.267-.769.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.98-2.463-.207-.355-.022-.546.155-.723.159-.158.355-.414.533-.622.178-.207.237-.355.355-.592.119-.237.06-.444-.03-.622-.089-.178-.8-1.924-1.096-2.637-.289-.693-.583-.599-.8-.61-.207-.009-.444-.011-.681-.011-.237 0-.622.089-.948.444-.326.355-1.24 1.211-1.24 2.951 0 1.74 1.267 3.422 1.444 3.659.178.237 2.5 3.822 6.063 5.215.849.292 1.51.466 2.027.596.851.204 1.627.175 2.24.106.683-.077 2.104-.859 2.403-1.691.296-.832.296-1.545.207-1.691-.089-.148-.326-.237-.681-.414z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}