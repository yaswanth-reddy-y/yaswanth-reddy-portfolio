import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Shield, Leaf } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Real/Fake Job Posting Prediction",
      description: "Machine learning model to detect fraudulent job postings using natural language processing and classification algorithms.",
      longDescription: "Developed a comprehensive ML pipeline to identify fake job postings, helping job seekers avoid scams and improving platform trust.",
      technologies: ["Python", "Scikit-learn", "NLP", "Streamlit", "Pandas", "Classification"],
      metrics: [
        { label: "AUC Score", value: "0.92" },
        { label: "Accuracy", value: "89%" },
        { label: "Data Points", value: "17K+" }
      ],
      icon: TrendingUp,
      github: "https://github.com/yaswanth-reddy-yarrabandla/Real-Fake-Job-Posting",
      demo: "#",
      image: "/real-fake-job-project.png"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Advanced gradient boosting model achieving 95% accuracy in detecting fraudulent transactions with minimal false positives.",
      longDescription: "Built an ensemble model using XGBoost and feature engineering to reduce fraud detection misclassifications by 20%.",
      technologies: ["Python", "XGBoost", "Feature Engineering", "Imbalanced Learning", "ROC Analysis", "Ensemble Methods"],
      metrics: [
        { label: "Accuracy", value: "95%" },
        { label: "Precision", value: "92%" },
        { label: "Recall", value: "88%" }
      ],
      icon: Shield,
      github: "https://github.com/yaswanth-reddy-yarrabandla/fraud-detection",
      demo: "#",
      image: "/credit-card-fraud-project.png"
    },
    {
      title: "Plant Pathology Analysis Using CNN",
      description: "Convolutional neural network for early detection of plant diseases using computer vision and image classification.",
      longDescription: "Implemented CNN architecture with data augmentation techniques for accurate plant disease classification from leaf images.",
      technologies: ["Python", "TensorFlow", "CNN", "Computer Vision", "Data Augmentation", "Image Processing"],
      metrics: [
        { label: "Validation Accuracy", value: "88.22%" },
        { label: "F1-Score", value: "0.87" },
        { label: "Training Images", value: "12K+" }
      ],
      icon: Leaf,
      github: "https://github.com/yaswanth-reddy-yarrabandla/plant-pathology-cnn",
      demo: "#",
      image: "/plant-pathology-project.png"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase of machine learning solutions solving real-world problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className={`card-glass p-8 rounded-2xl hover:shadow-glow transition-all duration-300 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-8 items-center`}>
                    {/* Project Visual */}
                    <div className="lg:w-1/2">
                      <div className="relative h-64 lg:h-80 rounded-xl border border-border/50 flex items-center justify-center overflow-hidden group"
                           style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        <IconComponent className="h-24 w-24 text-accent group-hover:scale-110 transition-transform duration-300 relative z-10" />
                        <div className="absolute bottom-4 left-4 right-4 space-y-2 z-10">
                          <div className="grid grid-cols-3 gap-2">
                            {project.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="bg-background/80 backdrop-blur-sm rounded-lg p-3 text-center">
                                <div className="text-lg font-bold gradient-text">{metric.value}</div>
                                <div className="text-xs text-muted-foreground">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:w-1/2 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-accent mb-3">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button variant="hero" className="flex-1 sm:flex-initial" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                        <Button variant="glass" className="flex-1 sm:flex-initial" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <div className="card-glass p-8 rounded-2xl inline-block">
              <h3 className="text-2xl font-bold mb-4">
                Explore More Projects
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Visit my GitHub profile to see additional projects and contributions
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://github.com/yaswanth-reddy-yarrabandla" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;