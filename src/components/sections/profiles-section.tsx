import { ProfileCard } from "@/components/profiles/profile-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProfilesSectionProps {
  title: string;
  subtitle: string;
  profiles: Array<{
    id: string;
    name: string;
    city: string;
    type: "parent" | "nounou";
    description: string;
    isPremium?: boolean;
    avatar?: string;
    rating?: number;
    availability?: string;
  }>;
}

export const ProfilesSection = ({ title, subtitle, profiles }: ProfilesSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-2">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-md hover:shadow-lg">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-md hover:shadow-lg">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} {...profile} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Voir tous les profils
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};