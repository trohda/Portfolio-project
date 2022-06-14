import "./ContactElementStyles.css";

const ContactElement = ({
  topStripeColor,
  headerText,
  contentText,
  contactTarget,
}) => {
  return (
    <div className="contactElementWrapper">
      <div
        className="contactElementTopStripe"
        style={{ backgroundColor: topStripeColor }}
      ></div>
      <div className="contactElementHeader">
        <h2>{headerText}</h2>
      </div>
      <div className="contactElementContent">
        <p>{contentText}</p>
        {contactTarget.map((el) => {
          return (
            <a href={el.href} key={el.name} target={el.target} rel="noreferrer">
              {el.name}
            </a>
          );
        })}
      </div>
      <div className="contactElementFooter"></div>
    </div>
  );
};

export default ContactElement;
