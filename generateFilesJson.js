const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'votre-dossier'); // Remplacez 'votre-dossier' par le nom de votre dossier
const outputFilePath = path.join(__dirname, 'files.json');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    const fileData = {
        files: files
    };

    fs.writeFile(outputFilePath, JSON.stringify(fileData, null, 2), (err) => {
        if (err) {
            return console.error('Unable to write file: ' + err);
        }

        console.log('files.json has been generated');
    });
});
