class UsersCollection {
    constructor(users) {
        this.users = users;
    }

    addUser(user) {
        this.users.push(user);
    }
}