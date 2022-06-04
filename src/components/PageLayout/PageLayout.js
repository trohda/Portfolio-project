import "./PageLayoutStles.css";

const PageLayout = (props) => {
  return <div className="pageLayoutWrapper">{props.children}</div>;
};

export default PageLayout;
