import { Router } from "express";
import { validateData } from "../middlewares/validateData";
import { createUserSchema } from "../schemas/userSchemas";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../services/AuthService";
import { AuthController } from "../controllers/AuthController";

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const router = Router();

router.post('/auth/register', validateData(createUserSchema), authController.register.bind(authController));

export default router