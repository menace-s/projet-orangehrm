export const validUsers = {
    admin: {
        username: 'Admin',
        password: 'admin123',
        role: 'Admin'
    }
    };

export const invalidUsers = {
    wrongPassword: {
        username: 'Admin',
        password: 'wrongpassword'
    },
    wrongUsername: {
        username: 'WrongUser',
        password: 'admin123'
    },
    emptyFields: {
        username: '',
        password: ''
    }
};