/* GET Homepage */
const index = (req, red) => {
    res.render('index', { title: "Travlr Getaways"});
};

module.exports = {
    index
}