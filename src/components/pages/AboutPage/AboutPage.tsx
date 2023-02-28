import Person from '../../UI/Persons/PersonDetails'
import styles from './AboutPage.module.css'
export default function AboutPage() {
  return (
    <div>
        <h1 className={styles.AboutPageTextCenter}>Meet The Team</h1>
        <Person/>
        {/* <p className="text-3xl font-bold underline text-red-500">
            Edit <code>src/App.js</code> and save to reload.
        </p> */}
    </div>
  )
}
