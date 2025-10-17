import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 sparkle-bg">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Professional Profile Image */}
          <div className="relative inline-block group">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-background"></div>
              </div>
              
              {/* Main profile image */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:shadow-glow transition-all duration-300">
                <img
                  src={profileImage}
                  alt="Yaswanth Reddy Yarrabandla - Data Scientist & ML Engineer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Professional overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Professional status indicator */}
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-background shadow-lg animate-pulse">
                <div className="w-full h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Yaswanth Reddy</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-accent font-semibold">
              Data Scientist & Machine Learning Engineer
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Turning raw data into powerful stories that drive smarter decisions and lasting impact.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 max-w-5xl mx-auto">
              <div className="card-glass p-4 rounded-xl">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-xs text-muted-foreground">Years of Experience</div>
              </div>
              <div className="card-glass p-4 rounded-xl">
                <div className="text-2xl font-bold gradient-text">28%</div>
                <div className="text-xs text-muted-foreground">Improved Predictive Model Accuracy</div>
              </div>
              <div className="card-glass p-4 rounded-xl">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-xs text-muted-foreground">End-to-End Data Science Projects Delivered</div>
              </div>
              <div className="card-glass p-4 rounded-xl">
                <div className="text-2xl font-bold gradient-text">4</div>
                <div className="text-xs text-muted-foreground">Cloud Platforms Leveraged (Azure, AWS, LangChain, Hugging Face)</div>
              </div>
              <div className="card-glass p-4 rounded-xl col-span-2 md:col-span-3 lg:col-span-1">
                <div className="text-2xl font-bold gradient-text">100+</div>
                <div className="text-xs text-muted-foreground">Interactive Dashboards & Visualizations Built</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center pt-6">
              <Button 
                variant="hero" 
                size="default"
                onClick={() => scrollToSection("#portfolio")}
                className="px-6"
              >
                View Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="default"
                onClick={() => window.open("https://1drv.ms/b/c/81c6291fdf7cccf8/EdPtw61IygZKuCihMy9NozsBOeQ5rIClDLdwwWEq5S5JWQ?e=xfmJhI", "_blank")}
                className="px-6 border-white/20 text-white hover:bg-white/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                size="default"
                onClick={() => window.open("https://github.com/yaswanth-reddy-y/yaswanth-reddy", "_blank")}
                className="px-6 border-white/20 text-white hover:bg-white/10"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="default"
                onClick={() => window.open("https://www.linkedin.com/in/yaswanth-reddy-yarrabandla/", "_blank")}
                className="px-6 border-white/20 text-white hover:bg-white/10"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button 
                variant="glass" 
                size="default"
                onClick={() => scrollToSection("#contact")}
                className="px-6"
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