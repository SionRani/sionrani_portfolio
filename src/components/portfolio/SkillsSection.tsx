import { 
  Brain, 
  Database, 
  LineChart, 
  Code2, 
  GitBranch, 
  BarChart3,
  Cpu,
  FileCode,
  PenTool,
  Presentation
} from "lucide-react";

const skillCategories = [
  {
    title: "Data Science",
    icon: Brain,
    skills: [
      { name: "Machine Learning", icon: Cpu },
      { name: "Python & R", icon: Code2 },
      { name: "Data Analysis & EDA", icon: LineChart },
      { name: "SQL & NoSQL", icon: Database },
      { name: "Predictive Modeling", icon: BarChart3 },
    ],
  },
  {
    title: "Technical Skills",
    icon: FileCode,
    skills: [
      { name: "API Integration", icon: Code2 },
      { name: "Power BI", icon: BarChart3 },
      { name: "Socket Programming", icon: Cpu },
      { name: "Git & GitHub", icon: GitBranch },
    ],
  },
  {
    title: "Creative Skills",
    icon: PenTool,
    skills: [
      { name: "Content Writing", icon: PenTool },
      { name: "Visual Presentation", icon: Presentation },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold font-display">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    <skill.icon size={18} className="text-primary" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
