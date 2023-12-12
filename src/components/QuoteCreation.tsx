import React from "react";
import quotes from "../assets/quotes.png"


enum Theme {
	orange = "h-80 xs:w-[80%] md:w-[40%] bg-gradient-to-br from-orange-600 to-red-400 flex flex-col p-8 items-center justify-center rounded shadow-2xl shadow-gray-400",
	blue = "h-80 xs:w-[80%] md:w-[40%] bg-gradient-to-br from-cyan-600 to-blue-400 flex flex-col p-8 items-center justify-center rounded shadow-2xl shadow-gray-400",
	purple = "h-80 xs:w-[80%] md:w-[40%] bg-gradient-to-br from-purple-600 to-blue-400 flex flex-col p-8 items-center justify-center rounded shadow-2xl shadow-gray-400",
	black = "h-80 xs:w-[80%] md:w-[40%] bg-gradient-to-br from-gray-800 to-gray-500 flex flex-col p-8 items-center justify-center rounded shadow-2xl shadow-gray-400"
}

export default function QuoteView() {

	const [quoteText, setQuoteText] = React.useState<string>();
	const [signature, setSignature] = React.useState<string>();


	const [selectedTheme, setSelectedTheme] = React.useState<string>(Theme.orange);

	function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
		const themeId = event.target.id as keyof typeof Theme;
		setSelectedTheme(Theme[themeId]);
	}

	function handleQuoteCreation() {
		setQuoteText("")
		setSignature("")
		alert("Quote created")
	}

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
						onClick={() => handleQuoteCreation()}
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
					{/* TODO -  create a modal for a user to choose a category for the quote */}
				</div>
				<div className={selectedTheme}>
					<div className="flex flex-row items-center justify-center">
						<h1 className="text-6xl text-white font-mono">"</h1>
						<h1 className="text-3xl font-regular text-white text-center flex items-center justify-center italic">
							{quoteText}
						</h1>
						<h1 className="text-6xl text-white font-mono">"</h1>
					</div>

					<h1 className="font-mono text-sm text-gray-200 font-light mt-4">{signature}</h1>
				</div>
				<div className="h-20 w-full py-10 flex items-center justify-center space-x-2">
					<input
						type="radio"
						className="h-10 w-10 rounded-full border-2 border-black focus:outline-none checked:bg-orange-600"
						name="colorOption"
						id="orange"
						onChange={handleColorChange}
					/>
					<input
						type="radio"
						className="h-10 w-10 rounded-full border-2 border-black focus:outline-none checked:bg-blue-600"
						name="colorOption"
						id="blue"
						onChange={handleColorChange}
					/>
					<input
						type="radio"
						className="h-10 w-10 rounded-full border-2 border-black focus:outline-none checked:bg-purple-600"
						name="colorOption"
						id="purple"
						onChange={handleColorChange}
					/>
					<input
						type="radio"
						className="h-10 w-10 rounded-full border-2 border-black focus:outline-none checked:bg-purple-600"
						name="colorOption"
						id="black"
						onChange={handleColorChange}
					/>
				</div>

				<button className="px-10 py-4 bg-black rounded-xl text-white font-bold hover:bg-gray-800 active:bg-orange-600">Donwoad</button>
			</div>
		</>
	)
};