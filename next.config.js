module.exports = {
    publicRuntimeConfig: {
        site: {
            name: "Arizona Chaverim",
            url:
                process.env.NODE_ENV === "development"
                    ? "http://localhost:3000"
                    : "https://arizona-chaverim.vercel.app/",
            title: "Arizona Chaverim Emergency Services",
            description: "Friends you can count on.",
            socialPreview: "/images/preview.png",
        },
    },
    swcMinify: true,
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
};
