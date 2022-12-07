import React from "react";
import { END_POINTS } from "./../../constants/urls";

export default function LandingPage() {
  // const submitForm = () => {
  //   fetch(END_POINTS.login)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // };
  // async function postData(url = END_POINTS.login, data = {}) {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/json",
  //       "access-control-allow-origin": "*",

  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }

  return (
    <div className="w-full h-full flex">
      {/* <button
        onClick={() => {
          postData("http://3.145.30.125:8080" + END_POINTS.login, {
            email: "ben@mail.com",
            password: "striing",
          });
        }}
      >
        submit
      </button> */}
    </div>
  );
}
// REACT_APP_BASE_URL = http://3.145.30.125:8080
