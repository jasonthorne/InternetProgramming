
//comment object:
class Comment{
    //constructor sets properties:
    constructor(handle, comment, post_date, likes) {
        this.handle = handle;
        this.comment = comment;
        this.post_date = post_date;
        this.likes = likes;
    }
}

var comments = []; //holds comments
var totalComments = 0; //holds total number of comments
var totalLikes = 0; //holds total number of likes

//load comments from db:
function loadComments() {
    comments.push( //add test comments to mimic db pull:
        new Comment("Bob", "Bob comment", Date.now(), 6),
        new Comment("Frank", "Frank comment", Date.now(), 6),
        new Comment("Billy", "Billy comment", Date.now(), 6),
        new Comment("Terry", "Terry comment", Date.now(), 6))

    console.log(comments); //+++++++++++
    totalComments = comments.length; //set totalComments
    showComments(); //show comments on page
}

//show comments on page:
function showComments() {

    //reset counters:
    var totalComments = 0;
    var totalLikes = 0;

    //loop through comments:
    for (let i=0, j=comments.length; i<j; i++){

        let card = document.createElement("div"); //create card div
        card.className = "card comment"; //give class names

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

    }


    var card = document.createElement("div");
    card.className = "card comment";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardP = document.createElement("p");
    cardP.className = "card-text";
    cardP.textContent = "hullo!";
    
    ///////cardBody.appendChild(document.createTextNode("Yo dawg!"));
    cardBody.appendChild(cardP);

    card.appendChild(cardBody);

    document.getElementById("comments").appendChild(card); 
   












    /*

    https://www.w3schools.com/w3css/w3css_animate.asp


    https://stackoverflow.com/questions/35538057/css-bootstrap-creating-elements-via-javascript/35538121


    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fieldshttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
    */

    //https://getbootstrap.com/docs/5.0/utilities/sizing/

    /*var test = 
    "<table>\n" +
    "<tr>\n" +
        "<td>Emil</td>\n" +
        "<td>Tobias</td>\n" +
        "<td>Linus</td>\n" +
    "</tr>\n" +
    "</table>";*/

    //document.getElementById("comments").innerHTML = comments[0].post_date;

   /// document.getElementById("comments").innerHTML = test;

}

function addComment() {

    //+++++++++++++++++++++++++++CHeck that both forms have valid data. THEN:
    
    //add new comment to comments:
    comments.unshift(new Comment(
        document.getElementById("handle").value, //get handle from form
        document.getElementById("comment").value, //get comment from form
        Date.now(), //add current date
        0)); //initialize likes as 0
    
    console.log(comments); //+++++++++++

    showComments(); //show comments
}
