import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProfileCard } from "@/components/profiles/profile-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Filter } from "lucide-react";
import { nounousData } from "@/data/profiles";


const cities = [
  "Toutes les villes", "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir", 
  "Salé", "Meknès", "Oujda", "Kenitra", "Tétouan", "Safi"
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
      
      <Footer />
    </div>
  );
};

export default Nounous;