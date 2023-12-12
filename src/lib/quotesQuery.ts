/**
 * This is where the query to the API where the quotes will be placed
 * 
 * For now I have plugged it in directly into the componet but will be switching 
 * and moving it here
 */
import axios from "axios";
import type { TQuote } from "../interfaces/QuoteT";

const API_KEY = import.meta.env.API_KEY;

async function getQuotes(packet: TQuote) {
    return
}

export { getQuotes }