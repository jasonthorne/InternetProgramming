
var comments = []; //holds comments

//load comments from db:
function loadComments(){
    comments.push( //add test comments to mimic remote pull:
        {handle: "@Bob", comment: "Bob comment", post_date: Date.now()}, 
        {handle: "@Frank", comment: "Frank comment", post_date: Date.now()},
        {handle: "@Billy", comment: "Billy comment", post_date: Date.now()}, 
        {handle: "@Terry", comment: "Terry comment", post_date: Date.now()}) 

    console.log(comments); //+++++++++++
    showComments();
}

//show comments:
function showComments(){

    

    var test = 
    "<table>\n" +
    "<tr>\n" +
        "<td>Emil</td>\n" +
        "<td>Tobias</td>\n" +
        "<td>Linus</td>\n" +
    "</tr>\n" +
    "</table>";

    //document.getElementById("comments").innerHTML = comments[0].post_date;

   /// document.getElementById("comments").innerHTML = test;

}

function addComment(){


}

