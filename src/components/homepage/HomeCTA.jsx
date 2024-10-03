import styles from "@/components/homepage/HomeCTA.module.css";
import Image from "next/image";
import ctaImg from "../../../public/assets/photo_camper.png";

export default function HomeCTA() {
    return(
        <section className={styles.home_cta}>
            <article className={`${styles.home_cta_container} max-width padding`}>
                <div className={styles.home_cta_card}>
                    <div className={styles.cta_img_container}>
                        <Image src={ctaImg} className={styles.cta_img} />
                    </div>
                    <div className={styles.cta_content}>
                        <h2>¿Listo para planificar tu próximo viaje?</h2>
                        <p>Recibe tu cotización directamente en WhatsApp</p>
                        <a href="/quote">Cotiza ahora</a>
                    </div>
                </div>
            </article>
        </section>
    )
}