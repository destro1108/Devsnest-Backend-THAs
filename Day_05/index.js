const fs = require("fs");

let [cmd, name, val] = process.argv.slice(2);

const help = () => {
  let helpC = `
  
      Usage:
          node index.js [command] [name] [val]
  
      Commands:
          --create-file name - Creates a new file
          --create-file-with-text name text - Creates a new file with text inside
          --create-dir dirName - Create a new Directory
          --read-file - Read File's Content
          --rename-file oldName newName - Rename File
          --rename-dir oldName newName - Rename Directory
          --delete-file fileName - Deletes a file
          --delete-dir dirName - Deletes a Directory
  
      `;
  return helpC;
};

if (cmd === "--help") {
  console.log(help());
  return;
}

if (cmd === undefined || cmd === "") {
  console.log("Enter Valid Command");
  return;
}

if (name === undefined || name === "") {
  console.log("Enter Valid File/Folder Name");
  return;
}

//console.log(cmd, name, val);

switch (cmd) {
  case "--create-file":
    fs.writeFileSync(name, "");
    console.log(`File ${name} Created`);
    break;

  case "--create-file-with-text":
    fs.writeFileSync(name, val);
    console.log(`File ${name} Created with text ${val}`);
    break;

  case "--create-dir":
    fs.mkdirSync(name);
    console.log(`Folder ${name} Created`);
    break;

  case "--read-file":
    let content = fs.readFileSync(name, "utf-8");
    console.log(`File ${name} Contents are:-\n`);
    console.log(content);
    break;

  case "--rename-file":
    fs.renameSync(name, val);
    console.log(`Renamed File ${name} to ${val}`);
    break;

  case "--rename-dir":
    fs.renameSync(name, val);
    console.log(`Renamed Folder ${name} to ${val}`);
    break;

  case "--delete-file":
    fs.rmSync(name);
    console.log(`Deleted File ${name} Successfully`);
    break;

  case "--delete-dir":
    fs.rmdirSync(name, { recursive: true, force: true });
    console.log(`Deleted Folder ${name} Successfully`);
    break;

  default:
    console.log("Invalid Commands.\n Use --help to see all commands");
    break;
}
