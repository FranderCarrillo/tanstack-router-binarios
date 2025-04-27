import { useEffect, useState } from "react";
import { getUserById} from "./userService";
import { User } from "../../models/user";


export const useGetUser = (id: number) => {
    
    const [user, setUser] = useState<User>();

    useEffect(() => {
        (async () => {
            const userResponse = await getUserById(id);
            setUser(userResponse);
        })();
    }, [])
    return {user};
}
