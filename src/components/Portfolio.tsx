import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Award } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Growth Strategy",
      category: "SEO & PPC",
      results: "450% ROI Increase",
      description: "Transformed an online retailer's digital presence through comprehensive SEO optimization and targeted PPC campaigns, resulting in 300% increase in organic traffic.",
      metrics: ["300% Organic Traffic", "450% ROI", "85% Lead Quality"],
      tags: ["SEO", "Google Ads", "Conversion Optimization"]
    },
    {
      title: "SaaS Lead Generation",
      category: "Content Marketing",
      results: "5x Lead Generation",
      description: "Developed and executed a content marketing strategy for B2B SaaS company, generating qualified leads through thought leadership and SEO-optimized content.",
      metrics: ["500% Lead Increase", "40% Conversion Rate", "200k+ Impressions"],
      tags: ["Content Strategy", "Lead Generation", "B2B Marketing"]
    },
    {
      title: "Local Business Domination",
      category: "Local SEO",
      results: "#1 Local Rankings",
      description: "Achieved #1 local search rankings for multiple keywords, increased foot traffic by 200%, and established dominant local online presence.",
      metrics: ["#1 Local Rankings", "200% Foot Traffic", "50+ Reviews"],
      tags: ["Local SEO", "Google My Business", "Reputation Management"]
    },
    {
      title: "Social Media Revolution",
      category: "Social Media",
      results: "1M+ Engagement",
      description: "Built engaged community of 100k+ followers, generated viral content campaigns, and drove significant brand awareness and sales through social platforms.",
      metrics: ["100k+ Followers", "1M+ Engagement", "25% Sales Increase"],
      tags: ["Social Media", "Community Building", "Viral Marketing"]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Success <span className="bg-text-gradient bg-clip-text text-bold">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped companies like yours 
            achieve breakthrough growth and dominate their markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-1 border-0 bg-card-gradient overflow-hidden animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-primary font-bold text-lg">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    {project.results}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-primary/5 rounded-lg">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-sm font-medium text-primary">{metric}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-center  animate-scale-in">
          <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their digital presence 
            and achieved remarkable growth with our proven strategies.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToContact}
            className="shadow-glow hover:shadow-strong transition-all duration-300 hover:scale-105"
          >
            Start Your Success Story
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;