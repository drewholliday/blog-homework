document.getElementById("blogForm").addEventListener('submit',function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;


    const post = {
        username,
        title,
        content
    };

// Define array as the array "posts" in local storage. If the arry does not exist, initialize it
    let posts = JSON.parse(localStorage.getItem(posts)) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(post));

    window.location.href = 'blog.html'


})
