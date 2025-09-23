import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Northern Trust",
      period: "Jan 2025 – Present",
      location: "USA",
      achievements: [
        "Architected and developed an integrated behavioral bias detection and liquidity stress simulation system by leveraging Azure Machine Learning, Python, PyTorch, CNNs, GANs, LangChain, and Hugging Face transformers to analyze structured and unstructured financial data, enabling portfolio managers to identify decision-making patterns and act proactively, reducing portfolio risk exposure by 23%.",
        "Engineered and optimized deep learning models including LSTM, Random Forest, and Transformer architectures within Azure Machine Learning pipelines, predicting market-driven stress scenarios and behavioral tendencies with higher precision and improving overall risk insights for investment decisions, increasing predictive accuracy by 28%.",
        "Orchestrated end-to-end NLP workflows using LangChain and Hugging Face, extracting sentiment, uncertainty, and decision-making cues from portfolio manager notes while integrating GraphQL APIs for seamless access to real-time holdings and liquidity data across financial products.",
        "Designed and deployed interactive dashboards with Azure Machine Learning and Plotly/Dash, delivering real-time insights into portfolio biases and liquidity forecasts, which improved reporting efficiency and enhanced decision-making timelines.",
        "Reduced liquidity risk exposure by leveraging predictive analytics to simulate high-pressure redemption scenarios and forecast fund performance, aligning the simulation outputs with business objectives to support proactive financial risk management.",
        "Deployed optimized machine learning pipelines using Azure ML and Docker while managing model lifecycle with JIRA and collaborating closely with cross-functional teams to ensure seamless integration into production systems and front-end decision tools."
      ],
      technologies: ["Azure ML", "Python", "PyTorch", "CNNs", "GANs", "LangChain", "Hugging Face", "LSTM", "Random Forest", "Transformers", "GraphQL", "Plotly", "Docker", "JIRA"]
    },
    {
      title: "Teaching Assistant – Data Science & ML",
      company: "DePaul University",
      period: "Aug 2024 – Dec 2024",
      location: "USA",
      achievements: [
        "Facilitated the development of a real-world predictive analytics platform by guiding students in building end-to-end ML pipelines involving data preprocessing, feature engineering, model training, and deployment using Python, Scikit-learn, and Azure Machine Learning, enabling accurate business insights and improving project success rates by 30%.",
        "Directed collaborative student projects focused on classification and regression modeling by applying Random Forest, XGBoost, and Logistic Regression techniques on real datasets, improving model accuracy and interpretability through optimized hyperparameters and advanced evaluation metrics, boosting overall model accuracy by 25%.",
        "Enabled effective data visualization and reporting by coaching students on creating interactive dashboards in Power BI and Matplotlib, integrating KPIs, drill-downs, and trend forecasts to support actionable insights and improve reporting efficiency significantly.",
        "Designed and executed advanced statistical analysis workflows involving hypothesis testing, regression analysis, and A/B testing to strengthen applied data science knowledge, empowering students to interpret results and validate machine learning models effectively.",
        "Improved student project outcomes by implementing predictive modeling techniques and optimizing deployment strategies, resulting in significant enhancements in decision-making efficiency and strengthening the overall understanding of cloud-based ML applications on Azure."
      ],
      technologies: ["Python", "Scikit-learn", "Azure ML", "Random Forest", "XGBoost", "Logistic Regression", "Power BI", "Matplotlib", "Statistical Analysis"]
    },
    {
      title: "Data Science Engineer",
      company: "Hexaware Techno",
      period: "Dec 2020 – Nov 2022",
      location: "USA",
      achievements: [
        "Engineered an intelligent user analytics and recommendation platform by leveraging Python, Pandas, and AWS cloud services, enabling personalized content delivery and enhancing overall user engagement by 32% through optimized feature targeting.",
        "Designed and implemented a recommendation engine using collaborative filtering techniques and predictive modeling approaches to personalize the user journey, significantly improving content discovery and increasing user satisfaction scores by 27%.",
        "Architected and optimized real-time ETL pipelines using AWS Glue, S3, and Lambda, enabling seamless ingestion, transformation, and processing of large-scale datasets, which enhanced scalability and system performance under heavy traffic.",
        "Developed and deployed predictive churn models using classification algorithms and advanced data science techniques, empowering the business to proactively identify at-risk users and implement retention strategies effectively.",
        "Automated data workflows and collaborated with cross-functional engineering teams to integrate machine learning models into production systems, ensuring smooth deployment, robust monitoring, and minimal downtime.",
        "Enhanced decision-making by developing interactive dashboards and real-time data visualizations in Tableau and Power BI, providing stakeholders with actionable insights into user behavior, platform usage trends, and feature adoption metrics.",
        "Streamlined cloud-based ML pipelines by orchestrating model training, hyperparameter tuning, and deployment within AWS SageMaker, improving predictive accuracy and aligning analytical outcomes with key business objectives."
      ],
      technologies: ["Python", "Pandas", "AWS", "AWS Glue", "S3", "Lambda", "Tableau", "Power BI", "AWS SageMaker", "Collaborative Filtering", "ETL"]
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