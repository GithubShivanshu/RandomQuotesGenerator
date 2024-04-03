var btn= false;
const now= new Date();
var am= now.getHours();
if(am<12)
{
    var p1="Lets Start our Morning with new quote";
    document.getElementById("timer").innerHTML=p1;
}
else if(am>=12 && am<17)
{
    var p2="Lets Start our Afternoon with new quote";
    document.getElementById("timer").innerHTML=p2;
}
else{
    var p3="Lets Start our Evening with new quote";
    document.getElementById("timer").innerHTML=p3;
}


if(btn==true)
{
    generate();
}

let quotes=["“Try not to become a man of success. Rather become a man of value.”― Albert Einstein",
            "“It is better to fail in originality than to succeed in imitation.”― Herman Melville",
            "“Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.― Steve Maraboli”",
            "“Success is getting what you want, happiness is wanting what you get― W.P. Kinsella”",
            "“Failure is the condiment that gives success its flavor.”― Truman Capote",
            "“Success is stumbling from failure to failure with no loss of enthusiasm.”― Winston S. Churchill",
           " “The worst part of success is trying to find someone who is happy for you.”-― Bette Midler", 
           "“Dreams do come true so always be prepare to push yourself.”-Ayush Singh",
           "“we always listen to speak but not to undersatnd.”-Ayush Singh",
           "“yesterday is history tomorrow is mystry but today my freind is a gift, that is why it called present.”-Oogway"
                      
];
let image=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
let color=["Black","blue"];
var imgEl=document.getElementById("img1");
function generate(){
    var randQuote= quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quotes").innerHTML=randQuote;
    var colorq=color[Math.floor(Math.random() * color.length)];
    var randImage=image[Math.floor(Math.random() * image.length)];
    document.getElementById("quotes").style.color=colorq;
    document.body.style.backgroundImage = `url('${randImage}')`;
    document.getElementById("quote-btn").style.backgroundColor=colorq;
    imgEl.src='star.png'
    

}
function share1(){
    var m1=document.getElementById('m1');
    // var m2=document.getElementById('m2');
    // var m3=document.getElementById('m3');
    if(m1){
        var quotetext=document.getElementById("quotes").textContent;
    var twiterURL='https://twitter.com/intent/tweet?text=' + encodeURIComponent(quotetext);

    window.open(twiterURL,"_blank");

    }
}
function share2(){
    
    if(m2){
        var quotetext=document.getElementById("quotes").textContent;
    var whatsappURL="whatsapp://send?text=" + encodeURIComponent(quotetext);

    window.location.href = whatsappURL;

    }

}
function share3(){
    if(m3){
        var quotetext=document.getElementById("quotes").textContent;
        var urlToShare = encodeURIComponent(quotetext); // Replace with your desired URL

        var facebookShareURL = "https://www.facebook.com/sharer/sharer.php?u=" + urlToShare;

        window.open(facebookShareURL, "_blank");
    }
    

}
    

function fav(){
    var quotetext=document.getElementById("quotes").textContent;
    
    if(imgEl.src.includes('star.png'))
    {
        imgEl.src='star 2.png';
    }
    
    localStorage.setItem('savedItem', quotetext); // Store the item
    
    
    


}
function fav1(){
    window.location.href = 'Quote2.html';s
}
document.addEventListener('DOMContentLoaded', function() {
    var savedItem1 = localStorage.getItem('savedItem1'); // Retrieve the saved item

    if (savedItem1) {
        var savedItemContainer = document.getElementById('p101');
        savedItemContainer.textContent = savedItem1; // Display the saved item
    }
});

