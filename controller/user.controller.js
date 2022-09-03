let user = require('../user.json')
module.exports.randomget = (req, res) => {
    const id = Math.floor(Math.random() * 4) + 1;
    const filter = user.find(us => us.Id == id);
    if (filter) {
        res.send(filter)
    }
}
module.exports.allget = (req, res) => {
    const query = Number(req.query.limit);
    if (query) {
        res.send(user.slice(0, query))
    } else {
        res.send(user)
    }
}

module.exports.userpost = (req, res) => {
    const { Id, gender, name, contact, address, photoUrl } = req.body;
    const filter = user.find(us => us.Id == Id);
    if (!filter) {
        if (Id && gender && name && contact && address && photoUrl) {
            res.send({ message: "push" })
        } else {
            res.send({ message: "value Messing" })
        }
    } else {
        res.send({ message: "alredy id acgest" })
    }
}
module.exports.userpatch = (req, res) => {
    const id = Math.floor(Math.random() * 4) + 1;
    const data = req.body;
    const filter = user.find(use => use.Id === Number(id));
    filter.name = data.Id || filter.Id;
    filter.gender = data.gender || filter.gender;
    filter.name = data.name || filter.name;
    filter.contact = data.contact || filter.contact;
    filter.address = data.address || filter.address;
    filter.photoUrl = data.photoUrl || filter.photoUrl;
    res.send(filter)

}
module.exports.bulkpatch = (req, res) => {
    const { Id } = req.params;
    const data = req.body;
    const filter = user.find(use => use.Id === Number(Id));
    filter.name = data.Id || filter.Id;
    filter.gender = data.gender || filter.gender;
    filter.name = data.name || filter.name;
    filter.contact = data.contact || filter.contact;
    filter.address = data.address || filter.address;
    filter.photoUrl = data.photoUrl || filter.photoUrl;
    res.send(filter)

}
module.exports.userdelete = (req, res) => {
    const { Id } = req.params;
    if (Number(Id)) {
        result = user.filter(use => use.Id !== Number(Id));
        res.send(result);
    } else {
        res.send({ message: "not number" })
    }
}