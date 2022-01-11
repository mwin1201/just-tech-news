async function editFormHandler(event) {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${id}`, {
        method: 'put',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
};
  
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);