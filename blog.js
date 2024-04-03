const savedPostsContainer = document.getElementById("blogPosts");
//Retrieving posts from local storage or initializing as empty array
let postArray = JSON.parse(localStorage.getItem("postarray")) || [];

// Function to display saved posts
function displaySavedPosts() {
    // Clear previous content
    savedPostsContainer.innerHTML = "";

    if (postArray.length === 0) {
        savedPostsContainer.innerHTML = "<p>No saved posts yet!</p>";
        return;
    }

    postArray.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>By: ${post.username}</p>
            <p>${post.content}</p>
        `;
        savedPostsContainer.appendChild(postElement);
    });
}

//display saved posts on page load
displaySavedPosts();