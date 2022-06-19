import React, { useState } from 'react'
import Links from './Links'

function NavBar() {
	const [isOpen, setIsOpen] = useState(false)

	function handelClick() {
		isOpen ? setIsOpen(false) : setIsOpen(true)
	}

	return (
		<nav className="relative">
			<div className="relative z-50 p-4 bg-red-400 flex justify-between">
				<a href="http://www.swayammadhavan.com/">
					<h1 className="text-2xl font-bold text-black">
						🏠 Swayam Madhavan
					</h1>
				</a>
				<button
					className={
						(isOpen ? 'bg-red-700' : 'bg-red-500') +
						' border-2 h-8 w-8 flex flex-col justify-evenly p-1 rounded-md transition hover:scale-110 hover:bg-red-600 active:scale-95 active:bg-red-700'
					}
					onClick={handelClick}
				>
					<div className="border w-full"></div>
					<div className="border w-full"></div>
					<div className="border w-full"></div>
				</button>
			</div>
			<Links isOpen={isOpen} />
		</nav>
	)
}

export default NavBar
