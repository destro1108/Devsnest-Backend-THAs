const fs = require("fs");

let [cmd, fileName, val] = process.argv.slice(2);

const help = () => {
  let helpC = `
  
      Usage:
          node index.js [command] [fileName] [val]
  
      Commands:
          --create-file fileName - Creates a new file
          --create-file-with-text fileName text - Creates a new file with text inside
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
  process.exit(0);
}

if (cmd === undefined || cmd === "") {
  console.log("Enter Valid Command");
  process.exit(0);
}

if (fileName === undefined || fileName === "") {
  console.log("Enter Valid File/Folder Name");
  process.exit(0);
}

//console.log(cmd, fileName, val);

switch (cmd) {
  case "--create-file":
    fs.writeFile(fileName, "", (err: NodeJS.ErrnoException) => {
      if (err) console.error(err.message);
      console.log(`File ${fileName} Created`);
    });
    break;

  case "--create-file-with-text":
    fs.writeFile(fileName, val, (err: NodeJS.ErrnoException) => {
      if (err) console.error(err.message);
      console.log(`File ${fileName} Created with text ${val}`);
    });
    break;

  case "--create-dir":
    fs.mkdir(fileName, null, (err: NodeJS.ErrnoException, path: string) => {
      if (err) console.error(err.message);
      console.log(`Folder ${fileName} Created`);
    });
    break;

  case "--read-file":
    fs.readFile(
      fileName,
      "utf-8",
      (err: NodeJS.ErrnoException, data: Buffer) => {
        if (err) console.error(err.message);
        console.log(`File ${fileName} Contents are:-\n`);
        console.log(data.toString());
      }
    );
    break;

  case "--rename-file":
    fs.rename(fileName, val, (err: NodeJS.ErrnoException) => {
      if (err) console.error(err.message);
      console.log(`Renamed File ${fileName} to ${val}`);
    });
    break;

  case "--rename-dir":
    fs.rename(fileName, val, (err: NodeJS.ErrnoException) => {
      if (err) console.error(err.message);
      console.log(`Renamed Folder ${fileName} to ${val}`);
    });
    break;

  case "--delete-file":
    fs.rm(fileName, (err: NodeJS.ErrnoException) => {
      if (err) console.error(err.message);
      console.log(`Deleted File ${fileName} Successfully`);
    });
    break;

  case "--delete-dir":
    fs.rmdir(
      fileName,
      { recursive: true, force: true },
      (err: NodeJS.ErrnoException) => {
        if (err) console.error(err.message);
        console.log(`Deleted Folder ${fileName} Successfully`);
      }
    );
    break;

  default:
    console.log("Invalid Commands.\n Use --help to see all commands");
    break;
}
