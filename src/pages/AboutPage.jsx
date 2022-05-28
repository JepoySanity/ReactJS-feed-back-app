import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h3>This is the about page</h3>
        <p>This is a react app to leave feedback for a product or service</p>
        <Link to="/">back to home page</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
