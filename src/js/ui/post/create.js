/**
 * Passses data to the createPost function in api/post and handles the response
 */

export async function onCreatePost(event) {}

// Import the createPost function from the API file
import { createPost } from '../../api/posts';

/**
 * Handles the form submission for creating a new post
 * @param {Event} event - The event triggered on form submission
 */
export function onCreatePost(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Grabbing input values from the form fields
    const title = document.querySelector('#postTitle').value;
    const body = document.querySelector('#postBody').value;
    const tags = document.querySelector('#postTags').value.split(','); // Tags will be split into an array
    const media = document.querySelector('#postMedia').value;

    // Creating a post with the collected data
    createPost({ title, body, tags, media })
        .then(response => {
            // Show success message on successful post creation
            displayModal('Successfully created new post!', response);

            // Optional: Provide options in modal to view the post, return home, or close modal
            // Code to add options for viewing or closing could go here
        })
        .catch(error => {
            // Handle any errors during the post creation
            displayModal('Failed to create post. Please try again.', error);
        });
}

/**
 * Display a modal message with options for the user
 * @param {string} message - The message to display in the modal
 * @param {object} response - Optional response data for additional options
 */
function displayModal(message, response) {
    // Code to display modal or message to the user
    console.log(message, response); // This will later be replaced with modal implementation
}