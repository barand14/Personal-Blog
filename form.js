var submitbtn= document.getElementById("submitbtn")
var blogform= document.getElementById("blogForm")
var Username= document.getElementById("username")
var Title= document.getElementById("title")
var Content= document.getElementById("content")

var postarray= JSON.parse(localStorage.getItem("postarray")) || []

// Wes Bos for resources
blogform.addEventListener("submit", function(event){
    event.preventDefault()
    var blogpost= {
        Username.value= "Username";
        Title.value= 'title';
        Content.value= "Content";

    }

    console.log(blogpost)
    postarray.push(blogpost)

    localStorage.setItem("postarray", JSON.stringify(postarray))
})