alert('Welcome to Daily Bugle!');
const main1 = document.getElementById(`articles-container-business`);
let data1;
let datalength1=0;
async function getData1(){
    const res1 = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=72f83480e2f5405a8f9df0973248ad1f");
    const result1 = await res1.json();
    data1 = result1.articles;
    datalength1 = data1.length;
    console.log("\n : data:", data1)
    renderUI1();
}

getData1();

function renderUI1(){
    for(let i=0; i<datalength1; i++){
        const article1 = document.createElement('article');
        article1.innerHTML =`
        <img class="article-img" src="${data1[i].urlToImage}" alt="error loading image"></img>
        <div class="article-content">
            <h2>${data1[i].title}</h2>
            <p>${data1[i].description} (source: ${data1[i].author}) (category: Business)</p>
            <button class="read-more-btn"><a href="${data1[i].url}" target="_blank">Read More</a></button>
        </div>
        `;
        let var1a=data1[i].urlToImage;
        let var1b=data1[i].description;
        let var1c=data1[i].author;
        if(var1a!=null && var1b!==null && var1c!=null){
            main1.appendChild(article1);
        }
    }
}


const main2 = document.getElementById(`articles-container-sports`);
let data2;
let datalength2=0;
async function getData2(){
    const res2 = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=72f83480e2f5405a8f9df0973248ad1f");
    const result2 = await res2.json();
    data2 = result2.articles;
    datalength2 = data2.length;
    console.log("\n : data:", data2)
    renderUI2();
}

getData2();

function renderUI2(){
    for(let i=0; i<datalength2; i++){
        const article2 = document.createElement('article');
        article2.innerHTML =`
        <img class="article-img" src="${data2[i].urlToImage}" alt="error loading image"></img>
        <div class="article-content">
            <h2>${data2[i].title}</h2>
            <p>${data2[i].description} (source: ${data2[i].author}) (category: Sports)</p>
            <button class="read-more-btn"><a href="${data2[i].url}" target="_blank">Read More</a></button>
        </div>
        `;
        let var2a=data2[i].urlToImage;
        let var2b=data2[i].description;
        let var2c=data2[i].author;
        if(var2a!=null && var2b!==null && var2c!=null){
            main2.appendChild(article2);
        }
    }
}

const main3 = document.getElementById(`articles-container-politics`);
let data3;
let datalength3=0;
async function getData3(){
    const res3 = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=72f83480e2f5405a8f9df0973248ad1f");
    const result3 = await res3.json();
    data3 = result3.articles;
    datalength3 = data3.length;
    console.log("\n : data:", data3)
    renderUI3();
}

getData3();

function renderUI3(){
    for(let i=0; i<datalength3; i++){
        const article3 = document.createElement('article');
        article3.innerHTML =`
        <img class="article-img" src="${data3[i].urlToImage}" alt="error loading image"></img>
        <div class="article-content">
            <h2>${data3[i].title}</h2>
            <p>${data3[i].description} (source: ${data3[i].author}) (category: Politics)</p>
            <button class="read-more-btn"><a href="${data3[i].url}" target="_blank">Read More</a></button>
        </div>
        `;
        let var3a=data3[i].urlToImage;
        let var3b=data3[i].description;
        let var3c=data3[i].author;
        if(var3a!=null && var3b!==null && var3c!=null){
            main3.appendChild(article3);
        }
    }
}

const main4 = document.getElementById(`articles-container-technology`);
let data4;
let datalength4=0;
async function getData4(){
    const res4 = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=72f83480e2f5405a8f9df0973248ad1f");
    const result4 = await res4.json();
    data4 = result4.articles;
    datalength4 = data4.length;
    console.log("\n : data:", data4)
    renderUI4();
}

getData4();

function renderUI4(){
    for(let i=0; i<datalength4; i++){
        const article4 = document.createElement('article');
        article4.innerHTML =`
        <img class="article-img" src="${data4[i].urlToImage}" alt="error loading image"></img>
        <div class="article-content">
            <h2>${data4[i].title}</h2>
            <p>${data4[i].description} (source: ${data4[i].author}) (category: Technology)</p>
            <button class="read-more-btn"><a href="${data4[i].url}" target="_blank">Read More</a></button>
        </div>
        `;
        let var4a=data4[i].urlToImage;
        let var4b=data4[i].description;
        let var4c=data4[i].author;
        if(var4a!=null && var4b!==null && var4c!=null){
            main4.appendChild(article4);
        }
    }
}

const main5 = document.getElementById(`articles-container-entertainment`);
let data5;
let datalength5=0;
async function getData5(){
    const res5 = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=72f83480e2f5405a8f9df0973248ad1f");
    const result5 = await res5.json();
    data5 = result5.articles;
    datalength5 = data5.length;
    console.log("\n : data:", data5)
    renderUI5();
}

getData5();

function renderUI5(){
    for(let i=0; i<datalength5; i++){
        const article5 = document.createElement('article');
        article5.innerHTML =`
        <img class="article-img" src="${data5[i].urlToImage}" alt="error loading image"></img>
        <div class="article-content">
            <h2>${data5[i].title}</h2>
            <p>${data5[i].description} (source: ${data5[i].author}) (category: Entertainment)</p>
            <button class="read-more-btn"><a href="${data5[i].url}" target="_blank">Read More</a></button>
        </div>
        `;
        let var5a=data5[i].urlToImage;
        let var5b=data5[i].description;
        let var5c=data5[i].author;
        if(var5a!=null && var5b!==null && var5c!=null){
            main5.appendChild(article5);
        }
    }
}