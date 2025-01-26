// Header.js
const Header = () => (
  <header
    style={{
      textAlign: "center",
      marginBottom: "30px",
      padding: "20px 10px",
      background: "linear-gradient(90deg, #0A1A5E, #87CEFA)",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      color: "white",
    }}
  >
        {/* Logo no lado esquerdo */}
        <img
      src="/bot.jpeg" // Caminho para sua logo
      alt="logo"
      style={{
        width: "50px",
        height: "50px",
        objectFit: "cover",
        borderRadius: "8px",
      }}
    />
    <h1
      style={{
        color: "#FFFFFF",
        fontSize: "2.5rem",
        fontWeight: "bold",
        margin: 0,
      }}
    >
      Autonomous Trader BOT
    </h1>
    <p
      style={{
        color: "#FFFFFF",
        fontSize: "1.2rem",
        marginTop: "10px",
      }}
    >
      Empower your investments with cutting-edge technology
    </p>
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <button
        style={{
          backgroundColor: "#0A1A5E",
          border: "none",
          padding: "12px 24px",
          fontSize: "1rem",
          borderRadius: "8px",
          color: "white",
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#87CEFA";
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#0A1A5E";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }}
      >
        Get Started
      </button>
      <button
        style={{
          backgroundColor: "transparent",
          border: "1px solid #87CEFA",
          padding: "12px 24px",
          fontSize: "1rem",
          borderRadius: "8px",
          color: "#87CEFA",
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#87CEFA";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#87CEFA";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }}
      >
        Learn More
      </button>
    </div>
  </header>
);

export default Header;
