import React from 'react'
import { links } from '../data/navLinks'

function Links(props: { isOpen: boolean }) {
	return (
		<div
			className={
				'z-40 absolute w-full  bg-red-500  font-bold flex flex-col px-2 py-4 text-xl gap-2 text-gray-200 rounded-b-2xl transition-all ' +
				(props.isOpen ? 'top-full' : 'top-[-19.8rem]')
			}
		>
			{links.map((link, i) => (
				<a
					href=""
					key={i}
					className="px-2 py-2 rounded-lg  hover:bg-red-600 bg-gradient-to-r from-red-600 to-red-500 hover:scale-x-105 hover:translate-x-4 transition"
				>
					{link}
				</a>
			))}
		</div>
	)
}

export default Links
