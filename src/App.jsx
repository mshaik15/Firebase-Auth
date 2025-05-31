import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Private } from './pages/private'
import { onAuthStateChanged } from 'firebase/auth'
import { ProtectedRoute } from './components/protectedRoute'
import { auth } from './firebase'
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);  // ✅ Fix: Use setUser, not setUserId
      } else {
        setUser(null);
      }
      setIsFetching(false);  // ✅ Always set isFetching to false after checking
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home user={user}></Home>} />
        <Route 
          path='/private' 
          element={
            <ProtectedRoute user={user}>
              <Private />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
