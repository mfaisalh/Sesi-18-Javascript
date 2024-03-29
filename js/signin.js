document.addEventListener("DOMContentLoaded", function () {

  var signInForm = document.getElementById("signInForm");


  signInForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah formulir dari pengiriman default

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log("Email:", email); // Menampilkan nilai email di console
    console.log("Password:", password); // Menampilkan nilai password di console

    // Mendapatkan data pengguna dari local storage
    var storedUser = localStorage.getItem("user");

    // Memeriksa apakah data pengguna tersimpan di local storage
    if (storedUser) {
      // Mengonversi data pengguna yang tersimpan menjadi objek
      var user = JSON.parse(storedUser);

      console.log("Stored User:", user); // Menampilkan data pengguna yang tersimpan di console

      // Memeriksa apakah email dan password cocok dengan data pengguna yang tersimpan
      if (email === user.email && password === user.password) {
        // Jika true, arahkan pengguna ke halaman beranda atau halaman selanjutnya
        console.log("Login successful as user:", user.email);
        window.location.href = "index.html";
      } else {
        // Jika false
        attemptLoginWithArray(email, password);
      }
    } else {
      // Jika tidak ada data pengguna yang tersimpan di local storage
      attemptLoginWithArray(email, password);
    }
  });

  // Opsi kedua
  function attemptLoginWithArray(email, password) {
    // Array untuk login dengan peran admin, develop, dll.
    var users = [
      {
        email: "admin@example.com",
        password: "admin123",
        role: "admin",
      },
      {
        email: "develop@example.com",
        password: "develop123",
        role: "develop",
      },
    ];

    // Memeriksa apakah email dan password cocok dengan data pengguna dalam array
    var userFound = users.find(function (user) {
      return user.email === email && user.password === password;
    });

    if (userFound) {
      // Jika true
      console.log("Login successful as:", userFound.role);
      window.location.href = "index.html";
    } else {
      // Jika false
      alert("Email or password is incorrect. Please try again.");
    }
  }
});