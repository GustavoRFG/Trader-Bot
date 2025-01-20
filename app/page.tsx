"use client";

import { useState, useEffect } from "react";

type CryptoPrices = {
  [key: string]: {
    usd: number;
  };
};

export default function Home() {
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrices | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: CryptoPrices = await fetchCryptoPrices();
      setCryptoPrices(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto Prices</h1>
      {cryptoPrices ? (
        <ul>
          {Object.entries(cryptoPrices).map(([crypto, info]) => (
            <li key={crypto}>
              {crypto.toUpperCase()}: ${info.usd}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

async function fetchCryptoPrices(): Promise<CryptoPrices> {
  try {
    console.log("Iniciando a requisição...");
    const response = await fetch(
      "https://2c24-2804-1b2-11c0-2b7b-38d5-5628-816c-8bc6.ngrok-free.app/api/crypto",
      {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true", // Adiciona o cabeçalho para ignorar o aviso
        },
      }
    );
    console.log("Resposta da API:", response);

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    console.log("Dados recebidos:", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar preços de criptomoedas:", error);
    throw error;
  }
}

