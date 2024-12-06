document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').substring(1);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});
