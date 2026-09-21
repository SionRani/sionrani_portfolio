import {
  HardHat,
  ClipboardList,
  BarChart3,
  Wrench,
  ShieldCheck,
  Ruler,
  Layers,
  Hammer,
  Cable,
  FlaskConical,
  PencilRuler,
  CalendarClock,
  GanttChartSquare,
  TrendingUp,
  Calculator,
  Users,
  Lightbulb,
  Clock,
  Code2,
  Database,
  LineChart,
  Table,
  Sigma,
  PieChart,
  FileText,
  NotebookPen,
  GitBranch,
  MonitorSmartphone,
  MessageSquare,
  Brain,
} from "lucide-react";

const skillCategories = [
  {
    title: "Civil & Construction",
    icon: HardHat,
    skills: [
      { name: "Site Execution", icon: Hammer },
      { name: "Quality Control", icon: ShieldCheck },
      { name: "EHS (Environment, Health & Safety)", icon: ShieldCheck },
      { name: "Rebar / Reinforcement Works", icon: Layers },
      { name: "Finishing Works", icon: Wrench },
      { name: "MEP Coordination", icon: Cable },
      { name: "Material Testing", icon: FlaskConical },
      { name: "AutoCAD & ETABS", icon: PencilRuler },
    ],
  },
  {
    title: "Planning & Management",
    icon: ClipboardList,
    skills: [
      { name: "Construction Planning", icon: CalendarClock },
      { name: "Primavera P6", icon: GanttChartSquare },
      { name: "Progress Monitoring", icon: TrendingUp },
      { name: "BOQ & Quantity Takeoff", icon: Calculator },
      { name: "Project Coordination", icon: Users },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Teamwork & Leadership", icon: Users },
      { name: "Time Management", icon: Clock },
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: [
      { name: "Python", icon: Code2 },
      { name: "SQL", icon: Database },
      { name: "Power BI", icon: PieChart },
      { name: "Tableau", icon: LineChart },
      { name: "Excel", icon: Table },
      { name: "Pandas", icon: Sigma },
      { name: "Data Visualization", icon: BarChart3 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Ruler,
    skills: [
      { name: "MS Office (Word, Excel, PowerPoint)", icon: FileText },
      { name: "Jupyter Notebook", icon: NotebookPen },
      { name: "Git & GitHub", icon: GitBranch },
      { name: "VS Code", icon: MonitorSmartphone },
      { name: "Communication Skills", icon: MessageSquare },
      { name: "Analytical Thinking", icon: Brain },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills &amp; Expertise</h2>
          <p className="section-subtitle mx-auto">
            A toolkit built across Civil Engineering &amp; Data Science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="text-base font-semibold font-display">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-accent transition-colors duration-200"
                  >
                    <skill.icon size={18} className="text-primary shrink-0" />
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
