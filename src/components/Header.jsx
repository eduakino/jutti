'use client'

import Image from "next/image";
import styles from "@/components/Header.module.css";
import whatsappIcon from "../../public/assets/logo_whatsapp.svg";
import mainLogo from "../../public/assets/Jutti_logo.svg";

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
                <button className={styles.close_icon} onClick={closeMenu}>
                    <Image src={close} />
                </button>

                <nav className={styles.main_header_navigation_mobile}>
                    <a href="/" className="bodyMedium">Descubre</a>
                    <a href="/blogs" className="bodyMedium">Blog</a>
                    <a href="/quote" className="bodyMedium">Cotiza</a>
                    <a href="/reservations" className="bodyMedium">Reservas</a>
                </nav>
            </section>
        </header>
    )
}