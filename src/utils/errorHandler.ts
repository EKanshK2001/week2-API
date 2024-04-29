


// export const errorHandler = (statusCode: string, message: string) => {
//     const error = new Error(message, );
//     error.code = statusCode;
//     return error;
// }

interface CustomError extends Error {
    statusCode: number;
}

export const errorHandler = (message: string, statusCode: number): CustomError => {
    const error = Error(message) as CustomError;
    error.statusCode = statusCode;
    return error;
}