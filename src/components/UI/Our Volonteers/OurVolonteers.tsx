import Image from "./Volonteers.webp"

export default function OurVolonteers() {
	return (
		<div className='w-1/2 m-auto flex mt-24'>
			<img src={Image} alt='Our Voloteers' className='w-1/2' />
			<div>
				<h1 className='text-3xl text-emerald-600 mt-9 ml-16'>
					Our Volonteers
				</h1>
			</div>
		</div>
	)
}
