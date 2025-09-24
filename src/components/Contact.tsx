import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_fuqddys',
        'template_po72xnw',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Yaswanth',
        },
        'EH8qSo4ouEESZuDQI'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 1-2 hours.",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yaswanthreddyat56@gmail.com",
      href: "mailto:yaswanthreddyat56@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "872-242-8299",
      href: "tel:872-242-8299"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "yaswanth-reddy-y",
      href: "https://github.com/yaswanth-reddy-y/yaswanth-reddy"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next data science project or collaboration opportunity?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-accent mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and potential collaborations. Whether you're looking for data science consulting, 
                  machine learning solutions, or just want to connect with a fellow data enthusiast, 
                  I'd love to hear from you.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 p-4 bg-background/50 rounded-xl hover:bg-background/70 transition-colors duration-200 group"
                      >
                        <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-200">
                          <IconComponent className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{contact.label}</p>
                          <p className="text-sm text-muted-foreground">{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Location */}
                <div className="mt-8 p-4 bg-background/50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Chicago, IL, USA</p>
                      <p className="text-xs text-muted-foreground mt-1">Open to remote opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-accent mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-border/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project collaboration, consulting, etc."
                    required
                    className="bg-background/50 border-border/50 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-accent resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;