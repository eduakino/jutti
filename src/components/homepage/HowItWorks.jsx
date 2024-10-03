'use client'

import Image from "next/image";
import styles from "@/components/homepage/HowItWorks.module.css";

import recipe from "../../../public/assets/photo_recipe.png";
import keyboard from "../../../public/assets/photo_keyboard.png";
import plusIcon from "../../../public/assets/icon_cross_noborder.svg";
import { useState } from "react";

export default function HowItWorks() {

    const [displayInfo, setDisplayInfo] = useState(false);

    const displayInfoHandlerOff = () => {setDisplayInfo(false)}
    const displayInfoHandlerOn = () => {setDisplayInfo(true)}

    return(
        <section className={styles.howItWorks}>
            <article className={`${styles.howItWorks_container} max-width padding`}>
                <h1>¿Cómo funciona?</h1>
                <div className={styles.howItWorks_cards}>
                    <div className={styles.howItWorks_first_cards}>
                        <div>
                            <h2>Cotiza tus boletos gratis</h2>
                        </div>
                        <div>
                            <h2>Recibe pdf de tu cotización</h2>
                            <Image src={recipe} className={styles.recipe_photo} alt={'Recipe Image'} />
                        </div>
                    </div>

                    {displayInfo
                    ? (
                    <div className={styles.howItWorks_last_cards_on}>
                        <h4 className="bodyMedium">Asistencia en todo sentido</h4>
                        <p>Si es primera vez que viajas y no sabes nada sobre reservación de boletos de avión, estadías en hotel o airbnb, check-in y demás.<br/><br/>Nosotros te brindamos asistencia para lo que necesites.<br/><br/>Si ya eres un viajero experimentado, complementamos tu experiencia de viaje ayudandote con todo lo necesario en reservas y gestón de tu viaje.</p>
                        <button onClick={() => displayInfoHandlerOff()} style={{transform: 'rotate(45deg)'}}><Image src={plusIcon} /></button>
                    </div>
                    ) : (
                    <div className={styles.howItWorks_last_cards}>
                        <h2>Guía y asistencia total de tu viaje</h2>
                        <Image style={{width: '100%'}} src={keyboard} className={styles.howItWorks_last_cards_photo} alt={'Keyboard Image'} />
                        <button onClick={() => displayInfoHandlerOn()} ><Image src={plusIcon} /></button>
                    </div>
                    )}
                </div>
            </article>
        </section>
    )
}