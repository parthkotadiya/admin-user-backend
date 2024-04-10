const App = require("../model/app.model")

exports.findAll = (req, res) => {
    App.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                user: err.user || "error occured"
            });
        });
}

exports.findOne = (req, res) => {
    App.find({ email: req.params.email })
        .then((data) => {
            console.log(data);
            if (!data) {
                return res.status(404).send({
                    user: "User not found with email " + req.params.email,
                });
            }
            res.send(data);
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    user: "User not found with email " + req.params.email,
                });
            }
            return res.status(500).send({
                user: "Error retrieving message with email " + req.params.email,
            });
        });
};