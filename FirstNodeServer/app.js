const http=require("http");
// function requestListener(req,res){
//   console.log(req)

// } es function ko hm es tarah direct b likh skty ha
const server=http.createServer(function requestListener(req,res){
  console.log(req);
  process.exit();

});
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`server on running address http://localhost:${PORT}`)
  })