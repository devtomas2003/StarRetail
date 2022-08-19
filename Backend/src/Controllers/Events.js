const pdfCreator = require('html-pdf-node');

module.exports = {
    async getHomeTicketsAndEvents(req, res){
        res.status(200).json({
            "status": "ok"
        });
    },
    printTickets(req, res){
        const options = { format: 'A4' };
        const file = { url: "http://192.168.1.10:8080/templates/tickets?purchase=0fddaa5b-bd27-4a07-b530-7a3a90728c91" };
        pdfCreator.generatePdf(file, options).then(pdfBuffer => {
            res.end(pdfBuffer);
        });
    }
};