import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        backgroundColor: "grey",
        margin: 0,
        padding: 0,
        alignItems: "center",
      }}
    >
      <Outlet />
    </div>
  );
}
