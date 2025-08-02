import { Router } from "express";
import { validateData } from "../middlewares/validateData";
import { createUserSchema } from "../validation/createUserSchema";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../services/AuthService";
import { AuthController } from "../controllers/AuthController";
import { loginUserChema } from "../validation/loginUserSchema";
import { updateUserSchema } from "../validation/updateUserSchema";
import { verifyAuth } from "../middlewares/verifyAuth";

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const router = Router();

router.post("/auth/register", validateData(createUserSchema), authController.register.bind(authController));
router.post("/auth/login", validateData(loginUserChema), authController.login.bind(authController));
router.post("/auth/update", verifyAuth, validateData(updateUserSchema), authController.update.bind(authController));

export default router;
