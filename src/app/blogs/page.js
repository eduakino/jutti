'use client'

import HomeCTA from "@/components/homepage/HomeCTA";
import Image from "next/image";
import styles from "@/app/blogs/page.module.css";
import leftArrow from "../../../public/assets/icon_left_arrow.svg"
import rightArrow from "../../../public/assets/icon_right_arrow.svg"
import placeholder from "../../../public/assets/no_blogs.png"
import { useState } from "react";

export default function Blogs() {

    const [selectedRadio, setSelectedRadio] = useState("recientes")

    return(
        <main className={styles.blogs_main}>
            <section className={styles.blogs_title_section}>
                <article className={styles.blogs_title}>
                    <h1>Pensamientos, historias e ideas</h1>
                    <p>Bienvenido al blog de Jutti</p>
                </article>
            </section>
            <section className={styles.blogs_tabs_section}>
                <article className={styles.blog_tabs}>
                    <input
                        type="radio"
                        className={styles.blog_tabs__radio}
                        name={'blogGroup'}
                        value={'recientes'}
                        checked={selectedRadio === 'recientes'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                        id={'tab1'} />
                    <label for={'tab1'} className={styles.blog_tabs__label}>Recientes</label>
                    <div className={styles.blog_tabs__content}>
                        <Image src={placeholder} width={240} className={styles.placeholder_img}  />
                        <p>Esto es muy vergonzoso pero aun no tenemos blogs</p>
                        <span>Parece que has llegado antes del lanzamiento.</span>
                    </div>
                    <input
                        type="radio"
                        className={styles.blog_tabs__radio}
                        name={'blogGroup'}
                        id={'tab2'}
                        value={'populares'}
                        checked={selectedRadio === 'populares'}
                        onChange={(e) => setSelectedRadio(e.target.value)} />
                    <label for={'tab2'} className={styles.blog_tabs__label}>Populares</label>
                    <div className={styles.blog_tabs__content}>
                        <Image src={placeholder} width={240} className={styles.placeholder_img} />
                        <p>Esto es muy vergonzoso pero aun no tenemos blogs</p>
                        <span>Parece que has llegado antes del lanzamiento..</span>
                    </div>
                    <input
                        type="radio"
                        className={styles.blog_tabs__radio}
                        name={'blogGroup'}
                        id={'tab3'}
                        value={'vistos'}
                        checked={selectedRadio === 'vistos'}
                        onChange={(e) => setSelectedRadio(e.target.value)} />
                    <label for={'tab3'} className={styles.blog_tabs__label}>Más vistos</label>
                    <div className={styles.blog_tabs__content}>
                        <Image src={placeholder} width={240} className={styles.placeholder_img} />
                        <p>Esto es muy vergonzoso pero aun no tenemos blogs</p>
                        <span>Parece que has llegado antes del lanzamiento...</span>
                    </div>
                    <div className={styles.pagination}>
                        <Image src={leftArrow} />
                        <span>1</span>
                        <Image src={rightArrow} />
                    </div>
                </article>
            </section>
            <HomeCTA />
        </main>
    )
}