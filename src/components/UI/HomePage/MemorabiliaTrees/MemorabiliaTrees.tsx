import { Link } from "react-router-dom"
import Img from "./MemorabiliaTrees.webp"
export default function MemorabiliaTrees() {
	return (
		<div className='w-3/5 m-auto mb-20'>
			<div
				style={{
					background: `url(${Img}) no-repeat center`,
					backgroundSize: "contain",
					height: "414px",
					width: "709px",
				}}
				className='pt-24'
			>
				<div className='bg-slate-400 p-10 w-96 ml-96 text-black'>
					<h1 className='text-3xl text-center'>
						<b>Memorabilia Trees</b>
					</h1>
					<p>
						If you would like to commemorate a loved one in a way
						that will help the planet for many years to come, you
						can buy and plant a tree with us in Butterfly Park,
						Hull.
					</p>
					<Link to={"/treeProject"} className='text-center'>
						<button className='bg-red-900 w-3/5 mt-5 block m-auto p-4 text-white'>
							Take a look
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
