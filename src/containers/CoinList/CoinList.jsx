import React from "react";
import numeral from "numeral"; 

const CoinList = ({ CryptoCurrenctys }) => {
  
    return (
        <div className="overflow-x-auto">
            <div className="mx-auto max-w-7xl">
                <h1 className="text-3xl font-bold mb-4">Online Cryptocurrency</h1>
                <table className="table-auto w-full">
                    <thead className="bg-gray-500">
                        <tr>
                            <th className="text-left px-4 py-2">Name</th>
                            <th className="text-left px-4 py-2">Symbol</th>
                            <th className="text-left px-4 py-2">Price ($)</th>
                            <th className="text-left px-4 py-2">Volume</th>
                            <th className="text-left px-4 py-2">Change (%)</th>
                            <th className="text-left px-4 py-2">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CryptoCurrenctys.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-200">
                                <td className="text-left px-4 py-2">
                                    <div className="flex justify-normal">
                                        <div>
                                            <img className="w-5 h-5 mr-4" src={item.image} alt="" />
                                        </div>
                                        <div>{item.name}</div>
                                    </div>
                                </td>
                                <td className="text-left px-4 py-2">{item.symbol.toUpperCase()}</td>
                                <td className="text-left px-4 py-2">{numeral(item.current_price).format("$0,0.00")}</td>
                                <td className="text-left px-4 py-2">{numeral(item.total_volume).format("$0,0.00")}</td>
                                {item.price_change_percentage_24h < 0 ? (
                                    <td className="text-left px-4 py-2 text-red-500">{item.price_change_percentage_24h.toFixed(2)}%</td>
                                ) : (
                                    <td className="text-left px-4 py-2 text-green-500">{item.price_change_percentage_24h.toFixed(2)}%</td>
                                )}
                                <td className="text-left px-4 py-2">{numeral(item.market_cap).format("$0,0.00")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default CoinList;


// This code uses the React and Numeral libraries with the Tailwind CSS framework to create a responsive and scrollable table that displays cryptocurrency data for different devices. The changes made to the original code include:

// Adding the overflow-x-auto utility class to the outer div to enable horizontal scrolling on small screens
// Changing the table-fixed class to table-auto to allow the table to shrink and grow depending on the screen size
// Removing the w-1/3 class from the th elements to ensure they display correctly at different screen sizes
// Capitalizing the currency symbol in the symbol column
// Using the toFixed method to round the percentage change to 2 decimal places
// Changing the max-w-full to max-w-7xl to limit the table size on large screens, and improving the text formatting for better readability.