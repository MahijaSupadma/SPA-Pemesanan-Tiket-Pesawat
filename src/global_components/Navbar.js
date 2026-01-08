import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
        <Link className="navbar-brand  text-white" to="/">Pesan Tiket Pesawat</Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Pesan_Tiket">Pesan Tiket</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Jadwal_Penerbangan">Jadwal Penerbangan</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Pembayaran">Pembayaran</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-white" to="/Riwayat_Transaksi">Riwayat Transaksi</Link>
            </li>
          </ul>
        </div>
      </div>
        </nav>
    );
}
export default Navbar;