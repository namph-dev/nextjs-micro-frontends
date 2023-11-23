
import Image from 'next/image'
import styles from '../styles/Mario.module.css'

const Mario = () => {
  return (
    <main className={styles.main}>
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
        alt="Mario"
        width={240}
        height={413}
      />
      <h1 className={styles.title}>
        G'day! I'm Mario
      </h1>
    </main>
  )
}

export default Mario
