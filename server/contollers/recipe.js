const Recipe = require("../models/recipe");

const slugify = require("slugify");

exports.create = (req, res) => {
    const { name, instructions, user, image, cooktime, yields } = req.body;

    const slug = slugify(name);

    //Validate
    switch (true) {
        case !name:
            return res.status(400).json({ error: "Name is required" });
            break;
        case !instructions:
            return res.status(400).json({ error: "instructions is required" });
            break;
        case !cooktime:
            return res.status(400).json({ error: "cook time is required" });
            break;
        case !yields:
            return res.status(400).json({ error: "yields is required" });
            break;
    }
    Recipe.create({ name, instructions, user, image, cooktime, yields, slug }, (err, recipe) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: "Some Error" });
        }

        res.json(recipe);
    });
};
