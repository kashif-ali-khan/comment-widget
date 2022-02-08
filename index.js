// Import stylesheets
import './style.css';
import data from './json/data';

// Write Javascript code!
const appDiv = document.getElementById('title');
console.log(data);
appDiv.innerHTML = `<h1>Comments Starter</h1>`;

generatePostCommentSection();
attachListener();

//generateListOfComment();
function attachListener() {

  // Post Comment Litener
  document.querySelector('#postComment').addEventListener('click', (event) => {
    if (
      event.target.tagName === 'BUTTON' &&
      document.querySelector('#commentValue').value
    ) {

      generateListOfComment(document.querySelector('#commentValue').value);
      document.querySelector('#commentValue').value = '';
    }
  });

  // Comments Delete Listener
  document.querySelector('.commentsList').addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.innerHTML === 'Delete') {
      removeComment(event.target.parentNode);
    }

    if (event.target.tagName === 'A' && event.target.innerHTML === 'reply') {
      replyComment(event.target.parentNode);
    }

    if (event.target.tagName === 'BUTTON' && event.target.innerHTML === 'Reply') {
      const replyValue = event.target.parentNode.firstChild.value
      console.log(event.target.tagName, event)
      createReplyList(replyValue);

    }


  });

//. POst Reply Listener

// document.querySelector('#postComment').addEventListener('click', (event) => {
//   if (
//     event.target.tagName === 'BUTTON' &&
//     document.querySelector('#commentValue').value
//   ) {

//     generateListOfComment(document.querySelector('#commentValue').value);
//     document.querySelector('#commentValue').value = '';
//   }
// });


}

function removeComment(node) {
  document.querySelector('.commentsList').removeChild(node);
}

function replyComment(node){
  console.log('Here')
  const replyNode = document.createElement('div');
  replyNode.className = 'reply-section';
  const textareaNode = document.createElement('textarea');
  textareaNode.placeholder = 'Reply';
  replyNode.appendChild(textareaNode);

  const replyButton = document.createElement('button');
  replyButton.innerHTML = 'Reply';
  replyButton.className = 'reply-button';
  replyNode.appendChild(replyButton);

  node.appendChild(replyNode);

}

function createReplyList(value){

}

function generateListOfComment(comment) {
  var commentDiv = document.createElement('div');

  /////
  var commentSpan = document.createElement('span');
  commentSpan.innerHTML = comment;
  commentDiv.appendChild(commentSpan);
  //////

  var deleteLink = document.createElement('a');
  deleteLink.className = 'delete-link p-icon--delete';
  deleteLink.innerHTML = 'Delete';
  deleteLink.href = '#';
  commentDiv.appendChild(deleteLink);
  /////////

  //////. Reply link. ///////////

  var replyLink = document.createElement('a');
  replyLink.className = 'reply-link p-icon--external-link';
  replyLink.innerHTML = 'reply';
  replyLink.href = '#';
  commentDiv.appendChild(replyLink);
  ///////

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
