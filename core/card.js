/** card.js **/

var Card = function (data) {
this.data = data;
}

Card.prototype.data = {}

Card.prototype.changeName = function (name,picture,attack,breakPower) {
this.data.name = name;
this.data.picture = picture;
this.data.attack = attack;
this.data.breakPower = breakPower;
}

Card.findById = function (id, callback) {
db.get('cards', {id: id}).run(function (err, data) {
if (err) return callback(err);
callback(null, new Card(data));
});
}

module.exports = Card;
