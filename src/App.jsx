import { useState } from 'react'
import { auth, db } from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, "users", res.user.uid), {
        email: res.user.email
      })
      alert("Signup Success!")
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div style={{padding: 20}}>
      <h1>Xwealth</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <br/>
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <br/>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}

export default App
