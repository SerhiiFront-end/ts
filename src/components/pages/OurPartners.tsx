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
			partnerImage: require("../UI/PartnerCompany/Rooted.png"),
			description:
				"Rooted in Hull promotes urban farming in our city. We are applying for funding to further our mutual goals together in the near future.",
		},
		{
			companyName: "The Big Lottery Fund",
			partnerImage: require("../UI/PartnerCompany/Goodwin.png"),
			description:
				"Goodwin provide a wide and valuable range of help, including free venues, advice and general support for our developing organisation.",
		},
		{
			companyName: "Humber Learning Consortium",
			partnerImage: require("../UI/PartnerCompany/HullCiteCouncil.png"),
			description:
				"Hull City Council partner with and support us on many of our local projects. Most importantly, they gave us land and financial support to plant trees at Butterfly Park.",
		},
		{
			companyName: "Community Led Homes",
			partnerImage: require("../UI/PartnerCompany/HullCiteCouncil.png"),
			description:
				"Hull City Council partner with and support us on many of our local projects. Most importantly, they gave us land and financial support to plant trees at Butterfly Park.",
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
			<div className='inline-flex flex-wrap justify-center mt-24'>
				{Partners.map((el) => (
					<Partner
						companyName={el.companyName}
						description={el.description}
						partnerImage={el.partnerImage}
					/>
				))}
			</div>
		</div>
	)
}
