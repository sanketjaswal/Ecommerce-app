import Express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  braintreePaymentsController,
  braintreeTokenController,
  countProductController,
  createProductController,
  deleteProductController,
  filterProductController,
  getPhotoProductController,
  getProductController,
  getSingleProductController,
  productListController,
  productRelatedController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = Express.Router();

//routes

//Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get Products
router.get("/get-product", getProductController);

//get single Product
router.get("/get-product/:slug", getSingleProductController);

//get Photo
router.get("/get-product-photo/:pid", getPhotoProductController);

//get Photo
router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

//filter product
router.post("/product-filters", filterProductController);

//produuct count
router.get("/product-count", countProductController);

//product per page
router.get("/product-list/:page", productListController);

//similar products
router.get("/product-related/:pid/:cid", productRelatedController);

//payments routes

//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("braintree/payment", requireSignIn, braintreePaymentsController);

export default router;
