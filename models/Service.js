// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//   title: { type: String, required: true, unique: true },
//   description: String,
//   bgImage: String,
//   link: String,
// }, { timestamps: true });

// module.exports = mongoose.model("Service", serviceSchema);
const mongoose = require("mongoose");

const subServiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: String,
  intro: String,
  description: String,
  shortdescription: String,
  longdescription: String,
  bgImage: String
});

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    intro: String,
    description: String,
    shortdescription: String,
    longdescription: String,
    bgImage: String,
    img: String,
    url: String,
    link: String,
    id: String,
    metacanonical: String,
    metatitle: String,
    metadescription: String,
    metakeywords: String,
    SubServices: [subServiceSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
