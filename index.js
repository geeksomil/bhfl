const express = require("express");
const App = express();
App.use(express.json());
App.post("/bhfl", (req, res) => {
  try {
    const arr = req.body.data;
    let odd_numbers = [];
    let even_numbers = [];
    const alphabets = [];
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        alphabets.push(arr[i].toUpperCase());
      } else {
        const n = Number(arr[i]);
        if (n % 2 == 0) {
          even_numbers.push(n + "");
        } else {
          odd_numbers.push(n + "");
        }
      }
    }
    res.json({
      is_success: "true",
      user_id: "somilgambhir_08072003",
      email: "somil1378.be21@chitkara.edu.in",
      roll_number: "2110991378",
      odd_numbers,
      even_numbers,
      alphabets,
    });
  } catch {
    res.json({
      is_success: "false",
      user_id: "somilgambhir_08072003",
      email: "somil1378.be21@chitkara.edu.in",
      roll_number: "2110991378",
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
    });
  }
});
App.listen(8000);
