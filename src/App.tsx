import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/UI/Footer/Footer"
import Header from "./components/UI/Header/Header"
import AboutPage from "./components/pages/AboutPage"
import DonatePage from "./components/pages/DonatePage"
import HomePage from "./components/pages/HomePage"
import OurPartners from "./components/pages/OurPartners"
import SiteMap from "./components/pages/SiteMap"
import VolonteerForUs from "./components/pages/VolonteerForUs"
import VolunteersStory from "./components/pages/VolunteersStory"
import "./index.css"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route
						path='/volunteer-for-us'
						element={<VolonteerForUs />}
					/>
					<Route
						path='/volunteers-story'
						element={<VolunteersStory />}
					/>
					<Route path='/sitemap' element={<SiteMap />} />
					<Route path='/aboutProject' element={<h1>h1</h1>} />
					<Route path='/help' element={<h1>h1</h1>} />
					<Route path='/donate' element={<DonatePage />} />
					<Route path='/involved' element={<h1>h1</h1>} />
					<Route path='/contact' element={<h1>h1</h1>} />
					<Route path='/our' element={<OurPartners />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
