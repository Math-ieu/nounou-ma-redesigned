import { Button } from "@/components/ui/button";
import { Heart, Home, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-nounou-blue" />
              <Heart className="h-6 w-6 text-nounou-pink -ml-2" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-nounou-blue">nounou</span>
              <span className="text-nounou-pink">connect</span>
              <span className="text-sm text-muted-foreground">.fr</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
              <Home className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
            <Link to="/parents" className="text-muted-foreground hover:text-foreground transition-colors">
              Parents
            </Link>
            <Link to="/nounous" className="text-muted-foreground hover:text-foreground transition-colors">
              Nounous
            </Link>
            <Link to="/comment-ca-marche" className="text-muted-foreground hover:text-foreground transition-colors">
              Comment ça marche
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:flex items-center space-x-1 border-nounou-orange text-nounou-orange hover:bg-nounou-orange hover:text-white"
            >
              <span className="text-xs font-semibold">✨</span>
              <span>Devenir membre premium</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
            
            <Button size="sm" className="btn-gradient">
              <UserPlus className="h-4 w-4 mr-1" />
              Inscription
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};