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
      <p> Footer is Under construction</p>

      <p
        style={{
          letterSpacing: "5px",
          color: "lightgrey",
          position: "absolute",
          right: "8%",
          bottom: "2%",
          fontSize: "1rem",
        }}
      >
        This page was created using React.js by Tomasz Rohda©️
      </p>
    </footer>
  );
};

export default Footer;
