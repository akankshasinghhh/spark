document.addEventListener("DOMContentLoaded", function() {
    let text = document.getElementById('text');
    let author = document.getElementById('author');
    let counter = 0;
    let quotes;

    getQuotes();
});

async function getQuotes(){
    
        counter = 0;
    
        fetch("https://type.fit/api/quotes").then(res => {
            return res.json();
        }).then( res => {
            quotes = res;
            console.log("hello");
            text.innerHTML = `"${quotes[0].text}"`;
            author.innerHTML = `-${quotes[0].author}`;
        });
    }
    
function next(){
    if(counter < quotes.length){
        counter++;
        text.innerHTML = `"${quotes[counter].text}"`;
        author.innerHTML = `-${quotes[counter].author}`;
    }else{
        getQuotes();
    }
}