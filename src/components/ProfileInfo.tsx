import React from 'react';
import { useGetUser } from '../services/User/userHook';
import './profile.css'; 
import UserCard from '../card/user/UserCard';

const ProfileInfo = () => {
  const { user } = useGetUser(1);

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Perfil</h1>
        <p>Información del usuario registrado</p>
      </header>

      <section className="profile-content">
        <UserCard user={user} />
        <br />
        <br />
      </section>

      <footer className="profile-footer">
        <p>AutoVentas 🚗 - Siempre contigo</p>
      </footer>
    </div>
  );
};

export default ProfileInfo;
