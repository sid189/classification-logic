import React from 'react'
import Table from 'react-bootstrap/Table';

export const Customers = ({customers}) => {

    const CustomerRow = (customer,index) => {

        return(
              <tr key = {index} className='even'>
                  <td> {index + 1} </td>
                  <td>{customer.type}</td>
                  <td>{customer.blackknight}</td>
                  <td>{customer.google}</td>
                  <td>{customer.heavywater}</td>
                  <td>{customer.yahoo}</td>
                  <td>{customer.wepay}</td>
              </tr>
          )
      }

      const CustomerTable = customers.map((cust,index) => CustomerRow(cust,index))

      const tableHeader = <thead className='bgvi'>
                            <tr>
                                <th>'#'</th>
                                <th>Type</th>
                                <th>Black Knight</th>
                                <th>Google</th>
                                <th>Heavy Water</th>
                                <th>Yahoo</th>
                                <th>We Pay</th>
                            </tr>
                        </thead>

    return (
        <Table striped bordered hover>
            {tableHeader}
            <tbody>
                {CustomerTable}
            </tbody>
        </Table>
    )
}
