import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "BCA – Data Science",
    institution: "SRMIST",
    period: "2023 – 2026",
    details: "SGPA: 9.455, 9.591, 10, 9.600 | CGPA: 9.65",
  },
  {
    degree: "B.Tech – Civil Engineering",
    institution: "JNTUK",
    period: "2023 – 2027",
    details: "Pursuing alongside Data Science",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Passionate about transforming raw data into meaningful insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-2xl shadow-card">
              <h3 className="text-xl font-semibold mb-4 font-display">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a <span className="text-foreground font-medium">Data Science student at SRMIST</span> with expertise in statistical analysis, machine learning, and data visualization. I specialize in extracting meaningful patterns from complex datasets and building predictive models that drive business value.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                With a strong foundation in Python, SQL, and visualization tools like Power BI and Tableau, I transform raw data into compelling stories and actionable recommendations. I thrive on solving challenging problems and continuously expanding my knowledge in emerging data science methodologies.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My unique combination of analytical rigor, creative thinking, and strong communication skills enables me to bridge the gap between technical insights and business strategy, helping organizations make smarter, data-driven decisions.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-card rounded-xl shadow-card text-center">
                <p className="text-3xl font-bold text-gradient font-display">3+</p>
                <p className="text-sm text-muted-foreground mt-1">Internships</p>
              </div>
              <div className="p-4 bg-card rounded-xl shadow-card text-center">
                <p className="text-3xl font-bold text-gradient font-display">9+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="p-4 bg-card rounded-xl shadow-card text-center">
                <p className="text-3xl font-bold text-gradient font-display">9.65</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA</p>
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
