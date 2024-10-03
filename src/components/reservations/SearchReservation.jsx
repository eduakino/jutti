'use client'

import styles from "@/components/reservations/SearchReservation.module.css";
import { useState } from "react";

export default function SearchReservation() {

    const [code, setCode] = useState("");
    const [error, setError] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 3000);
    }

    return(
        <section className={styles.search_reservations_section}>
            <article className={`${styles.search_reservations_container} max-width padding`}>
                <h1>Es momento de encontrar tu reserva</h1>
                <p>Visualiza cada detalle de tus reservas de Jutti</p>
                <form className={styles.search_reservations_form}>
                    <input type="text" placeholder="Ingresa tu código de usuario" value={code} onChange={(e) => setCode(e.target.value)} />
                    <input type="submit" value="Buscar Reservación" onClick={(e) => submitHandler(e)} disabled={code === "" ? true : false} />
                    <span
                        style={{
                            opacity: error ? 1 : 0,
                            bottom: error ? '-75px' : '-50px',
                            transition: 'all ease .3s',
                            scale: error ? 1 : .75
                            }}>Usuario no encontrado!</span>
                </form>
            </article>
        </section>
    )
}