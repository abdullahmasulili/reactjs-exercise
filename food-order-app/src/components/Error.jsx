export default function Error({ message, title }) {
  return (
    <div
      className="error"
      style={{
        margin: "auto",
        padding: "1rem",
        backgroundColor: "#fca5a5",
        color: "#dc2626",
        borderRadius: "15px",
        width: "500px",
      }}
    >
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
