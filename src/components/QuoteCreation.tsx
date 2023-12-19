import React from "react";
import html2canvas from "html2canvas";
import { Theme } from "../constants/Themes";
import axios from "axios";

export default function QuoteView() {

	const quoteContainerRef = React.useRef(null);
	const [quoteText, setQuoteText] = React.useState<string>();
	const [signature, setSignature] = React.useState<string>();
	const [selectedTheme, setSelectedTheme] = React.useState<string>(Theme.orange);

	function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
		const themeId = event.target.id as keyof typeof Theme;
		setSelectedTheme(Theme[themeId]);
	}

	async function handleQuoteCreation() {
		try {
			setQuoteText("");
			setSignature("");

			const response = await axios.post("http://localhost:4321/api/quote", {
				author: signature,
				quote: quoteText
			});
			const data = response.data;

			setQuoteText(data.quoteText || "");
			setSignature(data.signature || "");
			alert(data.msg)
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	function downloadQuote() {

		const scale = 10;
		const container = quoteContainerRef.current;

		if (container) {
			html2canvas(container, { scale }).then((canvas) => {
				const dataURL = canvas.toDataURL();
				const a = document.createElement("a");
				a.href = dataURL;
				a.download = "quote.png";
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			});
		}
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
				<div id="userCreatedQuote" ref={quoteContainerRef} className={selectedTheme}>
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
						className="h-10 w-10 rounded-full border-2 border-black focus:outline-none selection:bg-orange-600 checked:bg-orange-600"
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

				<button onClick={downloadQuote} className="px-10 py-4 bg-black rounded-xl text-white font-bold hover:bg-gray-800 active:bg-orange-600">Donwoad</button>
			</div>
		</>
	)
};