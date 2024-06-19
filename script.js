function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function navigateTo(url) {
    window.location.href = url;
}

document.getElementById('goBackButton').addEventListener('click', function() {
    history.back();
});