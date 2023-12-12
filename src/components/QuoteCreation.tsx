import React from "react";
import quotes from "../assets/quotes.png"


enum Theme {
	orange = "h-80 xs:w-[80%] md:w-[50%] bg-gradient-to-br from-orange-600 to-red-400 flex flex-col p-8 items-center justify-center rounded shadow-2xl shadow-gray-400",
	blue = "h-80 xs:w-[80%] md:w-[50%] bg-gradient-to-br from-cyan-600 to-blue-400 flex flex-col p-8 items-center justify-center rounded shadow-2xl shadow-gray-400",
	purple = "h-80 xs:w-[80%] md:w-[50%] bg-gradient-to-br from-purple-600 to-blue-400 flex flex-col p-8 items-center justify-center rounded shadow-2xl shadow-gray-400"
}

export default function QuoteView() {

	const [quoteText, setQuoteText] = React.useState<string>();
	const [signature, setSignature] = React.useState<string>();


	const [selectedTheme, setSelectedTheme] = React.useState<string>(Theme.orange);



	return (
		<>
			<div
				className="h-full w-full flex flex-col items-center justify-center space-y-4"
			>
				<h1 className="text-gray-600 text-xl font-bold">Create quoted image</h1>
				<div className="flex flex-row h-16">
					<input
						value={quoteText}
						onChange={(event) => setQuoteText(event.target.value)}
						className="h-full p-2 rounded w-80 text-gray-600 bg-gray-100"
						placeholder="Enter your quote here"
						type="text"
					/>
					<button
						className="h-full p-2 bg-orange-600 hover:bg-orange-500 active:bg-red-600 text-white font-bold w-20"
					>
						create
					</button>
				</div>
				<div className="flex flex-row h-16 xs:w-[80%}">
					<input
						value={signature}
						onChange={(event) => setSignature(event.target.value)}
						className="h-full p-2 rounded md:w-80 text-gray-600 bg-gray-100"
						placeholder="Enter your quote here"
						type="text"
					/>
				</div>
				<div className={selectedTheme}>
					<div className="flex flex-row">
						<h1 className="text-6xl text-white font-mono">"</h1>
						<h1 className="text-3xl font-regular text-white text-center flex items-center justify-center w-[50%] italic">
							{quoteText}
						</h1>
						<h1 className="text-6xl text-white font-mono">"</h1>
					</div>

					<h1 className="font-mono text-sm text-orange-200 font-light">{signature}</h1>
				</div>
				<div className="h-20 w-full py-10 flex items-center justify-center space-x-2">
					<input
						type="radio"
						className="h-10 w-10 rounded-full border-2 border-black focus:outline-none checked:bg-orange-600"
						name="colorOption"
						id="orange"
					/>
					<input
						type="radio"
						className="h-10 w-10 rounded-full border-2 border-black focus:outline-none checked:bg-blue-600"
						name="colorOption"
						id="blue"
					/>
					<input
						type="radio"
						className="h-10 w-10 rounded-full border-2 border-black focus:outline-none checked:bg-purple-600"
						name="colorOption"
						id="purple"
					/>
				</div>

				<button className="px-10 py-4 bg-black rounded-xl text-white font-bold hover:bg-gray-800 active:bg-orange-600">Donwoad</button>
			</div>
		</>
	)
};