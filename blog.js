const blogpost= document.getElementById("blogPosts")
const postarray= JSON.parse(localStorage.getItem("postarray")) || []

for(const i = 0; i < postarray.length; i++){
    const blogDiv = document.createElement("div")

    const userEl = document.createElement("h2")
    userEl.textContent = postarray[i].uservalue

    // grab titlevalue and contentvalue
    const titleEl = document.createElement("h2")
    userEl.textContent = postarray[i].titlevalue

   
    blogpost.appendChild(userEl)
    //blogpost.append(titleEl)
}