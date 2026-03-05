const WHATSAPP_URL = "https://wa.me/27652985458?text=Hi%20I%20am%20interested%20in%20Ruby";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#2be472] text-white rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 max-[480px]:px-3 max-[480px]:py-3"
    >
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white shrink-0">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.129 6.744 3.047 9.383L1.054 31.2l6.012-1.93a15.9 15.9 0 008.938 2.734C24.824 32 32 24.824 32 16.004 32 7.176 24.824 0 16.004 0zm9.32 22.608c-.39 1.1-2.272 2.04-3.137 2.112-.864.072-1.664.388-5.608-1.168-4.74-1.872-7.724-6.744-7.956-7.056-.232-.312-1.896-2.52-1.896-4.808s1.2-3.412 1.624-3.876c.424-.464.928-.58 1.236-.58.308 0 .616.004.884.016.284.012.664-.108.94.716.308.892 1.044 3.06 1.136 3.28.092.22.152.476.032.768-.12.292-.18.476-.356.732-.176.256-.372.572-.532.768-.176.212-.36.444-.156.868.204.424.912 1.684 1.96 2.728 1.348 1.344 2.484 1.76 2.836 1.956.352.196.556.164.76-.1.204-.264.876-1.02 1.108-1.372.232-.352.464-.292.784-.176.32.116 2.032.96 2.38 1.132.348.176.58.264.664.408.088.144.088.836-.3 1.64z" />
      </svg>
      <span className="text-sm font-medium max-[480px]:hidden">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
