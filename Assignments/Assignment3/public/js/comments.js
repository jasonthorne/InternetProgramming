
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
function loadComments(){
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

