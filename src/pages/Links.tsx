import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Github,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Globe,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const Links = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Seiseigy",
      color: "hover:bg-gray-700/20 border-gray-600/50",
      description: "Open source projects & code repositories",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/sei.codes",
      color: "hover:bg-pink-700/20 border-pink-600/50",
      description: "Behind the scenes & tech insights",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/channel/UCt4Wwn9fmyO5SSf8ZVcq7Zw",
      color: "hover:bg-red-700/20 border-red-600/50",
      description: "Tech tutorials & project walkthroughs",
    },
    {
      name: "TikTok",
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      url: "https://tiktok.com/@sei.codes",
      color: "hover:bg-white/10 border-white/50",
      description: "Quick tech tips & coding shorts",
    },
    {
      name: "Contact",
      icon: Mail,
      url: "mailto:seisebastiandev@gmail.com",
      color: "hover:bg-green-700/20 border-green-600/50",
      description: "Get in touch for collaborations",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2">
              <span className="gradient-text">Sei</span>
              <span className="text-white">Labs</span>
            </h1>
            <p className="text-gray-300 text-sm">
              Connect with me across all platforms
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {socialLinks.map(({ name, icon: Icon, url, color, description }) => (
            <Button
              key={name}
              variant="outline"
              className={`w-full h-auto p-4 glass-morphism border-purple-700/30 text-left group ${color} transition-all duration-300 hover:scale-[1.02] neon-border-subtle`}
              onClick={() => {
                if (url.startsWith("mailto:") || url.startsWith("/")) {
                  if (url.startsWith("/")) {
                    window.location.href = url;
                  } else {
                    window.location.href = url;
                  }
                } else {
                  window.open(url, "_blank");
                }
              }}
            >
              <div className="flex items-center gap-4 w-full">
                <div className="flex-shrink-0">
                  <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors neon-icon" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white group-hover:text-purple-200 transition-colors">
                    {name}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors truncate">
                    {description}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <p className="text-gray-500 text-xs">
            © 2025 SeiLabs - {t("footer.bye")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;
