class User {
    constructor(id, name, email, password, userType) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.userType = userType; // 'veterinarian' or 'owner'
    }
}

export default User;