import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteItem({ handleDeleteConfirm, setDeleteState, id, deleteState }) {
  return (
    <Modal
      show={deleteState} //show or hide the Modal built on delete state from parent
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setDeleteState(false)} //hide the Modal
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Group Item</Modal.Title>
      </Modal.Header>
      <p>Are you sure about delete this Item</p>
      <Modal.Body></Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={() => setDeleteState(false)}>
          Close
        </Button>
        {/* set the function of handle delete confirm to the on click and send the id of the deleted item  */}
        <Button variant="danger" onClick={handleDeleteConfirm.bind(this, id)}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteItem;
