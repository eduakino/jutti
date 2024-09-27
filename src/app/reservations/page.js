import HomeCTA from "@/components/homepage/HomeCTA";
import SearchReservation from "@/components/reservations/SearchReservation";
import styles from "@/app/reservations/page.module.css";

export default function Reservations() {
    return(
        <main className={styles.main}>
            <SearchReservation />
            <HomeCTA />
        </main>
    )
}