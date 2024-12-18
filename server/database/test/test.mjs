import User from "../models/user.js";

function init() {
  const newUser = new User({
    Title: { type: String, required: true },  // String: Required field
    Category: { type: String, required: true },  // String: Required field
    Subcategory: { type: String, required: false },  // String: Optional field
    Description: { type: String, required: false },  // String: Optional field
    Curriculum: { type: String, required: false },  // String: Optional field
    ImageURL: { type: String, required: false },  // String: Optional field
    Price: { type: Number, required: true, default: 0.00 } // Number: Required with a default value
  });

  return newUser;
}
newUser
    .save()
    .then(() => {
      console.log("User saved successfully");
    })
    .catch((error) => {
      console.error("Error saving user:", error);
    });


export { init };
