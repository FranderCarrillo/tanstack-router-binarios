import { User } from "../../models/user";

type CardUserProps={
    user: User | undefined;
}

const userCard=({user}:CardUserProps)=>{
    return(
        <div>
            <h2>{user?.name}</h2>
            <h4>{user?.email}</h4>
            <img src={user?.avatar} alt="" />
        </div>
    );
}
export default userCard