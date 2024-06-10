import { Container, Tab, Tabs } from "react-bootstrap";

import { useEffect, useState } from "react";
import GroupFrom from "./GroupForm";
import GroupList from "./GroupList";
import { Toaster } from "react-hot-toast";
function Home() {
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

  return (
    <Container>
      <div className="Header">
        <h1>Group App</h1>
        <h4>A simple app to Add, View, Edit and Delete Groups </h4>
        <br />
        <Tabs
          defaultActiveKey="Group"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="AddGroup" title="Add new Group">
            <GroupFrom setGroupItems={setGroupItems} />
          </Tab>
          <Tab eventKey="ViewGroups" title="View Groups">
            <GroupList setGroupItems={setGroupItems} groupItems={groupItems} />
          </Tab>
        </Tabs>
      </div>
      <Toaster />
    </Container>
  );
}
export default Home;
