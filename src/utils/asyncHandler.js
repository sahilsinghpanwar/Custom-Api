// try catch sai toh niche kr deya , or aager Promise ke form mai h toh 

// fir ye karange
const asyncHandler = (requestHandler) => {
   return (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err));
    }
};


export {asyncHandler};


// const asyncHandler = () => {}                     
// const asyncHandler = (func) => () => {}                     steps of making asyncHandler
// const asyncHandler = (func) => async (req, res, next) => {}



// hum esmai ek function kai under function pass kr rahe hain

// ye rapper function hain jo hum hur jagah use karange


            //    or Promise waala use kro ya toh try catch waala use kro

// const asyncHandler = (fn) => async(req, res, next) => {

//     try {
//         await fn(res, req, next);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }

// }

