import { ListGroup } from "react-bootstrap";

function PostList({ posts }) {
  return (
    <ListGroup style={{ gap: 10 }}>
      {posts &&
        posts.map((post, index) => (
          <ListGroup.Item key={index}>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default PostList;
