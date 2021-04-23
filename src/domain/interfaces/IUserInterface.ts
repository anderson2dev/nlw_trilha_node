import UserRole from "../database/models/UserRole";

interface IUserRequest {
    role?: UserRole;
    email: String;
}

interface IUserResponse {
    id: String;
    email: String;
    created_at: Date;
}

export {
    IUserRequest,
    IUserResponse
}