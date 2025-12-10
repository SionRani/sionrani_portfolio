import { Github, BarChart, Brain, Heart, Cloud, PieChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "House Price Prediction",
    description: "Machine learning model to predict house prices based on various features using regression algorithms.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    icon: BarChart,
    category: "Machine Learning",
    github: "",
  },
  {
    title: "Email Spam Detection",
    description: "NLP-based classification system to detect and filter spam emails with high accuracy.",
    technologies: ["Python", "NLP", "TensorFlow", "NLTK"],
    icon: Brain,
    category: "NLP",
    github: "",
  },
  {
    title: "Heart Disease Prediction",
    description: "Healthcare analytics model to predict heart disease risk based on patient data and medical history.",
    technologies: ["Python", "ML", "Healthcare Analytics"],
    icon: Heart,
    category: "Healthcare",
    github: "",
  },
  {
    title: "Weather Forecast Application",
    description: "GUI-based weather application with real-time data fetching from weather APIs.",
    technologies: ["Python", "API Integration", "Tkinter"],
    icon: Cloud,
    category: "API",
    github: "",
  },
  {
    title: "Power BI Dashboards",
    description: "Interactive business intelligence dashboards for data visualization and insights reporting.",
    technologies: ["Power BI", "DAX", "Data Modeling"],
    icon: PieChart,
    category: "Visualization",
    github: "https://github.com/SionRani/Task-Dashboard-Design",
  },
  {
    title: "HR Data Analytics",
    description: "Comprehensive HR data analysis project exploring employee metrics, attrition patterns, and workforce insights.",
    technologies: ["Python", "Data Analysis", "Visualization"],
    icon: Users,
    category: "Analytics",
    github: "https://github.com/SionRani/HR-DATA-ANALYSIS",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Showcasing my data science and development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <project.icon size={24} />
                </div>
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold font-display mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 w-full group-hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" /> View on GitHub
                  </a>
                </Button>
              ) : (
                <Button variant="ghost" size="sm" className="mt-4 w-full group-hover:bg-primary/10" disabled>
                  Coming Soon
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
