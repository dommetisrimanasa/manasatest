var AWS = require("aws-sdk");


const aws_remote_config = {
 "region": "us-south-1",
 "accessKeyId": "ASIAU26NHLT7O6IVQMLB",
 "secretAccessKey": "Az36e3A9zXmTjGZlOjSZb211rzOeRKD6HPLzIXoI"
};
AWS.config.update(aws_remote_config);
const docClient = new AWS.DynamoDB.DocumentClient();




//read
const params = {
  TableName: "",
};
docClient.scan(params, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  
  
  //insert
  // const insertparams = {
  //   TableName: "",
  //   Item: {
  //     id: 2,
  //     username: "Manju",
  //     password: "123abc"
  //   },
  // };
  // docClient.put(insertparams,function (err, data) {
  //     if (err) {
  //         console.log(err)
  //     } else {
  //         console.log(data)
  //     }
   })
  
