// src/pages/Home.tsx
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";


export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
    </>
  );
}
