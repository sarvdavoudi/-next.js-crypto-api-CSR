import { useEffect, useState } from "react";
import CoinList from "../containers/CoinList/CoinList";
import Layout from "../containers/Layout/Layout";
import SearchBar from "../Components/SearchBar/SearchBar";

export default function Home() {
  const [CryptoCurrenctys, setCryptoCurrenctys] = useState([]);
  const [filteredCryptoCurrenctys, setFilteredCryptoCurrenctys] = useState([]);

  //  Data fetch
  async function fetchCryptoCurrenctys() {
    try {
      const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";
      const response = await fetch(url);
      const CryptoCurrenctys = await response.json();
      setCryptoCurrenctys(CryptoCurrenctys);
      setFilteredCryptoCurrenctys(CryptoCurrenctys);
    } catch (error) {
      console.error(error);
      setCryptoCurrenctys([]);
    }
  }

  //update All records each 10 seconds
  useEffect(() => {
    fetchCryptoCurrenctys();
    const interval = setInterval(() => {
      fetchCryptoCurrenctys();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Search filter function
  const handleChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredArray = CryptoCurrenctys.filter((cryptoCurrency) => cryptoCurrency.name.toLowerCase().includes(searchQuery));
    setFilteredCryptoCurrenctys(filteredArray);
  };

  return (
    <Layout>
      <SearchBar placeholder="search" onChange={handleChange} />
      <CoinList CryptoCurrenctys={filteredCryptoCurrenctys} />
    </Layout>
  );
}
