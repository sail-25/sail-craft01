import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force cache invalidation - 2025-01-17 - Build timestamp
createRoot(document.getElementById("root")!).render(<App />);
