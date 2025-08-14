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
              Passionate about leveraging data science to solve real-world problems and drive business value
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Bio */}
            <div className="space-y-6">
              <div className="card-glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-accent">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a dedicated Data Scientist with 3+ years of hands-on experience transforming 
                    complex datasets into actionable business insights. My expertise spans across 
                    predictive analytics, statistical modeling, and cloud-based machine learning solutions.
                  </p>
                  <p>
                    Having worked in diverse domains including financial services, healthcare, and 
                    operational analytics, I bring a unique perspective to data challenges. I specialize 
                    in developing end-to-end ML pipelines, from data preprocessing to model deployment 
                    and monitoring.
                  </p>
                  <p>
                    My approach combines technical expertise with business acumen, ensuring that 
                    data-driven solutions align with organizational goals and drive measurable impact.
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
                      Focus on advanced machine learning, statistical analysis, and big data technologies
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
                      <h4 className="font-semibold text-foreground">Data-Driven Decision Making</h4>
                      <p className="text-sm">Every recommendation is backed by rigorous analysis and statistical validation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Collaborative Innovation</h4>
                      <p className="text-sm">Working closely with cross-functional teams to ensure technical solutions meet business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Continuous Learning</h4>
                      <p className="text-sm">Staying current with emerging technologies and methodologies in the rapidly evolving field</p>
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
                  I excel in agile environments, leveraging tools like Git, JIRA, and collaborative 
                  platforms to ensure seamless project delivery. My experience mentoring 75+ students 
                  has strengthened my ability to communicate complex technical concepts to diverse audiences.
                </p>
              </div>

              <div className="card-glass p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-2xl font-semibold text-accent">What Drives Me</h3>
                </div>
                <p className="text-muted-foreground">
                  The intersection of technology and human impact. I'm passionate about using data science 
                  to solve meaningful problems, whether it's improving healthcare outcomes, detecting fraud, 
                  or optimizing business operations for better customer experiences.
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