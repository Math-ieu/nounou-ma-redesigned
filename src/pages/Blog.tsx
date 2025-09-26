import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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
    content: "Guide complet pour parents...",
    author: "Dr. Amina Benali",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Conseils Parents",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: "2",
    title: "Les activités d'éveil pour les tout-petits",
    excerpt: "Des idées créatives et éducatives pour stimuler le développement de votre enfant à travers des jeux et activités adaptés à son âge.",
    content: "Liste d'activités par tranche d'âge...",
    author: "Fatima Zahra",
    date: "2024-01-12",
    readTime: "7 min",
    category: "Développement",
    image: "https://images.pexels.com/photos/8613268/pexels-photo-8613268.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "3",
    title: "Sécurité à domicile : checklist pour parents",
    excerpt: "Une liste complète des mesures de sécurité à mettre en place dans votre maison pour protéger vos enfants des accidents domestiques.",
    content: "Checklist de sécurité détaillée...",
    author: "Mohamed Alami",
    date: "2024-01-10",
    readTime: "4 min",
    category: "Sécurité",
    image: "https://images.pexels.com/photos/8613271/pexels-photo-8613271.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "4",
    title: "Gérer les caprices : techniques efficaces",
    excerpt: "Apprenez des stratégies éprouvées pour gérer les crises de colère et les caprices de votre enfant avec patience et bienveillance.",
    content: "Techniques de gestion des émotions...",
    author: "Aicha Bennani",
    date: "2024-01-08",
    readTime: "6 min",
    category: "Éducation",
    image: "https://images.pexels.com/photos/8613095/pexels-photo-8613095.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "5",
    title: "L'alimentation équilibrée pour les enfants",
    excerpt: "Conseils nutritionnels et recettes saines pour assurer une alimentation équilibrée et variée à votre enfant.",
    content: "Guide nutritionnel complet...",
    author: "Dr. Laila Tazi",
    date: "2024-01-05",
    readTime: "8 min",
    category: "Nutrition",
    image: "https://images.pexels.com/photos/8613272/pexels-photo-8613272.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "6",
    title: "Préparer son enfant à l'arrivée d'une nounou",
    excerpt: "Comment faciliter l'adaptation de votre enfant à sa nouvelle nounou et créer un environnement de confiance.",
    content: "Guide d'adaptation progressive...",
    author: "Khadija Alaoui",
    date: "2024-01-03",
    readTime: "5 min",
    category: "Conseils Parents",
    image: "https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const categories = ["Tous", "Conseils Parents", "Développement", "Sécurité", "Éducation", "Nutrition"];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nounou-blue/10 to-nounou-pink/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-4">
              Blog NounouConnect
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conseils d'experts, astuces pratiques et guides pour parents et nounous. 
              Tout ce qu'il faut savoir pour le bien-être de vos enfants.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Article à la une</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 card-gradient">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-nounou-blue/10 text-nounou-blue">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                    </div>
                    
                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button className="btn-gradient">
                        Lire l'article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tous" ? "default" : "outline"}
                size="sm"
                className={category === "Tous" ? "btn-gradient" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Derniers articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
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
                    <Badge variant="secondary" className="bg-nounou-pink/10 text-nounou-pink">
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
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{post.author}</span>
                    </div>
                    
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`} className="block mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      Lire la suite
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Charger plus d'articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;