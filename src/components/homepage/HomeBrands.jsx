import Image from "next/image";

import travelgenio from "../../../public/assets/travelgenio.png";
import logitravel from "../../../public/assets/logitravel.png";
import iberia from "../../../public/assets/iberia.png";
import opodo from "../../../public/assets/opodo.png";
import edreams from "../../../public/assets/edreams.png";
import expedia from "../../../public/assets/expedia.png";
import avianca from "../../../public/assets/avianca.png";
import gotogate from "../../../public/assets/gotogate.png";
import aeromexico from "../../../public/assets/aeromexico.png";
import lufthansa from "../../../public/assets/lufthansa.png";
import ticketusa from "../../../public/assets/ticketusa.png";
import copa from "../../../public/assets/copa.png";

import styles from "@/components/homepage/HomeBrands.module.css"

export default function HomeBrands() {
    return(
        <section className={styles.home_brands}>
            <article className={`${styles.home_brands_container} padding`}>
                <div className={styles.home_brands_title}>
                    <h1>Seleccionamos los mejores precios</h1>
                </div>
                <div className={styles.infiniteCarousel}>
                    <div className={styles.carouselInner} >
                        <Image src={travelgenio} className={styles.logo} />
                        <Image src={logitravel}className={styles.logo}  />
                        <Image src={iberia} className={styles.logo} />
                        <Image src={opodo} className={styles.logo} />
                        <Image src={edreams} className={styles.logo} />
                        <Image src={expedia} className={styles.logo} />
                        <Image src={travelgenio} className={styles.logo} />
                        <Image src={logitravel} className={styles.logo} />
                        <Image src={iberia} className={styles.logo} />
                        <Image src={opodo} className={styles.logo} />
                        <Image src={edreams} className={styles.logo} />
                        <Image src={expedia} className={styles.logo} />
                        <Image src={travelgenio} className={styles.logo} />
                        <Image src={logitravel} className={styles.logo} />
                        <Image src={iberia} className={styles.logo} />
                        <Image src={opodo} className={styles.logo} />
                        <Image src={edreams} className={styles.logo} />
                        <Image src={expedia} className={styles.logo} />
                    </div>
                    <div className={styles.carouselInner2}>
                        <Image src={avianca} className={styles.logo} />
                        <Image src={gotogate} className={styles.logo} />
                        <Image src={aeromexico} className={styles.logo} />
                        <Image src={lufthansa} className={styles.logo} />
                        <Image src={ticketusa} className={styles.logo} />
                        <Image src={copa} className={styles.logo} />
                        <Image src={avianca} className={styles.logo} />
                        <Image src={gotogate} className={styles.logo} />
                        <Image src={aeromexico} className={styles.logo} />
                        <Image src={lufthansa} className={styles.logo} />
                        <Image src={ticketusa} className={styles.logo} />
                        <Image src={copa} className={styles.logo} />
                        <Image src={avianca} className={styles.logo} />
                        <Image src={gotogate} className={styles.logo} />
                        <Image src={aeromexico} className={styles.logo} />
                        <Image src={lufthansa} className={styles.logo} />
                        <Image src={ticketusa} className={styles.logo} />
                        <Image src={copa} className={styles.logo} />
                    </div>
                </div>
            </article>
        </section>
    )
}