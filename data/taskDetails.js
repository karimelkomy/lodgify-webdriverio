import { Chance } from "chance";

const chance = new Chance();

export const taskDetails = {
  taskName: chance.word() + chance.timestamp(),
  taskDescription: chance.sentence()
};
