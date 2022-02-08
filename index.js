// Import stylesheets
import './style.css';
import data from './json/data';

// Write Javascript code!
const appDiv = document.getElementById('title');
console.log(data);
appDiv.innerHTML = `<h1>JS Starter</h1>`;

generatePostCommentSection();
attachListener();

//generateListOfComment();
function attachListener() {
  document.querySelector('#postComment').addEventListener('click', (event) => {
    console.log(event.target.tagName);
    if (
      event.target.tagName === 'BUTTON' &&
      document.querySelector('#commentValue').value
    ) {
      console.log(document.querySelector('#commentValue').value);

      generateListOfComment(document.querySelector('#commentValue').value);
      document.querySelector('#commentValue').value = '';
    }
  });

  document.querySelector('.commentsList').addEventListener('click', (event) => {
    console.log(event.target.parentNode);
    if (event.target.tagName === 'A') {
      removeComment(event.target.parentNode);
    }
  });
}

function removeComment(node) {
  document.querySelector('.commentsList').removeChild(node);
}

function generateListOfComment(comment) {
  var commentDiv = document.createElement('div');

  /////
  var commentSpan = document.createElement('span');
  commentSpan.innerHTML = comment;
  commentDiv.appendChild(commentSpan);
  //////

  var deleteLink = document.createElement('a');
  deleteLink.className = 'delete-link';
  deleteLink.innerHTML = 'Delete';
  deleteLink.href = '#';
  commentDiv.appendChild(deleteLink);

  //////
  commentDiv.appendChild(document.createElement('hr'));

  ////

  commentDiv.className = 'comment';
  document.querySelector('.commentsList').appendChild(commentDiv);
 
}
function generatePostCommentSection() {
  var comment = `
  <div>
    <div><textarea placeholder="Enter Comment" name="commentValue" id="commentValue"></textarea></div>
    <div><button>Post Comment</button></div>
  </div>
  `;

  document.querySelector('#postComment').innerHTML = comment;
}
