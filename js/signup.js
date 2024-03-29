document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan referensi ke elemen formulir
  var signupForm = document.getElementById("signUpForm");

  // Menambahkan event listener ke formulir saat dikirim
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah formulir dari pengiriman default

    // Mengambil nilai dari input formulir
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Memeriksa apakah password dan konfirmasi password cocok
    if (password !== confirmPassword) {
      // Jika tidak cocok, tampilkan alert
      alert("Password and confirm password do not match. Please try again.");
      return; // Berhenti dari proses pendaftaran
    }

    // Membuat objek pengguna
    var user = {
      name: name,
      email: email,
      password: password,
    };

    // Menyimpan data pengguna ke local storage
    localStorage.setItem("user", JSON.stringify(user));

    console.log("User data successfully saved to local storage:");
    console.log(user);

    // Redirect ke halaman lain
    window.location.href = "sign_in.html";
  });
});
