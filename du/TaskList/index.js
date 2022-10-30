import { Task } from "../Task/index.js";

export const TaskList = (props) => {
  const { items } = props;
  return `
        ${items.map((item) => Task(item)).join('')}
  `;
};
