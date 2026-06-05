'use client';

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { AITools } from './components/AITools';
import { AdministrativeSkills } from './components/AdministrativeSkills';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />

        <AdministrativeSkills />
        <Portfolio />
        <About />
        <AITools />
        <WhyWorkWithMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}