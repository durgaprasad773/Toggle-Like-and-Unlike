let puppyImage = document.getElementById("puppyImage");
let likeIcon = document.getElementById("likeIcon");
let likeBtn = document.getElementById("likeButton")
let isLiked = false

function onClickLikeButton() {
    if (isLiked === false) {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png"
        likeIcon.style.color = "#0967d2";
        likeBtn.style.backgroundColor = "#0967d2";
        likeBtn.style.color = "#ffffff";
        isLiked = true
    } else {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png"
        likeIcon.style.color = "#cbd2d9"
        likeBtn.style.color = "#9aa5b1"
        likeBtn.style.backgroundColor = "#cbd2d9"
        isLiked = false
    }
}