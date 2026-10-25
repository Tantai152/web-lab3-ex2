import { ScientistDirectory } from './components/ScientistDirectory.jsx';
import { SMART_PEOPLE } from './data/smartPeople.js';

export default function App() {
  return (
    <main>
      <h1>Pioneer Directory</h1>
      <ScientistDirectory initialData={SMART_PEOPLE} />
    </main>
  );
}
