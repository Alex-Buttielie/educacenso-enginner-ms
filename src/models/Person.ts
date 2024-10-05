import mongoose from 'mongoose';

const Person = new mongoose.Schema({
    name: { type: String, required: false },
    day: { type: String, required: false },
    month: { type: String, required: false },
    year: { type: String, required: false },
});

export default mongoose.model('Person', Person);
