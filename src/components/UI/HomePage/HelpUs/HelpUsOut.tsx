import { Link } from "react-router-dom"
export default function HelpUsOur() {
	return (
		<div className='mb-16'>
			<h1 className='text-center text-3xl mb-10'>Help us out</h1>
			<p className='text-center mb-10'>
				You can make a huge difference to cosmopolitan communities in
				Hull
				<br /> with just a little of your time or a small donation.
			</p>
			<div className='flex justify-between m-auto w-96'>
				<Link to={"/volunteer-for-us"}>
					<button className='bg-red-900 h-12 w-32'>Volunteer</button>
				</Link>
				<Link to={"/donate"}>
					<button className='bg-red-900 h-12 w-32'>Donate</button>
				</Link>
			</div>
		</div>
	)
}
