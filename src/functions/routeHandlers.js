
export const homeHandler = (req, res) => {
    req.on('data', (data)=> {
        res.writeHead(200);
        res.end(data.toString());
    })
}