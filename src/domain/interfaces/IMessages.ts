import { IUserResponse } from "./IUserInterface";

interface IMessageRequest {
    user_id: String;
    message: String;    
}

interface IMessageResponse {
    id: String;
    user: IUserResponse;
    message: String;
    created_at: Date;
}

export  {
    IMessageRequest,
    IMessageResponse
}