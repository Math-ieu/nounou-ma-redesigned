import { Header } from "@/components/layout/header";
import { ProfileCard } from "@/components/profiles/profile-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Filter } from "lucide-react";

const nounousData = [
  {
    id: "1",
    name: "Rayana",
    city: "Paris 16ème",
    type: "nounou" as const,
    description: "Nounou expérimentée, diplômée CAP Petite Enfance. 5 ans d'expérience avec les enfants de 0 à 10 ans. Disponible pour garde à domicile.",
    isPremium: true,
    rating: 4.8,
    availability: "Disponible à temps partiel"
  },
  {
    id: "2",
    name: "Najoua",
    city: "Lyon 3ème",
    type: "nounou" as const,
    description: "Assistante maternelle agréée, 8 ans d'expérience avec les tout-petits. Spécialisée dans l'éveil et les activités créatives.",
    isPremium: true,
    rating: 4.9,
    availability: "Disponible à plein temps"
  },
  {
    id: "3",
    name: "Yasmine",
    city: "Marseille 8ème", 
    type: "nounou" as const,
    description: "Étudiante en puériculture, douce et patiente avec les enfants. Brevet de secourisme pédiatrique.",
    isPremium: false,
    rating: 4.7,
    availability: "Disponible le week-end"
  },
  {
    id: "4",
    name: "Fatima",
    city: "Toulouse",
    type: "nounou" as const,
    description: "Nounou bilingue français-arabe, 10 ans d'expérience. Excellentes références, très organisée.",
    isPremium: true,
    rating: 4.9,
    availability: "Disponible à plein temps"
  },
  {
    id: "5",
    name: "Amélia",
    city: "Nice",
    type: "nounou" as const,
    description: "Ancienne institutrice reconvertie, passionnée par l'éducation des enfants. Aide aux devoirs incluse.",
    isPremium: true,
    rating: 4.8,
    availability: "Disponible après l'école"
  },
  {
    id: "6",
    name: "Sofia",
    city: "Nantes",
    type: "nounou" as const,
    description: "Nounou expérimentée avec spécialisation Montessori. Créative et bienveillante, références vérifiées.",
    isPremium: false,
    rating: 4.6,
    availability: "Disponible à temps partiel"
  }
];

const cities = [
  "Toutes les villes", "Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", 
  "Montpellier", "Strasbourg", "Bordeaux", "Lille", "Rennes", "Reims"
];

const Nounous = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-nounou-pink/10 to-nounou-blue/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gradient mb-4">
              Nounous et babysitters disponibles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trouvez la nounou parfaite pour vos enfants parmi nos professionnelles qualifiées et expérimentées
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher une nounou..." 
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
              {nounousData.length} nounous trouvées
            </h2>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Meilleure note</SelectItem>
                <SelectItem value="recent">Plus récent</SelectItem>
                <SelectItem value="premium">Membres premium</SelectItem>
                <SelectItem value="experience">Plus d'expérience</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nounousData.map((nounou) => (
              <ProfileCard key={nounou.id} {...nounou} />
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

export default Nounous;