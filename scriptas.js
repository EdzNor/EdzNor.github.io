
const ginkloKorteles = document.querySelectorAll('.ginklo-kortelė');
ginkloKorteles.forEach(kortelė => {
    kortelė.addEventListener('mouseover', () => {
        kortelė.style.transform = 'scale(1.05)';
        kortelė.style.transition = 'transform 0.2s';
    });
    kortelė.addEventListener('mouseout', () => {
        kortelė.style.transform = 'scale(1)';
    });
});
$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    const target = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 800);
});
document.querySelectorAll('.ginklas h3').forEach(item => {
    item.addEventListener('click', function() {
    });
});
