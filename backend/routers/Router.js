import express from "express"
import { ProductControllers } from "../controllers/ProductControllers.js"
export const route=express.Router()

route.get("/",ProductControllers.getAll)
route.get("/:id",ProductControllers.getById)
route.delete("/:id",ProductControllers.getDelete)
route.put("/:id",ProductControllers.getUpdate)
route.post("/",ProductControllers.getPost)
