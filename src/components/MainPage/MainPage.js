const MainPage = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        width: "80%",
        height: "200px",
        margin: "200px auto",
        textAlign: "center",
        border: "1px solid gray",
        color: "gray",
      }}
    >
      <h1>Main Page</h1>
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
    </section>
  );
};

export default MainPage;
