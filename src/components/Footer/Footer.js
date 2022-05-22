const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        height: "100px",
        position: "relative",
        textAlign: "center",
        letterSpacing: "25px",
        fontSize: "2rem",
        borderTop: "1px solid gray",
        color: "gray",
      }}
    >
      <p> Footer </p>

      <p
        style={{
          fontFamily: '"Alegreya Sans SC", sans-serif',
          letterSpacing: "5px",
          color: "white",
          position: "absolute",
          right: "0%",
          bottom: "0%",
        }}
      >
        This page was created using react
      </p>
    </footer>
  );
};

export default Footer;
