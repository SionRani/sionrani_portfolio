import { Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="font-display text-xl font-bold">
              Sion<span className="text-primary">Rani</span>
            </a>
            <p className="text-background/60 text-sm mt-2">
              Data Scientist & Data Analyst
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sionrani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:kondepudisionrani@gmail.com"
              className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/60">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Kondepudi Sion Rani. Made with{" "}
            <Heart size={14} className="text-primary fill-primary" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};
