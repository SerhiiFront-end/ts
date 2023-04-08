import { Link } from "react-router-dom"
export default function SiteMap() {
	return (
		<div className='text-white p-16 m-auto w-3/5'>
			<ul className='list-disc'>
				<li>
					About us
					<ul>
						<Link to={"/about"}>
							<li className='underline ml-6'>Our Story</li>
						</Link>
						<Link to={"/contact"}>
							<li className='underline ml-6'>Contact us</li>
						</Link>
					</ul>
				</li>
				<li>
					Our projects
					<ul>
						<Link to={"/aboutProject"}>
							<li className='underline ml-6'>Past projects</li>
						</Link>
						<Link to={"/aboutProject"}>
							<li className='underline ml-6'>Current projects</li>
						</Link>
						<Link to={"/aboutProject"}>
							<li className='underline ml-6'>Future Projects</li>
						</Link>
					</ul>
				</li>
				<li>
					Events
					<ul>
						<Link to={"/events"}>
							<li className='underline ml-6'>Past events</li>
						</Link>
						<Link to={"/events"}>
							<li className='underline ml-6'>Future events</li>
						</Link>
					</ul>
				</li>
				<li>
					Get involved
					<ul>
						<Link to={"/"}>
							<li className='underline ml-6'>Give us feedback</li>
						</Link>
						<Link to={"/volunteer-for-us"}>
							<li className='underline ml-6'>Volunteer for us</li>
						</Link>
						<Link to={"/our"}>
							<li className='underline ml-6'>
								Our partners and funders
							</li>
						</Link>
					</ul>
				</li>
			</ul>
		</div>
	)
}
