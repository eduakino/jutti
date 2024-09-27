import styles from "@/components/homepage/FAQ.module.css"
import downArrow from "../../../public/assets/icon_down_arrow.svg"
import Image from "next/image"

export default function FAQ() {
    return(
        <section className={styles.faq_section}>
            <article className={styles.faq_container}>
                <h1>Preguntas Frecuentes</h1>
                <div className={styles.faq_accordion}>
                    <details>
                        <summary><span>¿Se pueden hacer cambios en mi reserva?</span><Image src={downArrow} className={styles.details_arrow} /></summary>
                        <p>Dado que se buscan los precios más bajos para boletos de avión y se opta por clase turista en la mayoria de reservas, normalmente los billetes <b>no pueden modificarse ni reembolsarse.</b> Puedes ver las reglas tarifarias al consultar las condiciones del proveedor de viaje durante el proceso de reserva. Además, la mayoría de las compañías aéreas se reserva el derecho de hacer cambios de horarios y de cancelar reservas confirmadas. <b>Jutti, en tanto que solamente funciona como intermediario, no es responsable de dichos cambios en horarios o cancelaciones.</b></p>
                    </details>
                    <details>
                        <summary><span>¿Se entregan físicamente los boletos?</span><Image src={downArrow} className={styles.details_arrow} /></summary>
                        <p>Jutti te enviará un e-mail o whatsapp de confirmación con el número de referencia de tu reserva, que sirve como recibo de tu billete electrónico. NO recibirás ningún billete físico para mostrar en el aeropuerto o estación. <b>En conclusión, todas las reservas y billetes se confirmarán por correo electrónico o whatsapp y no recibirá documentación de confirmación física.</b></p>
                    </details>
                    <details>
                        <summary><span>¿Puedo seleccionar un asiento en específico?</span><Image src={downArrow} className={styles.details_arrow} /></summary>
                        <p>Te recomendamos que notifiques en tu cotización (ya que la mayoria de vuelos son para clase turista en el caso boletos de avión) si tienes interés por un asiento en particular y hacerte efectivo el cobro. Sin embargo <b>Jutti no tiene ningún control en la asignación de asientos, ni siquiera cuando se hace una reserva previa con la compañía aérea, de bus o tren, y no puede garantizar que haya asientos específicos a la salida del viaje.</b></p>
                    </details>
                </div>
            </article>
        </section>
    )
}