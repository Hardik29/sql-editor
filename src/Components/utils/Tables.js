import React from 'react';
import Button from './Button';

export function Table({ Query}) {

    return (
            <ul className="p-6 space-y-6">
                {Query.map(x => <li className="flex items-center hover:bg-gray-200 p-2 "><div className="text-gray-600  w-11/12">{x}</div><Button title={"X"} sign={true} /></li>)}
            </ul>

    )
}

// export function TableCSV({Query, prop}) {
//     return (
//       <>
//       {prop == "Product" ? (<table className='table-fixed space-x-1 '>{Query.map((item, i) => (
//           <tr key={i}>
//                       <td className='text-gray-700 px-1' >{item.productID}</td>
//                       <td className='text-gray-700 px-1' >{item.productName}</td>
//                       <td className='text-gray-700 px-1' >{item.supplierID}</td>
//                       <td className='text-gray-700 px-1' >{item.categoryID}</td>
//                       <td className='text-gray-700 px-1' >{item.quantityPerUnit}</td>
//                       <td className='text-gray-700 px-1' >{item.unitPrice}</td>
//                       <td className='text-gray-700 px-1' >{item.unitsInStock}</td>
//                       <td className='text-gray-700 px-1' >{item.unitsOnOrder}</td>
//                       <td className='text-gray-700 px-1' >{item.reorderLevel}</td>
//                       <td className='text-gray-700 px-1' >{item.discontinued}</td>
//           </tr>
//         ))}</table>) :  (<div>{Query.map((item, i) => (
//           <div  className="flex space-x-20 items-start hover:bg-gray-200 " key={i}>
//             <span className='text-gray-700 px- w-1 py-3'>{item.orderID}</span>
//             <span className='text-gray-700 px-1 w-1 py-3'>{item.customerID}</span>
//             <span className='text-gray-700 px-1 w-1 py-3'>{item.employeeID}</span>
//             <span className='text-gray-700 px-1 w-1 py-3'>{item.orderDate}</span>
//             <span className='text-gray-700 px-1 w-1 py-3'>{item.requiredDate}</span>
//             <span className='text-gray-700 px-1 w-1 py-3'>{item.shippedDate}</span>
//             <span className='text-gray-700 px-1 w-1 py-3'>{item.shipVia}</span>
//             <span className='text-gray-700 px-1 w-1 py-3'>{item.freight}</span>
//             <span className='text-gray-700 px-1 w-1 py-3'>{item.shipName}</span>
//             <span className='text-gray-700 px-1 w-1 py-3'>{item.shipAddress}</span>
//           </div>
//         ))}</div>)
//       }
//         </>
//     )
//   }

export function TableCSV({Query, prop}) {
    return (
      <>
      {prop === "Product" ? (
        <table className='text-left w-full text-gray-800'>
          <thead className='bg-white shadow rounded-lg flex w-full sticky'>
            <tr className='flex w-full mb-4'>
            <th className="p-4 w-1/4" >productID</th>
            <th className="p-4 w-1/4" >productName</th>
            <th className="p-4 w-1/4" >supplierID</th>
            <th className="p-4 w-1/4" >categoryID</th>
            <th className="p-4 w-1/4" >quantityPerUnit</th>
            <th className="p-4 w-1/4" >unitPrice</th>
            <th className="p-4 w-1/4" >unitsInStock</th>
            <th className="p-4 w-1/4" >unitsOnOrder</th>
            <th className="p-4 w-1/4" >reorderLevel</th>
            <th className="p-4 w-1/4" >discontinued</th>
            </tr>
          </thead>
          <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full max-h-96 bg-white text-gray-800">
            {Query.map((item, i) => (
              <tr className="flex w-full mb-4"  key={i}>
                <td  className="p-4 w-1/4" >{item.productID}</td>
                <td  className="p-4 w-1/4" >{item.productName}</td>
                <td  className="p-4 w-1/4" >{item.supplierID}</td>
                <td  className="p-4 w-1/4" >{item.categoryID}</td>
                <td  className="p-4 w-1/4" >{item.quantityPerUnit}</td>
                <td  className="p-4 w-1/4" >{item.unitPrice}</td>
                <td  className="p-4 w-1/4" >{item.unitsInStock}</td>
                <td  className="p-4 w-1/4" >{item.unitsOnOrder}</td>
                <td  className="p-4 w-1/4" >{item.reorderLevel}</td>
                <td  className="p-4 w-1/4" >{item.discontinued}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className='text-left w-full text-gray-800'>
          <thead className='bg-white shadow rounded-lg flex w-full sticky'>
            <tr className='flex w-full mb-4'>
            <th className="p-4  w-1/4" >orderID</th>
            <th className="p-4  w-1/4" >customerID</th>
            <th className="p-4  w-1/4" >employeeID</th>
            <th className="p-4  w-1/4" >orderDate</th>
            <th className="p-4  w-1/4" >requiredDate</th>
            <th className="p-4  w-1/4" >shippedDate</th>
            <th className="p-4  w-1/4" >shipVia</th>
            <th className="p-4  w-1/4" >freight</th>
            <th className="p-4  w-1/4" >shipName</th>
            <th className="p-4  w-1/4" >shipAddress</th>
            </tr>
          </thead>
          <tbody className="flex flex-col items-center justify-between overflow-y-scroll w-full max-h-96 bg-white text-gray-800">
            {Query.map((item, i) => (
              <tr className="flex w-full mb-4"  key={i}>
                <td className="p-4 w-1/4">{item.orderID}</td>
                <td className="p-4 w-1/4">{item.customerID}</td>
                <td className="p-4 w-1/4">{item.employeeID}</td>
                <td className="p-4 w-1/4">{item.orderDate}</td>
                <td className="p-4 w-1/4">{item.requiredDate}</td>
                <td className="p-4 w-1/4">{item.shippedDate}</td>
                <td className="p-4 w-1/4">{item.shipVia}</td>
                <td className="p-4 w-1/4">{item.freight}</td>
                <td className="p-4 w-1/4">{item.shipName}</td>
                <td className="p-4 w-1/4">{item.shipAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
    )
  }
  
  

