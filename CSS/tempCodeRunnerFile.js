const API_KEY = "dcbaa0f6e99740ccac8815c04b7b9a5f";
const url = "https://newsapi.org/v2/everything?q=";

async function fetchNews(query) {
    try {
        const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        
        if (data.articles && data.articles.length > 0) {
            data.articles.forEach(article => {
                console.log("urlToImage:", article.urlToImage);
                console.log("Title:", article.title);
                console.log("Source:", article.source.id);
                console.log("Content:", article.content);
                console.log("--------------------"); // Separate each article for better readability
            });
        } else {
            console.log("No articles found in the data.");
        }

        // bindData(data.articles);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Example usage
fetchNews("India");
