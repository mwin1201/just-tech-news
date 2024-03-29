async function upvoteClickHandler(event) {
    event.preventDefault();
  
    const response = await fetch('/api/posts/upvote', {
        method: 'put',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    }
    else {
        alert(response.statusText);
    }
};
  
document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);