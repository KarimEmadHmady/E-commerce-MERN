import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

const authenticate = asyncHandler(async (req, res, next) => {
    let token;

    // Read JWT from the 'jwt' cookie
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password'); // Assigning user to req.user
            next();
        } catch (error) {
            res.status(400);
            throw new Error("Not authorized, token failed");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

const outhorizedAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) { // Checks req.user, not res.user
        next();
    } else {
        res.status(401).send("Not authorized as an admin");
    }
};

export { authenticate, outhorizedAdmin };
