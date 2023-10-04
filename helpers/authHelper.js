import bcrypt from "bcrypt";

// Encrypt password
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

//Compare Password
export const comparePassword = async (password, hashedpassword) => {
  return bcrypt.compare(password, hashedpassword);
};
