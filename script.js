const demoData = {
  direct: {
    command: '/connect <peer-address> <port>',
    status: 'Direct session established with <b>your peer</b>',
    label: 'DIRECT SESSION'
  },
  room: {
    command: '/connect <room-token> <relay-host>',
    status: 'Relay-assisted session with <b>your peer</b>',
    label: 'RELAY ASSISTED'
  }
};

document.querySelectorAll('.demo-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.demo-tab').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    const demo = demoData[tab.dataset.demo];
    document.querySelector('.demo-command').textContent = demo.command;
    document.querySelector('.demo-status').innerHTML = demo.status;
    document.querySelector('.terminal-live').innerHTML = `<i></i> ${demo.label}`;
  });
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !isOpen);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  nav.classList.remove('open');
}));
