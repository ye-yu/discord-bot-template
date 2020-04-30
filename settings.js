const fs = require("fs");
const SETTING_FILE = "settings.json";

function initSettingFile() {
  console.info("Initialisation...");
  fs.stat(SETTING_FILE, (err, stats) => {
    if(stats === undefined) {
      console.info(`${SETTING_FILE} does not exists. Creating one right now.`);
      createDefault();
    } else {
      if (!stats.isFile()) {
        console.error(`${SETTING_FILE} is a directory.`);
        process.exit(1);
      };
    };
  });
}

function createDefault() {
  const defSetting = {
    prefix: "!",
    quietIn: [],
    prefixOnly: false
  };
  fs.writeFileSync(SETTING_FILE, JSON.stringify(defSetting, null, 2));
}

function getSettingProp(prop, def = false) {
  return JSON.parse(fs.readFileSync(SETTING_FILE))[prop] || def;
}

function writeSettingProp(prop, value) {
  let props = JSON.parse(fs.readFileSync(SETTING_FILE));
  props[prop] = value;
  fs.writeFileSync(SETTING_FILE, JSON.stringify(props, null, 2));
}

module.exports = {
  initSettingFile: initSettingFile,
  getSettingProp: getSettingProp
}
