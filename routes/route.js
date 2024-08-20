const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// Schema routes
const { createSchema, updateSchema, deleteSchema, getSchema, getAllSchema } = require('../controllers/schema');
// 
router.post("/schema/create", checkAuthorizationHeaders,authorizeUser("createSchema") ,createSchema);
router.put("/schema/update/:id", checkAuthorizationHeaders,authorizeUser("updateSchema"), updateSchema);
router.delete("/schema/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteSchema"), deleteSchema);
router.get("/schema/get/:id", checkAuthorizationHeaders, authorizeUser("readSchema"), getSchema);
router.get("/schema/getAll", checkAuthorizationHeaders, authorizeUser("readSchema"), getAllSchema);

  
module.exports = router;
