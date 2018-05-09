import User from '../models/user.model';
import * as Crypto from 'crypto';

interface UserData {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    locationId: string
}

export default class UserController {

    private static passHash(key: string) {
        return Crypto.createHash('sha256').update(key).digest('hex');
    }

    public static registerUser(newUser: UserData) {
        let user = new User({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            password: this.passHash(newUser.password),
            email: newUser.email,
            location: {
                city: newUser.locationId
            },
            lists: [],
            fridge: [],
            groceries: []
        });

        return user.save().catch((err: Error) => {
            return {
                success: false,
                error: err.message
            };
        }).then((userInDb) => {
           return {
               success: true,
               data: userInDb
           }
        });
    }
}