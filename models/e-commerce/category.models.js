import mongoose from "mongoose";
const categorySchema = newse.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Category = mongoose.model("Category", categorySchema);
