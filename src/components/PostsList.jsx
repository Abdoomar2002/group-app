import { ListGroup } from "react-bootstrap";

function PostList({ posts }) {
  return (
    <ListGroup>
      {posts.map((post, index) => (
        <ListGroup.Item key={index}>
          <h5>{post.title}</h5>
          <p>{post.content}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default PostList;
