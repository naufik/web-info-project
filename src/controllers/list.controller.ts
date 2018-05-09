import List from '../models/list.model';
import User from '../models/user.model';

export class ListController {

    public static newList(listUrl: string, listName: string, ownerEmail: string) {
        let l = new List({
            listId: 2323,
            name: listName,
            contents: [],
            url: listUrl
        });

        return l.save().then((data) => {
            return data;
        })
    }
}