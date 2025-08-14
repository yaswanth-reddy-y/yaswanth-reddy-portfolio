import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:yaswanthr2001@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yaswanth-reddy-yarrabandla/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/yaswanth-reddy-yarrabandla",
      label: "GitHub"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold gradient-text">
                Yaswanth Reddy Yarrabandla
              </h3>
              <p className="text-muted-foreground text-sm">
                Data Scientist specializing in machine learning, predictive analytics, 
                and cloud-based solutions. Transforming data into actionable insights.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="p-2 bg-background/50 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-200"
                      aria-label={link.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-accent">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['About', 'Experience', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${item.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-accent">Get In Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Chicago, IL, USA</p>
                <p>yaswanthr2001@gmail.com</p>
                <p>872-242-8299</p>
                <p className="text-xs text-muted-foreground/70 mt-2">
                  Open to remote opportunities and consulting projects
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>© {currentYear} Yaswanth Reddy Yarrabandla. Made with</span>
                <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
                <span>and lots of data.</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;