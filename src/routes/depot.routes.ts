import { Router } from "express";
const router = Router();

import {
  getDepot,
  getDepots,
  createDepot,
  updateDepot,
  deleteDepot
} from "../controllers/Depot/depot.controller";

router.get("/depot", getDepots);
router.get("/depot/:id", getDepot);
router.post("/depot", createDepot);
router.put("/depot/:id", updateDepot);
router.delete("/depot/:id", deleteDepot);

export default router;
