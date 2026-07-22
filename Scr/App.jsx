import { useState, useEffect } from 'react';
import { auth, db } from './Firebase.js';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export default function App() {
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState('Home');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [balance, setBalance] = useState(0);

  const ADMIN_EMAIL = "vctritodo@gmail.com";

  useEffect(() => {
    onAuthStateChanged(auth, async (u) => {
      if(u){
        setUser(u);
        const docRef = doc(db, "users", u.uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) setBalance(docSnap.data().balance || 0);
        else await setDoc(docRef, { balance: 0, email: u.email });
      } else {
        setUser(null);
      }
    });
  }, []);

  const login = () => signInWithEmailAndPassword(auth, email, password);
  const signup = () => createUserWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  if(!user) return (
    <div style={{padding:20, textAlign:'center'}}>
      <h1>Xwealth</h1>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/><br/><br/>
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}/><br/><br/>
      <button onClick={login}>Login</button> <button onClick={signup}>SignUp</button>
    </div>
  );

  return (
    <div style={{padding:10}}>
      <h1>Xwealth</h1>
      <p>Welcome: {user.email}</p>
      <button onClick={()=>setTab('Home')}>Home</button>
      <button onClick={()=>setTab('Invest')}>Invest</button>
      <button onClick={()=>setTab('Bot')}>Bot</button>
      <button onClick={()=>setTab('Wallet')}>Wallet</button>
      <button onClick={()=>setTab('Profile')}>Profile</button>
      {user.email === ADMIN_EMAIL && <button onClick={()=>setTab('Admin')}>Admin</button>}
      <button onClick={logout}>Logout</button>
      
      <h2>Balance: ${balance}</h2>
      <h3>Current Tab: {tab}</h3>
      {tab === 'Admin' && <p>Admin Panel - You can add profit here</p>}
    </div>
  );
          }
