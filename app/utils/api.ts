import axios from "axios";

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

const instance = axios.create({
  baseURL: "https://3bbf-2804-1b2-11c0-2b7b-b464-507b-7d62-b321.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true", // Ignora o aviso do ngrok
  },
});
// Função para buscar dados do trader
export const fetchTraderData = async (): Promise<TraderData> => {
  try {
    const response = await instance.get<TraderData>("/api/trader-data");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados de trader:", error);
    throw error;
  }
};

// Função para buscar dados de preços de criptomoedas
export const fetchCryptoData = async (): Promise<CryptoData> => {
  try {
    const response = await instance.get<CryptoData>("/api/crypto");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados de criptomoedas:", error);
    throw error;
  }
};
