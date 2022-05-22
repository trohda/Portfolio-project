import "./MainPageStyles.css";
const MainPage = () => {
  return (
    <section>
      <div className="mainPageLayout">
        <div className="mainPageLayoutHeader">
          <h1>Welcome to my portfolio</h1>
        </div>

        <article>
          <div className="aboutPage">
            <h2>Welcome!</h2>
            <p>
              My name is Tomek and i am author of this web page. You can find
              here an information about my completed project and private
              information about me, by navigating through the page using the top
              menu.
              <br />
              I`ve use react.js library to crate this website. Most time i`ve
              spent to give CSS style almost every element, to make the website
              look its best. Some of backgrounds i`ve drew in open source vector
              graphics editor Inkscape.
              <br />
              Have a nice surfing...
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MainPage;
