import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSearch } from "@/components/ui/hero-search";
import { ProfilesSection } from "@/components/sections/profiles-section";
import { BlogSection } from "@/components/sections/blog-section";
import { parentsData, nounousData } from "@/data/profiles";

const heroImage = "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center hero-bg overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4) saturate(0.8)'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-nounou-blue/80 to-nounou-pink/80" />
        
        <div className="relative z-20 text-center px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              1<sup className="text-3xl">er</sup> <span className="text-white">SITE</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-2">
              <span className="italic text-nounou-pink">de mise en relation entre</span>
            </p>
            <p className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-nounou-blue">Parents</span> et{" "}
              <span className="text-nounou-pink">Nounous</span>/
              <span className="text-nounou-blue">Babysitters</span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-nounou-pink text-white px-6 py-2 rounded-full font-semibold transform rotate-2 shadow-lg">
              SERVICE 100% GRATUIT
            </div>
            <div className="bg-nounou-orange text-white px-6 py-2 rounded-full font-semibold transform -rotate-1 shadow-lg">
              SANS INTERMÉDIAIRE
            </div>
          </div>

          <HeroSearch />
        </div>
      </section>

      {/* Parents Section */}
      <ProfilesSection 
        title="Ils cherchent une nounou"
        subtitle="Des familles de confiance recherchent la nounou idéale"
        profiles={parentsData}
      />

      {/* Nounous Section */}
      <ProfilesSection 
        title="Elles prendront soin de vos enfants"
        subtitle="Des nounous qualifiées et bienveillantes près de chez vous"
        profiles={nounousData}
      />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
