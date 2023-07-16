const { validationResults } = require("express-validator/check");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post!",
        imageUrl: "/images/1.jpg",
        creator: {
          name: "Ankit Sharma",
          date: new Date(),
        },
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResults(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({
        message: "Validation failed, entered data is incorrect",
        errors: errors.array(),
      });
  }
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Ankit Sharma" },
      createdAt: new Date(),
    },
  });
};
