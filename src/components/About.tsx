import { GraduationCap, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Data fuels decisions, and I turn those decisions into measurable success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Bio */}
            <div className="space-y-6">
              <div className="card-glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-accent">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a results-driven Data Scientist with 3+ years of experience applying machine learning, 
                    predictive modeling, and data visualization to uncover insights and drive business impact. 
                    I've built and deployed end-to-end ML pipelines — from raw data preprocessing to model 
                    deployment and performance monitoring — delivering scalable, production-ready solutions.
                  </p>
                  <p>
                    Having worked across financial services, healthcare, and education, I've developed a deep 
                    understanding of domain-specific challenges and how to translate analytical outputs into 
                    real-world outcomes. My experience includes developing predictive analytics systems, risk 
                    models, and business intelligence dashboards that empower leaders to make confident, 
                    data-backed decisions.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="card-glass p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-2xl font-semibold text-accent">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-accent/30 pl-6">
                    <h4 className="text-lg font-semibold">Master of Science in Data Science</h4>
                    <p className="text-accent">DePaul University</p>
                    <p className="text-sm text-muted-foreground">Jan 2023 – Nov 2024 | GPA: 3.83</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Focused on advanced machine learning, statistical modeling, and cloud-based data solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy & Approach */}
            <div className="space-y-6">
              <div className="card-glass p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-2xl font-semibold text-accent">Work Philosophy</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Data-Driven Impact</h4>
                      <p className="text-sm">Every model, visualization, and insight I deliver ties directly to measurable business value.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Collaborative Problem Solving</h4>
                      <p className="text-sm">I thrive in cross-functional environments, ensuring technical outcomes align with business goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Continuous Innovation</h4>
                      <p className="text-sm">I stay ahead of the curve by experimenting with new tools and frameworks in AI and MLOps.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-glass p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-2xl font-semibold text-accent">Collaboration Style</h3>
                </div>
                <p className="text-muted-foreground">
                  I work best in agile, data-centric teams, leveraging Git, JIRA, and cloud collaboration 
                  tools to streamline workflows. Having mentored over 75 aspiring data professionals, I bring 
                  strong communication skills that bridge technical and non-technical audiences effortlessly.
                </p>
              </div>

              <div className="card-glass p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-2xl font-semibold text-accent">What Drives Me</h3>
                </div>
                <p className="text-muted-foreground">
                  Using data science to create meaningful impact — from improving education equity to 
                  enhancing business efficiency. My goal is to make data not just informative, but transformative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;