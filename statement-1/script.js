const accordionSections = document.querySelectorAll('.accordion-section');
accordionSections.forEach((section) => {
  const header = section.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    const content = section.querySelector('.accordion-content');
    content.classList.toggle('collapse');
  });
});