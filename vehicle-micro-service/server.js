const mongoose=require('mongoose');
const app=require('./app');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

const DB=process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
mongoose.connect(process.env.DATABASE_LOCAL,{
//.connect(DB,{
  useNewUrlParser:true,
 // useCreateIndex:true,
 // useFindAndModify:true,
  useUnifiedTopology:true
}).then(con=>{
  //console.log(con.connections);
  console.log("DATABASE connection successfull!...."+ process.env.DATABASE_LOCAL);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

