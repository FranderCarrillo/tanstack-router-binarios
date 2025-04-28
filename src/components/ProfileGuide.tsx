import React from 'react';
import './navigationInfo.css'
export const ProfileGuide = () => {
  return (
    <section className='Navigation-info'>

      <div className='Navigation-info-container'>

        <h1 className='titles-guide-navigation'>Guía Mostrar Usuario Protegido con TanStack Router</h1>

        {/* PASO 1 */}
        <div className='guide-navigation-steps'>
          <h2 className='titles-guide-navigation'>Primer paso</h2>
          <p className='text-guide-navigation'>
            Crea el archivo <strong>src/api/apiConfig.ts</strong> para configurar la URL base de la API.
          </p>
          <pre className="code-block-content">
            <code>
{`export const apiUrl = "https://jsonplaceholder.typicode.com";`}
            </code>
          </pre>
        </div>

        {/* PASO 2 */}
        <div className='guide-navigation-steps'>
          <h2 className='titles-guide-navigation'>Segundo paso</h2>
          <p className='text-guide-navigation'>
            Crea el archivo <strong>src/services/User/userService.ts</strong> para hacer peticiones a la API y obtener datos de un usuario.
          </p>
          <pre className="code-block-content">
            <code>
{`import { apiUrl } from "../../api/apiConfig";
import { User } from "../../models/user";

export async function getUserById(id: number): Promise<User> {
  const response = await fetch(\`\${apiUrl}/users/\${id}\`);
  const users = await response.json();
  return users;
}`}
            </code>
          </pre>
        </div>

        {/* PASO 3 */}
        <div className='guide-navigation-steps'>
          <h2 className='titles-guide-navigation'>Tercer paso</h2>
          <p className='text-guide-navigation'>
            Crea el archivo <strong>src/services/User/userHook.ts</strong> para obtener un usuario utilizando React Hooks.
          </p>
          <pre className="code-block-content">
            <code>
{`import { useEffect, useState } from "react";
import { getUserById } from "./userService";
import { User } from "../../models/user";

export const useGetUser = (id: number) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const userResponse = await getUserById(id);
      setUser(userResponse);
    })();
  }, []);

  return { user };
};`}
            </code>
          </pre>
        </div>

        {/* PASO 4 */}
        <div className='guide-navigation-steps'>
          <h2 className='titles-guide-navigation'>Cuarto paso</h2>
          <p className='text-guide-navigation'>
            Crea el archivo <strong>src/models/user.ts</strong> para definir la estructura del objeto Usuario.
          </p>
          <pre className="code-block-content">
            <code>
{`export interface User {
  id: number;
  name: string;
  email: string;
}

export const UserInitialState = {
  id: 0,
  name: '',
  email: ''
};`}
            </code>
          </pre>
        </div>

        {/* PASO 5 */}
        <div className='guide-navigation-steps'>
          <h2 className='titles-guide-navigation'>Quinto paso</h2>
          <p className='text-guide-navigation'>
            Crea el archivo <strong>src/card/user/UserCard.tsx</strong> para mostrar los datos del usuario.
          </p>
          <pre className="code-block-content">
            <code>
{`import { User } from "../../models/user";

type CardUserProps = {
  user: User | undefined;
};

const UserCard = ({ user }: CardUserProps) => {
  return (
    <div>
      <h2>{user?.name}</h2>
      <h4>{user?.email}</h4>
    </div>
  );
};

export default UserCard;`}
            </code>
          </pre>
        </div>

        {/* PASO 6 */}
        <div className='guide-navigation-steps'>
          <h2 className='titles-guide-navigation'>Sexto paso</h2>
          <p className='text-guide-navigation'>
            Crea el archivo <strong>src/routes/profile.tsx</strong> para proteger la ruta de Profile y mostrar la información del usuario.
          </p>
          <pre className="code-block-content">
            <code>
{`import { createFileRoute, redirect } from '@tanstack/react-router';
import { useGetUser } from '../services/User/userHook';
import UserCard from '../card/user/UserCard';

export const Route = createFileRoute('/profile')({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: Profile,
});

function Profile() {
  const { user } = useGetUser(1);
  return (
    <div>
      <UserCard user={user} />
    </div>
  );
}`}
            </code>
          </pre>
        </div>

        {/* NOTA FINAL */}
        <div className='guide-navigation-steps'>
          <h2 className='titles-guide-navigation'>Nota final</h2>
          <p className='text-guide-navigation'>
            En este ejemplo se obtiene un usuario de la API pública <strong>JSONPlaceholder</strong> y se muestra su información. El acceso a la ruta <strong>/profile</strong> está protegido, por lo que el usuario deberá estar autenticado para visualizarla.
          </p>
        </div>

      </div>

    </section>
  );
};

export default ProfileGuide;
