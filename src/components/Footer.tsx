
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/seilabs',
      color: 'hover:text-pink-400'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: 'https://tiktok.com/@seilabs',
      color: 'hover:text-white'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/seilabs',
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube Shorts',
      icon: Youtube,
      url: 'https://youtube.com/@seilabs/shorts',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="border-t border-purple-700/30 bg-gradient-to-t from-purple-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="gradient-text">Sei</span>
              <span className="text-white">Labs</span>
            </h3>
            <p className="text-gray-300 max-w-md">
              Bridging the gap between complex engineering solutions and accessible learning. 
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-purple-400 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Projects
              </a>
              <a href="#videos" className="block text-gray-300 hover:text-purple-400 transition-colors">
                Videos
              </a>
              <a 
                href="https://github.com/seilabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-purple-400 transition-colors"
              >
                Open Source
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect & Follow</h4>
            <p className="text-gray-300 text-sm mb-4">
              Stay updated with the latest projects and content
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, icon: Icon, url, color }) => (
                <Button
                  key={name}
                  variant="outline"
                  size="icon"
                  className={`glass-morphism border-purple-700/50 text-gray-300 ${color} transition-all duration-300 hover:scale-110 hover:border-purple-600/50`}
                  onClick={() => window.open(url, '_blank')}
                  title={name}
                >
                  <Icon />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-700/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 SeiLabs. Built with ♥ using React, TypeScript & Tailwind CSS
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="mailto:contact@seilabs.dev" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
