import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import GroupFrom from "./GroupForm";
import GroupList from "./GroupList";
function Home() {
  //use state to handle pages instead of router because its only two page
  const [activePage, setActivePage] = useState("form");
  // use state to handle the data over the app
  const [groupItems, setGroupItems] = useState([]);

  //Load Data from Local Storage only on the application reload
  useEffect(() => {
    let items = localStorage.getItem("groupData");
    if (items) {
      setGroupItems(JSON.parse(items));
    }
  }, []);

  // Set Data to Local Storage every time the group items changed
  useEffect(() => {
    if (groupItems.length > 0) {
      localStorage.setItem("groupData", JSON.stringify(groupItems));
    }
  }, [groupItems]);

  //show the Group List Component
  function ShowLists() {
    setActivePage("list");
  }
  //show the Group Form Component
  function ShowForms() {
    setActivePage("form");
  }
  return (
    <Container>
      <div className="Header">
        <h1>Group App</h1>
        <Navbar ShowLists={ShowLists} ShowForms={ShowForms} />
      </div>
      {activePage == "form" ? (
        <GroupFrom setGroupItems={setGroupItems} />
      ) : (
        <GroupList setGroupItems={setGroupItems} groupItems={groupItems} />
      )}
    </Container>
  );
}
export default Home;
