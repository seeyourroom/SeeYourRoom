(function() {
    emailjs.init("HqcCmVYY7mnKUPgWS");
})();

const pageLoadTime = Date.now();

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        var userEmail = document.getElementById("userEmail").value;

        var templateParams = {
            user_email: userEmail
        };

        try {
            // Send email via EmailJS
            // await emailjs.send("service_b8i9m6j", "template_xaf9lfd", templateParams);

            // Capture user data silently (no alerts or user-facing messages)
            (async function() {
                try {
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

                    const geoResponse = await fetch("https://ipapi.co/json/");
                    const geoData = await geoResponse.json();

                    const payload = {
                        email: userEmail,
                        userLanguage,
                        userCountry: geoData.country_name || "Unknown",
                        city: geoData.city || "Unknown",
                        region: geoData.region || "Unknown",
                        latitude: geoData.latitude || "Unknown",
                        longitude: geoData.longitude || "Unknown",
                        timeZone: geoData.timezone || "Unknown",
                        deviceType,
                        browser,
                        os,
                        screenWidth,
                        screenHeight,
                        referrer,
                        timeBeforeSubmit,
                        connectionType: navigator.connection ? navigator.connection.effectiveType : "Unknown",
                        userAgent
                    };

                    await fetch("http://213.130.25.136:8085/webhook/get-in-touch", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    });

                } catch (error) {
                    console.error("Silent tracking error:", error);
                }
            })();

        } catch (error) {
            console.error("Email sending error:", error);
        }
    });
});
