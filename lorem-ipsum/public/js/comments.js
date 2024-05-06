
var comments = []; //comments 
var commentIndex = 0; //holds index of a comment
var handleInput = ""; //holds inputted handle
var commentInput = ""; //holds inputted comment

//tool tips for error handling:
var handleTooltip = makeToolTip("handle-input", "Enter Name"); //handle tooltip
var commentTooltip = makeToolTip("comment-input", "Enter Comment");  //comment tooltip 

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
                    //add comment with card to commets:
                    comments.push(makeCommentCard(comment));
                });
                showComments(); //show comments on page
            }else{ //an error occurred during the request:
                console.log("Error: " + request.status);} //give status of request
        }
    };

    //send request for comments:
    request.send(null); 
}

//build card element for comment:
function makeCommentCard(comment){ 
    
    //create html elements with class names:
    let card = makeElement("div", "card comment"); //card
    let cardBody = makeElement("div", "card-body"); //card body
    let cardTitle = makeElement("div", "card-title"); //card title
    let handle = makeElement("span", "comment-handle"); // handle
    let likesContainer = makeElement("span", "comment-likes-container"); //likes container
    let likesIcon = makeElement("i", "far fa-thumbs-up comment-likes-icon"); //likes icon
    let likes = makeElement("span", "text-muted comment-likes"); //likes
    let text = makeElement("p", "card-text comment-text"); //comment
    let date = makeElement("p", "card-text text-muted comment-date"); //date
    let dateIcon = makeElement("i", "fa-regular fa-calendar comment-date-icon"); //date icon
    let dateText = makeElement("span", "card-text date-text"); //date text
    let likeBtn = makeElement("button", "btn btn-sm btn-outline-secondary comment-like-btn"); //like btn
    let likeBtnIcon = makeElement("i", "far fa-thumbs-up"); //like button icon
    let likeBtnText = document.createTextNode(" Like"); //like button text

    //build card from elements:
    likeBtn.replaceChildren(likeBtnIcon, likeBtnText); //build like button
    likesContainer.replaceChildren(likesIcon, likes); //build likes container
    cardTitle.replaceChildren(likesContainer, handle); //build card title
    date.replaceChildren(dateIcon, dateText); //build date
    cardBody.replaceChildren(cardTitle, text, date, likeBtn); //build card body
    card.appendChild(cardBody); //build card

    //add values to elements:
    handle.textContent = comment.handle; //add comment's handle to handle
    text.textContent = comment.comment; //add comment's text to comment text
    dateText.textContent = new Date( //add formatted date string to date text
        comment.date*1000).toLocaleString('en-GB').slice(0, -3);
    likes.textContent = " " + comment.likes; //add comment's likes to likes
    likeBtn.addEventListener("click", function(){  //add click event to like btn
        likeClick(comment, likeBtn, likes);  //call likeClick() on click
    });

    return card; //return card
}

//show comments:
function showComments(){

    //remove previous comments from comments div:
    document.getElementById("comments").replaceChildren(); 
    //add each comment to comments element:
    comments.forEach(comment => document.getElementById("comments").appendChild(comment));
}

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
    }else{ //input was valid:

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
        date: Math.floor(Date.now() / 1000), //add current date
        likes: 0 //initialize likes as 0
    }; 
    
    //make card for comment:
    let commentCard = makeCommentCard(comment);
    //make delete button:
    let deleteBtn = makeElement("button", "btn btn-sm btn-outline-secondary comment-delete-btn"); //like btn
    let deleteBtnIcon = makeElement("i", "fa-regular fa-trash-can"); //delete button icon
    let deleteBtnText = document.createTextNode(" Delete"); //delete button text
    deleteBtn.replaceChildren(deleteBtnIcon, deleteBtnText); //build delete button
    deleteBtn.addEventListener("click", function(){  //add click event to delete btn
        commentIndex = comments.indexOf(commentCard); //get index of target comment
        $("#delete-comment-modal").modal("show"); //show delete comment modal
    });
    //add delete button:
    commentCard.querySelectorAll(".card .card-body")[0].appendChild(deleteBtn);
    comments.unshift(commentCard); //add to comments
    showComments(); //show comments
    document.getElementById("comment-form").reset(); //clear form
    $("#comment-modal").modal("hide"); //hide comment modal
}

//delete a commenmt:
function deleteComment(){
    comments.splice(commentIndex, 1); //remove target comment from comments
    $("#delete-comment-modal").modal("hide"); //hide modal
    showComments(); //show comments*
}

//handle like button click:
function likeClick(comment, likeBtn, likes){

    //get like button's icon and text content:
    let likeBtnIcon = likeBtn.querySelectorAll(".fa-thumbs-up")[0];
    let likeBtnText = likeBtn.textContent;

    //if holding an icon with a "far" class (wasn't prev clicked):
    if(likeBtnIcon.classList.contains("far")){

        //increment comment likes:
        likes.textContent = " " + ++comment.likes;
        //change to icon with "fas" class:
        likeBtnIcon = makeElement("i", "fas fa-thumbs-up");

    }else{ //holding an icon with "fas" class (was prev clicked):
     
        //decrement comment likes:
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