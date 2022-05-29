const Image = ({ src, className, alt, onClick }) => {
  return <img src={src} className={className} alt={alt} onClick={onClick} />;
};

export default Image;
