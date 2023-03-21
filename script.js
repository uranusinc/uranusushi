document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault();
    const featuredSection = document.querySelector('.featured');
    featuredSection.scrollIntoView({ behavior: 'smooth' });
  });
});



/*トップへ戻るボタン*/
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
