
//comment object:
class Comment{
    //constructor sets properties:
    constructor(handle, comment, date, likes){
        this.handle = handle;
        this.comment = comment;
        this.date = date;
        this.likes = likes;
    }
}

var comments = []; //comments
var commentCards = []; //cards for displaying comments
var totalComments = 0; //number of comments
var totalLikes = 0; //number of likes

//build comments:
function buildComments(){
    
    //add test comments:
    comments.push(
        new Comment(
            "Jo Wood",
            "Amo et desidero valde. Promitto me te facturum superbum. Gratias ago tibi, " +
            "quia non Mummius meus.",
            Date.now() - 37000, //37 secs ago
            0),
        new Comment(
            "Daniel Wilson",
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, " +
            "sed quia consequuntur magni dolores.",
            Date.now() - 1440000, //24 mins ago
            2),
        new Comment(
            "Laura Jane",
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium " +
            "doloremque laudantium, totam rem aperiam.",
            Date.now() - 3600000, //1 hour ago
            6));

    totalComments = 3; //comments.length; //set totalComments
    ///////////document.getElementById("total-comments").innerHTML = totalComments; //show total comments
    for (let i=totalComments-1; i>=0; i--){ //loop through no of comments
        buildCommentCard(comments[i]);}  //build commentCard for comment i
        //totalLikes += comments[i].likes;} //add comment i's likes to total likes
    /////////////document.getElementById("total-likes").innerHTML = totalLikes; //show total likes
    showComments(); //show comments on page
}

//build card element for comment:
function buildCommentCard(comment){

    //create html elements with class names:
    let card = makeElement("div", "card comment"); //card
    let cardBody = makeElement("div", "card-body"); //card body
    let cardTitle = makeElement("div", "card-title"); //card title
    //////////let handleIcon = makeElement("i", "fas fa-at") // handle icon
    let handle = makeElement("span", "comment-handle"); // handle
    let likesContainer = makeElement("span", "comment-likes-container"); //likes container
    let likesIcon = makeElement("i", "far fa-thumbs-up comment-likes-icon"); //likes icon
    let likes = makeElement("span", "text-muted comment-likes"); //likes
    let text = makeElement("p", "card-text comment-text"); //comment
    let time = makeElement("p", "card-text text-muted comment-time"); //time
    let likeBtn = makeElement("button", "btn btn-sm btn-outline-secondary comment-like-btn"); //like btn
    let likeBtnIcon = makeElement("i", "far fa-thumbs-up"); //like button icon
    let likeBtnText = document.createTextNode(" Like"); //like button text

    //build card from elements:
    likeBtn.replaceChildren(likeBtnIcon, likeBtnText); //build like button
    likesContainer.replaceChildren(likesIcon, likes); //build likes container
    ///////////////cardTitle.replaceChildren(likesContainer, handleIcon, handle); //build card title
    cardTitle.replaceChildren(likesContainer, handle); //build card title
    cardBody.replaceChildren(cardTitle, text, time, likeBtn); //build card body
    card.appendChild(cardBody); //build card

    //add values to elements:
    handle.textContent = comment.handle; //add comment's handle to handle
    text.textContent = comment.comment; //add comment's text to comment text
    likes.textContent = " " + comment.likes; //add comment's likes to likes
    likeBtn.addEventListener("click", function(){  //add click event to like btn
        likeClick(comment, likeBtn, likes);  //call likeClick() on click
    }); 
    
    //add built card to array:
    commentCards.unshift(card);
}

/*function checkComment(){

    //show comment modal:
    $("#comment-modal").modal("show");
    
}*/

function showComments(){
    //remove previous comments from comments div:
    document.getElementById("comments").replaceChildren(); 

    for (let i=0; i<totalComments; i++){ //loop through no of comments
        let commentCard = commentCards[i]; //grab comment i's card element

        buildTime( //update card's comment-time using comment i's post date:
            commentCard.querySelectorAll(".card .card-body .comment-time")[0],
            comments[i].date);
        //https://mrfrontend.org/2017/10/2-ways-get-child-elements-javascript/

       //add comment card to comments element:
       document.getElementById("comments").appendChild(commentCard);
    }
}

//build time since comment post:
function buildTime(timeElement, postDate){

    let timeStr = " ago"; //string for showing time
    timeDiff = Date.now() - postDate; //get ms between now and postDate

    //if difference is less than a minute, append string to show in secs:
    if (timeDiff < 60000) { timeStr = Math.floor(timeDiff/1000) + "s" + timeStr; }
    //if difference is less than an hour, append string to show in mins:
    else if (timeDiff < 3600000) { timeStr = Math.floor(timeDiff/60000) + "m" + timeStr; }
    //else, show difference in hours:
    else timeStr = Math.floor(timeDiff/3600000) + "h" + timeStr;
    
    //add nodes to time element:
    timeElement.replaceChildren(
        makeElement("i", "far fa-clock"), //add clock icon
        document.createTextNode(timeStr)); //add time string
}

//handle tooltip:
var handleTooltip = new bootstrap.Tooltip(
    document.getElementById("handle-input"), { 
    placement : "right", //place to right of input
    title : "Enter Name", //give error message
    trigger : "manual" //trigger maually
});

//comment tooltip:
var commentTooltip = new bootstrap.Tooltip(
    document.getElementById("comment-input"), {
    placement : "right", //place to right of input
    title : "Enter Comment", //give error message
    trigger : "manual" //trigger maually
});

//check a new comment:
function checkComment(){ 

    //get trimmed input values from form:
    let handleInput = document.getElementById("handle-input").value.trim();
    let commentInput = document.getElementById("comment-input").value.trim();

    //check that inputs have values:
    if(handleInput.length == 0 || commentInput.length == 0){
        //add tooltip warning for empty inputs:
        if (handleInput.length == 0) {handleTooltip.show()};
        if (commentInput.length == 0) {commentTooltip.show()};
    }else{ //input was valid:

        //++++++++++++++++++++++++++++++POP UP MODAL HERE, CONFRIMIMG COMMENT++++

        //prompt user to confirm comment:

        //add comment input to comment modal:
        document.getElementById("modal-comment-input").textContent = commentInput;

        //show comment modal:
        $("#comment-modal").modal("show");


        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        
    }
}

//add new comment:
function addComment(){

    //create new comment:
    let comment = new Comment(
        handleInput, //add handle input
        commentInput, //add comment input
        Date.now(), //add current date
        0); //initialize likes as 0
    
    comments.unshift(comment); //add new comment to comments
    buildCommentCard(comment); //create new card for comment
    //increment and show total comments:
    ++totalComments;
    //////////////document.getElementById("total-comments").innerHTML = ++totalComments;
    showComments(); //show comments
    document.getElementById("comment-form").reset(); //clear form

}

//handle like button click:
function likeClick(comment, likeBtn, likes){

    //get like button's icon and text content:
    let likeBtnIcon = likeBtn.querySelectorAll(".fa-thumbs-up")[0];
    let likeBtnText = likeBtn.textContent;

    //if holding an icon with a "far" class (wasn't prev clicked):
    if(likeBtnIcon.classList.contains("far")){

        //increment and show total likes:
        //////////////////document.getElementById("total-likes").innerHTML = ++totalLikes;
        //increment and show comment likes:
        likes.textContent = " " + ++comment.likes;
        //change to icon with "fas" class:
        likeBtnIcon = makeElement("i", "fas fa-thumbs-up");
        //update likes modal with total likes:
        ///////////////document.getElementById("modal-total-likes").textContent = totalLikes;
        //show likes modal:
        ////////////////$("#likes-modal").modal("show");

    }else{ //holding an icon with "fas" class (was prev clicked):
       
        //decrement and show total likes:
       ///////////// document.getElementById("total-likes").innerHTML = --totalLikes;
        //decrement and show comment likes:
        likes.textContent = " " + --comment.likes;
        //change to icon with "far" class:
        likeBtnIcon = makeElement("i", "far fa-thumbs-up");
    }
    //change likeBtn to new state:
    likeBtn.replaceChildren(likeBtnIcon, likeBtnText);
}

//make a html element with classname:
function makeElement(type, className){ 
    let element = document.createElement(type); //create element
    element.className = className; //give classname
    return element;
}