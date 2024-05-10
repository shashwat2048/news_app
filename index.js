alert('Welcome to Daily Bugle!');
const main = document.getElementById('articles-container');
let data;
let datalength=0;
async function getData(){
    const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=72f83480e2f5405a8f9df0973248ad1f");
    const result = await res.json();
    data = result.articles;
    datalength = data.length;
    console.log("\n : data:", data)
    renderUI();
}

getData();

function renderUI(){
    for(let i=0; i<datalength; i++){
        const article = document.createElement('article');
        article.innerHTML =`
        <img class="article-img" src="${data[i].urlToImage}" alt="error loading image"></img>
        <div class="article-content">
            <h2>${data[i].title}</h2>
            <p>${data[i].description} (source: ${data[i].author})</p>
            <button class="read-more-btn"><a href="${data[i].url}" target="_blank">Read More</a></button>
            <p class="article-author"></p>
        </div>
        `;
        main.appendChild(article);
    }
}