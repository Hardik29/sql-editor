import React from 'react'

function TableCSV({Query, prop}) {
  return (
    <ul className="p-6 space-y-6">
    {prop == "Product" ? (<div>{Query.map((item, i) => (
        <tr key={i}>
          <td>{item.productID}</td>
          <td>{item.productName}</td>
          <td>{item.supplierID}</td>
          <td>{item.categoryID}</td>
          <td>{item.quantityPerUnit}</td>
          <td>{item.unitPrice}</td>
          <td>{item.unitsInStock}</td>
          <td>{item.unitsOnOrder}</td>
          <td>{item.reorderLevel}</td>
          <td>{item.discontinued}</td>
        </tr>
      ))}</div>) :  (<div>{Query.map((item, i) => (
        <tr key={i}>
          <td>{item.orderID}</td>
          <td>{item.customerID}</td>
          <td>{item.employeeID}</td>
          <td>{item.orderDate}</td>
          <td>{item.requiredDate}</td>
          <td>{item.shippedDate}</td>
          <td>{item.shipVia}</td>
          <td>{item.freight}</td>
          <td>{item.shipName}</td>
          <td>{item.shipAddress}</td>
        </tr>
      ))}</div>)
    }
      </ul>
  )
}

export default TableCSV