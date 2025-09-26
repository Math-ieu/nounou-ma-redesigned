import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "Comment choisir la nounou parfaite pour votre enfant",
    excerpt: "Découvrez nos conseils d'experts pour sélectionner la nounou idéale qui prendra soin de votre enfant avec amour et professionnalisme.",
    author: "Dr. Amina Benali",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Conseils Parents",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "2",
    title: "Les activités d'éveil pour les tout-petits",
    excerpt: "Des idées créatives et éducatives pour stimuler le développement de votre enfant à travers des jeux et activités adaptés à son âge.",
    author: "Fatima Zahra",
    date: "2024-01-12",
    readTime: "7 min",
    category: "Développement",
    image: "https://images.pexels.com/photos/8613268/pexels-photo-8613268.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "3",
    title: "Sécurité à domicile : checklist pour parents",
    excerpt: "Une liste complète des mesures de sécurité à mettre en place dans votre maison pour protéger vos enfants des accidents domestiques.",
    author: "Mohamed Alami",
    date: "2024-01-10",
    readTime: "4 min",
    category: "Sécurité",
    image: "https://images.pexels.com/photos/8613271/pexels-photo-8613271.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-2">Conseils d'experts</h2>
          <p className="text-muted-foreground text-lg">
            Découvrez nos articles pour vous accompagner dans votre rôle de parent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-gradient">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <Badge variant="secondary" className="bg-nounou-blue/10 text-nounou-blue">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(post.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
                
                <Link to={`/blog/${post.id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Lire l'article
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/blog">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Voir tous les articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};