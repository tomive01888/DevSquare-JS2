import { authGuard } from "../../utilities/authGuard";

authGuard();


// event listener

// Importing the onUpdatePost function to connect the edit form
import { onUpdatePost } from '../ui/post/create';

/**
 * Initializes the edit post view with an event listener
 */
export function initializeEditPostView() {
    // Selecting the form element for post editing
    const editForm = document.querySelector('#editPostForm');

    // Adding event listener to handle form submission
    editForm.addEventListener('submit', onUpdatePost);
}