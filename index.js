// Import stylesheets
import './style.css';
import data from './json/data';

// Write Javascript code!
const appDiv = document.getElementById('title');
console.log(data);
appDiv.innerHTML = `<h1>JS Starter</h1>`;

generatePostCommentSection();
attachPostCommentListener();

//generateListOfComment();
function attachPostCommentListener(){
  document.querySelector("#postComment").addEventListener('click', (event)=>{
    console.log(event.target.tagName)
    if(event.target.tagName === 'BUTTON' && document.querySelector("#commentValue").value ){
      console.log(document.querySelector("#commentValue").value)

      generateListOfComment(document.querySelector("#commentValue").value);
      document.querySelector("#commentValue").value = '';
    }
  })
}

function generateListOfComment(comment){
  var commentDiv = document.createElement('div');
  commentDiv.innerHTML = comment;
  commentDiv.className = 'comment';
  document.querySelector(".commentsList").appendChild(commentDiv);
  document.querySelector(".commentsList").appendChild(document.createElement('hr'));


}
function generatePostCommentSection(){

  var comment = `
  <div>
    <div><textarea placeholder="Enter Comment" name="commentValue" id="commentValue"></textarea></div>
    <div><button>Post Comment</button></div>
  </div>
  `;

  document.querySelector("#postComment").innerHTML = comment;

}


