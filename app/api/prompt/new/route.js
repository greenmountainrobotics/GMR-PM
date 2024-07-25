import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, prompt, tag, title } = await request.json();

    try {
        await connectToDB();
        console.log("title got here");
        const newPrompt = new Prompt({ creator: userId, prompt, tag, title });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
