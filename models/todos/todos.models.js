import mongooes from 'mongoose';

const todoSchema = new mongooes(
  {
    content: {
      type: String,
      require: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createBy: {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'User',
    },
    SubTodo: [
      {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], //array of subTodos
  },
  { timestemps: true }
);
export const Todo = mongooes.model('Todo', todoSchema);
