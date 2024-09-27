import HomeBrands from "@/components/homepage/HomeBrands";
import styles from "./page.module.css";
import HomeHero from "@/components/homepage/HomeHero";
import HowItWorks from "@/components/homepage/HowItWorks";
import FAQ from "@/components/homepage/FAQ";
import HomeCTA from "@/components/homepage/HomeCTA";

import americanAirlines from "../../public/assets/logo_american_airlines.svg";
import copaAirlines from "../../public/assets/logo_copa_airlines.svg";
import lufthansa from "../../public/assets/logo_bird_airlines.svg";
import iberia from "../../public/assets/logo_iberia_airlines.svg";

const hero_logos = [
  {
    name: 'American Airlines',
    img: americanAirlines
  },
  {
    name: 'Copa Airlines',
    img: copaAirlines
  },
  {
    name: 'Lufthansa Airlines',
    img: lufthansa
  },
  {
    name: 'Iberia Airlines',
    img: iberia
  }
]

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero
        logos={hero_logos}
        title={'Olvídate de gestionar reservas, nosotros lo hacemos por ti'}
        subtitle={'Cuéntanos tu sueño de viaje, nosotros te ayudamos a hacerlo realidad'} />
      <HowItWorks />
      <HomeBrands />
      <FAQ />
      <HomeCTA />
    </main>
  );
}
