import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectCarousel from "@/components/ProjectCarousel";
import VideoCarousel from "@/components/VideoCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ProjectCarousel />
      {/* <VideoCarousel /> */}
      <Footer />
    </div>
  );
};

export default Index;
