module.exports = {
    landing: (req, res) => {
        const mentor = 5000;
        const favClass = 120;
        const trusted = 100;

        res.status(200).json({
            mentor,
            favClass,
            trusted
        });
    }
}