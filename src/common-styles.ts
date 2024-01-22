export const formStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
  marginBottom: "20px",
};

export const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "5px",
  fontWeight: "bold",
};

export const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 10px",
  margin: "8px 0",
  display: "inline-block",
  borderRadius: "4px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

export const buttonStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#007bff",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export const tableContainerStyle: React.CSSProperties = {
  margin: "20px 0",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#fff",
};

export const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
};

export const tableCellStyle: React.CSSProperties = {
  borderBottom: "1px solid #ddd",
  padding: "10px",
  textAlign: "left",
};

export const tableHeaderStyle: React.CSSProperties = {
  ...tableCellStyle,
  background: "#007bff",
  color: "#fff",
  padding: "10px 15px",
  textAlign: "left",
  borderBottom: "2px solid #006fe6",
  fontWeight: "bold",
};

export const tableRowStyle: React.CSSProperties = {
  borderBottom: "1px solid #ddd",
};

export const headingStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#333",
};

export const containerStyle: React.CSSProperties = {
  fontFamily: '"Segoe UI", Arial, sans-serif',
  backgroundColor: "#f4f4f8",
  color: "#333",
  padding: "20px",
  maxWidth: "1000px",
  margin: "20px auto",
  borderRadius: "8px",
  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
};

export const summaryContainerStyle: React.CSSProperties = {
  backgroundColor: "#f8f9fa", // light background
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "20px 0",
  textAlign: "center",
};

export const summaryItemStyle: React.CSSProperties = {
  margin: "10px 0",
  fontWeight: "bold",
  fontSize: "1.2em",
  color: "#333",
};

export const summaryValueStyle: React.CSSProperties = {
  color: "#28a745", // green, you can change colors based on positive or negative values
};
