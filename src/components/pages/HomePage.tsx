import AboutUs from "../UI/HomePage/AboutUs/AboutUs"
import GetInvolved from "../UI/HomePage/GetInvolved/GetInvolved"
import HelpUs from "../UI/HomePage/HelpUs/HelpUsOut"
import HowWeHelp from "../UI/HomePage/HowWeHelp/HowWeHelp"
import MemorabiliaTrees from "../UI/HomePage/MemorabiliaTrees/MemorabiliaTrees"
import OurMission from "../UI/HomePage/OurMission/OurMission"
import OurVision from "../UI/HomePage/OurVision/OurVision"
import PeopleWeWorkWith from "../UI/HomePage/PeopleWeWorkWith/PeopleWeWorkWith"
import WhatWeAre from "../UI/HomePage/What We’re Doing/WhatWeAreDoing"
export default function HomePage() {
	return (
		<div className='px-1 py-14 text-white'>
			<OurMission />
			<HowWeHelp />
			<OurVision />
			<GetInvolved />
			<MemorabiliaTrees />
			<WhatWeAre />
			<AboutUs />
			<PeopleWeWorkWith />
			<HelpUs />
		</div>
	)
}
