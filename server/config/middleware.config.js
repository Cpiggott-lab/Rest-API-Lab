const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

export function middlewareConfig(app) {
  // Middleware functions run during the request-response cycle and can modify
  // the request (req), response (res), or pass control to the next function.
  app.use(express.json());
  // Logs HTTP requests to the console in a developer-friendly format.
  app.use(morgan("dev"));
  // Serves static files (HTML, CSS, images, etc.) from the "public" directory.
  app.use(express.static("public"));
  // Parses URL-encoded form data and adds it to req.body.
  app.use(express.urlencoded({ extended: false }));
  // Parses cookies attached to the client request and makes them accessible via req.cookies.
  app.use(cookieParser());
  //security
  app.use(cors());
}
