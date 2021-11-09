
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
        new Comment("Orinoco", "Bob comment", 1636408053214, 6),
        new Comment("Frank", "Frank comment", 1636408053214, 6),
        new Comment("Billy", "Billy comment", 1636408053214, 3),
        new Comment("Terry", "Terry comment",1636408053214, 6));

    console.log(comments); //+++++++++++
    totalComments = comments.length; //set totalComments
    for (let i=0; i<totalComments; i++){ //loop through no of comments
        buildCommentCard(comments[i]);  //build commentCard for comment i
        totalLikes += comments[i].likes;} //add comment i's likes to total likes
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
    let text = makeElement("p", "card-text comment-text"); //comment
    let time = makeElement("p", "card-text text-muted comment-time"); //time
    //////////let timeIcon = makeElement("i", "far fa-clock"); //time icon
    let likeBtn = makeElement("button", "btn btn-sm btn-outline-secondary comment-like-btn"); //like button
    let likeBtnIcon = makeElement("i", "far fa-thumbs-up"); //like button icon
    let likeBtnText = document.createTextNode(" Like"); //like button text

    //build card, adding comment's values to elements:
    likeBtn.replaceChildren(likeBtnIcon, likeBtnText); //add icon and text to like button
    //likeBtn.appendChild(likeBtnIcon); //add icon to like button
    //likeBtn.appendChild(likeBtnText); //add text to like button
    likeBtn.addEventListener("click", function(){  //add click event listener to button
        likeClick(comment, likeBtn, likes); }); //call likeClick() on click
    //////////postTime.textContent = buildPostTime(comment.post_date); //add build post date
    ////////////////time.appendChild(timeIcon); //add time icon to time //??????????????
    text.textContent = comment.comment; //add comment's text to comment text
    likesContainer.appendChild(likesIcon); //add likes icon to likes container
    likes.textContent = " " + comment.likes; //add comment's likes to likes
    likesContainer.appendChild(likes); //add likes to likes container
    cardTitle.appendChild(likesContainer); //add likes container to card title
    handle.textContent = comment.handle; //add current handle to handle
    cardTitle.appendChild(makeElement("i", "fas fa-at")); //????????????????????
    cardTitle.appendChild(handle); //add handle to card title
    cardBody.appendChild(cardTitle); //add card title to card body
    cardBody.appendChild(text); //add comment text to card body
    cardBody.appendChild(time); //add time to card body
    cardBody.appendChild(likeBtn); //add button to card body
    card.appendChild(cardBody); //add card body to card

    //add built card to array:
    commentCards.unshift(card);
}

function showComments(){
    //remove previous comments from comments div:
    document.getElementById("comments").replaceChildren(); 

    for (let i=0; i<totalComments; i++){ //loop through no of comments
        let commentCard = commentCards[i]; //grab comment i's card element

        buildTime( //update card's comment-time using comment's post date:
            commentCard.querySelectorAll(".card .card-body .comment-time")[0],
            comments[i].post_date);
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

//add new comment:
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

//respond to like button click:
function likeClick(comment, likeBtn, likes){

    //get like button's icon and text content:
    let likeBtnIcon = likeBtn.querySelectorAll(".fa-thumbs-up")[0];
    let likeBtnText = likeBtn.textContent;

    //if holding an icon with a "far" class (wasn't prev clicked):
    if(likeBtnIcon.classList.contains("far")){

        totalLikes++; //increment total likes
        //increment and show comment likes:
        likes.textContent = " " + ++comment.likes;
        //change to icon with "fas" class:
        likeBtnIcon = makeElement("i", "fas fa-thumbs-up");
        likeBtn.style.fontWeight = "bold"; //bolden text

    }else{  //holding an icon with "fas" class (was prev clicked):
       
        totalLikes--; //decrement total likes
        //decrement and show comment likes:
        likes.textContent = " " + --comment.likes;
        //change to icon with "far" class:
        likeBtnIcon = makeElement("i", "far fa-thumbs-up");
        likeBtn.style.fontWeight = "normal"; //unbolden text
    }
    //change likeBtn to new state:
    likeBtn.replaceChildren(likeBtnIcon, likeBtnText);
}



//#############
/*
       // https://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements

       https://www.w3schools.com/w3css/w3css_animate.asp


       https://stackoverflow.com/questions/35538057/css-bootstrap-creating-elements-via-javascript/35538121
   
   
       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fieldshttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
      
   
       //https://getbootstrap.com/docs/5.0/utilities/sizing/
*/
