import { useEffect, useState } from "react";
import { fetchTraderData, fetchCryptoData } from "../utils/api";
import Card from "./Card";

interface TraderData {
  profit: number;
  wallet: number;
  actions: number;
}

interface CryptoData {
  bitcoin: { usd: number };
  ethereum: { usd: number };
  dogecoin: { usd: number };
}

const Dashboard = () => {
  const [traderData, setTraderData] = useState<TraderData>({
    profit: 0,
    wallet: 0,
    actions: 0,
  });

  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const traderResult = await fetchTraderData();
        console.log("TraderData recebido:", traderResult); // Log detalhado
        // alert("TraderData recebido: " + JSON.stringify(traderResult)); // Teste com alert
        setTraderData(traderResult);

        const cryptoResult = await fetchCryptoData();
        console.log("CryptoData recebido:", cryptoResult); // Log detalhado
        setCryptoData(cryptoResult);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px"}}>Trader BOT Dashboard</h1>
      <div        
          style={{
          display: "flex",
          justifyContent: "center", // Centraliza os cards horizontalmente
          flexWrap: "wrap", // Permite quebra de linha caso necessário
          gap: "20px", // Espaçamento entre os cards
          maxWidth: "1200px",
          margin: "0 auto", // Centraliza o contêiner em relação à página
        }}
        >
          { traderData && (
            <>
      <Card title="Trader BOT Profit" value={`$${traderData.profit || "Nada"}`} />
      <Card title="Trader BOT Wallet" value={`$${traderData.wallet || "Nada"}`} />
      <Card title="Number of Actions" value={traderData.actions || "Nada"} />
      </>
    )}
{cryptoData && (
  <div>
    <Card
      title="Bitcoin Price"
      value={`$${cryptoData.bitcoin?.usd || "N/A"}`}
    />
    <Card
      title="Ethereum Price"
      value={`$${cryptoData.ethereum?.usd || "N/A"}`}
    />
    <Card
      title="Doge Price"
      value={`$${cryptoData.dogecoin?.usd || "N/A"}`}
    />
  </div>
)}
      </div>
    </div>
  );
};

export default Dashboard;
