

var comments = []; //holds comments ++++++++++++++++++++++++++comment sucks as a name!! Should be user comment or something :P 

//load comments from db:
function loadComments(){
    //test comments, to mimic those pulled remotely:
    comments.push( 
        {handle: "Bob", comment: "I'm Bob", post_date: Date.now()}, 
        {handle: "Frank", comment: "I b Frank", post_date: Date.now()},
        {handle: "Billy", comment: "Billy was here", post_date: Date.now()}, 
        {handle: "Cuthbert", comment: "Cuthbert", post_date: Date.now()}) 


    console.log(comments);

    document.getElementById("testId").innerHTML = comments[1].comment;

    showComments();


}


function showComments(){

}

function addComment(){

}


