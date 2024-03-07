import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    des: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestampes: true }
);

const Blog = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default Blog;
