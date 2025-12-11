// ok lets do it 
import path from "path";
import fs from "fs";
import os from "os";
import EventEmitter from "events";

// 1
export function logCurrentFileAndDir() {
    console.log({ File: import.meta.url, Dir: process.cwd() });
}

// 2
export function getFileName(filePath) {
    return path.basename(filePath);
}

// 3
export function buildPath(obj) {
    return path.format(obj);
}

// 4
export function getFileExtension(filePath) {
    return path.extname(filePath);
}

// 5
export function parseFile(filePath) {
    const parsed = path.parse(filePath);
    return { Name: parsed.name, Ext: parsed.ext };
}

// 6
export function isAbsolutePath(filePath) {
    return path.isAbsolute(filePath);
}

// 7
export function joinSegments(...segments) {
    return path.join(...segments);
}

// 8
export function resolveAbsolute(relativePath) {
    return path.resolve(relativePath);
}

// 9
export function joinTwoPaths(p1, p2) {
    return path.join(p1, p2);
}

// 10
export function deleteFileAsync(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) return console.log(err);
        console.log(`The ${path.basename(filePath)} is deleted.`);
    });
}

// 11
export function createFolderSync(folderPath) {
    fs.mkdirSync(folderPath, { recursive: true });
    return "Success";
}

// 12 & 13 → Create event emitter
export class MyEmitter extends EventEmitter {}

// 14
export function readFileSyncLog(filePath) {
    const content = fs.readFileSync(filePath, "utf8");
    console.log("the file content =>", content);
}

// 15
export function writeFileAsync(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) return console.log(err);
        console.log("Saved!");
    });
}

// 16
export function directoryExists(dirPath) {
    return fs.existsSync(dirPath);
}

// 17
export function getOSInfo() {
    return { Platform: os.platform(), Arch: os.arch() };
}

