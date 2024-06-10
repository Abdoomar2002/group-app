import { Button, Nav, NavLink } from "react-bootstrap";

function Navbar(props) {
  const items = [
    {
      name: "Add Group",
      link: props.ShowForms,
    },
    {
      name: "View Groups",
      link: props.ShowLists,
    },
  ];
  return (
    <Nav>
      {items.map((item, index) => (
        <Button key={index} onClick={item.link}>
          {item.name}
        </Button>
      ))}
    </Nav>
  );
}
export default Navbar;
