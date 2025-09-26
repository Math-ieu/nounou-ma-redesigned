import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
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
            <p className="text-muted-foreground text-sm">
              La première plateforme marocaine de mise en relation entre parents et nounous qualifiées.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+212 5 22 XX XX XX</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>contact@nounouconnect.ma</span>
            </div>
          </div>

          {/* À propos */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">À propos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/qui-sommes-nous" className="text-muted-foreground hover:text-foreground transition-colors">Qui sommes-nous?</Link></li>
              <li><Link to="/comment-ca-marche" className="text-muted-foreground hover:text-foreground transition-colors">Comment ça fonctionne?</Link></li>
              <li><Link to="/conditions-generales" className="text-muted-foreground hover:text-foreground transition-colors">Conditions générales</Link></li>
              <li><Link to="/politique-confidentialite" className="text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contactez-nous</Link></li>
            </ul>
          </div>

          {/* Nounous par ville */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Nounous par ville</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/nounous/casablanca" className="text-muted-foreground hover:text-foreground transition-colors">Nounou à Casablanca</Link></li>
              <li><Link to="/nounous/marrakech" className="text-muted-foreground hover:text-foreground transition-colors">Nounou à Marrakech</Link></li>
              <li><Link to="/nounous/agadir" className="text-muted-foreground hover:text-foreground transition-colors">Nounou à Agadir</Link></li>
              <li><Link to="/nounous/rabat" className="text-muted-foreground hover:text-foreground transition-colors">Nounou à Rabat</Link></li>
              <li><Link to="/nounous/tanger" className="text-muted-foreground hover:text-foreground transition-colors">Nounou à Tanger</Link></li>
            </ul>
            
            <h4 className="font-semibold text-foreground mt-6">Baby-sitter par ville</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/babysitters/casablanca" className="text-muted-foreground hover:text-foreground transition-colors">Baby-sitter à Casablanca</Link></li>
              <li><Link to="/babysitters/marrakech" className="text-muted-foreground hover:text-foreground transition-colors">Baby-sitter à Marrakech</Link></li>
              <li><Link to="/babysitters/agadir" className="text-muted-foreground hover:text-foreground transition-colors">Baby-sitter à Agadir</Link></li>
            </ul>
          </div>

          {/* Enfants à garder */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Enfants à garder</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/enfants/casablanca" className="text-muted-foreground hover:text-foreground transition-colors">Enfant à garder à Casablanca</Link></li>
              <li><Link to="/enfants/marrakech" className="text-muted-foreground hover:text-foreground transition-colors">Enfants à garder à Marrakech</Link></li>
              <li><Link to="/enfants/agadir" className="text-muted-foreground hover:text-foreground transition-colors">Enfants à garder à Agadir</Link></li>
              <li><Link to="/enfants/rabat" className="text-muted-foreground hover:text-foreground transition-colors">Enfants à garder à Rabat</Link></li>
              <li><Link to="/enfants/tanger" className="text-muted-foreground hover:text-foreground transition-colors">Enfants à garder à Tanger</Link></li>
            </ul>
          </div>
        </div>

        {/* Méthodes de paiement */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Paiements sécurisés:</span>
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded px-2 py-1 shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                </div>
                <div className="bg-white rounded px-2 py-1 shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                </div>
                <div className="bg-white rounded px-2 py-1 shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
                </div>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 NounouConnect.ma - Tous droits réservés
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};