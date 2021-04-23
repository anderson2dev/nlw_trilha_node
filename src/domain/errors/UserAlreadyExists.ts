class UserAlreadyExists extends Error {
    constructor(user_name: String) {
        super(`User ${user_name} already exists in the database`);
        this.name = "UserAlreadyExists"
    }
}

export default UserAlreadyExists;