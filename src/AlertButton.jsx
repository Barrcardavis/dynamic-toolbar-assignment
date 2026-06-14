function AlertButton({ message, children }) {
  return (
    <button
      onClick={() => alert(message)}
      style={{
        padding: "10px 15px",
        margin: "5px",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}

export default AlertButton;
