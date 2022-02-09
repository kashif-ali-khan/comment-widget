// Import stylesheets
import './style.css';
import data from './json/data';

// Write Javascript code!
const commentContainer = document.getElementById('commentsList');
document.querySelector('#addComment').addEventListener('click', (event) => {
  addComment(event);
});

function addComment(event) {
  let wrapDiv;

  let textDiv = document.createElement('div');

  //. Reply
  let replyButton = document.createElement('button');
  replyButton.innerHTML = 'Reply';
  replyButton.className = 'reply';

  //Delete
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.className = 'deleteComment';

  //Like
  let likeButton = document.createElement('button');
  likeButton.innerHTML = 'Like';
  likeButton.className = 'likeComment';

  if (hasClass(event.target.parentElement, 'container')) {
    let commentValue = document.querySelector('#comment').value;
    wrapDiv = document.createElement('div');
    wrapDiv.style.marginLeft = 0;
    wrapDiv.className = 'wrapper';
    textDiv.innerHTML = commentValue;
    wrapDiv.append(textDiv, replyButton, likeButton, deleteButton);
    commentContainer.appendChild(wrapDiv);
    document.querySelector('#comment').value = '';
  } else {
    wrapDiv = event.target.parentElement;

  }
}

function hasClass(elem, className) {
  return elem.className.split(' ').indexOf(className) > -1;
}

document
  .getElementById('commentsList').addEventListener('click', (event) => {
    console.log(event.target.className)

    if (hasClass(event.target, 'likeComment')) {
      const likeValue = event.target.innerHTML;
      event.target.innerHTML = event.target.innerHTML !== 'Like' ? Number(likeValue) + 1 : 1;
    } else if (hasClass(event.target, 'deleteComment')) {
      event.target.parentElement.remove();
    }else if (hasClass(event.target, 'cancelReply')) {
     event.target.parentElement.innerHTML = '';
    }

    

    else if (hasClass(event.target, 'reply')) {
      console.log(event.target.parentElement);
      const parentDiv = event.target.parentElement;

      const wrapDiv = document.createElement('div');
      wrapDiv.className = 'wrapper';
      wrapDiv.style.marginLeft = (parseInt(parentDiv.style.marginLeft)+15).toString()+'px';
      console.log( wrapDiv.style.marginLeft);
      const textarea = document.createElement('textarea');
      textarea.style.marginRight = '20px';

      const addReply = document.createElement('button');
      addReply.className = 'addReply';
      addReply.innerHTML = 'Add'

      const cancelReply = document.createElement('button');
      cancelReply.className = 'cancelReply';
      cancelReply.innerHTML = 'Cancel'


      wrapDiv.append(textarea,addReply,cancelReply);
      parentDiv.appendChild(wrapDiv);

    }



  })

