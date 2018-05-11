import User from '../models/user.model';
import * as Crypto from 'crypto';
import * as Bluebird from 'bluebird';

export interface UserData {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    locationId: string
}

export class UserController {

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

        return user.save().then((userInDb) => {
            return {
                success: true,
                data: userInDb
            }
        }, (err: Error) => {
            return {
                success: false,
                error: err.message
            };
        });
    }

    public static addToGroceries(userEmail: string, items: any[]) {
        return User.findOne({
            email: userEmail
        }).then((userData: any) => {
            if (userData){
                items.forEach((item) => {
                    userData.groceries.push(item);
                });

                return userData.save();
            } else {
                return Bluebird.reject(new Error("Cannot find user."));
            }
        }).then((user) => {
            return {
                success: true
            }
        }, (err: Error) => {
            return {
                success: false
            }
        });
    }

    public static addToFridge(userEmail: string, items: any[], expiryDate: Date) {
        return User.findOne({
            email: userEmail
        }).then((userData: any) => {
            if (userData){
                items.forEach((item) => {
                    item.expiryDate = expiryDate;
                    userData.fridge.push(item);
                });

                return userData.save();
            } else {
                return Bluebird.reject(new Error("Cannot find user."));
            }
        }).then((user) => {
            return {
                success: true
            }
        }, (err: Error) => {
            return {
                success: false
            }
        });
    }

    public static getUserData(userEmail: string) {
        return User.findOne({
            email: userEmail
        }).then((data) => {
            return {
                success: true,
                data: data
            }
        }, (err: Error) => {
            return {
                success: false
            }
        });
    }

    public static saveUser(userEmail: string, userData: any) {
        if (userData.email === userEmail) {
            return User.findOne({
                email: userEmail
            }).then((user) => {
                if (user) {
                    return new User(userData).save();
                } else {
                    return Bluebird.reject(new Error("Cannot find user"));
                }
            }).then((data) => {
                return {
                    success: true
                };
            }, (err: Error) => {
                return {
                    success: false,
                    error: err.message
                };
            });
        }
    }
}

export default UserController;