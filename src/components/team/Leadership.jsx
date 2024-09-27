import Member from "./Member";

import styles from "@/components/team/Leadership.module.css"

export default function Leadership({members}) {
    return(
        <section className={styles.leadership_section}>
            <article className={styles.Leadership_container}>
                <div className={styles.Leadership_title}>
                    <h1>Jutti Leadership</h1>
                    <p>Conoce quienes planean y gestionan tus viajes</p>
                </div>
                <div className={styles.Leadership_members}>
                    {members && members.map((member, i) => (
                        <Member key={i} photo={member.photo} name={member.name} position={member.position} />
                    ))}
                </div>
            </article>
        </section>
    )
}