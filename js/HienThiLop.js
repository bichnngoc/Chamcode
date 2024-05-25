const btnDangDienRa = document.getElementById('btnDangDienRa');
const btnDaKetThuc = document.getElementById('btnDaKetThuc');
const dangDienRaSection = document.getElementById('dang-dien-ra');
const daKetThucSection = document.getElementById('da-ket-thuc');

// Set initial display state (default: "Lớp học đang diễn ra" visible)
dangDienRaSection.style.display = 'block';
daKetThucSection.style.display = 'none';

btnDangDienRa.addEventListener('click', () => {
  // Button click behavior remains the same as before
  dangDienRaSection.style.display = 'block';
  daKetThucSection.style.display = 'none';
  btnDangDienRa.classList.add('active');
  btnDaKetThuc.classList.remove('active');
});

btnDaKetThuc.addEventListener('click', () => {
  // Button click behavior remains the same as before
  dangDienRaSection.style.display = 'none';
  daKetThucSection.style.display = 'block';
  btnDaKetThuc.classList.add('active');
  btnDangDienRa.classList.remove('active');
});
