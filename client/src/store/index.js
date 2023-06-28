import { proxy } from "valtio";

const state = proxy({
  edit: true,
});

export default state;
