import './profile.css'; 
import UserCard from '../card/user/UserCard';
import { User } from '../models/user';
type ProfileProps = {
  User: User;
}

const ProfileInfo = ({ User}: ProfileProps) => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Perfil</h1>
        <p>Información del usuario registrado</p>
      </header>

      <section className="profile-content">
        <UserCard user={User} />
      </section>

      <footer className="profile-footer">
        <p>AutoVentas 🚗 - Siempre contigo</p>
      </footer>
    </div>
  );
};

export default ProfileInfo;
