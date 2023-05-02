import { validationResult, body } from "express-validator";
import { CustomAPIError } from "../../errors/index.js";

class AuthController {
  async register(req, res) {
    await body("email").notEmpty().isEmail().run(req);
    await body("name").notEmpty().run(req);
    await body("password").notEmpty().run(req);
    const results = validationResult(req);
    if (!results.isEmpty()) {
      throw new CustomAPIError("Invalid inputs", 422, {
        errors: results.errors,
      });
    }
    res.send("hello");
  }
}

export default new AuthController();
