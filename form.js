const submitbtn= document.getElementById("submitbtn");
const blogform= document.getElementById("blogForm");
const Username= document.getElementById("username");
const Title= document.getElementById("title");
const Content= document.getElementById("content");
const savedPostsContainer=document.getElementById("savedPosts");

//Retrieving posts from local storage or initializing as empty array
let postArray= JSON.parse(localStorage.getItem("postarray")) || [];

//Function to save posts to localstorage
function savePost(post) {
    postArray.push(post);
    localStorage.setItem("postarray", JSON.stringify(postArray));
}

//function to display saved posts
function displaySavedPosts() {
    //Clear previous content
    savedPostsContainer.innerHTML = "";

    if(postArray.lenght === 0) {
        savedPostsContainer.innerHTML = "<p>Nosaved posts yet!</p>";
        return;
    }

}

function handleFormSubmit(event){
    event.preventDefault();
}
Recent

if (!Username.value || !Title.value || !Content.value) {
    alert("Pleasefill in all required fields");
    return;
}

// Wes Bos for resources
blogform.addEventListener("submit", function(event){
    event.preventDefault();
    const blogpost= {
        username: Username.value,
        title: Title.value,
        content: Content.value,

    }

    console.log(blogpost);
    postarray.push(blogpost);

    localStorage.setItem("postarray", JSON.stringify(postarray));
})