function Pembayaran (){
    return(
       <div class="table-responsive">
    <table class="table table-hover w-100">
    <thead>
    <tr>
        <th>No Pesanan</th>
        <th>Maskapai</th>
        <th>Departure</th>
        <th>Gate</th>
        <th>Seat</th>
        <th>Arrival</th>
        <th>Total</th>
        <th>Status</th>
        <th>Aksi</th>
    </tr>
    </thead>
    <tbody>
        <tr>
              <td>0512</td>
              <td>Garuda</td>
              <td>19.00</td>
              <td>C2</td>
              <td>C 12</td>
              <td>21.00</td>
              <td>Rp 1500000</td>
              <td>Belum Dibayar</td>
              <td><button type="button" class="btn btn-success">Bayar</button></td>
            </tr>
            <tr>
              <td>0513</td>
              <td>Lion Air</td>
              <td>08.00</td>
              <td>A2</td>
              <td>A 12</td>
              <td>10.00</td>
              <td>Rp 1500000</td>
            <td>Belum Dibayar</td>
              <td><button type="button" class="btn btn-success">Bayar</button></td>
            </tr>
            <tr>
              <td>0514</td>
              <td>Batik Air</td>
              <td>10.00</td>
              <td>B2</td>
              <td>F 12</td>
              <td>12.00</td>
              <td>Rp 1500000</td>
               <td>Belum Dibayar</td>
              <td><button type="button" class="btn btn-success">Bayar</button></td>
            </tr>
            <tr>
              <td>0544</td>
              <td>Batik Air</td>
              <td>21.00</td>
              <td>A1</td>
              <td>O 12</td>
              <td>23.00</td>
              <td>Rp 1500000</td>
               <td>Belum Dibayar</td>
              <td><button type="button" class="btn btn-success">Bayar</button></td>
              </tr>
            <tr>
              <td>0555</td>
              <td>Lion Air</td>
              <td>15.00</td>
              <td>C2</td>
              <td>C 14</td>
              <td>17.00</td>
              <td>Rp 1500000</td>
               <td>Belum Dibayar</td>
              <td><button type="button" class="btn btn-success">Bayar</button></td>

      </tr>
      </tbody>
    </table>
    </div>
    );
}
export default Pembayaran;