const multer = require ('multer');
const path = require ('path');
const crypto = require ('crypto');  //serve para gerar hash (conjunto de caracteres único)

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),    //define o destino dos arquivos salvos na aplicação
    storage: multer.diskStorage({           //define o local de armazenamento como sendo no disco local
        destination:(req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'));  //seta o destino que os arquivos terão.
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {   //gera os bytes de caractere aleatorio para compor o hash
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`; 
                cb(null, file.key);   
            })
            
        }                      
    })
}