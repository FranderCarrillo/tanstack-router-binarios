import { useGetUsers } from "../services/users/UsersHook";
import UserCard from '../card/Users/Users'; 
import '../css/listUsers.css';



const ListUsers = () => {
    const { users } = useGetUsers();
  
    return (
      <table className="card-container">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </tbody>
    </table>
    );
  }
  
  export default ListUsers;
  