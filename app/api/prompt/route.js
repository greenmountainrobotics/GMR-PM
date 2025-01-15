import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
export const runtime = 'edge';


export const GET = async (request) => {
    try {
        // Establish a database connection with pooling
        await connectToDB();

        // Fetch prompts and populate creator data
        const prompts = await Prompt.find({}).populate('creator');
        
        // Debug: Log fetched prompts
        console.log("Fetched Prompts:", prompts);

        // Set response headers
        const headers = new Headers({
            "Content-Type": "application/json",
            "Cache-Control": "no-cache, must-revalidate", // Prevent caching
        });

        // Return the response with prompts
        return new Response(JSON.stringify(prompts), {
            status: 200,
            headers, // Include custom headers
        });
    } catch (error) {
        console.error("Error fetching prompts:", error);
        // Return a 500 error if something goes wrong
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};
