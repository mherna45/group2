

const postsContainer = document.getElementById("posts");
const submitPostBtn = document.getElementById("submit-post");
const newPostTextarea = document.getElementById("new-post");

submitPostBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const newPost = newPostTextarea.value;
  // Add the post to the posts container
  const postElement = createPostElement(newPost);
  postsContainer.appendChild(postElement);
});

function createPostElement(postText) {
  // Create the post element
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  // Add the post text
  const postTextElement = document.createElement("p");
  postTextElement.innerText = postText;
  postElement.appendChild(postTextElement);

  // Add the comment form
  const commentForm = document.createElement("form");
  const commentInput = document.createElement("textarea");
  const commentSubmitBtn = document.createElement("button");
  commentSubmitBtn.innerText = "Submit Comment";
  commentForm.appendChild(commentInput);
  commentForm.appendChild(commentSubmitBtn);
  postElement.appendChild(commentForm);

  // Add the upvote and downvote buttons
  const voteButtonsContainer = document.createElement("div");
  voteButtonsContainer.classList.add("vote-buttons");
  const upvoteBtn = document.createElement("button");
  upvoteBtn.innerText = "Upvote";
  voteButtonsContainer.appendChild(upvoteBtn);
  const downvoteBtn = document.createElement("button");
  downvoteBtn.innerText = "Downvote";
  voteButtonsContainer.appendChild(downvoteBtn);
  postElement.appendChild(voteButtonsContainer);

  // Add the delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  postElement.appendChild(deleteBtn);

  // Add the edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  postElement.appendChild(editBtn);

  return postElement;
}
