const menu = document.querySelector('.menu');
const openButton = document.querySelector('.open-mobile-menu-btn');
const closeButton = document.querySelector('.close-button');
const closeButtonTablet = document.querySelector('.close-button-tablet');
const menuLinks = document.querySelectorAll('.menu-navigation-link');
const requestForm = document.querySelector('.your-order-form');

function setMenuState(isOpen) {
  if (!menu || !openButton) {
    return;
  }

  menu.classList.toggle('is-open', isOpen);
  openButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
}

openButton?.addEventListener('click', () => setMenuState(true));
closeButton?.addEventListener('click', () => setMenuState(false));
closeButtonTablet?.addEventListener('click', () => setMenuState(false));

menuLinks.forEach(link => {
  link.addEventListener('click', () => setMenuState(false));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    setMenuState(false);
  }
});

requestForm?.addEventListener('submit', event => {
  event.preventDefault();

  if (!requestForm.checkValidity()) {
    requestForm.reportValidity();
    return;
  }

  const formData = new FormData(requestForm);
  const fullName = String(formData.get('full-name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const comments = String(formData.get('comments') ?? '').trim();
  const subject = encodeURIComponent(`Agrosentia request from ${fullName}`);
  const body = encodeURIComponent(
    [
      `Full name: ${fullName}`,
      `Email: ${email}`,
      '',
      'Comments:',
      comments,
    ].join('\n'),
  );

  window.location.href = `mailto:smetana@onua.edu.ua?subject=${subject}&body=${body}`;
});
