import React, { useState, useEffect } from 'react';
import {Table, TableCSV} from './Components/utils/Tables';
import Button from './Components/utils/Button';
import {ORDERS} from "./Components/utils/data/order";
import {PRODUCT} from "./Components/utils/data/product";



const ButtonSvg = <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
let displayData;

function Page() {

    const [Productquery, setProductquery] = useState(["SELECT * FROM Product;", "SELECT * FROM Product where productID > 1;"]);
    const [Orderquery, setOrderquery] = useState(["SELECT * FROM Order;","SELECT * FROM Order where customerID > 2;"]);
    const [value, setValue] = useState();
    const [tableValue, setTableValue] = useState('Product');
    const [csvArray, setCsvArray] = useState([]);
  

    const historyProductQuery = () => {
        const newQuery = [value, ...Productquery]
        setProductquery(newQuery);
    }
    const historyOrderQuery = () => {
        const newQuery = [value, ...Orderquery]
        setOrderquery(newQuery);
    }

    const processCSV = (str, delim = ",") => {
        const headers = str.slice(0, str.indexOf("\n")).split(delim);
        const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    
        const newArray = rows.map((row) => {
          const values = row.split(delim);
          const eachObject = headers.reduce((prev, header, i) => {
            prev[header] = values[i];
            return prev;
          }, {});
          return eachObject;
        });
    
        setCsvArray(newArray);
      };

    useEffect(() => {
        processCSV(PRODUCT);
        if (tableValue === "Product") {
          processCSV(PRODUCT);
          displayData = <h1  className="px-6 py-5 font-semibold border-b border-gray-100">RUN A QUERY PLLZZ!!  👩 💻</h1>
        }
        if (tableValue === "Order") {   
          processCSV(ORDERS);
          displayData = <h1  className="px-6 py-5 font-semibold border-b border-gray-100">RUN A QUERY PLLZZ!!  👩 💻</h1>
        }
      }, [tableValue]);

      useEffect(() => {
        if (value === "SELECT * FROM Product;" || value === "SELECT * FROM Product where productID > 1;") {
          displayData = <TableCSV Query={csvArray} prop={"Product"}/>;
        }
        else if(value === "SELECT * FROM Order;" || value === "SELECT * FROM Order where customerID > 2;"){
            displayData = <TableCSV Query={csvArray} prop={"Order"}/>;
        }
        else{
          displayData = <h1  className="px-6 py-5 font-semibold border-b border-gray-100">RUN A CORRECT QUERY PLLZZ!!  👩 💻</h1>
        }
      }, [value]);


    return (
        <div className='flex bg-gray-100 min-h-screen'>
            <div className="flex-grow text-gray-800">
                <main className="p-6 sm:p-10 space-y-6">
                    <div className="flex flex-row justify-between">
                        <span>
                            Table :
                            <select onChange={e => setTableValue(e.target.value)} className="bg-purple-600 inline-flex ml-2 px-6 py-4 text-white rounded-md">
                                <option selected>Product</option>
                                <option>Order</option>
                            </select>
                        </span>
                        <Button SVG={ButtonSvg} title={"Create New Table"} sign={false} />
                    </div>
                    <div>
                        <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 mt-3 ml-2 text-gray-400">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                        <div>
                            <input onChange={e => setValue(e.target.value)} type="text" placeholder="Search Queries..." className="rounded-lg h-12 mr-8 py-2 pl-10 pr-4 w-11/12 bg-white shadow border-2 border-gray-200 placeholder-gray-400 focus:bg-gray-50" />
                            <Button func={ tableValue === "Product" ? (historyProductQuery) : (historyOrderQuery)} title={"Run"} />
                        </div>
                    </div>
                    <div className="flex flex-col bg-white shadow rounded-lg">
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">Recent Queries</div>
                        <div className="overflow-y-scroll max-h-96">
                               <Table Query={ tableValue === "Product" ? (Productquery) : (Orderquery)}/>
                        </div>
                    </div>  
                    <div>Table : {tableValue}</div> 
                    {displayData}
                </main >
            </div >
        </div >
    )
}

export default Page