import { Code, Database, Brain, Cloud, BarChart, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Tools",
      description: "Core programming and data manipulation technologies",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "Matplotlib/Seaborn", level: 85 }
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Advanced ML algorithms and model development",
      skills: [
        { name: "Regression Analysis", level: 95 },
        { name: "Classification", level: 90 },
        { name: "Clustering", level: 85 },
        { name: "XGBoost", level: 90 },
        { name: "Random Forest", level: 95 },
        { name: "Time Series (LSTM/ARIMA)", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Deep Learning & Deployment",
      description: "Neural networks and production deployment",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "CNNs", level: 80 },
        { name: "RNNs/LSTM", level: 85 },
        { name: "Docker", level: 75 },
        { name: "CI/CD Pipelines", level: 70 }
      ]
    },
    {
      icon: BarChart,
      title: "Statistical Methods",
      description: "Statistical analysis and experimental design",
      skills: [
        { name: "A/B Testing", level: 90 },
        { name: "Experimental Design", level: 85 },
        { name: "Regression Analysis", level: 95 },
        { name: "Forecasting Models", level: 85 },
        { name: "Hypothesis Testing", level: 90 },
        { name: "Bayesian Analysis", level: 75 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & Big Data",
      description: "Cloud platforms and scalable data solutions",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Azure ML", level: 85 },
        { name: "Kubernetes", level: 70 },
        { name: "Apache Spark", level: 75 },
        { name: "Hadoop", level: 70 },
        { name: "Data Warehousing", level: 80 }
      ]
    },
    {
      icon: GitBranch,
      title: "Collaboration & Consulting",
      description: "Project management and stakeholder communication",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "JIRA", level: 85 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Data Strategy", level: 80 },
        { name: "Stakeholder Communication", level: 90 },
        { name: "Technical Documentation", level: 85 }
      ]
    }
  ];

  const getSkillBarColor = (level: number) => {
    if (level >= 90) return "from-emerald-500 to-green-400";
    if (level >= 80) return "from-blue-500 to-cyan-400";
    if (level >= 70) return "from-purple-500 to-pink-400";
    return "from-orange-500 to-yellow-400";
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical toolkit for end-to-end data science solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="card-glass p-8 rounded-2xl hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-accent/10 rounded-xl mr-4">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-accent">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getSkillBarColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Services Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Professional <span className="gradient-text">Services</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-glass p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300">
                <BarChart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Data Analysis & Visualization</h4>
                <p className="text-sm text-muted-foreground">
                  Cleaning, analyzing, and visualizing data for actionable business insights
                </p>
              </div>
              <div className="card-glass p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300">
                <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Predictive Modeling & ML</h4>
                <p className="text-sm text-muted-foreground">
                  Building and deploying forecasting, classification, and optimization models
                </p>
              </div>
              <div className="card-glass p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300">
                <Database className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Data Strategy & Consulting</h4>
                <p className="text-sm text-muted-foreground">
                  Advising on data collection, warehousing, and analytics workflows
                </p>
              </div>
              <div className="card-glass p-6 rounded-xl text-center hover:shadow-glow transition-all duration-300">
                <Cloud className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Dashboard & Reporting</h4>
                <p className="text-sm text-muted-foreground">
                  Interactive dashboards using Power BI or Tableau to track key metrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;