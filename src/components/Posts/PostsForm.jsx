import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
function PostForm({ groupId, addPost }) {
  const [formData, setFormData] = useState({
    id: uuid(),
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(groupId, formData);
    toast.success("Post Added successfully");
    setFormData({ title: "", content: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter post title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group controlId="content">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter post content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          required
        />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default PostForm;
