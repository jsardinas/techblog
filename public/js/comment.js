const commentFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the form
    const comment = document.querySelector('#comment').value.trim();
    const id = document.querySelector('#post').getAttribute('postid');

    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ id, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            console.log(response);
            alert(response.statusText);
        }
    }
};

document
.querySelector('.comment-form')
.addEventListener('submit', commentFormHandler);

    