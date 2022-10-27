import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3000/";

export default function Create() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.post(`${baseURL}/login`).then((response) => {
      setPost(response.data);
    });
  }, []);

  

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}