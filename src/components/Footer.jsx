import Image from "next/image";
import styles from "@/components/Footer.module.css";

import tiktokIcon from "../../public/assets/logo_tiktok.svg";
import instagramIcon from "../../public/assets/logo_instagram.svg";
import threadsIcon from "../../public/assets/logo_threads.svg";
import facebookIcon from "../../public/assets/logo_facebook.svg";
import linkedinIcon from "../../public/assets/logo_linkedin.svg";

export default function Footer() {
    return(
        <footer className={styles.main_footer}>
            <div className={styles.main_footer_container}>
                <ul className={styles.main_footer_links}>
                    <li className="link">Jutti, 2024</li>
                    <li className="link no-action">Términos y condiciones</li>
                    <li className="link"><a href="/team">Equipo</a></li>
                    <li className="link">God First</li>
                </ul>

                <ul className={styles.main_footer_media}>
                    <li><a href="https://www.tiktok.com/@juttitravels" target="_blank"><Image src={tiktokIcon} /></a></li>
                    <li><a href="https://www.instagram.com/juttitravels/" target="_blank"><Image src={instagramIcon} /></a></li>
                    <li><a href="https://www.threads.net/@juttitravels" target="_blank"><Image src={threadsIcon} /></a></li>
                    <li><a href="https://www.facebook.com/juttitravels" target="_blank"><Image src={facebookIcon} /></a></li>
                    <li><a href="https://www.linkedin.com/company/juttitravels" target="_blank"><Image src={linkedinIcon} /></a></li>
                </ul>
            </div>
        </footer>
    )
}