import React from 'react'
import Header from './components/common/header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Your main content will go here */}
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Welcome to JnJ MedCare</h1>
          <p>Your healthcare solution is coming soon!</p>
        </div>
      </main>
    </>
  )
}

export default App
