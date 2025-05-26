const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: String,
    CoverImage: String,
    Image: String,
    Image2: String,
    author: String,
    shortdescription: String,
    longdescription: String,
    bgImage: String,
    url: String,
    link: String,
    id: String,
    metacanonical: String,
    metatitle: String,
    metadescription: String,
    metakeywords: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
