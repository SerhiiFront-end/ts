import styles from "../HomePage.module.css"

export default function HowWeHelp() {
	return (
		<div className={styles.firstImageHomePage}>
			<h1 className={styles.involvedTitle}>How we help</h1>
			<div className={styles.firstImageLists}>
				<div className={styles.firstImageHomePageText}>
					<ul className={styles.listOnFirstScreen}>
						<li>Productive outdoor projects</li>
						<li>Teaching and mentoring</li>
						<li>Day-to-day assistance (finance, health etc.)</li>
					</ul>
				</div>
				<div className={styles.firstImageHomePageText}>
					<ul className={styles.listOnFirstScreen}>
						<li>Social events</li>
						<li>Building communities</li>
						<li>Social enterprises</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
