import { createRouter, createWebHashHistory } from "vue-router";
// 1. Define route components.
// These can be imported from other files
import Home from "@/pages/Home";
import xboxOne from "@/pages/Category/XboxOne/index.vue";
import gameXboxOne from "@/pages/Category/XboxOne/gameXboxOne.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home, name: "home" },
  {path: "/category/xboxOne", component: xboxOne, name: "xboxOne" },
  {path: "/category/xboxOne/:id?", component: gameXboxOne, name: "gameXboxOne" },
];

// 3. Create the routser instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
export default router;