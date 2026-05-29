const path = require("path");
const fse = require("fs-extra");

const source = path.join(__dirname, "src", "assets", "godot-game");
const destination = path.join(__dirname, "dist", "portfolio", "browser", "assets", "godot-game");

fse.copy(source, destination)
  .then(() => console.log("✅ Godot game files copied successfully."))
  .catch(err => console.error("❌ Failed to copy Godot game files:", err));
