import React from 'react'
import './App.css'



function Services() {
  return (
    <div className="">

    

      <div>
      <header><h1>Services</h1></header>
      <table>
  <tr>
    <th>Service</th>
    <th>Turn-around</th>
    <th>Estimate(Prices vary by job)</th>
  </tr>
  <tr>
    <td>Clogged Drain</td>
    <td>1 hour</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Installation(Toilet, Tub, Sink)</td>
    <td>1-2 Days</td>
    <td>$200 per unit</td>
  </tr>
  <tr>
    <td>Repairs</td>
    <td>Varies per job and extent of damage</td>
    <td>$500 - 2000</td>
  </tr>
  <tr>
    <td>Diagnosis</td>
    <td>Varies</td>
    <td>$100-300</td>
  </tr>
</table>
      </div>
        
    </div>
  );
}



export default Services