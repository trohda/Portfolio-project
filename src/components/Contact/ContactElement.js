import "./ContactElementStyles.css";

const ContactElement = ({ topStripeColor }) => {
  return (
    <div className="contactElementWrapper">
      <div
        className="contactElementTopStripe"
        style={{ backgroundColor: topStripeColor }}
      ></div>
    </div>
  );
};

export default ContactElement;
