import * as Bluebird from 'bluebird';
import * as Mongoose from 'mongoose';

import List from '../models/list.model';
import User from '../models/user.model';

export class ListController {

    public static newList(listData: any, ownerEmail: string) {
        let l = new List(listData);

        return User.findOne({
            email: ownerEmail
        }).then((listOwner: any) => {
            if (listOwner != null) {
                return l.save().then((list) => {
                    listOwner.lists.push(list)
                    return listOwner.save();
                });
            } else {
                return Bluebird.reject(new Error("Cannot find the specified user"));
            }
        }).then((val) => {
            return {
                success: true,
                data: val
            }
        }, (err: Error) => {
            return {
                success: false,
                error: err.message
            }
        });
    }

    public static addToList(listId: string, items: any[]) {
        return List.findById(Mongoose.Types.ObjectId(listId)).then((list: any) => {
            items.forEach((thing) => {
                list.contents.push(thing);
            });
            return list.save();
        });
    }

    public static getListsForUser(userEmail: string, token?: string) {
        return User.findOne({
            email: userEmail
        }).then((user: any) => {
            if (user) {
                let l = user.lists;

                return List.find({
                    '_id': { 
                        $in: l
                    }
                });
            } else {
                return Bluebird.reject(new Error("Cannot find the specified user"));
            }
        }).then((data) => {
            return {
                success: true,
                data: data
            };
        }, (err: Error) => {
            return {
                success: false,
                error: err.message
            };
        });
    }

    public static getList(listId: string) {
        return List.findById(Mongoose.Types.ObjectId(listId)).then((data) => {
            return {
                success: true, 
                data: data
            };
        });
    }
}