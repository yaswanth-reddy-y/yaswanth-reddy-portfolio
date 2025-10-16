import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "/lovable-uploads/profile-new.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 sparkle-bg">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Professional Profile Image */}
          <div className="relative inline-block group">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-background"></div>
              </div>
              
              {/* Main profile image */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:shadow-glow transition-all duration-300">
                <img
                  src={`${profileImage}?t=${Date.now()}`}
                  alt="Yaswanth Reddy Yarrabandla - Data Scientist & ML Engineer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Professional overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Professional status indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-background shadow-lg animate-pulse">
                <div className="w-full h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Yaswanth Reddy</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-accent font-semibold">
              Data Scientist & Machine Learning Engineer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforming complex data into actionable insights with 3+ years of experience 
              in predictive modeling, statistical analysis, and cloud-based ML solutions across 
              diverse industries and business domains.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
              <div className="card-glass p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="card-glass p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text">28%</div>
                <div className="text-sm text-muted-foreground">Improved Predictive Model Accuracy</div>
              </div>
              <div className="card-glass p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">End-to-End Data Science Projects Delivered</div>
              </div>
              <div className="card-glass p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text">4</div>
                <div className="text-sm text-muted-foreground">Cloud Platforms Leveraged (Azure, AWS, LangChain, Hugging Face)</div>
              </div>
              <div className="card-glass p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text">100+</div>
                <div className="text-sm text-muted-foreground">Interactive Dashboards & Visualizations Built</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="px-8"
              >
                View Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("https://1drv.ms/b/c/81c6291fdf7cccf8/EZM-ZH538mhHj7onhHEGy4UB5-QQwftUNQk18T9CfqNA2Q?e=G3j3LY", "_blank")}
                className="px-8 border-white/20 text-white hover:bg-white/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("https://github.com/yaswanth-reddy-y/yaswanth-reddy", "_blank")}
                className="px-8 border-white/20 text-white hover:bg-white/10"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("https://www.linkedin.com/in/yaswanth-reddy-yarrabandla/", "_blank")}
                className="px-8 border-white/20 text-white hover:bg-white/10"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="px-8"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;