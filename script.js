document.addEventListener("DOMContentLoaded", () => {
    const siteName = document.querySelector(".site-name");

    // After 2s, change background and text color
    setTimeout(() => {
        document.body.style.backgroundColor = "white";
        if (siteName) siteName.style.color = "#333";
    }, 2000);

    // After 4s total, go to login.html
    // Use absolute path to avoid relative path issues when served by Express
    setTimeout(() => {
        const target = "/login.html"; // works with Express static
        // fallback for direct file-open (no server)
        if (location.protocol === "file:") {
            window.location.href = "dashboard.htm";
        } else {
            window.location.assign(target);
        }
    }, 4000);
});