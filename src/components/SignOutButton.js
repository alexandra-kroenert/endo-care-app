import { useNavigate } from 'react-router-dom';

function SignOutButton() {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('token');  // Remove the token from local storage
    navigate('/signin');  // Redirect the user to the sign-in page
  };

  return (
    <button onClick={signOut}>
      Sign Out
    </button>
  );
}

export default SignOutButton;
