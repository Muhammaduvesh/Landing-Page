"use client";

// pages/index.js
import Header from './myComponents/Header';
import HeroSection from './myComponents/HeroSection';
import FullDevelopmentCycle from './myComponents/FullDevelopmentCycle';
import Projects from './myComponents/Projects';
import ContactForm from './myComponents/ContactForm';
import AppStages from './myComponents/AppStages';
import Team from './myComponents/Team';
import { Button } from "@/components/ui/button"


const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FullDevelopmentCycle />
      <Projects />
      <ContactForm />
      <AppStages />
      <Team />
    </div>
  );
};

export default Home;
