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

// Função para buscar dados do trader
export const fetchTraderData = async (): Promise<TraderData> => {
  try {
    const response = await axios.get<TraderData>("http://localhost:3001/api/trader-data");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados de trader:", error);
    throw error;
  }
};

// Função para buscar dados de preços de criptomoedas
export const fetchCryptoData = async (): Promise<CryptoData> => {
  try {
    const response = await axios.get<CryptoData>("http://localhost:3001/api/crypto");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados de criptomoedas:", error);
    throw error;
  }
};
