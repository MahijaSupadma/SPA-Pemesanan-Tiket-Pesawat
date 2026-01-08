function Pesan_Tiket (){
    return(
        <form class="row g-3">
  <div class="col-md-6">
     <label for="inputState" class="form-label">Kota Asal</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Batam</option>
      <option>Bali</option>
      <option>Jakarta</option>
      <option>Surabaya</option>
      <option>Lombok</option>
    </select>
  </div>
  <div class="col-md-6">
     <label for="inputState" class="form-label">Tujuan</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Batam</option>
      <option>Bali</option>
      <option>Jakarta</option>
      <option>Surabaya</option>
      <option>Lombok</option>
    </select>
  </div>
  <div class="col-12">
     <label for="inputState" class="form-label">Maskapai</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Lion Air</option>
      <option>Batik Air</option>
      <option>Garuda Indonesia</option>
      <option>Citilink</option>
      <option>Air Asia</option>
    </select>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Tanggal Keberangkatan</label>
    <input type="date" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary btn-lg">Pesan</button>
  </div>
</form>
    );
}
export default Pesan_Tiket;