import { ArrowRight, Linkedin, Mail, Github, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-medium animate-fade-up">Hi, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Kondepudi<br />
              <span className="text-gradient">Sion Rani</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Civil Engineering Student & Data Analyst
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Civil Engineering student with hands-on construction experience and a Data Science background — skilled in planning, quality, execution, EHS and analytics.
          </p>

          {/* Quick contact chips */}
          <div className="flex flex-wrap gap-3 justify-center animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kakinada%2C%20Andhra%20Pradesh%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card text-sm font-medium text-primary hover:shadow-card-hover transition-all"
            >
              <MapPin size={16} /> Kakinada, AP — India
            </a>
            <a
              href="tel:+919000770510"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card text-sm font-medium text-primary hover:shadow-card-hover transition-all"
            >
              <Phone size={16} /> +91 90007 70510
            </a>
            <a
              href="mailto:kondepudisionrani@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card text-sm font-medium text-primary hover:shadow-card-hover transition-all"
            >
              <Mail size={16} /> kondepudisionrani@gmail.com
            </a>
            <a
              href="https://github.com/SionRani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card text-sm font-medium text-primary hover:shadow-card-hover transition-all"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sionrani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card text-sm font-medium text-primary hover:shadow-card-hover transition-all"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
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
        </div>
      </div>
    </section>
  );
};
