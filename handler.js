'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Yahoooooo , Welcome Zaidar to the Severless world (Production Stage Be Carrrrreefullll Man !!!!)'
    })
  };
};


module.exports.persons = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
     [
       {"id":1,"name":"Zaidar","age":21},
       {"id":2,"name":"Lara","age":22},
       {"id":3,"name":"Karla","age":23},
       {"id":4,"name":"Marla","age":24}
     ]
    ),
  };
};



// these credentials to make unlimited access to aws account
// Access Key ID: AKIAISB4G5R6SPRP3HSA
// Secret Access Key : 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

// run this command 
// serverless config credentials --provider aws --key AKIAISB4G5R6SPRP3HSA --secret 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