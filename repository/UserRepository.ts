import {client} from '../prisma/client';

class UserRepository {

    Create()
    {
       client.user.create({
        data: {
            name: "Alice",
            email: "alice@prisma.io",
            valid: true,
            password: "totototo",
          },
       })
    }

    Delete()
    {
        

    }

    Update()
    {

    }

}