export const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-md p-6 bg-white ${className}`}>
    {children}
  </div>
);
