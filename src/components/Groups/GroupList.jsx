import { Table } from "react-bootstrap";
import GroupItem from "./GroupItem";
import { useState } from "react";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import toast from "react-hot-toast";
import Posts from "../Posts/Posts";

function GroupList({ groupItems, setGroupItems }) {
  // set the state of the editing or deleted item ,Edit Modal show state , Delete Modal show state
  const [editedItem, setEditItem] = useState({});
  const [editState, setEditState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [postsState, setPostsState] = useState(false);

  // handel the deleted item from the tabel
  function handelDelete(id) {
    //get the target item
    const item = groupItems.find((element) => element.id === id);
    //set the state of the deleted item
    setEditItem(item);
    //show the delete modal
    setDeleteState(true);
  }
  // handel the edited item from the tabel
  function handelEditing(id) {
    //get the target item
    const item = groupItems.find((element) => element.id === id);
    //set the state of the edited item
    setEditItem(item);
    //show the edit modal
    setEditState(true);
  }
  function handlePostsState(id) {
    const item = groupItems.find((element) => element.id === id);
    //set the state of the edited item
    setEditItem(item);
    //show the edit modal
    setPostsState(!postsState);
  }
  // handel the edit confirmation
  function handleChange(data) {
    // find the edited item from the groupItems
    let newItem = groupItems.find((element) => {
      return element.id === data.id;
    });
    // update the item
    newItem.name = data.name;
    newItem.description = data.description;
    // update the groupItems
    const items = groupItems.filter((element) => element.id !== data.id);
    setGroupItems([...items, newItem]);
    toast.success("Group edited successfully");

    //hide the edit Modal
    setEditState(false);
  }
  // handel the delete confirmation
  function handleDeleteConfirm(id) {
    // filter the groupItems to remove the deleted item
    const items = groupItems.filter((element) => element.id !== id);
    setGroupItems(items);
    toast.success("Group deleted successfully");
    // hide the Delete Modal
    setDeleteState(false);
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Group Name</td>
            <td>Group Descrtiption</td>
            <td>Created At</td>
            <td>Edit</td>
            <td>View Posts</td>
            <td>Delete </td>
          </tr>
        </thead>
        <tbody>
          {groupItems &&
            groupItems.map((item, index) => {
              return (
                <GroupItem
                  key={index}
                  {...item}
                  handelDelete={handelDelete}
                  handelEditing={handelEditing}
                  setEditedItem={setEditItem}
                  handlePostsState={handlePostsState}
                />
              );
            })}
        </tbody>
      </Table>

      <DeleteItem
        deleteState={deleteState}
        handleDeleteConfirm={handleDeleteConfirm}
        id={editedItem.id}
        setDeleteState={setDeleteState}
      />

      <EditItem
        editState={editState}
        setEditItem={setEditItem}
        handleChange={handleChange}
        id={editedItem.id}
        name={editedItem.name}
        description={editedItem.description}
        setEditState={setEditState}
      />
      {postsState && (
        <Posts
          items={editedItem}
          setGroupsItems={setGroupItems}
          groupsItems={groupItems}
        />
      )}
    </div>
  );
}
export default GroupList;
