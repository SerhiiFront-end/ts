import PartnerTypes from "./Partner.types"
export default function Partner(props: PartnerTypes) {
	return (
		<div className='text-center w-1/4 m-4'>
			<img
				src={props.partnerImage}
				alt={props.companyName}
				className='m-auto h-36'
			/>
			<h1 className='text-2xl tracking-wider uppercase mt-6'>
				{props.companyName}
			</h1>
			<p className='w-2/3 m-auto mt-6'>{props.description}</p>
		</div>
	)
}
