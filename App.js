import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
       
       
  <div className="row" style={{ marginLeft: "250px" }}>
    <div className="column left">Monday</div>
    <div className="column left">Tuesday</div>
    <div className="column left">Wednesday</div>
    <div className="column left">Thursday</div>
    <div className="column left">Friday</div>
    <div className="column left">Saturday</div>
    <div className="column left">Sunday</div>
  </div>
  <table 
    width="80%" style={{ marginLeft: "250px" }} className="main" >
    <thead>
      <tr>
        <th> </th>
        <th> </th>
        <th> </th>
        <th> </th>
        <th> </th>
        <th> </th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
    </tbody>
  </table>
  <div className="first_element_time">
    <table className="time">
      <tbody>
        <tr>
          <td style={{ borderTop: "none" }}> 10.00</td>
        </tr>
        <tr>
          <td style={{ borderTop: "none" }}> 11.00</td>
        </tr>
        <tr>
          <td style={{ borderTop: "none" }}> 12.00</td>
        </tr>
        <tr>
          <td style={{ borderTop: "none" }}> 13.00</td>
        </tr>
        <tr>
          <td style={{ borderTop: "none" }}> 14.00</td>
        </tr>
        <tr>
          <td style={{ borderTop: "none" }}> 15.00</td>
        </tr>
        <tr>
          <td style={{ borderTop: "none" }}> 16.00</td>
        </tr>
        <tr>
          <td style={{ borderTop: "none" }}> 17.00</td>
        </tr>
        <tr>
          <td style={{ borderTop: "none" }}> 18.00</td>
        </tr>
        <tr>
          <td style={{ borderTop: "none" }}> 19.00</td>
        </tr>
        <tr>
          <td style={{ borderTop: "none" }}> 20.00</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="ch-select">Channel Selector</div>

  <div 
    draggable
    className="first-channel" 
    style={{ color: "#ffffff", fontFamily: "Tahoma" }}
  >
    <font size="3">Classy Lounge</font>
    <br />
    <br />
    <font size="1">Saft contemporary electronic vibes.</font>
  </div>

  <div draggable 
    className="second-channel" 
    style={{ color: "#ffffff", fontFamily: "Tahoma" }}
  >
    <font size="3">Chic Urban & RnB</font>
    <br />
    <br />
    <font size="1">Modem laid back Urban vibes from the last decade.</font>
  </div>

  <div draggable 
    className="third-channel" 
    style={{ color: "#ffffff", fontFamily: "Tahoma" }}
  >
    <font size="3">Vibrant Beats</font>
    <br />
    <br />
    <font size="1">Trending Pop Music mainly form this millennium.</font>
    
  </div>
</div>
    );
  }
}