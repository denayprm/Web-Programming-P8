const params = new URLSearchParams(window.location.search);
const nim = params.get("nim");
const nama = params.get("nama");
const prodi = params.get("prodi");
const tahunMasuk = params.get("tahunMasuk");
const mataKuliah = params.get("mataKuliah");
const result = document.querySelector(".result");
const dataMatkul = mataKuliah.split(",");
const buttonClose = document.querySelector(".btn-close button");

result.innerHTML = `
<p>NIM : <b>${nim}</b>,<br>
Nama : <b>${nama}</b><br>
Lab : <b>${prodi}</b><br>
Tahun Masuk : <b>${tahunMasuk}</b></p><br>
<p>Matakuliah yang di pilih:
</p>`;

dataMatkul.forEach((matkul) => {
    const listMatkul = document.createElement("li");
    listMatkul.textContent = matkul != "" ? matkul : "Belum memilih peminatan";
    result.appendChild(listMatkul);
});

buttonClose.addEventListener("click", () => {
    window.open("uts_2.html");
});
