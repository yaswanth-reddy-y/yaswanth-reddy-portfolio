import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Chicago Education Advocacy Cooperative",
      period: "Mar 2025 – Present",
      location: "Chicago, IL",
      description: "Leading advanced analytics initiatives to improve educational outcomes through data-driven insights.",
      achievements: [
        "Developed LSTM, ARIMA, and Random Forest models for agent performance prediction",
        "Built real-time dashboards using Azure ML for business trend analysis",
        "Implemented predictive analytics solutions improving reporting efficiency by 30%",
        "Collaborated with stakeholders to translate business requirements into technical solutions"
      ],
      technologies: ["Python", "Azure ML", "LSTM", "ARIMA", "Random Forest", "Power BI"]
    },
    {
      title: "Teaching Assistant – Data Science",
      company: "DePaul University",
      period: "Aug 2024 – Dec 2024",
      location: "Chicago, IL",
      description: "Mentored students in advanced data science concepts and machine learning implementations.",
      achievements: [
        "Guided 75+ students through complex machine learning pipelines and model optimization",
        "Developed curriculum materials for logistic regression and Random Forest algorithms",
        "Led hands-on workshops on churn prediction modeling techniques",
        "Achieved 95% student satisfaction rate in course evaluations"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "Git"]
    },
    {
      title: "Data Science Engineer",
      company: "PortalOne Team",
      period: "Aug 2021 – Nov 2022",
      location: "Remote",
      description: "Engineered data solutions and recommendation systems for user behavior analysis.",
      achievements: [
        "Analyzed user behavior patterns using advanced statistical methods",
        "Built recommendation systems improving user engagement by 25%",
        "Optimized ETL pipelines reducing data processing time by 40%",
        "Developed predictive churn models with 90%+ accuracy",
        "Collaborated with engineering teams for seamless model deployment"
      ],
      technologies: ["Python", "SQL", "AWS", "ETL", "Recommendation Systems", "Statistical Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building impactful data solutions across diverse industries and domains
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card-glass p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left Column - Company Info */}
                  <div className="lg:w-1/3 space-y-3">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-accent flex-shrink-0" />
                      <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{exp.company}</h4>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:w-2/3 space-y-6">
                    <p className="text-muted-foreground">{exp.description}</p>
                    
                    {/* Key Achievements */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <ChevronRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;