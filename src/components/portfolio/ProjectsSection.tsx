import { Github, BarChart, Brain, Heart, PieChart, Users, Ship, TrendingUp, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "House Price Prediction",
    description: "Built a robust machine learning regression model to accurately predict real estate prices using feature engineering and advanced algorithms for data-driven property valuation.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    icon: BarChart,
    category: "Machine Learning",
    github: "https://github.com/SionRani/HOUSE-PRICE-PREDITION-PROJECT",
  },
  {
    title: "Email Spam Detection",
    description: "Developed an intelligent NLP-based classification system leveraging natural language processing techniques to accurately identify and filter spam emails with high precision.",
    technologies: ["Python", "NLP", "TensorFlow", "NLTK"],
    icon: Brain,
    category: "NLP",
    github: "https://github.com/SionRani/Email-Spam-Detection",
  },
  {
    title: "Heart Disease Prediction",
    description: "Created a predictive healthcare analytics model using machine learning to assess cardiovascular disease risk factors and enable early detection for better patient outcomes.",
    technologies: ["Python", "ML", "Healthcare Analytics"],
    icon: Heart,
    category: "Healthcare",
    github: "https://github.com/SionRani/Heart-Disease-Prediction",
  },
  {
    title: "Titanic EDA",
    description: "Performed comprehensive exploratory data analysis on the Titanic dataset, uncovering survival patterns and demographic insights through statistical analysis and visualization.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    icon: Ship,
    category: "Data Analysis",
    github: "https://github.com/SionRani/Task-5",
  },
  {
    title: "Sales Dashboard",
    description: "Designed an interactive sales performance dashboard providing real-time business intelligence, KPI tracking, and actionable insights for strategic decision-making.",
    technologies: ["Power BI", "DAX", "Data Modeling"],
    icon: TrendingUp,
    category: "Visualization",
    github: "https://github.com/SionRani/TASK-8",
  },
  {
    title: "Superstore Sales Analysis",
    description: "Analyzed retail sales data to identify revenue trends, customer segments, and product performance, delivering data-driven recommendations for business optimization.",
    technologies: ["Python", "Data Analysis", "Visualization"],
    icon: ShoppingCart,
    category: "Analytics",
    github: "https://github.com/SionRani/Task-2",
  },
  {
    title: "HR Data Analytics",
    description: "Conducted in-depth workforce analytics exploring employee metrics, attrition patterns, and organizational insights to support data-driven HR strategies.",
    technologies: ["Python", "Data Analysis", "Visualization"],
    icon: Users,
    category: "Analytics",
    github: "https://github.com/SionRani/HR-DATA-ANALYSIS",
  },
  {
    title: "Power BI Dashboards",
    description: "Built interactive business intelligence dashboards with dynamic visualizations, custom measures, and drill-through capabilities for comprehensive data storytelling.",
    technologies: ["Power BI", "DAX", "Data Modeling"],
    icon: PieChart,
    category: "Visualization",
    github: "https://github.com/SionRani/Task-Dashboard-Design",
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
