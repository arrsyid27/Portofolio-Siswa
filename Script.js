// Alert tombol hubungi
document.getElementById("contactBtn").addEventListener("click", () => {
  alert("Terima kasih sudah mengunjungi portofolio saya 🙌");
});

// Ganti Tema
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    document.body.style.background = "linear-gradient(135deg, #e0e0e0, #ffffff)";
    document.body.style.color = "#000";
  } else {
    document.body.style.background = "linear-gradient(135deg, #0f0c29, #302b63, #24243e)";
    document.body.style.color = "#fff";
  }
});

