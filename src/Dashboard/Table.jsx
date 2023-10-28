import React from 'react';

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table  className="table table-bordered border-secondary">
        <thead  className="table-dark">
          <tr >
            <th  className="text-center">No.</th>
            <th  className="text-center">First Name</th>
            <th  className="text-center">Last Name</th>
            <th  className="text-center">Email</th>
            <th  className="text-center">Salary</th>
            <th  className="text-center">Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td  className="text-center">{i + 1}</td>
                <td  className="text-center">{employee.firstName}</td>
                <td  className="text-center">{employee.lastName}</td>
                <td  className="text-center">{employee.email}</td>
                <td  className="text-center">{formatter.format(employee.salary)}</td>
                <td  className="text-center">{employee.date} </td>
                <td className='text-center'>
                  <button
                    onClick={() => handleEdit(employee.id)}
                  className="btn btn-warning" 
                  >
                    Edit
                  </button>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;