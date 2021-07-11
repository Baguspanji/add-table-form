var list = 0;

$("#barang-0").selectpicker({
  noneResultsText:
    '<button type="button" class="btn btn-primary" ' +
    'data-toggle="modal" data-target="#tambah-barang">Tambah Barang</button>',
});

$("#add-barang").on("click", function () {
  list++;
  $("#list-barang").append(
    '<tr id="produk-' +
      list +
      '">' +
      "    <th>" +
      "      <a" +
      '        href="javascript:void(0)"' +
      '        class="btn btn-danger btn-sm"' +
      '        onclick="delete_barang(' +
      list +
      ')"' +
      '        ><i class="fa fa-trash"></i' +
      "      ></a>" +
      "    </th>" +
      "    <td>" +
      "      <select" +
      '        class="form-control selectpicker" data-live-search="true"' +
      '        onchange="change_barang(' +
      list +
      ')"' +
      '        id="barang-' +
      list +
      '">' +
      '        <option value="">Pilih Barang</option>' +
      '        <option value="1">Ayam Geprek</option>' +
      '        <option value="2">Nasi Ayam</option>' +
      '        <option value="3">Mie Ayam</option>' +
      "      </select>" +
      "    </td>" +
      "    <td>" +
      '      <input type="number" class="form-control" onchange="change_qty(' +
      list +
      ')" value="1" id="qty-' +
      list +
      '" />' +
      "    </td>" +
      "    <td>" +
      '      <div class="input-group">' +
      '        <div class="input-group-prepend">' +
      '          <span class="input-group-text">Rp. </span>' +
      "        </div>" +
      '        <input type="text" class="form-control" onchange="change_harga(' +
      list +
      ')" id="harga-' +
      list +
      '"/>' +
      "      </div>" +
      "    </td>" +
      "    <td>" +
      '      <div class="input-group">' +
      '        <div class="input-group-prepend">' +
      '          <span class="input-group-text">Rp. </span>' +
      "        </div>" +
      '        <input type="text" class="form-control" id="jumlah-' +
      list +
      '"/>' +
      "      </div>" +
      "    </td>" +
      "  </tr>"
  );

  $("#barang-" + list).selectpicker({
    noneResultsText:
      '<button type="button" class="btn btn-primary" ' +
      'data-toggle="modal" data-target="#tambah-barang">Tambah Barang</button>',
  });
});

function delete_barang(id) {
  $("#produk-" + id).remove();
}

function change_barang(id) {
  var harga = 0;

  var qty = $("#qty-" + id).val();
  var barang = $("#barang-" + id).val();

  switch (barang) {
    case "1":
      harga = 20000;
      break;
    case "2":
      harga = 22000;
      break;
    case "3":
      harga = 18000;
      break;
    case "4":
      harga = 14000;
      break;
  }

  $("#harga-" + id).val(harga);
  $("#jumlah-" + id).val(harga * qty);
}

function change_qty(id) {
  var harga = 0;

  var qty = $("#qty-" + id).val();
  var barang = $("#barang-" + id).val();

  switch (barang) {
    case "1":
      harga = 20000;
      break;
    case "2":
      harga = 22000;
      break;
    case "3":
      harga = 18000;
      break;
    case "4":
      harga = 14000;
      break;
  }

  $("#harga-" + id).val(harga);
  $("#jumlah-" + id).val(harga * qty);
}

function change_harga(id) {
  var qty = $("#qty-" + id).val();

  var harga = $("#harga-" + id).val();
  $("#jumlah-" + id).val(harga * qty);
}

$("#get-barang").on("click", function () {
  var data = [];
  for (let i = 0; i < list + 1; i++) {
      if ($("#barang-" + i).val() != "") {
          data.push({
            barang: $("#barang-" + i).val(),
            qty: $("#qty-" + i).val(),
            harga: $("#harga-" + i).val(),
            jumlah: $("#jumlah-" + i).val(),
          });
        }
      }
  console.log(data);
});
