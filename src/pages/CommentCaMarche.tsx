import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, MessageCircle, Heart, Shield, Star } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Inscrivez-vous gratuitement",
    description: "Créez votre profil en quelques minutes. Parents ou nounous, notre plateforme est 100% gratuite.",
    color: "text-nounou-blue"
  },
  {
    icon: Search,
    title: "2. Recherchez et filtrez",
    description: "Utilisez nos filtres avancés pour trouver la nounou parfaite ou la famille idéale près de chez vous.",
    color: "text-nounou-pink"
  },
  {
    icon: MessageCircle,
    title: "3. Entrez en contact",
    description: "Échangez directement avec les profils qui vous intéressent via notre messagerie sécurisée.",
    color: "text-nounou-orange"
  },
  {
    icon: Heart,
    title: "4. Trouvez la bonne personne",
    description: "Organisez une rencontre et commencez une collaboration de confiance pour le bien-être des enfants.",
    color: "text-nounou-blue"
  }
];

const advantages = [
  {
    icon: Shield,
    title: "Sécurité garantie",
    description: "Tous les profils sont vérifiés et notre système de notation assure la qualité des échanges."
  },
  {
    icon: Star,
    title: "Qualité premium",
    description: "Nos nounous sont sélectionnées pour leur expérience et leurs qualifications reconnues."
  },
  {
    icon: Heart,
    title: "Mise en relation directe",
    description: "Aucun intermédiaire, vous gardez le contrôle total de vos échanges et négociations."
  }
];

const CommentCaMarche = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nounou-blue/10 to-nounou-pink/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gradient mb-6">
            Comment ça marche ?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment NounouConnect révolutionne la mise en relation entre parents et nounous. 
            Simple, sécurisé et 100% gratuit.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-gradient">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-lg mb-6`}>
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pourquoi choisir NounouConnect ?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme pensée pour la sécurité et le bien-être de vos enfants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 card-gradient">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <advantage.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nounou-blue to-nounou-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rejoignez des milliers de familles et de nounous qui ont trouvé leur bonheur sur NounouConnect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                Je suis parent
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                Je suis nounou
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Questions fréquentes</h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">L'inscription est-elle vraiment gratuite ?</h3>
                <p className="text-muted-foreground">Oui, NounouConnect est 100% gratuit pour tous les utilisateurs. Aucun frais caché.</p>
              </CardContent>
            </Card>

            <Card className="card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Comment vérifiez-vous les profils ?</h3>
                <p className="text-muted-foreground">Nous vérifions l'identité de chaque utilisateur et encourageons les avis pour maintenir la qualité.</p>
              </CardContent>
            </Card>

            <Card className="card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Puis-je contacter plusieurs nounous ?</h3>
                <p className="text-muted-foreground">Bien sûr ! Vous pouvez contacter autant de profils que vous le souhaitez pour trouver la perle rare.</p>
              </CardContent>
            </Card>

            <Card className="card-gradient">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Que signifie "membre premium" ?</h3>
                <p className="text-muted-foreground">Les membres premium ont des profils vérifiés et bénéficient d'une meilleure visibilité.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CommentCaMarche;