import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET method to fetch a prompt by ID
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the prompt by ID and populate the 'creator' field
        const prompt = await Prompt.findById(params.id).populate("creator");
        
        if (!prompt) {
            return new Response("Prompt Not Found", { status: 404 });
        }

        // Send back the prompt as a JSON response
        return new Response(JSON.stringify(prompt), { status: 200 });

    } catch (error) {
        console.error("Error fetching prompt:", error);  // Log the error for debugging
        return new Response("Internal Server Error", { status: 500 });
    }
};

// PATCH method to update a prompt by ID
export const PATCH = async (request, { params }) => {
    try {
        const { prompt, tag, title } = await request.json();

        await connectToDB();

        // Find the existing prompt by ID
        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        existingPrompt.title = title;

        // Save the updated prompt to the database
        await existingPrompt.save();

        return new Response("Successfully updated the Prompt", { status: 200 });

    } catch (error) {
        console.error("Error updating prompt:", error);  // Log the error for debugging
        return new Response("Error Updating Prompt", { status: 500 });
    }
};

// DELETE method to remove a prompt by ID
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find and delete the prompt by ID
        const deletedPrompt = await Prompt.findByIdAndRemove(params.id);

        if (!deletedPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        return new Response("Prompt deleted successfully", { status: 200 });

    } catch (error) {
        console.error("Error deleting prompt:", error);  // Log the error for debugging
        return new Response("Error deleting prompt", { status: 500 });
    }
};
