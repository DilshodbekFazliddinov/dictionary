import "../css/style.css";
import "./mode";
import "./changeFont";
import "./searchInput";
import request from "./request";

const API = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`;

request(API)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    alert(err.message);
  });
