import CommunityInterest from "./Other/CommunityInterest"
import FindUs from "./Other/FindUs"
import Links from "./Other/Links"
import SocialMedia from "./Other/SocialMedia"

export default function Footer() {
	return (
		<div className='bg-slate-700 mt-72'>
			<div className='text-slate-50 w-4/5 m-auto justify-between flex p-9'>
				<FindUs />
				<Links />
				<CommunityInterest />
				<SocialMedia />
			</div>
		</div>
	)
}
