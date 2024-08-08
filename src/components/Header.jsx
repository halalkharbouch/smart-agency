import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const [pageState, setPageState] = useState('Sign in');
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) setPageState('Profile');
      else setPageState('Sign in');
    })
  }, [auth])

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            onClick={() => navigate('/')}
            className="h-5 cursor-pointer"
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="Logo"
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  isActive
                    ? 'text-black border-b-red-500'
                    : 'border-b-transparent text-gray-400'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                `cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  isActive
                    ? 'text-black border-b-red-500'
                    : 'border-b-transparent text-gray-400'
                }`
              }
            >
              Offers
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                  isActive
                    ? 'text-black border-b-red-500'
                    : 'border-b-transparent text-gray-400'
                }`
              }
            >
              {pageState}
            </NavLink>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
