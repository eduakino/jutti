'use client'

import Image from "next/image";
import styles from "@/components/Header.module.css";
import whatsappIcon from "../../public/assets/logo_whatsapp.svg";
import whatsappIconW from "../../public/assets/wa_icon_white.svg";
import mainLogo from "../../public/assets/jutti_logo.svg";

import hamburger from "../../public/assets/icon_hamburger_menu.svg"
import close from "../../public/assets/icon_close.svg"
import { useState } from "react";

export default function Header() {

    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(true)
    }

    const closeMenu = () => {
        setOpen(false)
    }

    return(
        <header className={styles.main_header}>
            <div className={styles.main_header_container}>
                <a href="/" >
                    <Image src={mainLogo} alt="Jutti logo" className={styles.brand_logo}  />
                </a>

                <nav className={styles.main_header_navigation}>
                    <a href="/" className="bodyMedium">Descubre</a>
                    <a href="/blogs" className="bodyMedium">Blog</a>
                    <a href="/quote" className="bodyMedium">Cotiza</a>
                    <a href="/reservations" className="bodyMedium">Reservas</a>
                </nav>

                <a target="_blank" href="https://api.whatsapp.com/send?phone=50377938349" className={styles.main_header_button}>
                    <Image src={whatsappIcon} className={styles.wa_icon} alt="Whatsapp logo" />
                    <span className="bodyMedium">Whatsapp</span>
                </a>

                <button className={styles.hamburger_icon} onClick={openMenu}>
                    <Image src={hamburger} />
                </button>
            </div>
            <section className={styles.mobile_menu} style={{display: open ? 'flex' : 'none'}}>
                <div className={styles.mm_header}>
                    <Image src={mainLogo} alt="Jutti logo" className={styles.brand_logo}  />
                    <button className={styles.close_icon} onClick={closeMenu}>
                        <Image src={close} className={styles.close_icon_i} width={16} />
                    </button>
                </div>
    
                <nav className={styles.main_header_navigation_mobile}>
                    <a href="/" className="semibold">Descubre</a>
                    <div className={styles.divider} />
                    <a href="/blogs" className="semibold">Blog</a>
                    <div className={styles.divider} />
                    <a href="/quote" className="semibold">Cotiza</a>
                    <div className={styles.divider} />
                    <a href="/reservations" className="semibold">Reservas</a>
                    <div className={styles.divider} />
                    <a href="/team" className="semibold">Equipo</a>
                    <div className={styles.divider} />
                    <a href="/" className="semibold">Términos y Condiciones</a>
                </nav>

                <div className={styles.wa_container}>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=50377938349" className={styles.wa_btn}>
                        <Image src={whatsappIconW} className={styles.wa_icon_w} alt="Whatsapp logo" />
                        <span>Whatsapp</span>
                    </a>
                </div>
            </section>
        </header>
    )
}
