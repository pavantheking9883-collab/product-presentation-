const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    // Determine the requested file path (default to index.html for root)
    let filePath = req.url === '/' ? 'index.html' : req.url.slice(1);
    
    // Clean query parameters and hashes from the request path
    filePath = filePath.split('?')[0].split('#')[0];
    
    const absolutePath = path.join(process.cwd(), filePath);
    
    // Map extensions to content headers
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.jpg': 'image/jpeg',
        '.png': 'image/png',
        '.mp4': 'video/mp4',
        '.ico': 'image/x-icon'
    };
    
    const ext = path.extname(absolutePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    fs.readFile(absolutePath, (err, data) => {
        if (err) {
            // Fallback to index.html for clean URL routing
            const fallbackPath = path.join(process.cwd(), 'index.html');
            fs.readFile(fallbackPath, (fallbackErr, fallbackData) => {
                if (fallbackErr) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('File not found');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(fallbackData);
                }
            });
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
};
