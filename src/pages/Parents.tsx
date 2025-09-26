import { Header } from "@/components/layout/header";
import { ProfileCard } from "@/components/profiles/profile-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Filter } from "lucide-react";

const parentsData = [
  {
    id: "1",
    name: "Amélie",
    city: "Paris 15ème",
    type: "parent" as const,
    description: "Cherche nounou expérimentée pour garder ma fille de 3 ans à temps partiel. Nous recherchons quelqu'un de bienveillant et patient.",
    isPremium: true,
    rating: 4.9,
    availability: "Cherche nounou à temps partiel"
  },
  {
    id: "2",
    name: "Sophie",
    city: "Lyon 6ème", 
    type: "parent" as const,
    description: "Famille bienveillante recherche nounou pour jumeaux de 18 mois. Expérience avec les bébés souhaitée.",
    isPremium: true,
    availability: "Cherche nounou à plein temps"
  },
  {
    id: "3",
    name: "Thomas",
    city: "Marseille",
    type: "parent" as const,
    description: "Papa solo cherche aide pour garde de son fils de 5 ans après l'école. Personne dynamique et créative.",
    isPremium: false,
    availability: "Cherche nounou après l'école"
  },
  {
    id: "4",
    name: "Caroline",
    city: "Toulouse",
    type: "parent" as const,
    description: "Maman de deux enfants (2 et 4 ans) cherche nounou pour garde partagée. Flexible sur les horaires.",
    isPremium: true,
    rating: 4.8,
    availability: "Cherche garde partagée"
  },
  {
    id: "5",
    name: "Pierre",
    city: "Nice",
    type: "parent" as const,
    description: "Recherche babysitter occasionnelle pour soirées et week-ends. Enfants de 6 et 8 ans.",
    isPremium: false,
    availability: "Cherche babysitter occasionnelle"
  },
  {
    id: "6",
    name: "Marie",
    city: "Nantes",
    type: "parent" as const,
    description: "Famille cherche nounou anglophone pour immersion linguistique. Fille de 4 ans très curieuse.",
    isPremium: true,
    rating: 4.7,
    availability: "Cherche nounou anglophone"
  }
];

const cities = [
  "Toutes les villes", "Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", 
  "Montpellier", "Strasbourg", "Bordeaux", "Lille", "Rennes", "Reims"
];

const Parents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-nounou-blue/10 to-nounou-pink/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-4">
              Parents cherchant une nounou
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les familles de votre région qui recherchent la nounou idéale pour leurs enfants
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher un parent..." 
                  className="pl-10"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Select>
                  <SelectTrigger className="w-48 pl-10">
                    <SelectValue placeholder="Ville" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button className="btn-gradient">
                <Filter className="mr-2 h-4 w-4" />
                Filtrer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">
              {parentsData.length} parents trouvés
            </h2>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Plus récent</SelectItem>
                <SelectItem value="rating">Meilleure note</SelectItem>
                <SelectItem value="premium">Membres premium</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parentsData.map((parent) => (
              <ProfileCard key={parent.id} {...parent} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Charger plus de profils
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parents;