import ReactDOM from "react-dom";
import React, { Component } from "react";
import ReactTable from "react-table";
//import "react-table/react-table.css";

export default class App extends Component {
  data = [
    { type: "Appraisal", blackknight: "Appraisal Report", google: "Appraisal Report", heavywater: "Appraisal Report", yahoo: "Appraisal Report", wepay: "Appraisal Report" },
    { type: "Feedback", blackknight: "Automated Underwriting Feedback - DU Codified Findings", google: "Automated Underwriting Feedback - DU Codified Findings", heavywater: "Automated Underwriting Feedback - DU Codified Findings", yahoo: "DU", wepay: "Automated Underwriting Feedback - DU Codified Findings" },
    { type: "Disclosure", blackknight: "CD", google: "Closing Disclosure", heavywater: "Closing Disclosure", yahoo: "", wepay: "Closing Disclosure" },
    { type: "Credit Report", blackknight: "Credit Reports", google: "Credit Reports", heavywater: "Credit Reports", yahoo: "Credit Report", wepay: "Credit Reports" },
    { type: "ARM", blackknight: "SIARM", google: "SecurityIntrumentRider-ARM", heavywater: "SecurityIntrumentRider-ARM", yahoo: "SI-ARM", wepay: "SecurityIntrumentRider-ARM" },
    { type: "Pay Stub", blackknight: "Pay Stub", google: "Pay Stubs", heavywater: "Pay Stubs", yahoo: "Pay Stub", wepay: "Pay Stub" },
    { type: "W2", blackknight: "W2", google: "Form W2", heavywater: "Form W2", yahoo: "W2", wepay: "W2" }
  ];
  state = {
    columns: [
      { Header: "Type", accessor: "type", show: true },
      {
        Header: "Black Knight",
        accessor: "blackknight",
        show: true
      },
      {
        Header: "Google",
        accessor: "google",
        show: true
      },
      {
        Header: "Heavy Water",
        accessor: "heavywater",
        show: true
      },
      {
        Header: "Yahoo",
        accessor: "yahoo",
        show: true
      },
      {
        Header: "We Pay",
        accessor: "wepay",
        show: true
      }
    ]
  };

  toggleColumn = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(state => {
      const columns = state.columns.map(column => {
        if (column.Header === name) {
          column.show = !column.show;
          return column;
        } else {
          return column;
        }
      });
      return { columns };
    });
  };

  render() {
    return (
      <div>
        <h2>Click on the checkboxes to Show/Hide Rows</h2>

        {this.state.columns.map((column, index) => (
          <Checkbox
            key={column.Header}
            label={column.Header}
            onCheckboxChange={this.toggleColumn}
          />
        ))}
        <ReactTable data={this.data} columns={this.state.columns} />
      </div>
    );
  }
}

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div>
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
