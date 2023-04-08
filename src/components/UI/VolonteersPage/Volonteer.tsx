interface Volonteers {
	Img?: string
	defaultText: string
	imagePosition: string
	name: string
}
export default function Volonteer(props: Volonteers) {
	return (
		<div className='mt-44 flex justify-around'>
			{props.imagePosition === "LEFT" ? (
				<img
					src={props.Img}
					alt={props.name}
					className='max-h-96 max-w-lg'
				/>
			) : null}
			<div className='w-3/5 m-auto mx-7'>
				<h1 className='text-center text-3xl'>
					<b>{props.name}</b>
				</h1>
				<p className='mt-5'>{props.defaultText}</p>
			</div>
			{props.imagePosition === "RIGHT" ? (
				<img
					src={props.Img}
					alt={props.name}
					className='max-h-96 max-w-lg'
				/>
			) : null}
		</div>
	)
}
