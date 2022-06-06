
//comment object:
/*class Comment{
    //constructor sets properties:
    constructor(handle, comment, date, likes){
        this.handle = handle;
        this.comment = comment;
        this.date = date;
        this.likes = likes;
    }
}*/

var comments = []; //comments  //++++++++++++++++++++++++++++++++WHY IS THIS HERE :P NO NEED FOR COMMENT OBJ :P
///var commentCards = []; //cards for displaying comments //+++++++++++++RENAME TO COMMENTS
/////////var totalComments = 0; //number of comments
///var totalLikes = 0; //number of likes
var handleInput = ""; //holds inputted handle
var commentInput = ""; //holds inputted comment

//tool tips for error handling:
var handleTooltip = makeToolTip("handle-input", "Enter Name"); //handle tooltip
var commentTooltip = makeToolTip("comment-input", "Enter Comment");  //comment tooltip
////////////?????????var postTooltip = makeToolTip("comment-input", "yo dawg!"); 

//get comments from db:
function getComments(){
    
    let request = new XMLHttpRequest(); //request object
    //open get request on firebase's 'getComments' function:
    request.open("GET", "https://us-central1-lorem-ipsum-fc.cloudfunctions.net/getComments");

    //track ther state changes of the request:
    request.onreadystatechange = function(){
        
        if(request.readyState === 4){ //if request is complete:
            if(request.status === 200){ //if request returned successfully:

                //loop through array of comments from response text:
                JSON.parse(request.responseText).forEach(comment =>{
                    //create new comment:
                    //////////////comment = new Comment(jsonComment.handle, jsonComment.comment, jsonComment.date, jsonComment.likes);
                    ////////////comments.push(comment); //add comment to comments
                    //makeCommentCard(comment); //build commentCard for comment

                    comments.unshift(makeCommentCard(comment));
                });

                ////////totalComments = comments.length; //set totalComments ??????????????????????????
                showComments(); //show comments on page
            }else{ //an error occurred during the request
                console.log("Error: " + request.status);} //give status of request
        }
    };
    
    request.send(null);

    //add test comments:
    /*comments.push(
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
            6));*/

    /*totalComments = comments.length; //set totalComments
    ///////////document.getElementById("total-comments").innerHTML = totalComments; //show total comments
   for (let i=totalComments-1; i>=0; i--){ //loop through no of comments
        buildCommentCard(comments[i]);}  //build commentCard for comment i
        //totalLikes += comments[i].likes;} //add comment i's likes to total likes
    /////////////document.getElementById("total-likes").innerHTML = totalLikes; //show total likes
    showComments(); //show comments on page*/

    /*comments.forEach(comment => buildCommentCard(comment)); //build a card for each comment
    showComments(); //show comments on page*/

}

//build card element for comment:
function makeCommentCard(comment){ 
    
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
    ///////let time = makeElement("p", "card-text text-muted comment-time"); //time
    let date = makeElement("p", "card-text text-muted comment-time"); //time //+++++++++++CHANGE ID ++++++++++
    let likeBtn = makeElement("button", "btn btn-sm btn-outline-secondary comment-like-btn"); //like btn
    let likeBtnIcon = makeElement("i", "far fa-thumbs-up"); //like button icon
    let likeBtnText = document.createTextNode(" Like"); //like button text

    //build card from elements:
    likeBtn.replaceChildren(likeBtnIcon, likeBtnText); //build like button
    likesContainer.replaceChildren(likesIcon, likes); //build likes container
    ///////////////cardTitle.replaceChildren(likesContainer, handleIcon, handle); //build card title
    cardTitle.replaceChildren(likesContainer, handle); //build card title
    //////////////cardBody.replaceChildren(cardTitle, text, time, likeBtn); //build card body
    cardBody.replaceChildren(cardTitle, text, date, likeBtn); //build card body
    card.appendChild(cardBody); //build card

    //add values to elements:
    handle.textContent = comment.handle; //add comment's handle to handle
    text.textContent = comment.comment; //add comment's text to comment text
    date.textContent = comment.date; //NEW#########++++++++++++++++++++++
    likes.textContent = " " + comment.likes; //add comment's likes to likes
    likeBtn.addEventListener("click", function(){  //add click event to like btn
        likeClick(comment, likeBtn, likes);  //call likeClick() on click
    }); 
    
    //add built card to array:
    ////////////commentCards.unshift(card);
    ////////////comments.unshift(card); //++++++++++++++++REYURN COMMENT CARD HERE INSTEAD :P
    //and add in function cvalling this.
    return card;
}

//show comments:
function showComments(){
    //remove previous comments from comments div:
    ////////document.getElementById("comments").replaceChildren(); 
    //remove previous comments from comments div:
    document.getElementById("comments").replaceChildren(); 
    //add each comment to comments element:
    comments.forEach(comment => document.getElementById("comments").appendChild(comment));

    /*for (let i=0; i<totalComments; i++){ //loop through no of comments
        let commentCard = commentCards[i]; //grab comment i's card element

        buildTime( //update card's comment-time using comment i's post date:
            commentCard.querySelectorAll(".card .card-body .comment-time")[0],
            comments[i].date);
        //https://mrfrontend.org/2017/10/2-ways-get-child-elements-javascript/

       //add comment card to comments element:
       document.getElementById("comments").appendChild(commentCard)
    };*/
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
/*var handleTooltip = new bootstrap.Tooltip(
    document.getElementById("handle-input"), { 
    placement : "right", //place to right of input
    title : "Enter Name", //give error message
    trigger : "manual" //trigger maually
});*/

//comment tooltip:
//var commentTooltip = makeToolTip("comment-input", "Enter Comment");

/*
var commentTooltip = new bootstrap.Tooltip(
    document.getElementById("comment-input"), {
    placement : "right", //place to right of input
    title : "Enter Comment", //give error message
    trigger : "manual" //trigger maually
});
*/

//check a new comment:
function checkComment(){ 

    //get trimmed input values from form:
    handleInput = document.getElementById("handle-input").value.trim();
    commentInput = document.getElementById("comment-input").value.trim();

    //check that inputs have values:
    if(handleInput.length == 0 || commentInput.length == 0){
        //add tooltip warning for empty inputs:
        if (handleInput.length == 0) {handleTooltip.show()};
        if (commentInput.length == 0) {commentTooltip.show()};
    }else{ //input was valid: ++++++++++++++++ELSE IF HERE TO CHECK THAT COMMENT NOT ALREADY ENTERED BY USER (boolean - commentMade)

        //add inputs to comment modal:
        document.getElementById("modal-handle-input").textContent = handleInput;
        document.getElementById("modal-comment-input").textContent = commentInput;

        //show comment modal:
        $("#comment-modal").modal("show");
    }
}

//add new comment:
function addComment(){

    //create new comment:
    let comment = {
        handle: handleInput, //add handle input
        comment: commentInput, //add comment input
        date: Date.now(), //add current date
        likes: 0}; //initialize likes as 0
    
    // comments.unshift(comment); //add new comment to comments
    //make card for comment:
    let commentCard = makeCommentCard(comment);

    //++++++++ADD DELETE BTN HERE ++++++++++++++
    //add delete btn to right of like btn - with click event which removes it from list.
    //remove 
    ///https://stackoverflow.com/questions/56284370/remove-self-element-onclick


    comments.unshift(makeCommentCard(comment)); //create new card for comment
    ////////////++totalComments; //increment total comments
    //////////////document.getElementById("total-comments").innerHTML = ++totalComments;
    showComments(); //show comments
    document.getElementById("comment-form").reset(); //clear form
    $("#comment-modal").modal("hide"); //hide comment modal
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

//make a tool tip with error message:
function makeToolTip(id, errorMsg){
    return new bootstrap.Tooltip(
        document.getElementById(id), { //get element
        placement : "right", //place to right of input
        title : errorMsg, //give error message
        trigger : "manual" //trigger maually
    });
}