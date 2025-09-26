import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileCardProps {
  name: string;
  city: string;
  type: "parent" | "nounou";
  description: string;
  isPremium?: boolean;
  avatar?: string;
  rating?: number;
  availability?: string;
}

export const ProfileCard = ({ 
  name, 
  city, 
  type, 
  description, 
  isPremium = false, 
  avatar,
  rating,
  availability 
}: ProfileCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-white/20 card-gradient">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="h-16 w-16 border-2 border-white/50">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                {name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {isPremium && (
              <Badge className="absolute -top-2 -right-2 bg-nounou-orange text-white text-xs px-2 py-1 rounded-full">
                ✨ Premium
              </Badge>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {name}
              </h3>
              {rating && (
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">{rating}</span>
                </div>
              )}
            </div>

            <div className="flex items-center text-muted-foreground text-sm mb-3">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{city}</span>
            </div>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {description}
            </p>

            {availability && (
              <div className="flex items-center text-sm text-primary">
                <Clock className="h-4 w-4 mr-1" />
                <span>{availability}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <Badge 
            variant="secondary" 
            className={`${
              type === "parent" 
                ? "bg-nounou-blue/10 text-nounou-blue border-nounou-blue/20" 
                : "bg-nounou-pink/10 text-nounou-pink border-nounou-pink/20"
            }`}
          >
            {type === "parent" ? "Cherche une nounou" : "Nounou disponible"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};