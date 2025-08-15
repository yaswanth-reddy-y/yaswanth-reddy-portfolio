import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImage from "/lovable-uploads/62338680-b14b-4332-98db-48f93fd56d24.png";

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
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-accent/20 shadow-glow">
              <img
                src={profileImage}
                alt="Yaswanth Reddy Yarrabandla"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 pointer-events-none"></div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="card-glass p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="card-glass p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text">95%</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
              </div>
              <div className="card-glass p-6 rounded-xl">
                <div className="text-3xl font-bold gradient-text">75+</div>
                <div className="text-sm text-muted-foreground">Students Mentored</div>
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
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="px-8"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("https://1drv.ms/w/c/81c6291fdf7cccf8/EZUJudqKBfpHg0J8myl8_lYBVUFhOARkfmf3c6ZkezttFA?e=awz8jS", "_blank")}
                className="px-8 border-white/20 text-white hover:bg-white/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
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