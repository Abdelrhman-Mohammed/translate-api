const express = require("express");
const app = express();
const translate = require("google-translate-api-x");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.post("/translate", (req, res) => {
  if (req.body.text) {
    translate(req.body.text, { to: "ar", autoCorrect: 1 }).then((result) => {
      console.log({ original: req.body.text, translated: result.text });

      res.json({ text: result.text });
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
