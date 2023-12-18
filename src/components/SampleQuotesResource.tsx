import React from "react";
import axios from "axios";

import { categories } from "../constants/categories";

export default function SampleView() {
	const [quoteCategory, setQuoteCategory] = React.useState<string>('happiness');
	const [quotes, setQuotes] = React.useState<any>();
	const API_KEY = import.meta.env.API_KEY;
	const [loading, setLoading] = React.useState<boolean>(false)

	async function getQuotes() {
		setLoading(true)
		const quotes_api = `https://api.api-ninjas.com/v1/quotes?category=${quoteCategory}`;
		try {
			const response = await axios.get(
				quotes_api,
				{
					headers: {
						"X-Api-Key": "VfskwlCFRuuzxAfbs0EPwg==1BIYHU0oi4m2L11G"
					}
				});
			if (response.status) {
				setQuotes(response.data)
				// alert(response.status)
				console.log(response.data)
			}
			setLoading(false)
		} catch (error) {
			console.error('Error fetching quotes:', error);
		}
	}

	React.useEffect(() => {
		getQuotes();
	}, [quoteCategory]); // Add quoteCategory as a dependency

	function switchCategory(value: string) {
		setQuoteCategory(value);
	}

	return (
		<>
			<div className="w-full h-full flex justify-center flex-wrap">
				{
					loading && (
						<div className="w-full h-full flex flex-row justify-center space-x-4">
							<div className="h-60 w-96 bg-gradient-to-br from-orange-600 to-red-400 animate-pulse rounded-xl"></div>
							<div className="h-60 w-96 bg-gradient-to-br from-orange-600 to-red-400 animate-pulse rounded-xl"></div>
						</div>
					)
				}
				{loading === false && (
					quotes?.map((quote: any) => (
						<div className="h-60 w-96 bg-gray-200 backdrop-blur-xl bg-opacity-30 rounded-xl flex flex-col items-center justify-center p-2">
							<p className="text-xs">{quote?.quote}</p>
							<h1 className="font-bolx text-orange-600">{quote?.author}</h1>
							<p className="font-bold bg-orange-600 p-2 rounded-xl bottom-0 left-0 text-white text-xs">{quote?.category}</p>
						</div>
					))
				)}
			</div>
		</>
	);
}
