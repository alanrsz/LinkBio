// Link-in-bio: perilaku ringan, tanpa dependency.
// Menandai tombol yang belum diisi (href="#") agar tidak membuka tab kosong saat diklik,
// dan tetap membiarkan link yang sudah diisi berjalan normal.
document.addEventListener('DOMContentLoaded', () => {
  const linkButtons = document.querySelectorAll('.link-btn');

  linkButtons.forEach((btn) => {
    const href = btn.getAttribute('href');
    const isEmpty = !href || href === '#';

    if (isEmpty) {
      btn.setAttribute('aria-disabled', 'true');
      btn.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }
  });
});
