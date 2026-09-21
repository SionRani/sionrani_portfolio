import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech — Civil Engineering",
    institution: "Pragati Engineering College (Autonomous), JNTUK",
    period: "2023 – 2027",
    details: "CGPA: 7.95/10 (Expected May 2027)",
  },
  {
    degree: "BCA — Data Science",
    institution: "SRM Institute of Science and Technology — Directorate of Online Education",
    period: "2023 – 2026",
    details: "Completed 2026",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-2xl shadow-card">
              <h3 className="text-xl font-semibold mb-4 font-display">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Civil Engineering student</span> with hands-on construction experience through an L&amp;T Construction internship at TIMS Super Speciality Hospital, LB Nagar, with practical exposure to planning, quality, execution, finishing, EHS and MEP coordination.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I also hold a <span className="text-foreground font-medium">BCA in Data Science</span>, giving me strong analytical skills in Python, SQL, Power BI and Tableau — which I apply to construction quality tracking, progress monitoring and reporting.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                With this dual Civil + Data background, I'm looking for a good opportunity where I can contribute my skills in construction planning, quality and data analytics, keep learning, and grow with a strong team.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-card rounded-xl shadow-card text-center">
                <p className="text-3xl font-bold text-gradient font-display">L&amp;T</p>
                <p className="text-sm text-muted-foreground mt-1">Internship</p>
              </div>
              <div className="p-4 bg-card rounded-xl shadow-card text-center">
                <p className="text-3xl font-bold text-gradient font-display">11+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="p-4 bg-card rounded-xl shadow-card text-center">
                <p className="text-3xl font-bold text-gradient font-display">2</p>
                <p className="text-sm text-muted-foreground mt-1">Degrees</p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold font-display flex items-center gap-2">
              <GraduationCap className="text-primary" size={24} />
              Education
            </h3>
            <div className="relative pl-8 border-l-2 border-primary/20 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] w-5 h-5 bg-primary rounded-full border-4 border-background" />
                  <div className="p-5 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-primary text-sm">{edu.institution}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Award size={14} />
                      <span>{edu.details}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
