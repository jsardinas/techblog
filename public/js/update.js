const updateFormHandler = async (event) => {
    console.log('uodate post');
    event.preventDefault();

    const title = document.querySelector('#update-title').value.trim();
    const content = document.querySelector('#update-content').value.trim();
    const id = document.querySelector('#update-post').getAttribute('postid');

    console.log(title, id);

    if (title && content) {
        // Send a POST request to the API endpoint
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
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
.querySelector('.update-post-form')
.addEventListener('submit', updateFormHandler);

    