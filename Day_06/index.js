var fs = require("fs");
var _a = process.argv.slice(2), cmd = _a[0], fileName = _a[1], val = _a[2];
var help = function () {
    var helpC = "\n  \n      Usage:\n          node index.js [command] [fileName] [val]\n  \n      Commands:\n          --create-file fileName - Creates a new file\n          --create-file-with-text fileName text - Creates a new file with text inside\n          --create-dir dirName - Create a new Directory\n          --read-file - Read File's Content\n          --rename-file oldName newName - Rename File\n          --rename-dir oldName newName - Rename Directory\n          --delete-file fileName - Deletes a file\n          --delete-dir dirName - Deletes a Directory\n  \n      ";
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
        fs.writeFile(fileName, "", function (err) {
            if (err)
                console.error(err.message);
            console.log("File " + fileName + " Created");
        });
        break;
    case "--create-file-with-text":
        fs.writeFile(fileName, val, function (err) {
            if (err)
                console.error(err.message);
            console.log("File " + fileName + " Created with text " + val);
        });
        break;
    case "--create-dir":
        fs.mkdir(fileName, null, function (err, path) {
            if (err)
                console.error(err.message);
            console.log("Folder " + fileName + " Created");
        });
        break;
    case "--read-file":
        fs.readFile(fileName, "utf-8", function (err, data) {
            if (err)
                console.error(err.message);
            console.log("File " + fileName + " Contents are:-\n");
            console.log(data.toString());
        });
        break;
    case "--rename-file":
        fs.rename(fileName, val, function (err) {
            if (err)
                console.error(err.message);
            console.log("Renamed File " + fileName + " to " + val);
        });
        break;
    case "--rename-dir":
        fs.rename(fileName, val, function (err) {
            if (err)
                console.error(err.message);
            console.log("Renamed Folder " + fileName + " to " + val);
        });
        break;
    case "--delete-file":
        fs.rm(fileName, function (err) {
            if (err)
                console.error(err.message);
            console.log("Deleted File " + fileName + " Successfully");
        });
        break;
    case "--delete-dir":
        fs.rmdir(fileName, { recursive: true, force: true }, function (err) {
            if (err)
                console.error(err.message);
            console.log("Deleted Folder " + fileName + " Successfully");
        });
        break;
    default:
        console.log("Invalid Commands.\n Use --help to see all commands");
        break;
}
