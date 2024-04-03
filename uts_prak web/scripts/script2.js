/*
    Nama: Muhammad Arief Budiman
    Nim: 2210512006
    Kelas: A S1 Sistem Informasi
    Dosen: bu Theresiawati, S.Kom., MTI.
*/
const semester = document.getElementById("semester");
const prodi = document.getElementById("prodi");
const peminatan = document.querySelector(".peminatan");
const legend = document.querySelector(".peminatan legend");

semester.addEventListener("change", (event) => {
    getSemester = event.target.value;
    prodi.disabled = getSemester <= 2 ? true : false;
    if (getSemester <= 2) {
        alert(`
        Mahasiswa Belum bisa mengajukan peminatan!
        Harus semester 2 ke atas!`);
    }
});
prodi.addEventListener("change", () => {
    legend.innerHTML = `Peminatan Mahasiswa ${prodi.value}`;
    peminatan.style.display = prodi != "" ? "block" : "none";
});

function submitPeminatan(event) {
    event.preventDefault();

    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const peminatan1 = document.getElementById("audit");
    const peminatan2 = document.getElementById("data-engineering");
    const peminatan3 = document.getElementById("application-developer");
    const year = new Date().getFullYear();

    const valuePeminatan1 = peminatan1.checked ? peminatan1.value : null;
    const valuePeminatan2 = peminatan2.checked ? peminatan2.value : null;
    const valuePeminatan3 = peminatan3.checked ? peminatan3.value : null;

    const mataKuliah = [];
    if (valuePeminatan1 != null) mataKuliah.push(valuePeminatan1);
    if (valuePeminatan2 != null) mataKuliah.push(valuePeminatan2);
    if (valuePeminatan3 != null) mataKuliah.push(valuePeminatan3);

    const tahunMasuk = year - Math.ceil(semester.value / 2);

    const popupUrl = `hasil.html?nim=${nim}&nama=${nama}&prodi=${prodi.value}&tahunMasuk=${tahunMasuk}&mataKuliah=${mataKuliah}`;

    window.open(popupUrl, "_blank");
    console.log("clicked");
}
