import Alex from "../UI/VolonteersPage/Alex.webp"
import Jelene from "../UI/VolonteersPage/Jelene.webp"
import Valentina from "../UI/VolonteersPage/Valentina.webp"
import Volonteer from "../UI/VolonteersPage/Volonteer"
export default function VolunteersStory() {
	const Volonteers = [
		{
			ImagePositiong: "LEFT",
			photo: Alex,
			defaultText:
				"Alex is one of our oldest volunteers. He mainly helps us in the allotment and in Butterfly Park. He had a brain injury in 2010 and since he was not able to work. In Cosmo, he made good friends and feels like part of the community. Cosmo helped him to find himself in society.",
			name: "Alex",
		},
		{
			ImagePositiong: "RIGHT",
			photo: Valentina,
			defaultText:
				"I joined Cosmo as a volunteer when my son became a beneficiary of Cosmo in 2017. I am grateful for them as they transfered the life of my son from nightmare to stable happy life. My son Alex had a brain injury in 2010 and since became disabled. He had no income and I was supporting him financially from my pension. Cosmo helped him to get his disability and housing benefits sorted out. If it wasn't for Cosmo he would be still angry man with issues left with no support. He did not want to engage with other organisations as he had trust issues. Cosmo was patient and found a way to gain his trust and convince him to attend appointments with Citizens advice Bureau where they appealed his decision at the court level. I attend Cosmo events and grow seedlings to grow at the allotment. I am over 70 years old and have health issues but I don't worry for Alex if something does happen to me I know that Alex will be looked after by Cosmo as we are all a big family. ",
			name: "Valentina",
		},
		{
			ImagePositiong: "LEFT",
			photo: Jelene,
			defaultText:
				"I have been going through a lot of issues recently and Cosmo supposed me emotionally. At most of the time I had no one apart Cosmo who did think about my welfare. They support me emotionally and mentally. I am a beneficiary of Cosmo since 2017. I received support from them on a weekly basis. I started receiving support from them when I was in the middle of a hardest points in my life. I can always rely on Cosmo if I need a shoulder to cry on, some one to protect my rights and cheer me up. They provided me with fresh vegetables for over 6 months. I got delivered free cooked food to which I am grateful to them. They also fixed my bike and took me sea side or country side to cycle. I have a great time with Cosmo. I don't feel its an organisation they are my true friends who are there for me when I need them.",
			name: "Jelena G",
		},
	]
	return (
		<div className='w-3/5 text-white m-auto mt-44'>
			<h1 className='text-3xl text-center'>
				<b>Volunteer Stories</b>
			</h1>
			<p className='text-center w-1/2 m-auto mt-16'>
				We exist because of our volunteers, and we are proud of every
				one of their stories of development and positive contribution.
				Read some of these stories below to learn more.
			</p>
			{Volonteers.map((el) => (
				<Volonteer
					Img={el.photo}
					defaultText={el.defaultText}
					imagePosition={el.ImagePositiong}
					name={el.name}
				/>
			))}
		</div>
	)
}
