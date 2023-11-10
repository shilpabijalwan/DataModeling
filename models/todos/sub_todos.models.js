import mongooes from 'mongoose';
const subTodoSchema = new mongooes.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongooes.Schema.Types.ObjectId,
      ref: SubTodo,
    },
  },
  { timestamps: true }
);
export const SubTodo = mongooes.model('SubTodo', subTodoSchema);
