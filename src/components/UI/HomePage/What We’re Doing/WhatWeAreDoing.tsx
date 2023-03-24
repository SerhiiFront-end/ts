import { Link } from "react-router-dom"
export default function WhatWeAreDoing() {
	return (
		<div>
			<h1 className='text-center m-10 text-3xl'>What We’re Doing</h1>
			<div className='mb-36 m-auto w-3/5 flex justify-around'>
				<Link to={"/current-projects"} className='w-2/5'>
					<div className='p-8 rounded-2xl border-2 border-black hover:bg-violet-900 hover:ease-in hover:duration-300'>
						<h1 className='text-center text-3xl mb-5'>Projects</h1>
						<p className=''>
							Cosmo is undertaking a range of projects to bring
							the local community together, support our
							environment and improve the welfare of those we work
							with.
						</p>
						<ul className='list-disc'>
							<li>Thornton Allotments</li>
							<li>Tree Planting project</li>
							<li>Supported accommodation</li>
							<li>Social enterprise mentoring</li>
						</ul>
					</div>
				</Link>
				<Link to={"about-basic"} className='w-2/5'>
					<div className='p-8 rounded-2xl border-2 border-black hover:bg-violet-900 hover:ease-in hover:duration-300'>
						<h1 className='text-center text-3xl mb-5'>Events</h1>
						<p className='text-center'>
							We run events throughout the year to bring the
							community together and to make a positive
							contribution to the local area. These are on hold
							during Covid but will be updated soon.
						</p>
						<ul className='list-disc'>
							<li>The Big Hull Clean-up</li>
						</ul>
					</div>
				</Link>
			</div>
		</div>
	)
}
