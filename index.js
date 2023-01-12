const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const body = document.querySelector("body")

for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].name)
    body.innerHTML += `
    <article>
    <div class="poster-details">
        <img class="avatar" src=${posts[i].avatar} alt="vangough avatar">
        <div>
            <h1>Vincent van Gogh</h1>
            <h2>Zudert, Netherlands</h2>
        </div>
    </div>
    
    <img class="post" src="images/post-vangogh.jpg" alt="self-portrait of Vicent van Gough">
    <nav>
        <button><img class="btn" src="images/icon-heart.png" alt="like this post"></button>
        <button><img class="btn" src="images/icon-comment.png" alt="like this post"></button>
        <button><img class="btn" src="images/icon-dm.png" alt="like this post"></button>
    </nav>
    <p><span class="bold-text">21,432 likes</span></p>
    <p><span class="bold-text">vincey1853</span> just took a few mushrooms lol</p>
</article>`

}