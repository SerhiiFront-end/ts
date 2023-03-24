import { Link } from "react-router-dom"
import OurPhoto from "./Image.webp"
export default function AboutUs() {
	return (
		<div
			className='mb-36 w-4/5 p-16 m-auto ml-48'
			style={{
				background: `url(${OurPhoto}) no-repeat center`,
				backgroundSize: "contain",
				height: "435px",
				width: "1200px",
				// marginLeft: "10rem",
			}}
		>
			<div className='bg-slate-400 mr-16 w-96 p-6'>
				<h1 className='text-center text-3xl mb-4'>About Us</h1>
				<p>
					Cosmo helps disadvantaged people across Hull develop skills,
					self-confidence and more through coaching and social
					enterprise projects. This includes people with poor mental
					health and those who have emigrated here and are held back
					by language or cultural barriers.
				</p>
				<Link to={"/about"}>
					<button className='block m-auto bg-red-900 w-2/5 mt-5 p-2'>
						Learn More
					</button>
				</Link>
			</div>
		</div>
	)
}
