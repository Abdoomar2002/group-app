import PostForm from "./PostsForm";
import { Container, Tab, Tabs } from "react-bootstrap";
import PostsList from "./PostsList";
function Posts({ groupsItems, setGroupsItems, items }) {
  function addPost(id, data) {
    const post = groupsItems.find((element) => element.id === id);
    post.posts.push(data);
    const old = groupsItems.filter((element) => element.id !== id);
    setGroupsItems([...old, post]);
  }
  return (
    <Container>
      <div className="Header">
        <h1>Posts </h1>
      </div>
      <Tabs
        defaultActiveKey="Group"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="AddPost" title="Add new Post">
          <PostForm addPost={addPost} groupId={items.id} />
        </Tab>
        <Tab eventKey="ViewPosts" title="View Posts">
          <PostsList posts={items?.posts} />
        </Tab>
      </Tabs>
    </Container>
  );
}
export default Posts;
