export default function addComment(comment) {
  return function(dispatch) {
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {Accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({comment: comment})
    }).then(r => r.json())
    .then(comment => dispatch({type: "ADD_COMMENT", payload: comment}))
  }

}

