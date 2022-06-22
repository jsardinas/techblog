const newPostHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            console.log(response);
            alert(response.statusText);
        }
    }
};

document
.querySelector('.new-post-form')
.addEventListener('submit', newPostHandler);