const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const HsCode = require('../../models/codes/hsCodeModel');

dotenv.config({ path: '../../config.env' });

// const DB = process.env.DATABASE_LOCAL;
const DB = 'mongodb://localhost:27017/toss-mip';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connection successful!');
  });

// READ JSON FILE
const detentions = JSON.parse(
  fs.readFileSync(`${__dirname}/codes.json`, 'utf-8')
);

console.log(detentions.length);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await HsCode.create(detentions);
    console.log('Data successfuly loaded!');
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

// DELETE ALL DATA FRON DB
const deleteData = async () => {
  try {
    await HsCode.deleteMany();
    console.log('Data successfuly deleted!');
  } catch (err) {
    console.log(err);
  }

  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
