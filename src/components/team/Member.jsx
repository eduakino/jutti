import Image from "next/image";
import styles from "@/components/team/Member.module.css"

export default function Member({photo, name, position}) {
    return(
        <article className={styles.member_card}>
            <Image src={photo} className={styles.member_photo} />
            <h3>{name}</h3>
            <span>{position}</span>
        </article>
    )
}