document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Mengubah ikon saat password ditampilkan atau disembunyikan
    this.textContent = type === 'password' ? '👁️' : '☠️';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    if (name === 'ronaldo' && password === 'goat') {
        window.open('welcome.html', '_blank');  // Membuka welcome.html di tab baru
    } else {
        alert('Nama atau password salah!');
    }
});
