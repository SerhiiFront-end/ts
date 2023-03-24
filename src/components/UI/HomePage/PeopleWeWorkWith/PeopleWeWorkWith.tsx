import { Link } from "react-router-dom"
export default function PeopleWeWorkWith() {
	return (
		<div>
			<h1 className='text-center m-10 text-3xl'>People we Work With</h1>
			<div className='mb-36 m-auto w-3/5 flex justify-around'>
				<Link to={"/volunteers-story"} className='w-2/5'>
					<div className='p-8 rounded-2xl border-2 border-black hover:bg-violet-900 hover:ease-in hover:duration-300'>
						<h1 className='text-center text-3xl mb-5'>
							Volunteer Stories
						</h1>
						<p>
							We exist because of our volunteers, and we are proud
							of every one of their stories of development and
							positive contribution.
						</p>
						<ul className='list-disc'>
							<li>Thornton Allotments</li>
							<li>Tree Planting project</li>
							<li>Supported accommodation</li>
							<li>Social enterprise mentoring</li>
						</ul>
					</div>
				</Link>
				<Link to={"our"} className='w-2/5'>
					<div className='p-8 rounded-2xl border-2 border-black hover:bg-violet-900 hover:ease-in hover:duration-300'>
						<h1 className='text-center text-3xl mb-5'>
							Partners and Funders
						</h1>
						<p>
							We couldn’t do what we do without huge support from
							our partners and funders. Thanks for everything
							guys.
						</p>
					</div>
				</Link>
			</div>
		</div>
	)
}
