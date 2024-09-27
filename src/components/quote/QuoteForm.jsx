'use client'

import styles from "@/components/quote/QuoteForm.module.css"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"

export default function QuoteForm() {

    const GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycbzX_Knhwz91gIq4GyVot7UxA08KzzXqUEahrbjPeVX77AdyC2W5SLuq2JoNHXi0z8m58A/exec"

    const router = useRouter()

    const formRedirect = () => {
        const form = document.forms['quote-form']

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(GOOGLE_SCRIPT, {method: 'POST', body: new FormData(form)})
            .then(res => console.log(res))
            .then(() => {window.location.reload()})
            .catch(err => console.error('Error: ' + err.message))
        })
    }


    return(
        <section className={styles.quote_section}>
            <form
                name={'quote-form'}
                method={'post'}
                action={GOOGLE_SCRIPT}
                className={styles.quote_form}>
                <div className={styles.table_two_rows}>
                    <input type="text" name="nombre" placeholder="Primer Nombre" className={styles.simple_input} />
                    <input type="text" name="apellido" placeholder="Primer apellido" className={styles.simple_input} />
                </div>
                <div className={styles.table_two_rows}>
                    <input type="email" name="email" placeholder="Correo Electrónico" className={styles.simple_input} />
                    <input type="phone" name="telefono" placeholder="Teléfono (Whatsapp)" className={styles.simple_input} />
                </div>
                <div className={styles.table_three_rows}>
                    <input type="text" name="pais-salida" placeholder="El Salvador" required disabled className={styles.simple_input} />
                    <select name="pais-destino" type="text" required className={`${styles.simple_input} ${styles.select_input}`}>
                        <option value=" ">País destino</option> 
                        <option value="Albania">Albania</option>
                        <option value="Alemania">Alemania</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Antigua y Barbuda">Antigua y Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaiyán">Azerbaiyán</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bélgica">Bélgica</option>
                        <option value="Belice">Belice</option>
                        <option value="Bielorrusia">Bielorrusia</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Canadá">Canadá</option>
                        <option value="Chile">Chile</option>
                        <option value="Chipre">Chipre</option>
                        <option value="Ciudad del Vaticano">Ciudad del Vaticano</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croacia">Croacia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Dinamarca">Dinamarca</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Emiratos Árabes Unidos" hidden="">Emiratos Árabes Unidos</option>
                        <option value="Eslovaquia">Eslovaquia</option>
                        <option value="Eslovenia">Eslovenia</option>
                        <option value="España">España</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Finlandia">Finlandia</option>
                        <option value="Francia">Francia</option>
                        <option value="Grecia">Grecia</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haití">Haití</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hungría" >Hungría</option>
                        <option value="Irlanda">Irlanda</option>
                        <option value="Islandia">Islandia</option>
                        <option value="Italia">Italia</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Letonia">Letonia</option>
                        <option value="Lituania">Lituania</option>
                        <option value="Luxemburgo">Luxemburgo</option>
                        <option value="Macedonia del Norte">Macedonia del Norte</option>
                        <option value="Malta">Malta</option>
                        <option value="México">México</option>
                        <option value="Moldavia">Moldavia</option>
                        <option value="Mónaco">Mónaco</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Noruega">Noruega</option>
                        <option value="Países Bajos">Países Bajos</option>
                        <option value="Panamá">Panamá</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Perú">Perú</option>
                        <option value="Polonia">Polonia</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Reino Unido">Reino Unido</option>
                        <option value="República Checa">República Checa</option>
                        <option value="República Dominicana">República Dominicana</option>
                        <option value="Rumanía">Rumanía</option>
                        <option value="San Marino">San Marino</option>
                        <option value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Suecia">Suecia</option>
                        <option value="Suiza">Suiza</option>
                        <option value="Turquía">Turquía</option>
                        <option value="Ucrania" disabled>Ucrania</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Venezuela">Venezuela</option>
                    </select>
                    <select name="visa" type="text" required className={`${styles.simple_input} ${styles.select_input}`}>
                        <option value=" ">Posees Visa US?</option>
                        <option value="Si">Visa US</option>
                        <option value="No">No poseo Visa</option>
                    </select>
                </div>
                <div className={styles.table_three_rows}>
                    <select name="adultos" type="text" required className={`${styles.simple_input} ${styles.select_input}`}>
                        <option value=" ">Adultos</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="5+">Más de 5</option>
                    </select>
                    <select name="ninos" type="text" required className={`${styles.simple_input} ${styles.select_input}`}>
                        <option value=" ">Niños (2-17)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="5+">Más de 5</option>
                    </select>
                    <select name="bebes" type="text" required className={`${styles.simple_input} ${styles.select_input}`}>
                        <option value=" ">Bebés (0-1)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="5+">Más de 5</option>
                    </select>
                </div>
                <div className={styles.table_two_rows}>
                    <select name="equipaje-mano" type="text" required className={`${styles.simple_input} ${styles.select_input}`}>
                        <option value=" ">Equipaje de mano</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <select name="equipaje" type="text" required className={`${styles.simple_input} ${styles.select_input}`}>
                        <option value=" ">Equipaje en bodega</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className={styles.table_two_rows}>
                    <input type="date" name="fecha-ida" placeholder="Fecha de ida" className={`${styles.simple_input} ${styles.select_date_input}`} />
                    <input type="date" name="fecha-vuelta" placeholder="Fecha de vuelta" className={`${styles.simple_input} ${styles.select_date_input}`} />
                </div>
                <div className={styles.table_two_rows}>
                    <select name="equipaje-especial" type="text" required className={`${styles.simple_input} ${styles.select_input}`}>
                        <option value=" ">Equipaje especial</option>
                        <option value="no">No</option>
                        <option value="Equipo deportivo">Equipos deportivos</option>
                        <option value="Instrumentos musicales">Instrumentos musicales</option>
                        <option value="Silla de ruedas">Silla de ruedas</option>
                        <option value="Equipaje grande">Equipaje voluminoso y/o pesado</option>
                    </select>
                    <select name="estadia" type="text" required className={`${styles.simple_input} ${styles.select_input}`}>
                        <option value=" ">Quieres incluir estadía?</option>
                        <option value="Airbnb">Vía Airbnb</option>
                        <option value="Hotet promedio">Hotel promedio</option>
                        <option value="Hotel de lujo">Hotel de lujo</option>
                        <option value="No">No incluir en la cotización</option>
                    </select>
                </div>
                <div className={styles.table_one_rows}>
                    <textarea
                        name="texto"
                        className={styles.area_input}
                        rows={5}
                        placeholder="Algún comentario extra? Deseas ir a algún aeropuerto en específico?" />
                </div>

                <div className={styles.divider} />

                <div className={styles.terms_ok}>
                    <span>Al enviar tu cotización, automáticamente estás aceptando nuestros <a href="#" target="_blank">Términos y condiciones</a></span>
                </div>

                <input type={'submit'} value={'Solicitar cotización'} className={styles.submit_btn} onClick={() => formRedirect()} />
            </form>
        </section>
    )
}