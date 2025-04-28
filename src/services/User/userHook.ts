import { useEffect, useState } from "react";
import { getUserById} from "./userService";
import { User, UserInitialState } from "../../models/user";


export const useGetUser = (id: number) => {
    
    const [user, setUser] = useState<User>(UserInitialState);

    useEffect(() => {
        (async () => {
            const userResponse = await getUserById(id);
            setUser(userResponse);
        })();
    }, [])
    return {user};
}
