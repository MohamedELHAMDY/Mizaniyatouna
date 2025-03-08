import React, { useState } from 'react';
import { BarChart3, Users, BookOpen, MessageSquare, TrendingUp, BrainCircuit, Globe2 } from 'lucide-react';
import DashboardChart from './components/DashboardChart';
import NewsSection from './components/NewsSection';
import ParticipationSection from './components/ParticipationSection';
import ChatbotSection from './components/ChatbotSection';

function App() {
  const [language, setLanguage] = useState('fr');

  return (
    <div className="min-h-screen bg-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-gradient-to-r from-morocco-green to-morocco-red text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1556710986-4a70434a76c0?auto=format&fit=crop&w=48&h=32" 
                alt="Drapeau du Maroc" 
                className="h-8 w-auto"
              />
              <h1 className="text-3xl font-bold">Mizaniyatona</h1>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <a href="#dashboard" className="hover:text-emerald-200">Tableau de bord</a>
                <a href="#participation" className="hover:text-emerald-200">Participation</a>
                <a href="#education" className="hover:text-emerald-200">Apprentissage</a>
                <a href="#analysis" className="hover:text-emerald-200">Analyses</a>
              </nav>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setLanguage('fr')}
                  className={`px-2 py-1 rounded ${language === 'fr' ? 'bg-white/20' : ''}`}
                >
                  FR
                </button>
                <button 
                  onClick={() => setLanguage('ar')}
                  className={`px-2 py-1 rounded ${language === 'ar' ? 'bg-white/20' : ''}`}
                >
                  عربية
                </button>
                <button 
                  onClick={() => setLanguage('ber')}
                  className={`px-2 py-1 rounded ${language === 'ber' ? 'bg-white/20' : ''}`}
                >
                  ⵜⴰⵎⴰⵣⵉⵖⵜ
                </button>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xl">Plateforme de transparence budgétaire du Maroc</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard 
            icon={<BarChart3 className="w-8 h-8 text-morocco-green" />}
            title="Visualisation Interactive"
            description="Explorez les données budgétaires régionales du Maroc à travers des graphiques dynamiques"
          />
          <FeatureCard 
            icon={<BrainCircuit className="w-8 h-8 text-morocco-red" />}
            title="Assistant IA"
            description="Posez vos questions sur le budget et obtenez des réponses instantanées"
          />
          <FeatureCard 
            icon={<Users className="w-8 h-8 text-morocco-green" />}
            title="Participation Citoyenne"
            description="Exprimez vos priorités et participez aux discussions budgétaires"
          />
        </div>

        {/* Dashboard Section */}
        <section id="dashboard" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Tableau de Bord Budgétaire</h2>
          <DashboardChart />
        </section>

        {/* News and Participation Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <NewsSection />
          <ParticipationSection />
        </div>

        {/* Chatbot Section */}
        <ChatbotSection />
      </main>

      {/* Footer */}
      <footer className="bg-morocco-green text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mizaniyatona</h3>
              <p>Promouvoir la transparence budgétaire et la participation citoyenne au Maroc.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                <li><a href="#dashboard" className="hover:text-emerald-200">Tableau de bord</a></li>
                <li><a href="#participation" className="hover:text-emerald-200">Participation</a></li>
                <li><a href="#education" className="hover:text-emerald-200">Ressources éducatives</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p>contact@mizaniyatona.ma</p>
              <p>Suivez-nous sur les réseaux sociaux</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
