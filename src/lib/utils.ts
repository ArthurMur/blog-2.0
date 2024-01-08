const {default: mongoose} = require('mongoose');

interface ConnectionObject {
  isConnected: boolean;
}

const connection: ConnectionObject = {
  isConnected: false
};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Connected to db');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    await mongoose.connect(process.env.MONGO)
  } catch (error) {
    console.log(error);
    throw new Error('Failed to connect to db');
  }
}