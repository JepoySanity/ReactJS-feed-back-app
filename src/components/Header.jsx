import PropTypes from "prop-types";
function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "feedback ui",
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
