import { Link } from "react-router-dom"
import Partner from "../UI/PartnerCompany/Partner"
export default function OurPartners() {
	const Partners = [
		{
			companyName: "Rooted in Hull",
			partnerImage: require("../UI/PartnerCompany/Rooted.png"),
			description:
				"Rooted in Hull promotes urban farming in our city. We are applying for funding to further our mutual goals together in the near future.",
		},
		{
			companyName: "Goodwin Development Trust",
			partnerImage: require("../UI/PartnerCompany/Goodwin.png"),
			description:
				"Goodwin provide a wide and valuable range of help, including free venues, advice and general support for our developing organisation.",
		},
		{
			companyName: "Hull City Council",
			partnerImage: require("../UI/PartnerCompany/HullCiteCouncil.png"),
			description:
				"Hull City Council partner with and support us on many of our local projects. Most importantly, they gave us land and financial support to plant trees at Butterfly Park.",
		},
		{
			companyName: "Mires Beck Nursery",
			partnerImage: require("../UI/PartnerCompany/MiresBack.png"),
			description:
				"Mires Beck Nursery provide us with the saplings from which our trees grow. Their charitable organisation deserves many thanks.",
		},
		{
			companyName: "The Big Lottery Fund",
			partnerImage: require("../UI/PartnerCompany/LotteryFunded.png"),
			description:
				"The Lottery provided us with funding to support our loneliness project and to help our beneficiaries get through the challenges of Covid.",
		},
		{
			companyName: "Humber Learning Consortium",
			partnerImage: require("../UI/PartnerCompany/HLC.png"),
			description:
				"We work with this group to get people into learning and to help our beneficiaries improve their prospects through education.",
		},
		{
			companyName: "Community Led Homes",
			partnerImage: require("../UI/PartnerCompany/LedHomes.png"),
			description:
				"Community Led Homes is helping us to register as social landlords by providing funding and advice.",
		},
	]
	return (
		<div className='text-white m-4'>
			<div className='w-1/2 m-auto'>
				<h1 className='text-3xl mt-8'>Our partners and funders</h1>
				<p>
					We have partner organisations we work with such as our local
					authority Hull City Council, Goodwin Development Trust,
					Rooted in Hull and Thornton Allotment Association.
				</p>
			</div>
			<div className='flex flex-wrap justify-center mt-24'>
				{Partners.map((el) => (
					<Partner
						companyName={el.companyName}
						description={el.description}
						partnerImage={el.partnerImage}
					/>
				))}
			</div>
			<div className='w-1/3 m-auto mt-36 text-center'>
				<h1 className='text-3xl w-3/4 m-auto'>
					Enquire about becoming a partner or funder
				</h1>
				<p className='mt-5'>
					We value our funders and partners massively and helping us
					out can be incredibly rewarding. If you want to enquire
					about becoming a funder or partner, please get in touch.
				</p>
				<Link to={"/contact"}>
					<button className='mt-5 bg-orange-300 w-36 h-10'>
						Enquire
					</button>
				</Link>
			</div>
		</div>
	)
}
