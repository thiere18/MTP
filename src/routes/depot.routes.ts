import { Router } from "express";
const router = Router();
import {Request, Response} from 'express'

import {
  getDepot,
  getDepots,
  createDepot,
  updateDepot,
  deleteDepot
} from "../controllers/Depot/depot.controller";

router.get("/depots", getDepots);
router.get("/depots/:id", getDepot);
router.post("/depots", createDepot);
router.put("/depots/:id", updateDepot);
router.delete("/depots/:id", deleteDepot);

export default router;
