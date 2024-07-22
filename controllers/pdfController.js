const fs = require("fs");
const pdf = require("html-pdf");
const path = require("path");
const response = require("../helpers/response");

class pdfController {
    create(req, res) {
        try {
            const nameFile = "public/pdf/export.pdf";
            if (fs.existsSync(path.join(__dirname, `../${nameFile}`))) {
                fs.unlinkSync(path.join(__dirname, `../${nameFile}`));
            }

            const html = fs.readFileSync(path.join(__dirname + "/../views/pdf.html"), "utf8");

            return new Promise((resolve) => {
                pdf.create(html, {}).toFile(`./${nameFile}`, (error, file) => {
                    if (error) {
                        console.log(error)
                        return resolve(response(res, 400, true, "Erro ao criar arquivo"));
                    }

                    console.log(file)
    
                    return resolve(response(res, 200, false, "Arquivo criado com êxito.", nameFile));
                });
            });
        } catch (error) {
            console.log(error);
            response(res, 400, true, "Erro ao criar arquivo", error);
        }
    }
}

module.exports = new pdfController;