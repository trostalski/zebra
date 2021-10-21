import { Task } from "../../entities/Task";

const createTask = async (name: string, explanation: string) => {
  const result = await Task.create({
    name: name,
    explanation: explanation,
  });
  return result;
};

export default createTask;
