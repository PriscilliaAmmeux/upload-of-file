// ./src/router.js
const express = require("express");
const fs = require("fs");

const multer = require("multer");
// Ajout de multer
const upload = multer({ dest: "uploads/" }); // On définit la destination de stockage de nos fichiers

const { v4: uuidv4 } = require("uuid"); // Ajout de uuid

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.post("/api/avatar", upload.single("avatar"), (req, res) => {
  const { originalname } = req.file;
  const { filename } = req.file;

  fs.rename(
    `uploads/${filename}`,
    `uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});

module.exports = router;
