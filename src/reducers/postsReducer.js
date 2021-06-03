export function postsReducer(state = {posts: []}, action) {
  switch (action.type) {
    case "ADD_POST":
      return{posts: [...state.posts, action.payload]}
    case "DELETE_POST":
      return{posts: [...state.posts, action.payload]}
    case "FETCH_POSTS":
      return{posts:action.paylaod}
    case "ADD_POST":
      const updatedPost = state.posts.find(post => post.id === action.payload.postId) // first find post that comment is associated with
      updatedPost.comment = [...updatedPost.comments, action.payload] // replace comments property on the post
      return {posts: state.posts.map(post => post.id === updatedPost.id ? updatedPost : post)} //return new state with update post comments
    default:
      return state
    }
  }