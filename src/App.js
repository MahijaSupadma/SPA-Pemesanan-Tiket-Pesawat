import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home/Home";
import Pesan_Tiket from "./Pesan_Tiket/Pesan_Tiket";
import Jadwal_Penerbangan from "./Jadwal_Penerbangan/Jadwal_Penerbangan";
import Pembayaran from "./Pembayaran/Pembayaran";
import Riwayat_Transaksi from "./Riwayat_Transaksi/Riwayat_Transaksi";
import Navbar from "./global_components/Navbar";
import "./App.css";

function App() {
   return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Pesan_Tiket" component={Pesan_Tiket} />
          <Route path="/Jadwal_Penerbangan" component={Jadwal_Penerbangan}/>
          <Route path="/Pembayaran" component={Pembayaran} />
          <Route path="/Riwayat_Transaksi" component={Riwayat_Transaksi} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
