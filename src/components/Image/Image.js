const Image = ({ src, className, alt }) => {
  console.log(src);
  return <img src={src} className={className} alt={alt} />;
};

export default Image;
