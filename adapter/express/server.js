import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import compression from "compression";

import Gun from 'gun'
require('gun/axe')
require('bullet-catcher')

function hasValidToken(msg) {
  return msg && msg && msg.headers && msg.headers.token && msg.headers.token === 'thisIsTheTokenForReals'
}


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  PORT = 3000,
  ASSETS = path.join(__dirname, "assets"),
  PRERENDERED = path.join(__dirname, "prerendered"),
} = process.env;

const app = express();
app.use(compression());
app.use("/", express.static(ASSETS));
app.use("/", express.static(PRERENDERED));
// Your own routes here

app.use(Gun.serve);

const server = app.listen(PORT);
Gun({ file: 'data.json', web: server, isValid: hasValidToken })
console.log(`started on ${PORT}`);