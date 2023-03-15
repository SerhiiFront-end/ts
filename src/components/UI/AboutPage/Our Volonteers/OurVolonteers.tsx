import { Link } from "react-router-dom"
import Image from "./Volonteers.webp"

export default function OurVolonteers() {
	return (
		<div className='w-3/5 m-auto flex mt-24'>
			<img src={Image} alt='Our Voloteers' className='w-1/2' />
			<div className='ml-9'>
				<h1 className='mb-5 text-3xl text-emerald-600 mt-9 ml-16'>
					Our Volonteers
				</h1>
				<p className='mb-5'>
					We exist because of our volunteers, and we are proud of
					every one of their stories of development and positive
					contribution. Thanks guys!
				</p>
				<p>
					You can learn more about our volunteers, especially Alex,
					Valentina, Zhanna and Vladim, on our Volunteer Stories page.
				</p>
				<Link to={"/volunteers-story"}>
					<button className='bg-cyan-700 ml-9 mt-7 w-1/2 h-9 hover:bg-red-400 ease-in-out duration-500'>
						Volonteer Stories
					</button>
				</Link>
			</div>
		</div>
	)
}
