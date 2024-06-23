const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

// User Schema Model:
const userSchema = new Schema ({
    email: {
        type: String,
        trim: true,
        required: [true, 'Please enter an email.'],
        unique: [true, 'Email is already taken.'],
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email.'],
        maxLength: [320, 'Email should not exceed 320 characters.']
    },
    name: {
        type: String,
        required: [true, 'Please enter a name.'],
        validate: {
            validator: function(name) { return /^[a-zA-Z\.-\s]+$/.test(name) },
            message: 'Please enter a valid name.'
        },
        maxLength: [70, 'Maximum name length is 70 characters.']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password.'],
        minLength: [8, 'Minimum password length is 8 characters.']
    },
    address: {
        municipality: {
            type: String,
            enum: {
                values: ['Alaminos', 'Bay', 'Biñan', 'Cabuyao', 'Calamba', 'Calauan', 'Cavinti', 'Famy',
                    'Kalayaan', 'Liliw', 'Los Baños', 'Luisiana', 'Lumban', 'Mabitac', 'Magdalena', 'Majayay',
                    'Nagcarlan', 'Paete', 'Pagsanjan', 'Pakil', 'Pangil', 'Pila', 'Rizal', 'San Pablo',
                    'San Pedro', 'Santa Cruz', 'Santa Maria', 'Santa Maria', 'Siniloan', 'Victoria'
                ],
                message: "Invalid Municipality"
            }
        },
        barangay: {
            type: String,
            enum: {
                values: ['Butong', 'Pulo'],
                //TODO: List down all barangays in Laguna
                message: "Invalid Barangay"
            }
        },
        houseNumber: {
            type: String
        }
    },
    userType: {
        type: String,
        enum: {
            values: ['admin', 'courier', 'customer']
        },
        default: 'customer',
        required: true
    }
});

// Hashing of Password Prior to Creation in DB:
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Validation of User Credentials for Login:
userSchema.statics.login = async function(email, password) {
    let user = {};
    if (!email) {throw Error('Please enter your email.')}
    if (!password) {throw Error('Please enter your password.')}
    user = await this.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user;
        } throw Error('Incorrect Password.')
    } throw Error('This email is not yet registered.')
};

const UserSchema = mongoose.model('User', userSchema);
module.exports = UserSchema;