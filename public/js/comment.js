const commentFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the form
    const comment = document.querySelector('#comment').value.trim();
    const id = document.querySelector('#post').getAttribute('postid');
    console.log(id);

    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ id, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //document.location.replace('/');
        } else {
            console.log(response);
            alert(response.statusText);
        }
    }
};

document
.querySelector('.comment-form')
.addEventListener('submit', commentFormHandler);

    