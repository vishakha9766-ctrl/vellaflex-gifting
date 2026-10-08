const nav = document.getElementById('nav');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const phone = '919175048236';
function sendWhatsApp(message){
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}

document.getElementById('enquiryForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const occasion = document.getElementById('occasion').value;
  const budget = document.getElementById('budget').value.trim() || 'Not specified';
  const quantity = document.getElementById('quantity').value.trim() || 'Not specified';
  const requirements = document.getElementById('requirements').value.trim() || 'Not specified';
  sendWhatsApp(`Hello VellaFlex, I would like to enquire about gifting.\n\nOccasion: ${occasion}\nBudget per gift: ${budget}\nQuantity: ${quantity}\nCustomization / requirements: ${requirements}\n\nPlease share suitable options and pricing.`);
});

// Smoothly reveal cards as they enter the viewport.
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
},{threshold:.12});
document.querySelectorAll('.collection-card,.process-grid>div,.about-points>div').forEach(el => observer.observe(el));
