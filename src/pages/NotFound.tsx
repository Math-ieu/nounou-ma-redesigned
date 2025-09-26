import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/layout/header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">Oops ! Page introuvable</p>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background btn-gradient h-10 py-2 px-4"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
