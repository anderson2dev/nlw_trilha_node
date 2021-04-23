class UserDoesNotExists extends Error {
    constructor(user_name: String) {
        super(`User ${user_name} does not exists in the database`);
        this.name = "UserAlreadyExists"
    }
}

export default UserDoesNotExists;