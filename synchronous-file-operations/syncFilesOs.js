
import fs from "fs";

const data = "This is a sample text file created using synchronous file operations in Node.js.";

fs.writeFileSync("sample.txt", data, "utf-8");

console.log("File created successfully using synchronous file operations.");

const readData = fs.readFileSync("sample.txt", "utf-8");

console.log("File read successfully using synchronous file operations.");
console.log(readData);

console.log("End of synchronous file operations");

const AppendedData =
    "\nThis is additional data appended to the file using synchronous file operations.";

fs.appendFileSync("sample.txt", AppendedData, "utf-8");

console.log("Data appended successfully using synchronous file operations.");

/* Delete a file

const deletedFile = "sample.txt";
fs.unlinkSync(deletedFile);

console.log("File deleted successfully using synchronous file operations.");

*/

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Synchronous File Operations Running Successfully</h1>");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});