import { Link } from "react-router-dom"
import OurVisionImage from "./OurVision.webp"
export default function OurVision() {
	return (
		<div className='mb-64'>
			<h1 className='text-2xl text-center mb-8'>Our Vision</h1>
			<div className='flex w-3/5 m-auto justify-around'>
				<img
					src={OurVisionImage}
					alt='Help for people'
					className='w-2/5'
				/>
				<p className='underline text-center text-3xl mt-5'>
					<Link to='https://www.ricsfirms.com/office/011077/Edward-Watson-Associates#Contact'>
						Improving peoples' lives
					</Link>
				</p>
			</div>
		</div>
	)
}
