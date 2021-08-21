import "./menu.scss";

const Menu = (props) => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="works">Works</a>
        </li>
        <li>
          <a href="testimonials">Testimonials</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
