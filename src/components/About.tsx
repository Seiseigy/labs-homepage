import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Rocket, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-fade");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "GraphQL",
    "PostgreSQL",
    "Redis",
    "Kubernetes",
    "CI/CD",
    "Microservices",
  ];

  const achievements = [
    {
      icon: Brain,
      title: "5+ Years Experience",
      desc: "In full-stack development",
    },
    { icon: Rocket, title: "1+ Projects", desc: "Successfully delivered" }, // We need to create more projects :P
    // { icon: Users, title: '100K+ Followers', desc: 'Across social platforms' }, // Some day
    {
      icon: Award,
      title: "Open Source",
      desc: "All our projects are open source",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 scroll-fade">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="gradient-text">SeiLabs</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t("about.subtitle2")}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="scroll-fade">
          <h3 className="text-3xl font-bold mb-6 text-white">
            {t("about.me.title")}
          </h3>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>{t("about.me.description")}</p>
          </div>
        </div>

        <div className="scroll-fade">
          <Card className="glass-morphism border-purple-700/30">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold mb-6 text-white">
                {t("about.technical.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-purple-900/50 text-purple-200 border-purple-700/50 hover:bg-purple-800/50 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-fade">
        {achievements.map(({ icon: Icon, title, desc }, index) => (
          <Card
            key={title}
            className="glass-morphism border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <CardContent className="p-6 text-center">
              <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
              <p className="text-gray-300">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;
