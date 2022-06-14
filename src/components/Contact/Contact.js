import ContactElement from "./ContactElement";
import "./ContactStyles.css";
const Contact = () => {
  return (
    <section className="contactWrapper">
      <ContactElement topStripeColor={"black"} headerText={"Email-Me"} />
      <ContactElement topStripeColor={"#007EBB"} headerText={"LinkedIn-Me"} />
      <ContactElement
        topStripeColor={"rgba(74, 153, 74, 0.9)"}
        headerText={"Call-Me"}
      />
    </section>
  );
};

export default Contact;
