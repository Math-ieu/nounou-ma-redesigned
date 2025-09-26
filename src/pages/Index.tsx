import { Header } from "@/components/layout/header";
import { HeroSearch } from "@/components/ui/hero-search";
import { ProfilesSection } from "@/components/sections/profiles-section";
import heroImage from "@/assets/hero-family.jpg";

const parentsData = [
  {
    id: "1",
    name: "Amélie",
    city: "Paris 15ème",
    type: "parent" as const,
    description: "Cherche nounou expérimentée pour garder ma fille de 3 ans à temps partiel",
    isPremium: true,
    rating: 4.9,
    availability: "Cherche nounou à temps partiel"
  },
  {
    id: "2",
    name: "Sophie",
    city: "Lyon 6ème", 
    type: "parent" as const,
    description: "Famille bienveillante recherche nounou pour jumeaux de 18 mois",
    isPremium: true,
    availability: "Cherche nounou à plein temps"
  },
  {
    id: "3",
    name: "Thomas",
    city: "Marseille",
    type: "parent" as const,
    description: "Papa solo cherche aide pour garde de son fils de 5 ans après l'école",
    isPremium: false,
    availability: "Cherche nounou après l'école"
  }
];

const nounousData = [
  {
    id: "1",
    name: "Rayana",
    city: "Paris",
    type: "nounou" as const,
    description: "Nounou expérimentée, diplômée CAP Petite Enfance. Disponible pour garde à domicile",
    isPremium: true,
    rating: 4.8,
    availability: "Disponible à temps partiel"
  },
  {
    id: "2",
    name: "Najoua",
    city: "Lyon",
    type: "nounou" as const,
    description: "Assistante maternelle agréée, 8 ans d'expérience avec les tout-petits",
    isPremium: true,
    rating: 4.9,
    availability: "Disponible à plein temps"
  },
  {
    id: "3",
    name: "Yasmine",
    city: "Marseille", 
    type: "nounou" as const,
    description: "Étudiante en puériculture, douce et patiente avec les enfants",
    isPremium: false,
    rating: 4.7,
    availability: "Disponible le week-end"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center hero-bg overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4) saturate(0.8)'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-nounou-blue/80 to-nounou-pink/80" />
        
        <div className="relative z-20 text-center px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              1<sup className="text-3xl">er</sup> <span className="text-gradient">SITE</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-2">
              <span className="italic text-nounou-pink">de mise en relation entre</span>
            </p>
            <p className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-nounou-blue">Parents</span> et{" "}
              <span className="text-nounou-pink">Nounous</span>/
              <span className="text-nounou-blue">Babysitters</span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-nounou-pink text-white px-6 py-2 rounded-full font-semibold transform rotate-2 shadow-lg">
              SERVICE 100% GRATUIT
            </div>
            <div className="bg-nounou-orange text-white px-6 py-2 rounded-full font-semibold transform -rotate-1 shadow-lg">
              SANS INTERMÉDIAIRE
            </div>
          </div>

          <HeroSearch />
        </div>
      </section>

      {/* Parents Section */}
      <ProfilesSection 
        title="Ils cherchent une nounou"
        subtitle="Des familles de confiance recherchent la nounou idéale"
        profiles={parentsData}
      />

      {/* Nounous Section */}
      <ProfilesSection 
        title="Elles prendront soin de vos enfants"
        subtitle="Des nounous qualifiées et bienveillantes près de chez vous"
        profiles={nounousData}
      />

      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-nounou-blue rounded-full mr-2"></div>
              <div className="h-6 w-6 bg-nounou-pink rounded-full -ml-2"></div>
            </div>
            <span className="text-2xl font-bold ml-3">
              <span className="text-nounou-blue">nounou</span>
              <span className="text-nounou-pink">connect</span>
              <span className="text-sm text-muted-foreground">.fr</span>
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 NounouConnect. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
