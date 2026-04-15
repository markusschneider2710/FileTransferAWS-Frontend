import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Amplify } from 'aws-amplify'
import { awsConfig } from './aws-config.ts'

Amplify.configure(awsConfig); //Initialisiert Amplify mit der aws-config um Authentifizierung mit AWS-Diensten zu ermöglichen 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
