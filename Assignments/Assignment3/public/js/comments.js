
//comment object:
class Comment{
    //constructor sets properties:
    constructor(handle, comment, post_date, likes){
        this.handle = handle;
        this.comment = comment;
        this.post_date = post_date;
        this.likes = likes;
    }
}

var comments = []; //comments
var commentCards = []; //cards for displaying comments
var totalComments = 0; //number of comments
var totalLikes = 0; //number of likes

//build comments:
function buildComments(){
    comments.push( //add test comments to mimic db pull:
        new Comment("Orinoco", "Bob comment", Date.now(), 6),
        new Comment("Frank", "Frank comment", Date.now(), 6),
        new Comment("Billy", "Billy comment", Date.now(), 6),
        new Comment("Terry", "Terry comment", Date.now(), 6));

    console.log(comments); //+++++++++++
    totalComments = comments.length; //set totalComments
    comments.forEach(buildCommentCard); //build commentCards for comments
    console.log(commentCards); //+++++++++++
    showComments(); //show comments on page
}

//build card element for comment:  
function buildCommentCard(comment){

    console.log("Adding: " + comment.handle); //+++++++++++

    //create html elements with class names:
    let card = makeElement("div", "card comment"); //card
    let cardBody = makeElement("div", "card-body"); //card body
    let cardTitle = makeElement("div", "card-title"); //card title
    let handle = makeElement("span", "comment-handle"); // handle
    let likesContainer = makeElement("span", "comment-likes-container"); //likes container
    let likesIcon = makeElement("i", "far fa-thumbs-up comment-likes-icon"); //likes icon
    let likes = makeElement("span", "text-muted comment-likes"); //likes
    let commentText = makeElement("p", "card-text comment-text"); //comment
    /////<i class="far fa-clock"></i>
    let postTime = makeElement("p", "card-text text-muted comment-post-time"); //post time
    let likeBtn = makeElement("button", "btn btn-sm btn-outline-secondary comment-like-btn"); //like button
    let likeBtnIcon = makeElement("i", "far fa-thumbs-up"); //like button icon
    let likeBtnText = document.createTextNode(" Like"); //like button text

    //build card, adding comment's values to elements:
    likeBtn.appendChild(likeBtnIcon); //add icon to like button
    likeBtn.appendChild(likeBtnText); //add text to like button
    likeBtn.addEventListener("click", function(){  //add click event listener to button
        likeClick(comment, likeBtn, likes); }); //call likeClick() on click
    //////////postDate.textContent = buildPostDate(comment.post_date); //add build post date
    commentText.textContent = comment.comment; //add comment's text to comment text
    likesContainer.appendChild(likesIcon); //add likes icon to likes container
    likes.textContent = " " + comment.likes; //add comment's likes to likes
    likesContainer.appendChild(likes); //add likes to likes container
    cardTitle.appendChild(likesContainer) //add likes container to card title
    handle.textContent = comment.handle; //add current handle to handle
    cardTitle.appendChild(handle); //add handle to card title
    cardBody.appendChild(cardTitle); //add card title to card body
    cardBody.appendChild(commentText); //add comment text to card body
    cardBody.appendChild(postTime); //add post time to card body
    cardBody.appendChild(likeBtn); //add button to card body
    card.appendChild(cardBody); //add card body to card

    //add built card to array:
    commentCards.unshift(card)
}

function showComments(){

    //remove previous comments from comments div:
    /////////////document.getElementById("comments").replaceChildren();

    //loop through comments length:
    for (let i=0, j=comments.length; i<j; i++){

        let commentCard = commentCards[i]; //grab comment's card element

        //update card's comment-post-time using comment's post date:
        commentCard.querySelectorAll(".card .card-body .comment-post-time")[0]
            .textContent = buildPostTime(comments[i].post_date);
        //https://mrfrontend.org/2017/10/2-ways-get-child-elements-javascript/
        
       //add comment card element to comments element:
       document.getElementById("comments").appendChild(commentCard);
    }
}

function buildPostTime(postDate){
    console.log(postDate);
    return postDate;
    
}

function addComment(){

    //+++++++++++++++++++++++++++CHeck that both forms have valid data. THEN:

    //create new comment:
    let comment = new Comment(
        document.getElementById("handle").value, //get handle from form
        document.getElementById("comment").value, //get comment from form
        Date.now(), //add current date
        0); //initialize likes as 0
    
    comments.unshift(comment); //add new comment to comments
    buildCommentCard(comment); //create new card for comment
    totalComments++; //increment comment count
    showComments(); //show comments

    console.log(comments); //+++++++++++
}

//make a html element with classname:
function makeElement(type, className){ 
    let element = document.createElement(type); //create element
    element.className = className; //give classname
    return element;
}

function likeClick(comment, likeBtn, likes){

    //REPLACE CHILDREN REMOVES BOTH ELEMENTS :P
    ///currComment.addLike();
    /*
    likeBtn.removeChild(likeBtnIcon);
    likeBtn.removeChild(likeBtnText);
    likeBtnIcon = makeElement("i", "fas fa-thumbs-up"); 
    likeBtn.appendChild(likeBtnIcon);
    likeBtn.appendChild(likeBtnText); //add text to like button
    */

}



//#############
/*
       // https://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements

       https://www.w3schools.com/w3css/w3css_animate.asp


       https://stackoverflow.com/questions/35538057/css-bootstrap-creating-elements-via-javascript/35538121
   
   
       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fieldshttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
      
   
       //https://getbootstrap.com/docs/5.0/utilities/sizing/
*/
