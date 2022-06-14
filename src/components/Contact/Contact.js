import ContactElement from "./ContactElement";
import "./ContactStyles.css";
const Contact = () => {
  return (
    <section className="contactWrapper">
      <ContactElement
        topStripeColor={"black"}
        headerText={"Email-Me"}
        contentText="Send me a mail to:"
        contactTarget={[
          {
            name: "mail@tomaszrohda.pl",
            href: "mailto: ",
            target: "none",
          },
          {
            name: "tomaszrohda2@gmail.com",
            href: "mailto:tomaszrohda2@gmail.com",
            target: "none",
          },
          {
            name: "tomaszrohda@wp.pl",
            href: "mailto:tomaszrohda@wp.pl",
            target: "none",
          },
        ]}
      />
      <ContactElement
        topStripeColor={"#007EBB"}
        headerText={"LinkedIn-Me"}
        contentText="Send me a message on my LinkedIn profile:"
        contactTarget={[
          {
            name: "https://www.linkedin.com/in/tomasz-rohda/",
            href: "https://www.linkedin.com/in/tomasz-rohda/",
            target: "blank",
          },
        ]}
      />
      <ContactElement
        topStripeColor={"rgba(74, 153, 74, 0.9)"}
        headerText={"Call-Me"}
        contentText="Call me on my number:"
        contactTarget={[
          { name: "+48 501-096-652", href: "tel:501-096-652", target: "none" },
        ]}
      />
    </section>
  );
};

export default Contact;
