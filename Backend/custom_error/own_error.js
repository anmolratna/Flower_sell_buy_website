class ownerror_handler extends Error{
    constructor(status , message){
        super()
        this.status=status;
        this.message=message;
    }
}

module.exports=ownerror_handler;