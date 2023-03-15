import OurActivities from "../UI/AboutPage/Our Activities/OurActivities"
import OurVolonteers from "../UI/AboutPage/Our Volonteers/OurVolonteers"
import OurStory from "../UI/AboutPage/OurStory/OurStory"
import OurTeam from "../UI/AboutPage/OurTeam/OurTeam"
export default function AboutPage() {
	return (
		<div className='text-slate-50 mb-64'>
			<h1 className='text-center text-3xl mt-5'>Meet The Team</h1>
			<OurTeam />
			<OurStory />
			<OurActivities />
			<OurVolonteers />
		</div>
	)
}
