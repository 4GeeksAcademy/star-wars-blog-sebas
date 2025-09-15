import "../styles/scroll-container.css";

export const ScrollContainer = ({ children, title }) => (
  <div>
    <h1 className="text-light text-start ps-5 pt-5">{title}</h1>
    <div className="d-flex flex-nowrap overflow-auto pb-3 mx-5 gap-3 scrollbar-custom">
      {children}
    </div>
  </div>
);
