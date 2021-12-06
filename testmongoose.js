const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const schema = {
    name: String,
    age: Number,
    health:String,
    hobby:String
}
const Cat = mongoose.model('Cat', schema);

// const kitty = new Cat({ name1: 'testZildjian1' });
// kitty.save().then(() => console.log('testmeow1'));
// const kitty1 = new Cat({name:"hellokitty1",age:5,health:"good"})
// kitty1.save().then(() => console.log("new schema writed."))

Cat.find({name:"hellokitty"},(err,data)=>{console.log(data[0]._doc.name)})