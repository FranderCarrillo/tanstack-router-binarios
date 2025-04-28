import './profile.css'; 
import UserCard from '../card/user/UserCard';
import { User } from '../models/user';
import { signOut } from '../utils/auth';

type ProfileProps = {
  User: User;
  router: any; // Adjust the type according to your router implementation
}

const ProfileInfo = ({ User, router }: ProfileProps) => {

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Perfil</h1>
        <p>Información del usuario registrado</p>
      </header>

      <section className="profile-content">
        <UserCard user={User} />
        <br />
        <br />

        <button
            className="logout-button"
            onClick={async () => {
              signOut();
              router.invalidate();
            }}
          >
            Sign out
        </button>

      </section>

      <footer className="profile-footer">
        <p>AutoVentas 🚗 - Siempre contigo</p>
      </footer>
    </div>
  );
};

export default ProfileInfo;
