import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
	<div className={styles.HomePageContent}>
		<h1 className={styles.involvedTitle}>Get Involved</h1>
		<h4 className={styles.involvedTitle}>Support our local community and have fun!</h4>
		<div className={styles.containers}>
			<div className={styles.container}>
				<Link to={'/volunteer-for-us'}>
					<h2 className={styles.containerTitle}>Volunteer with us</h2>
					You can volunteer with us to support those facing challenges in Hull, including helping people to settle into our society, make the most of life in hull and contribute to our community.
				</Link>
			</div>
			<div className={styles.container}>
				<Link to={'/donate'}>
					<h2 className={styles.containerTitle}>Make a donation</h2>
					Your donation could help people to overcome mental illness, learn English, build up their job skills, volunteer to improve our surroundings and much more.
				</Link>
			</div>
		</div>
	</div>
  )
}