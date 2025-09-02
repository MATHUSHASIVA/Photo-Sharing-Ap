import express from "express";
import {
  getPins,
  getPin,
  createPin,
  deletePin,
  interactionCheck,
  interact,
} from "../controllers/pin.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", getPins);
router.post("/", verifyToken, createPin);
router.delete("/:id", verifyToken, deletePin); 
router.get("/:id", getPin);
router.get("/interaction-check/:id", interactionCheck);
router.post("/interact/:id", verifyToken, interact);

export default router;