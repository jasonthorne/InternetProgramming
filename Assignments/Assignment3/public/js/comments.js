
var comments = []; //holds comments

//load comments from db:
function loadComments(){
    comments.push( //add test comments to mimic remote pull:
        {handle: "Bob", comment: "Bob comment", post_date: Date.now(), likes: 6}, 
        {handle: "Frank", comment: "Frank comment", post_date: Date.now(), likes: 6},
        {handle: "Billy", comment: "Billy comment", post_date: Date.now(), likes: 6}, 
        {handle: "Terry", comment: "Terry comment", post_date: Date.now(), likes: 6}) 

    console.log(comments); //+++++++++++
    showComments();
}

//show comments:
function showComments(){

    /*
    https://stackoverflow.com/questions/35538057/css-bootstrap-creating-elements-via-javascript/35538121
    */

    //https://getbootstrap.com/docs/5.0/utilities/sizing/

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

