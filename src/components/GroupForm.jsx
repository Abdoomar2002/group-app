import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Form, Button, Col, Row, FormGroup, Toast } from "react-bootstrap";
import { toast } from "react-hot-toast";
function GroupForm({ setGroupItems }) {
  //set the inputs data state
  const [formData, setFormData] = useState({
    id: uuid(), //make unique id
    name: "",
    description: "",
    createAt: "",
    posts: [],
  });
  //set the validated state of the form
  const [validated, setValidated] = useState(false);
  //handle inputs changes by the input name and its value to state
  const handleChange = (e) => {
    const { name, value } = e.target;
    //set the old other values with the new value
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // handel add new group item
  const handleSubmit = (e) => {
    // prevent the form from do any outer action
    e.preventDefault();
    // store the object form into form to get its data easily
    const form = e.currentTarget;
    // check if the form is valid
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // add the new group item to the group items list
      formData.createAt = new Date().toLocaleString(); // set the current time
      //set the item to the list
      setGroupItems((items) => {
        return [...items, formData];
      });
      toast.success("Group created successfully");
      //reset the form
      handelReset(e);
    }
  };
  // clear form inputs and data
  function handelReset(e) {
    setFormData({
      id: uuid(),
      name: "",
      description: "",
      createdAt: "",
    });
    setValidated(false); //to avoid validate error when clearing the inputs
  }
  return (
    <Form
      validated={validated}
      className="Form"
      onSubmit={handleSubmit}
      onReset={handelReset}
    >
      <Form.Group as={Row} controlId="Name">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            required
            type="text"
            name="name"
            minLength={3}
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter group name"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid name.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="Description">
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            required
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter group description"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid description.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="buttons">
        <Col sm={2}>Submit</Col>
        <Col sm={10} className="md-1">
          <div className="d-flex justify-content-between">
            <Button type="reset" className="btn-danger">
              reset
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default GroupForm;
