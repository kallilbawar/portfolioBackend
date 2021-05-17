import {client} from '../prisma/client';

export default {

    getAllUsers : () => {

        return client.user.findMany()
    },

    getOneUser : (id) => {
        return client.user.findUnique({
            where : { id : id}
        })
    },

    createUser : (name, email, password)=>{

        console.log(name, email, password);
        
        return client.user.create({

            data :{
                name: name,
                email: email,
                password: password
            }
        })
    }
}