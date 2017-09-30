var atricles = [];

module.exports = function(express){

    var router = express.Router();

    router.route("/articles")
        .get(function(req, res){
        res.json(articles);
    }).post(function(req, res){
        articles.push(req.body);
        res.redirect("/articles");
    });

    router.route("/articles/:id")
        .get(function(req, res){

    }).put(function(req, res){

    }).delete("/articles/:id", function(req, res){

    });

    return router;
};
