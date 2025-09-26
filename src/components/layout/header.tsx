{"code-react";
i{odpp-esfesmr" f, ou Nmam:s Ysrt-oorn-rs nam=oosc
Nesrs. Ph"p et our:>be   ise
 ">o     . ,Np    t- " terN t g o>  , r Rces  sNesgrrtm lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b sticky top-0 z-50">
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
              <span className="text-sm text-muted-foreground">.ma</span>
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
            <Link to="/blog" className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>Blog</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:flex items-center space-x-1 border-nounou-orange text-nounou-orange hover:bg-nounou-orange hover:text-white"
            >
              <span className="text-xs font-semibold">✨</span>
              <span>Devenir membre premium</span>
            </Button>
            
            <Link to="/login">
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <LogIn className="h-4 w-4" />
                <span>Connexion</span>
              </Button>
            </Link>
            
            <Link to="/register">
              <Button size="sm" className="btn-gradient">
                <UserPlus className="h-4 w-4 mr-1" />
                Inscription
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        <nav className="md:hidden mt-4 pt-4 border-t">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors py-2">
              <Home className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
            <Link to="/parents" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Parents
            </Link>
            <Link to="/nounous" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Nounous
            </Link>
            <Link to="/comment-ca-marche" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Comment ça marche
            </Link>
            <Link to="/blog" className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors py-2">
              <BookOpen className="h-4 w-4" />
              <span>Blog</span>
            </Link>
            <div className="flex space-x-2 pt-2">
              <Link to="/login" className="flex-1">
                <Button variant="ghost" size="sm" className="w-full flex items-center space-x-1">
                  <LogIn className="h-4 w-4" />
                  <span>Connexion</span>
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button size="sm" className="w-full btn-gradient">
                  <UserPlus className="h-4 w-4 mr-1" />
                  Inscription
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
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