import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL =`mongodb+srv://anurag12345:xfy9KUnqwTHH1aMv@golu.j9pguwh.mongodb.net/golu?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;