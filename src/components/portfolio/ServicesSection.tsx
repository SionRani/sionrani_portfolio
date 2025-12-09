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
    description: "Transform raw data into actionable insights through comprehensive analysis and reporting.",
    icon: TrendingUp,
  },
  {
    title: "Machine Learning Development",
    description: "Build and deploy predictive models for classification, regression, and forecasting tasks.",
    icon: Cpu,
  },
  {
    title: "Dashboard Creation",
    description: "Design interactive Power BI dashboards for real-time data visualization and monitoring.",
    icon: BarChart3,
  },
  {
    title: "Exploratory Data Analysis",
    description: "Discover patterns, anomalies, and relationships in your data through systematic exploration.",
    icon: Search,
  },
  {
    title: "Data-Driven Decision Support",
    description: "Provide strategic recommendations backed by statistical analysis and data modeling.",
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
