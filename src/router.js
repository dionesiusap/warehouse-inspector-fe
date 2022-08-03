import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/packages",
    name: "packages",
    component: () => import("./components/Packages")
  },
  {
    path: "/packages/:id",
    name: "package-details",
    component: () => import("./components/PackageDetails")
  },
  {
    path: "/inspections",
    name: "inspections",
    component: () => import("./components/Inspections")
  },
  {
    path: "/inspections/:id",
    name: "inspection-details",
    component: () => import("./components/InspectionDetails")
  },
  {
    path: "/package_inspections",
    name: "package-inspections",
    component: () => import("./components/PackageInspections")
  },
  {
    path: "/package_inspections/:id",
    name: "package-inspection-details",  
    component: () => import("./components/PackageInspectionDetails")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
