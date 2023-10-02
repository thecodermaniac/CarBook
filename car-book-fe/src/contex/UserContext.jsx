import { createContext, useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const UserContext = createContext();

export const UserState = prop => {
    const [user, setUser] = useState(null);
    const [open, setopen] = useState(false);
    const [show, setshow] = useState(false);

    const logout = async () => {
        localStorage.removeItem('9-5Car');
        setUser(null);
        toast.success('Logged Out Successfully');
    };

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                logout,
                show,
                setshow,
                open,
                setopen
            }}
        >
            {prop.children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
