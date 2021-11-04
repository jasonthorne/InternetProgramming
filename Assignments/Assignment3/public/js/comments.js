

var comments = [{make: "Ford", model: "Mondeo", age: 2, mileage: 10000}];
document.getElementById("testId").innerHTML = comments[0].age;
console.log(comments);

//load comments from db:
//function loadComments(){
function test(){

    //test comments to mimic those pulled remotely:
    comments.push({make: "Ford", model: "Mondeo", age: 2, mileage: 10000}, 
    {make: "Ford2", model: "Mondeo2", age: 22, mileage: 100002})

    document.getElementById("testId").value = comments;


}

function buildComments(){

}




