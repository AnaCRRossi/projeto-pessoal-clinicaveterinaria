class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async createUser(userData) {
        const user = new this.userModel(userData);
        return await user.save();
    }

    async validateUser(email, password) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }
        return user;
    }
}

export default AuthService;