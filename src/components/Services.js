import "./Services.css";

const Services = () => {
  return (
    <div className="services_box">
      <h2 className="services_header">Services</h2>
      <ul className="services_list">
        <li>
          <h4>Building for your needs</h4>
          <p>
            Building websites for your business´ needs and scale.
          </p>{" "}
        </li>
        <li>
          <h4>Design in modern fashion</h4>
          <p>
            Before project start, you´ll join in on the design process, and
            shaping your future site.
          </p>
        </li>
        <li>
          <h4>Customer Portal</h4>
          <p>
            A simpler two-way comminication. Client have full control over the
            developing process.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
