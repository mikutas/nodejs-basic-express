var atricles = [];

module.exports = function(express){

    var router = express.Router();

    router.get("/articles", function(req, res){
        res.json(articles);
    });

    router.post("/articles", function(req, res){
        articles.push(req.body);
        res.redirect("/articles");
    });

    router.get("/articles/:id", function(req, res){

    });

    router.put("/articles/:id", function(req, res){

    });

    router.delete("/articles/:id", function(req, res){

    });

    return router;
};
