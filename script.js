// Menampilkan form setelah intro
function startForm() {
    document.querySelector(".intro").classList.add("hidden");
    document.getElementById("formSection").style.display = "block";
}

// Kirim data ke WhatsApp
function sendToWhatsApp() {
    // Ambil data dari formulir
    const name = document.getElementById("name").value;
    const alamat = document.getElementById("alamat").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const vehicle = document.getElementById("vehicle").value;

    // Validasi
    if (!name || !alamat || !email || !phone || !vehicle) {
        alert("Harap isi semua data!");
        return;
    }

    // Format pesan
    const message = `Halo, saya ingin mendaftar sebagai driver. Berikut data saya:
- Nama: ${name}
- Alamat: ${alamat}
- Email: ${email}
- No HP: ${phone}
- Merk Kendaraan: ${vehicle}`;

    // Ganti dengan nomor WhatsApp Anda (tanpa tanda +)
    const whatsappNumber = "628895885691";

    // Kirim ke WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}
