const pageLoadTime = Date.now();

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.getElementById("userEmail").value;
        const userLanguage = navigator.language || navigator.userLanguage;
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const userAgent = navigator.userAgent;
        const referrer = document.referrer || "Direct";

        const isMobile = /Mobi|Android|iPhone/i.test(userAgent);
        const deviceType = isMobile ? "Mobile" : "Desktop";

        const os = navigator.platform;
        const browser = userAgent.match(/(firefox|msie|chrome|safari|edge|opr|opera)/i)?.[0] || "Unknown";

        const timeBeforeSubmit = ((Date.now() - pageLoadTime) / 1000).toFixed(2);

        try {
            const geoResponse = await fetch("https://ipapi.co/json/");
            const geoData = await geoResponse.json();

            const userCountry = geoData.country_name || "Unknown";
            const city = geoData.city || "Unknown";
            const region = geoData.region || "Unknown";
            const latitude = geoData.latitude || "Unknown";
            const longitude = geoData.longitude || "Unknown";
            const timeZone = geoData.timezone || "Unknown";
            const connectionType = navigator.connection ? navigator.connection.effectiveType : "Unknown";

            const payload = {
                email,
                userLanguage,
                userCountry,
                city,
                region,
                latitude,
                longitude,
                timeZone,
                deviceType,
                browser,
                os,
                screenWidth,
                screenHeight,
                referrer,
                timeBeforeSubmit,
                connectionType,
                userAgent
            };

            const response = await fetch("http://213.130.25.136:8080/webhook/save-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            alert("Successfully submitted!");
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    });
});
