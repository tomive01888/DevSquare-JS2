/**
 * Passses data to the createPost function in api/post and handles the response
 */

import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
    event.preventDefault();

    const title = event.target.title.value.trim();
    const body = event.target.body.value.trim();
    const tags = event.target.tags.value ? event.target.tags.value.split(",").map((tag) => tag.trim()) : [];
    const media = event.target.mediaUrl.value ? { url: event.target.mediaUrl.value, alt: event.target.mediaAlt.value || "" } : null;

    try {
        const response = await createPost({title, body, tags, media})

        if(response){
            alert("Successfully created a new post")
        } else {
            alert("Something went wrong, failed to create post.")
        }
    } catch (error) {
        console.error("Error creating post:", error)
        
    }

}

