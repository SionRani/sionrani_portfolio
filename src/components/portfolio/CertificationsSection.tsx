import { 
  Award, 
  Code2, 
  BarChart3, 
  Brain, 
  PenTool,
  FileCheck,
  Trophy,
  ExternalLink,
  Briefcase
} from "lucide-react";

const certifications = [
  {
    title: "Data Analysis & Forensic Technology",
    issuer: "Deloitte (via Forage)",
    date: "June 2025",
    icon: Briefcase,
    category: "Data Science",
    image: "/certificates/deloitte.jpg",
  },
  {
    title: "Data Analysis Using Python",
    issuer: "IBM",
    date: "June 2023",
    icon: Brain,
    category: "Data Science",
    image: "/certificates/ibm_data_analysis.png",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "June 2023",
    icon: Code2,
    category: "Data Science",
    image: "/certificates/ibm_python_ds.png",
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM / Cognitive Class",
    date: "June 2023",
    icon: Code2,
    category: "Data Science",
    image: "/certificates/python_101.png",
  },
  {
    title: "Power BI for Beginners",
    issuer: "Simplilearn SkillUp",
    date: "January 2025",
    icon: BarChart3,
    category: "Data Visualization",
    image: "/certificates/power_bi.png",
  },
  {
    title: "Learn Python",
    issuer: "CodeChef",
    date: "August 2023",
    icon: Code2,
    category: "Programming",
    image: "/certificates/codechef_python.png",
  },
  {
    title: "Learn C (Pro)",
    issuer: "CodeChef",
    date: "June 2023",
    icon: Code2,
    category: "Programming",
    image: "/certificates/codechef_c.png",
  },
  {
    title: "M.F Husain International Award & Art Exhibition",
    issuer: "U.S Art Gallery",
    date: "May 2025",
    icon: Trophy,
    category: "Achievement",
    image: "/certificates/mf_husain.jpg",
  },
  {
    title: "Indian Art Fest - National Art Contest",
    issuer: "The Indian Art Fest",
    date: "April 2025",
    icon: PenTool,
    category: "Creative Arts",
    image: "/certificates/indian_art_fest.png",
  },
  {
    title: "ArtSmart Art Contest - Bronze Medal",
    issuer: "ArtSmart",
    date: "2025",
    icon: Trophy,
    category: "Achievement",
    image: "/certificates/artsmart.jpg",
  },
  {
    title: "Essay Writing Contest - 1st Prize",
    issuer: "FIPI Student Chapter, JNTUK",
    date: "2024",
    icon: Trophy,
    category: "Achievement",
    image: "/certificates/essay_writing.jpg",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle mx-auto">
            Professional certifications and recognition in data science and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                  <cert.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-2">
                    {cert.category}
                  </span>
                  <h3 className="text-base font-semibold font-display leading-tight mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                  
                  {cert.image && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Award className="text-primary" size={20} />
            <span className="text-sm font-medium">
              {certifications.length}+ Professional Certifications & Achievements
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
