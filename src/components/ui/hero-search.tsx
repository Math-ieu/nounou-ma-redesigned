import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MapPin, Search } from "lucide-react";

const cities = [
  "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir", "Salé", "Meknès", 
  "Oujda", "Kenitra", "Tétouan", "Safi", "Mohammedia", "Khouribga", "Beni Mellal", "El Jadida",
  "Nador", "Settat", "Larache", "Ksar El Kebir"
];

export const HeroSearch = () => {
  const [searchType, setSearchType] = useState<"nounou" | "famille">("nounou");
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <Card className="card-gradient p-8 max-w-md mx-auto backdrop-blur-md border-white/20 shadow-2xl">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Trouvez une nounou/babysitter
          </h2>
          <p className="text-white/80 text-sm">dans votre région</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="pl-10 bg-white/90 border-white/30">
                <SelectValue placeholder="Sélectionnez votre ville" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={searchType === "nounou" ? "default" : "outline"}
              onClick={() => setSearchType("nounou")}
              className={`transition-all ${
                searchType === "nounou" 
                  ? "btn-secondary shadow-lg" 
                  : "bg-white/90 text-foreground hover:bg-white border-white/30"
              }`}
            >
              Je cherche une nounou
            </Button>
            <Button
              variant={searchType === "famille" ? "default" : "outline"}
              onClick={() => setSearchType("famille")}
              className={`transition-all ${
                searchType === "famille" 
                  ? "btn-secondary shadow-lg" 
                  : "bg-white/90 text-foreground hover:bg-white border-white/30"
              }`}
            >
              Je cherche une famille
            </Button>
          </div>

          <Button 
            className="w-full btn-gradient text-lg py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            size="lg"
          >
            <Search className="mr-2 h-5 w-5" />
            JE TROUVE
          </Button>
        </div>
      </div>
    </Card>
  );
};