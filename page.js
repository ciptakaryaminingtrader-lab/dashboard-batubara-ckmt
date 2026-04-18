
'use client'
import { useEffect, useState } from "react";

const API_URL = "https://sheetdb.io/api/v1/fginxryc1g1ho";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>PT Cipta Karya Mining Trader</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Perusahaan</th>
            <th>Status</th>
            <th>Volume</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d["ID Transaksi"]}</td>
              <td>{d["Perusahaan"]}</td>
              <td>{d["Status"]}</td>
              <td>{d["Volume (MT)"]}</td>
              <td>{d["Estimasi Profit"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
