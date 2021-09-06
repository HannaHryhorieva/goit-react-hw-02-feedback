const Container = ({ title = '', children }) => (
  <div className="Container">
    <h3>{title}</h3>
    {children}
  </div>
);

export default Container;
