import { ReactNode, useState } from 'react'
import ProfileContext from './ProfileContext';


const ProfileProvider = ({children}: {children: ReactNode}) => {
    const [username, setUsername] = useState<string>("Login");
  return (
    <ProfileContext.Provider value={{username, setUsername}}>
        {children}
    </ProfileContext.Provider>  
  )
}

export default ProfileProvider