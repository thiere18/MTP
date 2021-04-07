import { Router } from "express";
const router = Router();

import {
  getCategory,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} from "../controllers/Category/category.controller";




router.get("/category", getCategories);

router.get("/category/:id", getCategory);
router.post("/category", createCategory);
router.put("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

export default router;
