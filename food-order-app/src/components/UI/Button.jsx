export default function Button({ children, className, textOnly, ...props }) {
  const cssClasses = textOnly ? "text-button" : "button";
  cssClasses.concat(` ${className}`);

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
