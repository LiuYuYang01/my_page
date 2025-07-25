import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/global.css';

const app = createRoot(document.getElementById('root')!);
app.render(<App />);
