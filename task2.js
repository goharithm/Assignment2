// main.js (ES6 Version)
import {
    logCurrentFileAndDir,
    getFileName,
    buildPath,
    getFileExtension,
    parseFile,
    isAbsolutePath,
    joinSegments,
    resolveAbsolute,
    joinTwoPaths,
    deleteFileAsync,
    createFolderSync,
    MyEmitter,
    readFileSyncLog,
    writeFileAsync,
    directoryExists,
    getOSInfo
} from "./functions.js";


// ----------------- RUNNING THE TESTS -----------------

// 1
logCurrentFileAndDir();

// 2
console.log(getFileName("/user/files/report.pdf"));

// 3
console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));

// 4
console.log(getFileExtension("/docs/readme.md"));

// 5
console.log(parseFile("/home/app/main.js"));

// 6
console.log(isAbsolutePath("/home/user/file.txt"));

// 7
console.log(joinSegments("src", "components", "App.js"));

// 8
console.log(resolveAbsolute("./index.js"));

// 9
console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

// 10
// deleteFileAsync("/path/to/file.txt");

// 11
console.log(createFolderSync("./newFolder"));

// 12 + 13 Events
const events = new MyEmitter();

events.on("start", () => console.log("Welcome event triggered!"));
events.on("login", (user) => console.log(`User logged in: ${user}`));

events.emit("start");
events.emit("login", "Ahmed");

// 14
// readFileSyncLog("./notes.txt");

// 15
// writeFileAsync("./async.txt", "Async save");

// 16
console.log(directoryExists("./notes.txt"));

// 17
console.log(getOSInfo());

