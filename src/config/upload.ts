import multer from 'multer';

import path from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileName = `${Date.now()}-${file.originalname}`;
        return callback(null, fileName);
      },
    }),
};
