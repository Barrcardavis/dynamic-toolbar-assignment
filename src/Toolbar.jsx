import AlertButton from "./AlertButton";

function Toolbar() {
  const buttons = [
    { message: "Downloading!", children: "Download File" },
    { message: "Sharing!", children: "Share Document" },
    { message: "Uploading!", children: "Upload Image" },
    { message: "Saving!", children: "Save Changes" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Toolbar</h1>

      {buttons.map((btn, index) => (
        <AlertButton
          key={index}
          message={btn.message}
        >
          {btn.children}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;
