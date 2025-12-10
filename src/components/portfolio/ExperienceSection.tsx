import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Content Writer Intern",
    company: "InAmigos Foundation (IAF)",
    period: "Jun – Jul 2025",
    description: "Crafted compelling content for social media campaigns, blogs, and organizational initiatives. Developed creative narratives that enhanced audience engagement and effectively communicated the foundation's mission and values.",
    skills: ["Content Writing", "Creative Development", "Social Media", "Communication"],
  },
  {
    title: "Data Analyst Intern",
    company: "Elevate Labs",
    period: "Jun – Jul 2025",
    description: "Analyzed large datasets to extract meaningful business insights and created interactive Power BI dashboards for real-time monitoring. Delivered comprehensive reports that supported data-driven decision-making for stakeholders.",
    skills: ["Data Visualization", "Analytics", "Power BI", "Excel", "Reporting"],
  },
  {
    title: "Data Scientist Intern",
    company: "Pinnacle",
    period: "Aug – Sep 2024",
    description: "Developed and deployed machine learning models for predictive analytics, performed statistical analysis on complex datasets, and built end-to-end data pipelines. Applied algorithms for classification, regression, and clustering to solve real-world business problems.",
    skills: ["Machine Learning", "Python", "Statistical Analysis", "Predictive Modeling", "SQL"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle mx-auto">
            Building expertise through hands-on internships
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 md:pl-0">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg ${
                  index % 2 === 0 
                    ? "left-[-8px] md:left-auto md:right-[-8px]" 
                    : "left-[-8px] md:left-[-8px]"
                }`} />

                <div className="p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group">
                  <div className={`flex items-center gap-2 text-sm text-primary mb-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-semibold font-display group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mt-1 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 mt-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
