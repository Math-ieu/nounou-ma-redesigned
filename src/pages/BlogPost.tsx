import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, Share2, Heart } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  // Article exemple
  const article = {
    id: "1",
    title: "Comment choisir la nounou parfaite pour votre enfant",
    author: "Dr. Amina Benali",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Conseils Parents",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `
      <p>Choisir une nounou pour son enfant est une décision importante qui nécessite réflexion et préparation. Voici un guide complet pour vous aider dans cette démarche cruciale.</p>

      <h2>1. Définir vos besoins</h2>
      <p>Avant de commencer vos recherches, il est essentiel de définir clairement vos attentes :</p>
      <ul>
        <li><strong>Horaires :</strong> À temps plein, temps partiel, ou occasionnel ?</li>
        <li><strong>Lieu :</strong> À votre domicile ou chez la nounou ?</li>
        <li><strong>Âge de l'enfant :</strong> Les compétences requises varient selon l'âge</li>
        <li><strong>Tâches supplémentaires :</strong> Ménage, cuisine, aide aux devoirs ?</li>
        <li><strong>Budget :</strong> Définissez une fourchette réaliste</li>
      </ul>

      <h2>2. Les qualifications à rechercher</h2>
      <p>Une bonne nounou doit posséder certaines qualifications et qualités :</p>
      
      <h3>Qualifications professionnelles</h3>
      <ul>
        <li>CAP Petite Enfance ou équivalent</li>
        <li>Formation aux premiers secours</li>
        <li>Expérience avec des enfants du même âge</li>
        <li>Références vérifiables</li>
      </ul>

      <h3>Qualités personnelles</h3>
      <ul>
        <li>Patience et bienveillance</li>
        <li>Créativité pour les activités</li>
        <li>Fiabilité et ponctualité</li>
        <li>Capacité d'adaptation</li>
        <li>Excellente communication</li>
      </ul>

      <h2>3. Le processus de sélection</h2>
      
      <h3>Étape 1 : Présélection</h3>
      <p>Examinez attentivement les profils et CV. Vérifiez :</p>
      <ul>
        <li>L'expérience pertinente</li>
        <li>Les formations et certifications</li>
        <li>La cohérence du parcours</li>
        <li>Les références disponibles</li>
      </ul>

      <h3>Étape 2 : Entretien téléphonique</h3>
      <p>Un premier contact permet d'évaluer :</p>
      <ul>
        <li>La motivation de la candidate</li>
        <li>Sa disponibilité</li>
        <li>Sa philosophie éducative</li>
        <li>Sa capacité de communication</li>
      </ul>

      <h3>Étape 3 : Entretien en personne</h3>
      <p>L'entretien physique est crucial. Observez :</p>
      <ul>
        <li>L'interaction avec votre enfant</li>
        <li>La présentation et l'hygiène</li>
        <li>Les réactions face aux situations pratiques</li>
        <li>L'aisance dans votre environnement</li>
      </ul>

      <h2>4. Questions importantes à poser</h2>
      
      <h3>Sur l'expérience</h3>
      <ul>
        <li>"Parlez-moi de votre expérience avec les enfants de cet âge"</li>
        <li>"Comment gérez-vous les crises de colère ?"</li>
        <li>"Quelles activités proposez-vous selon l'âge ?"</li>
      </ul>

      <h3>Sur les situations d'urgence</h3>
      <ul>
        <li>"Comment réagiriez-vous en cas d'accident ?"</li>
        <li>"Connaissez-vous les gestes de premiers secours ?"</li>
        <li>"Comment gérez-vous un enfant malade ?"</li>
      </ul>

      <h3>Sur l'organisation</h3>
      <ul>
        <li>"Comment organisez-vous une journée type ?"</li>
        <li>"Êtes-vous flexible sur les horaires ?"</li>
        <li>"Comment communiquez-vous avec les parents ?"</li>
      </ul>

      <h2>5. Vérifier les références</h2>
      <p>Ne négligez jamais cette étape cruciale :</p>
      <ul>
        <li>Contactez au moins 2-3 références récentes</li>
        <li>Posez des questions précises sur les compétences</li>
        <li>Demandez les raisons de fin de collaboration</li>
        <li>Vérifiez l'authenticité des documents</li>
      </ul>

      <h2>6. La période d'essai</h2>
      <p>Prévoyez toujours une période d'essai de 2-4 semaines :</p>
      <ul>
        <li>Observez l'adaptation mutuelle</li>
        <li>Évaluez la qualité des soins</li>
        <li>Vérifiez le respect des consignes</li>
        <li>Analysez le bien-être de votre enfant</li>
      </ul>

      <h2>7. Établir une relation de confiance</h2>
      <p>Une fois votre choix fait :</p>
      <ul>
        <li>Définissez clairement les règles et attentes</li>
        <li>Maintenez une communication ouverte</li>
        <li>Respectez mutuellement les engagements</li>
        <li>Organisez des points réguliers</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Choisir la bonne nounou demande du temps et de la réflexion, mais c'est un investissement précieux pour le bien-être de votre enfant. N'hésitez pas à prendre le temps nécessaire et à faire confiance à votre instinct de parent.</p>

      <p>Rappelez-vous que la nounou idéale est celle qui partage vos valeurs éducatives et avec qui votre enfant se sent en sécurité et épanoui.</p>
    `
  };

  const relatedArticles = [
    {
      id: "2",
      title: "Les activités d'éveil pour les tout-petits",
      category: "Développement",
      image: "https://images.pexels.com/photos/8613268/pexels-photo-8613268.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "3",
      title: "Sécurité à domicile : checklist pour parents",
      category: "Sécurité",
      image: "https://images.pexels.com/photos/8613271/pexels-photo-8613271.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Link>
        </div>

        {/* Article Header */}
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge variant="secondary" className="bg-nounou-blue/10 text-nounou-blue mb-4">
                {article.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} de lecture</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  J'aime
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="article-content"
              />
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Articles similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-gradient">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="bg-nounou-pink/10 text-nounou-pink mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="font-semibold text-lg mb-4">{post.title}</h3>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Lire l'article
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;