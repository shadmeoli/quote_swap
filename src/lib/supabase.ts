import { createClient } from "@supabase/supabase-js";
import type { TQuote } from "../interfaces/QuoteT";

const supabase = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
);

async function createQuote(packet: TQuote) {
    return packet
}

export { supabase, createQuote }