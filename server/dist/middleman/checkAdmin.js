export const checkAdmin = (req, res, next) => {
    const user = { role: "admin" };
    if (user.role === "admin")
        return next();
    return res
        .status(401)
        .json({ success: false, message: "un-authorised user", data: null });
};
