let setCurrentCopyrightYear = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
}

let setExperienceInYears = () => {
    const currentYear = new Date().getFullYear();
    const experienceInYears = currentYear - 2014 + (new Date().getMonth() >= 10 ? 1 : 0);
    document.getElementById('experience-in-years').textContent = experienceInYears;
}

let setEmailLinks = () => {
    document.querySelectorAll('.email-link').forEach((link) => {
        link.addEventListener('click', () => {
            const email = String.fromCharCode(99, 111, 110, 116, 97, 99, 116, 64, 100, 121, 108, 97, 110, 114, 105, 98, 98, 46, 99, 111, 109);
            link.href = `mailto:${email}`;
        });
    });
}

(() => {
    setCurrentCopyrightYear();
    setExperienceInYears();
    setEmailLinks();
})();