const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  document.body.classList.toggle('lock');
});

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Товар добавлен в корзину (заглушка)');
  });
});

const rows = document.querySelectorAll('.explain__row');

window.addEventListener('scroll', () => {
  rows.forEach(row => {
    const rowTop = row.getBoundingClientRect().top;
    if (rowTop < window.innerHeight - 100) {
      row.classList.add('show');
    }
  });
});
