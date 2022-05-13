console.log("This is Express News project with xhr object");
//

// Initialize the news api parameters
let apiKey = "902bc89a6aa347199d09e91a1b72eff8";

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,
    true
    );
    xhr.onload = function () {
        // Grab the news container
        let breakingNews = document.getElementById("breakingNews");
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let news = "";
        console.log(articles)
    articles.forEach(element => {
        news += `<div class="my-2 mx-2 ">
                    <div class="card" id="articlesCard">
                        <img src="${element.urlToImage}" class="card-img-top" alt="${element.title}">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <div>
                                <a href="${element.url}" target="_blank"> read more...</a>
                            </div>
                            <div class="my-2">
                            <h6>Published At: <span class="text-secondary" id="newsPublishDate">${element.publishedAt}</span></h6>
                            </div>
                        </div>
                    </div>
                </div>`;
    })  ;

    breakingNews.innerHTML = news;
};

xhr.send();
