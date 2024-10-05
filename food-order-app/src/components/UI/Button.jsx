export default function Button({ caption, ...props }) {
  return <button {...props}>{caption}</button>;
}
