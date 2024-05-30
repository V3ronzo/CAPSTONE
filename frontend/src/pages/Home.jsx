import React from'react';
import { useNAvigate} from'react-router-dom';


const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
  if (username === 'Traveler' && password === 'Getaway!') {
    navigate('/checklist');
}
};
return (
  <div>
    <div>
      <h1>W.W.G.?!</h1>
    </div>
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
    <div>
      <h2>New Traveler?</h2>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
    <h3>Where We Goin'?!</h3>
  </div>
);
};

export default Home;