import heroImage from '../images/hero.jpg'

function Hero() {
	return (
		<main>
			<header className="text-center">
				<div className="relative flex justify-center items-center">
					<div className="hero-img-shadow absolute w-full h-full"></div>
					<h1 className="text-white text-3xl absolute w-[90%]   p-4 text-center rounded-2xl leading-relaxed  bg-black bg-opacity-25 backdrop-blur-sm font-bold">
						SWAYAM MADHAVAN INTERNATIONAL MULTIDISCIPLINARY
						MULTILINGUAL JOURNAL
					</h1>
					<img src={heroImage} alt="hero" />
				</div>
				<div className="px-2 pb-4 shadow-2xl rounded-3xl">
					<h1 className="text-orange-600 font-bold text-5xl grad-bg mb-2">
						SWAYAM MADHAVAN
					</h1>
					<h2 className="text-red-600 font-bold text-xl shadow-xl py-2 my-2">
						🔥 International Peer Reviewed & Refereed Journals, Open
						Access Journal🔥
					</h2>
					<h2 className="text-green-700 font-bold text-xl shadow-xl py-2 my-2">
						📚ISSN Approved Journal No: (WAITING FOR APPROVAL) | 🔥
						Impact factor: 7.97 | ESTD Year: 2022
					</h2>
					<h2 className="text-red-600 font-bold text-xl shadow-xl py-2 my-2">
						🔥 Call For Paper - Volume 1 | Issue 1 | Month- August
						2022 🔥
					</h2>
					<h2 className="text-sky-600 font-bold text-md underline">
						🔖Scholarly open access journals, Peer-reviewed, and
						Refereed Journals, Impact factor 7.97 (Calculate by
						google scholar and Semantic Scholar | AI-Powered
						Research Tool) , Multidisciplinary, Monthly, Indexing in
						all major database & Metadata, Citation Generator,
						Digital Object Identifier(DOI)
					</h2>
				</div>
			</header>
		</main>
	)
}

export default Hero
