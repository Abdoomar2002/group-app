import { useEffect, useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";

function EditItem({
  id,
  name,
  description,
  handleChange,
  setEditState,
  editState,
}) {
  //set the data indvidually state of the edited item
  const [groupData, setGroupData] = useState({
    id: "",
    name: "",
    description: "",
  });
  // load the sended data from the parent every time the state of the modal changed
  useEffect(() => {
    setGroupData({ id, name, description });
  }, [editState]);
  // handel  change on the data by input name and its value
  function handleChangeData(e) {
    const { name, value } = e.target;
    //set the old data and the new data
    setGroupData({
      ...groupData,
      [name]: value,
    });
  }
  return (
    <Modal
      show={editState} //show or hide the modal on the edit state from parent
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setEditState(false)} // hide the modal
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Group Item</Modal.Title>
      </Modal.Header>

      <Modal.Body>
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
              value={groupData.name} //set the data to the state for updating the value
              onChange={handleChangeData} //handel input change data to the state
              placeholder="Enter group name"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} controlId="Description">
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              required
              as="textarea"
              name="description"
              value={groupData.description} //set the data to the state for updating the value
              onChange={handleChangeData} //handel input change data to the state
              placeholder="Enter group description"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid description.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setEditState(false)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleChange.bind(this, groupData)} //send the new data to the parent to handel it
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditItem;
