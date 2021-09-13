





async function getData() {
    var res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=09444bb12c6f4b44b90516c1298a25c1`);
    
    var data = await res.json()
  
    console.log(data)
   return data.articles
}


var main_div = document.getElementById("news_page");
function append() {
    var news = getData();
   
    news.then(ele => {
         console.log(ele)
    
            //content div
            
            var image = document.createElement("img");
            var image = document.createElement("img")
        image.src = ele[0].urlToImage
        
        var content = document.createElement("div")
        content.innerHTML = ele[0].description

            main_div.append(image, content)
           
    
    } )
   
 
    
}
append();