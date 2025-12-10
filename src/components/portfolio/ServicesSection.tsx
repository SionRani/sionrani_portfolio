import { 
  TrendingUp, 
  Cpu, 
  BarChart3, 
  Search, 
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Data Analysis & Insights",
    description: "Transform raw data into actionable insights through comprehensive statistical analysis, trend identification, and data storytelling. Deliver detailed reports that drive informed business strategies.",
    icon: TrendingUp,
  },
  {
    title: "Machine Learning Solutions",
    description: "Design, train, and deploy predictive models using advanced algorithms for classification, regression, clustering, and forecasting. Build intelligent systems that learn from data and improve over time.",
    icon: Cpu,
  },
  {
    title: "Interactive Dashboard Creation",
    description: "Develop visually compelling Power BI and Tableau dashboards with real-time data integration, KPI tracking, and drill-down capabilities for comprehensive business monitoring.",
    icon: BarChart3,
  },
  {
    title: "Exploratory Data Analysis (EDA)",
    description: "Conduct systematic data exploration to uncover hidden patterns, detect anomalies, test hypotheses, and identify relationships. Provide deep data understanding before model development.",
    icon: Search,
  },
  {
    title: "Strategic Data Consulting",
    description: "Offer expert guidance on data strategy, infrastructure optimization, and analytics implementation. Help organizations build data-driven cultures with measurable business outcomes.",
    icon: Lightbulb,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Services I Offer</h2>
          <p className="section-subtitle mx-auto">
            Professional data science solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-5">
                  <service.icon size={28} />
                </div>

                <h3 className="text-lg font-semibold font-display mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Get in Touch <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
