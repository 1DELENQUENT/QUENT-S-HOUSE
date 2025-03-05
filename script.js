// Function to switch sections
function showSection(sectionId) {
    // Hide all sections
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Show the RESUME section by default when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showSection('resume');
});
