import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu, X, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.videos"), href: "#videos" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleLanguageToggle = (checked: boolean) => {
    setLanguage(checked ? "es" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-purple-700/30 neon-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold neon-text-glow"
            >
              <span className="gradient-text">Sei</span>
              <span className="text-white">Labs</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 neon-glow-subtle"></span>
              </button>
            ))}

            {/* Language Switch */}
            <div className="flex items-center space-x-2 glass-morphism px-3 py-1 rounded-full border border-purple-700/30">
              <span
                className={`text-sm transition-colors ${
                  language === "en" ? "text-purple-300" : "text-gray-500"
                }`}
              >
                EN
              </span>
              <Switch
                checked={language === "es"}
                onCheckedChange={handleLanguageToggle}
                className="data-[state=checked]:bg-purple-600"
              />
              <span
                className={`text-sm transition-colors ${
                  language === "es" ? "text-purple-300" : "text-gray-500"
                }`}
              >
                ES
              </span>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="border-purple-500/50 text-purple-200 hover:bg-purple-900/30 neon-border-subtle"
              onClick={() =>
                window.open("https://github.com/Seiseigy", "_blank")
              }
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-purple-900/30"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-purple-700/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-900/20 rounded-md transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Language Switch */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-gray-300">Idioma / Language</span>
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-sm transition-colors ${
                      language === "en" ? "text-purple-300" : "text-gray-500"
                    }`}
                  >
                    EN
                  </span>
                  <Switch
                    checked={language === "es"}
                    onCheckedChange={handleLanguageToggle}
                    className="data-[state=checked]:bg-purple-600"
                  />
                  <span
                    className={`text-sm transition-colors ${
                      language === "es" ? "text-purple-300" : "text-gray-500"
                    }`}
                  >
                    ES
                  </span>
                </div>
              </div>

              <div className="px-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-500/50 text-purple-200 hover:bg-purple-900/30 w-full"
                  onClick={() => {
                    window.open("https://github.com/Seiseigy", "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
