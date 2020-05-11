class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         document_types: [
            { type: "Appraisal", BlackKnight: 0, Google: 0, HeavyWater: 0, Yahoo: 0, WePay: 0 },
            { type: "DU Codified Findings", BlackKnight: 0, Google: 0, HeavyWater: 0, Yahoo: 0, WePay: 0 },
            { type: "Disclosure", BlackKnight: 0, Google: 0, HeavyWater: 0, Yahoo: 0, WePay: 0 },
            { type: "Credit Report", BlackKnight: 0, Google: 0, HeavyWater: 0, Yahoo: 0, WePay: 0 }
            { type: "ARM", BlackKnight: 0, Google: 0, HeavyWater: 0, Yahoo: 0, WePay: 0 }
            { type: "Pay Stub", BlackKnight: 0, Google: 0, HeavyWater: 0, Yahoo: 0, WePay: 0 }
            { type: "W2", BlackKnight: 0, Google: 0, HeavyWater: 0, Yahoo: 0, WePay: 0 }
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.document_types[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.document_types.map((student, index) => {
         const { type, BlackKnight, Google, HeavyWater, Yahoo, WePay } = student //destructuring
         return (
            <tr key={id}>
               <td>{type}</td>
               <td>{Black Knight}</td>
               <td>{Google}</td>
               <td>{Heavy Water}</td>
               <td>{Yahoo}</td>
               <td>{We Pay}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>Document Classification</h1>
            <table id='document_types'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

ReactDOM.render(<Table />, document.getElementById('root'));
