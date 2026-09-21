import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Civil Engineering Intern",
    company: "L&T Construction — TIMS Super Speciality Hospital Project, LB Nagar",
    period: "May 2026 – Jul 2026",
    points: [
      "Gained practical exposure to construction execution, quality control, EHS, finishing and construction planning at a major building project.",
      "Worked across Planning, Execution, Quality, Finishing, Rebar, MEP, P&M, IR & Stores functions.",
      "Observed construction activities including reinforcement, concrete works, masonry, finishing and MEP coordination.",
      "Gained exposure to site coordination, progress monitoring, quality inspections, material testing and construction procedures.",
      "Developed understanding of construction sequencing, site safety practices and coordination between project functions.",
      "Compiled sample-level site data into records used for a self-built quality-tracking dashboard.",
      "Built the Construction Quality Analytics Dashboard (Power BI) analyzing 27 aggregate/mechanical and 11 volumetric test records, tracking KPIs (specific gravity, water absorption, bulk density, crushing/impact values) with Year, Material and Location filters.",
    ],
    skills: ["Planning", "Quality Control", "EHS", "MEP Coordination", "Power BI"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle mx-auto">
            Building expertise through hands-on experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 border-primary group"
            >
              <div className="inline-flex items-center gap-2 text-sm text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full mb-4">
                <Calendar size={14} />
                <span>{exp.period}</span>
              </div>

              <h3 className="text-xl font-semibold font-display group-hover:text-primary transition-colors">
                {exp.title}
              </h3>

              <div className="flex items-start gap-2 text-muted-foreground text-sm mt-1">
                <Briefcase size={14} className="mt-1 shrink-0" />
                <span>{exp.company}</span>
              </div>

              <ul className="mt-5 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary font-bold">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
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
          ))}
        </div>
      </div>
    </section>
  );
};
