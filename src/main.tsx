import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirsStepsApp } from './FirstStepsApp';

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <FirsStepsApp />
</StrictMode>
)
