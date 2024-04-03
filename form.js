const submitbtn = document.getElementById("submitbtn");
const blogform = document.getElementById("blogForm");
const Username = document.getElementById("username");
const Title = document.getElementById("title");
const Content = document.getElementById("content");


//Retrieving posts from local storage or initializing as empty array
let postArray = JSON.parse(localStorage.getItem("postarray")) || [];

//Function to save posts to localstorage
function savePost(post) {
  postArray.push(post);
  localStorage.setItem("postarray", JSON.stringify(postArray));
}

// Wes Bos for resources
blogform.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!Username.value || !Title.value || !Content.value) {
    alert("Please fill in all required fields");
    return;
  }

  const blogpost = {
    username: Username.value,
    title: Title.value,
    content: Content.value,
  };

  console.log(blogpost);

  postArray.push(blogpost);

  localStorage.setItem("postarray", JSON.stringify(postArray));

  location.href = "./blog.html"



  //displaySavedPosts();

  blogform.reset();
});

//Add event listener to the form
//Blogfor
//blogform.addEventListener("submit", handleFormSubmit);


