'use client'

import Image from "next/image";
import styles from "@/components/homepage/WAFixed.module.css";
import waIcon from "../../../public/assets/logo_whatsapp.svg"
import closeIcon from "../../../public/assets/icon_close.svg"
import { useState } from "react";

export default function WAFixed() {

    const [openWa, setOpenWa] = useState(true);

    const hideWa = () => {setOpenWa(false)};

    return(
        <section
            className={styles.home_wa}
            style={{
                bottom: openWa ? 0 : '-300px'
            }}>
            <article className={styles.wa_cont}>
                <div className={styles.wa_btn}>
                    <a href={'https://api.whatsapp.com/send?phone=50377938349'} target={'_blank'}><Image src={waIcon} /> Whatsapp</a>
                    <button onClick={hideWa}><Image src={closeIcon} /></button>
                </div>
            </article>
        </section>
    )
}