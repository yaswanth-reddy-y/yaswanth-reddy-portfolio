import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Northern Trust",
      period: "Jan 2025 – Present",
      location: "USA",
      description: "Leading development of AI-powered behavioral bias detection and liquidity stress simulation systems to optimize portfolio risk management and investment decision-making.",
      achievements: [
        "Architected behavioral bias detection and liquidity stress simulation system, reducing portfolio risk exposure by 23%",
        "Engineered deep learning models (LSTM, Random Forest, Transformer) improving predictive accuracy by 28%",
        "Orchestrated end-to-end NLP workflows using LangChain and Hugging Face for sentiment analysis and decision-making insights",
        "Designed interactive dashboards with Azure ML and Plotly/Dash for real-time portfolio insights",
        "Reduced liquidity risk through predictive analytics simulating high-pressure redemption scenarios",
        "Deployed optimized ML pipelines using Azure ML and Docker with seamless production integration"
      ],
      technologies: ["Azure ML", "Python", "PyTorch", "LangChain", "Hugging Face", "LSTM", "Random Forest", "Transformer", "GraphQL", "Plotly", "Dash", "Docker", "JIRA"]
    },
    {
      title: "Teaching Assistant – Data Science & ML",
      company: "DePaul University",
      period: "Aug 2024 – Dec 2024",
      location: "USA",
      description: "Mentored students in advanced data science and machine learning, guiding hands-on projects from data preprocessing to model deployment on cloud platforms.",
      achievements: [
        "Guided students in building end-to-end ML pipelines improving project success rates by 30%",
        "Directed collaborative projects with Random Forest, XGBoost, and Logistic Regression, boosting model accuracy by 25%",
        "Coached students on creating interactive dashboards in Power BI and Matplotlib with KPIs and trend forecasts",
        "Designed advanced statistical analysis workflows involving hypothesis testing and A/B testing",
        "Improved project outcomes through predictive modeling and cloud-based ML deployment strategies on Azure"
      ],
      technologies: ["Python", "Scikit-learn", "Azure ML", "Random Forest", "XGBoost", "Logistic Regression", "Power BI", "Matplotlib"]
    },
    {
      title: "Data Science Engineer",
      company: "Hexaware Technologies",
      period: "Dec 2020 – Nov 2022",
      location: "Hyderabad",
      description: "Built scalable user analytics and recommendation systems on AWS, delivering personalized experiences and actionable insights for business growth.",
      achievements: [
        "Engineered user analytics and recommendation platform enhancing user engagement by 32%",
        "Designed recommendation engine using collaborative filtering, increasing user satisfaction by 27%",
        "Architected real-time ETL pipelines using AWS Glue, S3, and Lambda for large-scale data processing",
        "Developed predictive churn models enabling proactive retention strategies",
        "Automated data workflows and integrated ML models into production with robust monitoring",
        "Enhanced decision-making through interactive dashboards in Tableau and Power BI",
        "Streamlined cloud-based ML pipelines in AWS SageMaker improving predictive accuracy"
      ],
      technologies: ["Python", "Pandas", "AWS", "AWS Glue", "S3", "Lambda", "SageMaker", "Tableau", "Power BI", "Collaborative Filtering"]
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