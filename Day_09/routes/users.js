const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/file/:name", (req, res) => {
  let filePath = path.resolve(
    path.join(__dirname, `../public/images/${req.params.name}`)
  );
  fs.access(filePath, (err) => {
    if (err) {
      let msg = "File Not Found<br><br>List of Available Files:- <br>";
      fs.readdir(path.join(__dirname, `../public/images/`), (err, files) => {
        if (err) return;
        files.forEach((el, inx) => {
          console.log(el);
          msg += `${el}<br>`;
        });
        res.status(404).send(msg);
      });
    }
  });
  res.sendFile(filePath, (err) => {
    console.error(err);
  });
});

module.exports = router;
