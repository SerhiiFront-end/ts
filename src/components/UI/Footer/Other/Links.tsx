import { Link } from "react-router-dom"
export default function Links() {
	return (
		<div>
			<h1 className='text-2xl'>Links</h1>
			<ul className='list-disc underline'>
				<li>
					<Link to={"/sitemap"}>Sitemap</Link>
				</li>
				<li>
					<Link to={""}>Accessibility</Link>
				</li>
				<li>
					<Link to={""}>Terms & Conditions</Link>
				</li>
				<li>
					<Link to={""}>Privacy Policy</Link>
				</li>
			</ul>
		</div>
	)
}
