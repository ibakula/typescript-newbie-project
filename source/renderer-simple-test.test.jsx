import { createRoot } from 'react-dom/client';
import TestComponent from './components/test-component';

const container = document.getElementById("root") as Element;
const root = createRoot(container);

root.render(<TestComponent requiredProp="test" />);