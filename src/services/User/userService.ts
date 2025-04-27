import { apiUrl } from "../../api/apiConfig";
import { User } from "../../models/user";

export async function getUserById(id: number): Promise<User>{
    const response = await fetch(`${apiUrl}/users/${id}`);
    const users = await response.json();
    return users;
}