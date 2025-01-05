// Your code here.
// Simulate skill animation
window.addEventListener("load", () => {
    const skills = document.querySelectorAll(".level");
    skills.forEach(skill => {
        const level = skill.getAttribute("data-level");
        skill.style.width = `${level}%`;
    });
});

// Dynamically update content (example function)
function updateProfile(name, email, profile, about, skills) {
    document.getElementById("full-name").textContent = name;
    document.getElementById("email-address").textContent = email;
    document.getElementById("profile-role").textContent = profile;
    document.getElementById("about-description").textContent = about;

    // Update skill levels
    skills.forEach(skill => {
        const skillElement = document.getElementById(`${skill.id}-skill`);
        skillElement.setAttribute("data-level", skill.level);
        skillElement.textContent = `${skill.level}%`;
    });
}

// Example usage of updateProfile
setTimeout(() => {
    updateProfile(
        "John Doe",
        "john.doe@example.com",
        "Full-Stack Developer",
        "Experienced full-stack developer skilled in building modern web applications.",
        [
            { id: "html", level: 95 },
            { id: "css", level: 90 },
            { id: "js", level: 80 }
        ]
    );
}, 2000);


