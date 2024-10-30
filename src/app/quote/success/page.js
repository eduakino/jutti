import styles from "@/app/quote/success/page.module.css"
import Image from "next/image"

import checked from "../../../../public/assets/check_icon.svg"

export default function Success() {
    return(
        <section className={styles.success}>
            <article className={styles.success_block}>
                <Image src={checked} className={styles.success_check} />
                <div className={styles.success_text}>
                    <h1>Tus datos han sido enviados con éxito!</h1>
                    <h3>Te notificaremos por medio de Whatsapp cuando tengamos tu cotización.</h3>
                </div>
                <a className={styles.success_btn} href="/">Regresar a inicio</a>
            </article>
        </section>
    )
};