import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import './index.css'
import store from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <UserProvider>
            <App />
          </UserProvider>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  </StrictMode>,
)
