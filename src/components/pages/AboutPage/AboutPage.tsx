import OurActivities from "../../UI/Our Activities/OurActivities"
import OurVolonteers from "../../UI/Our Volonteers/OurVolonteers"
import OurStory from "../../UI/OurStory/OurStory"
import OurTeam from "../../UI/OurTeam/OurTeam"
export default function AboutPage() {
	return (
		<div className='text-slate-50'>
			<h1 className='text-center text-3xl mt-5'>Meet The Team</h1>
			<OurTeam />
			<OurStory />
			<OurActivities />
			<OurVolonteers />
		</div>
	)
}
