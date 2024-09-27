import styles from "@/app/team/page.module.css"
import HomeCTA from "@/components/homepage/HomeCTA";
import Leadership from "@/components/team/Leadership";

import eduardo from "../../../public/assets/photo_founder.png";
import jonathan from "../../../public/assets/photo_co_founder_1.png";
import salvador from "../../../public/assets/photo_co_founder_2.png";
import esther from "../../../public/assets/photo_marketing.png";

const members = [
  {
    photo: eduardo,
    name: 'Eduardo Aquino',
    position: 'CEO & Founder'
  },
  {
    photo: jonathan,
    name: 'Jonathan Baldizón',
    position: 'Co-Founder'
  },
  {
    photo: salvador,
    name: 'Salvador Miranda',
    position: 'Co-Founder'
  },
  {
    photo: esther,
    name: 'Esther Hernández',
    position: 'Marketing & Operations'
  }
]

export default function Team() {
    return (
      <main className={styles.team}>
        <Leadership members={members} />
        <HomeCTA />
      </main>
    );
  }