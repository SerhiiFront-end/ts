import { Link } from "react-router-dom"
import styles from "../HomePage.module.css"
export default function GetInvolved() {
	return (
		<div className='mb-36'>
			<h1 className='text-2xl text-center mb-3 mt-10'>Get Involved</h1>
			<h4 className={styles.involvedTitle}>
				Support our local community and have fun!
			</h4>
			<div className={styles.containers}>
				<div className={styles.container}>
					<Link to={"/volunteer-for-us"}>
						<h3 className={styles.containerTitle}>
							Volunteer with us
						</h3>
						You can volunteer with us to support those facing
						challenges in Hull, including helping people to settle
						into our society, make the most of life in hull and
						contribute to our community.
					</Link>
				</div>
				<div className={styles.container}>
					<Link to={"/donate"}>
						<h3 className={styles.containerTitle}>
							Make a donation
						</h3>
						Your donation could help people to overcome mental
						illness, learn English, build up their job skills,
						volunteer to improve our surroundings and much more.
					</Link>
				</div>
			</div>
		</div>
	)
}
