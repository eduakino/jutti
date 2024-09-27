import Image from "next/image";
import styles from "@/components/homepage/HomeHero.module.css";

export default function HomeHero({logos, title, subtitle}) {
    return(
        <section className={styles.home_hero}>
            <article className={styles.home_hero_container}>
                <div className={styles.home_hero_logos}>
                    {logos && logos.map((logo, i) => (
                        <Image key={i} src={logo.img} alt={logo.name} className={styles.logos} />
                    ))}
                </div>

                <div className={styles.home_hero_text}>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </article>
        </section>
    )
}