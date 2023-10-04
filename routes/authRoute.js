import Express from "express";
import {
  registerContoller,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//Router Object
const router = Express.Router();

//routing
//REGISTER  || METHOD POST
router.post("/register", registerContoller);

//LOGIN  || METHOD POST
router.post("/login", loginController);

//forgot password
router.post("/forgot_password", forgotPasswordController);

//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update Profile
router.put("/update-profile", requireSignIn, updateProfileController);

//text routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
