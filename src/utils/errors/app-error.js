class AppError extends Error{
    constructor(message,StatusCode){
        super(message)
        this.StatusCode=StatusCode;
        this.explanation=message; 
    }
}

module.exports = AppError