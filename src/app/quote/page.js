import HomeHero from "@/components/homepage/HomeHero";

import appLogo from "../../../public/assets/logo_blue_yellow.svg";
import expedia from "../../../public/assets/logo_expedia.svg";
import booking from "../../../public/assets/logo_booking.svg";
import airbnb from "../../../public/assets/logo_airbnb.svg";

import styles from "@/app/quote/page.module.css";
import QuoteForm from "@/components/quote/QuoteForm";

const hero_logos = [
    {
      name: 'App Logo',
      img: appLogo
    },
    {
      name: 'Expedia Logo',
      img: expedia
    },
    {
      name: 'Booking Logo',
      img: booking
    },
    {
      name: 'Airbnb Logo',
      img: airbnb
    }
  ]

export default function Quote() {
    return(
        <main className={styles.quote_main}>
            <section>
                <HomeHero
                    logos={hero_logos}
                    title={'Tu Próxima Aventura Comienza Aquí'}
                    subtitle={'Dinos los detalles y nosotros haremos el resto'} />
            </section>
            <QuoteForm />
        </main>
    )
}