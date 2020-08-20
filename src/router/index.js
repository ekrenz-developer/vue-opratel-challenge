import Router from "vue-router";
import Users from "@/views/Users";
import Birthday from "@/views/Birthday";

const routes = [
  {
    path: "/",
    name: "Users",
    component: Users
  },
  {
    path: "/birthday",
    name: "Birthday",
    component: Birthday
  },
  {
    path: "/*",
    name: "Default",
    component: Users
  }
];

export default new Router({
  mode: "history",
  routes
});
