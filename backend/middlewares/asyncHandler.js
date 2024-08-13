const asyncHandler = (fn) => (req , res , next) => { // is a higher-order function that takes an asynchronous function fn as an argument. It returns a new function that takes req, res, and next as parameters
    Promise.resolve(fn(req , res , next)).catch(error => { // It ensures that the function fn is executed and its result is converted into a resolved Promise.
        res.status(500).json({message: error.message});
    });
};

export default asyncHandler ;

/*
The code you provided is an asyncHandler middleware function for handling 
asynchronous operations in an Express.js application. 
This middleware helps simplify error handling in asynchronous route handlers by catching any errors
and passing them to a central error handler or responding with an error message.
*/