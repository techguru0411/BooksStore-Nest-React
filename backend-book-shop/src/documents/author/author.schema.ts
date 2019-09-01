import * as mongoose from 'mongoose';
import { BookSchema } from 'src/documents/book/book.schema';

export const AuthorSchema = new mongoose.Schema({
    username: String,
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'books',
   }],
});
