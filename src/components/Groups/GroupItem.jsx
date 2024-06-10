import { Button } from "react-bootstrap";
// component to handle the the display way of the group items
function GroupItem({
  id,
  name,
  description,
  createAt,
  handelDelete,
  handelEditing,
  handlePostsState,
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{createAt}</td>

      <td>
        <Button variant="info" onClick={handelEditing.bind(this, id)}>
          {" "}
          {/*set the object id to parent lifting state up */}
          Edit
        </Button>{" "}
      </td>
      <td>
        <Button variant="info" onClick={handlePostsState.bind(this, id)}>
          {" "}
          View
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={handelDelete.bind(this, id)}>
          {/*set the object id to parent lifting state up */}
          Delete
        </Button>{" "}
      </td>
    </tr>
  );
}
export default GroupItem;
