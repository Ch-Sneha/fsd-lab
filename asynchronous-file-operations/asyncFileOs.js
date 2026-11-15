import fs from "fs";
import http from "http";

const Data1 = "This is a sample1 text file created using asynchronous file operations.";

console.log("before writing");

fs.writeFile("sample1.txt", Data1, "utf-8", (err) => {
    if (err) throw err;

    console.log(
        "File created successfully using asynchronous file operations."
    );

    fs.readFile("sample1.txt", "utf-8", (err, readData) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log(
            "File read successfully using asynchronous file operations."
        );
        console.log(readData);
    });

    console.log(
        "completed writing file using asynchronous file operations"
    );

    const AppendeData ="\nThe data appended to the file using asynchronous file operations.";

    fs.appendFile("sample1.txt", AppendeData, "utf-8", (err) => {
        if (err) throw err;

        console.log(
            "Data appended successfully using asynchronous file operations."
        );
    });
});

/*
const deletedFile = "sample1.txt";

fs.unlink(deletedFile, (err) => {
    if (err) {
        console.log("Error deleting file:", err);
        return;
    }

    console.log(
        "File deleted successfully using asynchronous file operations."
    );
});
*/

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Asynchronous File Operations Running Successfully</h1>");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});