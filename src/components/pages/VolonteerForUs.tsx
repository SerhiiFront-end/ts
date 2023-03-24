import axios from "axios"
import React from "react"
const clearData = {
	name: "",
	surname: "",
	email: "",
	telephone: "",
	age: "",
	description: "",
	adress: "",
}
export default function VolonteerForUs() {
	const [personData, setPersonData] = React.useState(clearData)
	const sendEmail = (e: any) => {
		e.preventDefault()
		axios
			.post("http://localhost:3001/api/feedback", personData)
			.then((response) => {
				console.log("Успех")
			})
			.catch((error) => {
				console.error(error)
			})
	}
	return (
		<div className='m-auto w-1/3 mt-16'>
			<h1 className='text-green-400 text-3xl'>
				<b>Volunteer Application Form</b>
			</h1>
			<p className='text-white mt-10'>
				You can volunteer with us to support those facing challenges in
				Hull, including helping people to settle into our society, make
				the most of life in hull and contribute to our community. You
				could help people to overcome mental illness, build up their job
				skills, learn English and much more.
			</p>
			<form className='mt-14'>
				<input
					type='text'
					placeholder='Your first name'
					className='outline-none p-4'
					value={personData.name}
					onChange={(e) =>
						setPersonData((prev) => ({
							...prev,
							name: e.target.value,
						}))
					}
				/>
				<input
					type='text'
					placeholder='Your last name'
					className='outline-none p-4'
					value={personData.surname}
					onChange={(e) =>
						setPersonData((prev) => ({
							...prev,
							surname: e.target.value,
						}))
					}
				/>
				<input
					type='text'
					placeholder='Your email'
					className='outline-none p-4'
					value={personData.email}
					onChange={(e) =>
						setPersonData((prev) => ({
							...prev,
							email: e.target.value,
						}))
					}
				/>
				<input
					type='text'
					placeholder='Your number'
					className='outline-none p-4'
					value={personData.telephone}
					onChange={(e) =>
						setPersonData((prev) => ({
							...prev,
							telephone: e.target.value,
						}))
					}
				/>
				<input
					type='text'
					placeholder='Your adress'
					className='outline-none p-4'
					value={personData.adress}
					onChange={(e) =>
						setPersonData((prev) => ({
							...prev,
							adress: e.target.value,
						}))
					}
				/>
				<input
					type='text'
					placeholder='Your age'
					className='outline-none p-4'
					value={personData.age}
					onChange={(e) =>
						setPersonData((prev) => ({
							...prev,
							age: e.target.value,
						}))
					}
				/>
				<textarea
					placeholder='Tell us a bit about yourself'
					className='outline-none p-4'
					value={personData.description}
					onChange={(e) =>
						setPersonData((prev) => ({
							...prev,
							description: e.target.value,
						}))
					}
				/>
				<button onClick={(e) => sendEmail(e)}>aa</button>
			</form>
		</div>
	)
}
