import {client} from '../prisma/client';

export default {

    getAllUsers : () => {

        return client.user.findMany()
    },

    getOneUser : (id) => {
        return client.user.findUnique({
            where : { id : id}
        })
    }
}