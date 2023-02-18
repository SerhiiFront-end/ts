import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'
import HowWeHelpImage from './HowWeHelp.webp'

export default function HomePage() {
  return (
	<div className={styles.HomePageContent}>
		<h2 className={styles.missionTitle}>Our Mission: Cosmo CIC will put people on the life skills ladder through support, building confidence, integration, opportunities and connections, in Hull.</h2>
		<img className={styles.firstImageHomePage} src={HowWeHelpImage} alt="How we help?" />
		<h1 className={styles.involvedTitle}>Get Involved</h1>
		<h4 className={styles.involvedTitle}>Support our local community and have fun!</h4>
		<div className={styles.containers}>
			<div className={styles.container}>
				<Link to={'/volunteer-for-us'}>
					<h3 className={styles.containerTitle}>Volunteer with us</h3>
					You can volunteer with us to support those facing challenges in Hull, including helping people to settle into our society, make the most of life in hull and contribute to our community.
				</Link>
			</div>
			<div className={styles.container}>
				<Link to={'/donate'}>
					<h3 className={styles.containerTitle}>Make a donation</h3>
					Your donation could help people to overcome mental illness, learn English, build up their job skills, volunteer to improve our surroundings and much more.
				</Link>
			</div>
		</div>
	</div>
  )
}