import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const { author, quote } = await request.json();

    // Save data to Supabase
    const { data, error } = await supabase.from('quote').upsert([
      { author, quote: quote }
    ]);

    console.log(error)

    if (error) {
      console.error('Error saving data to Supabase:');
      console.log(author, quote);
      return new Response(JSON.stringify({ error: 'Failed to save quote' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ msg: 'Quote created', data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export async function GET() {
  return new Response(
    JSON.stringify({
      quote_status: "created",
      saved_to_database: true,
      quote_id: Math.random()
    })
  )
}

