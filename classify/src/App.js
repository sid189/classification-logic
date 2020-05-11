import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactTable from "react-table";
import {CSVLink, CSVDownload} from 'react-csv';
import { Customers } from './Customers'
import { Header } from './Header'
import { ExportReactCSV } from './ExportReactCSV';
//import "node_modules/react-table/react-table.css";

class App extends Component {

  customers = () => {
    let custs = []

    custs.push({type: 'Appraisal', blackknight: 'Appraise', google: 'Appraisal', heavywater: 'Appraise', yahoo: 'Appraisal', wepay: 'Appraise'});
    custs.push({type: 'DU Codified Findings', blackknight: 'DU Codified Findings', google: 'DU Codified Findings', heavywater: 'DU Codified Findings', yahoo: 'DU Codified Findings', wepay: 'DU Codified Findings'});
    custs.push({type: 'Disclosure', blackknight: 'Disclosure', google: 'Disclosure', heavywater: 'Disclosure', yahoo: 'Disclosure', wepay: 'Disclosure'});
    custs.push({type: 'Credit Report', blackknight: 'Credit Report', google: 'Credit Report', heavywater: 'Credit Report', yahoo: 'Credit Report', wepay: 'Credit Report'});
    custs.push({type: 'ARM', blackknight: 'ARM', google: 'ARM', heavywater: 'ARM', yahoo: 'ARM', wepay: 'ARM'});
    custs.push({type: 'Pay Stub', blackknight: 'Pay Stub', google: 'Pay Stub', heavywater: 'Pay Stub', yahoo: 'Pay Stub', wepay: 'Pay Stub'});
    custs.push({type: 'W2', blackknight: 'W2', google: 'W2', heavywater: 'W2', yahoo: 'W2 Pay', wepay: 'W2 Pay'});

    console.log(custs);

    return custs;
  }

  state = {
    customers: this.customers(),
    fileName: 'Customers.csv'
  }

  render() {

    return (
      <div className="App">
        <Header />


        <div className="row">
            <div className="col-md-8">
                <h2>Customers</h2>
            </div>
            <div className="col-md-4 center">
                <ExportReactCSV csvData={this.state.customers} fileName={this.state.fileName} />
            </div>
        </div>
        <Customers customers={this.customers()}/>
      </div>
    );
  }
}

export default App;
