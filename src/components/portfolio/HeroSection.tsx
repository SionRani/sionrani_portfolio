import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-primary font-medium animate-fade-up">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Kondepudi<br />
                <span className="text-gradient">Sion Rani</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Data Scientist & Data Analyst
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Transforming data into insights and intelligent solutions. Passionate about machine learning, analytics, and data-driven decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://www.linkedin.com/in/sionrani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:kondepudisionrani@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-2xl opacity-20 scale-110 animate-pulse-soft" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-float">
                <img
                  src={profileImage}
                  alt="Kondepudi Sion Rani - Data Scientist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
