const generateMemeBtn = document.querySelector("#generate-meme-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector(".meme-image");
const authorOutput = document.querySelector(".author");


function generateMeme() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.author);
      const { author, title, url } = data;
      memeTitle.innerText = title;
      memeImage.src = url;
      authorOutput.innerText = `Meme by: ${author}`;
    });
}
generateMemeBtn.addEventListener("click", generateMeme());
