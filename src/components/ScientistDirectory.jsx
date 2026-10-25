import { useId, useState } from 'react';
import { SMART_PEOPLE } from '../data/smartPeople.js';

export function ScientistDirectory({ initialData = SMART_PEOPLE }) {
  const [people, setPeople] = useState(initialData);
  const [query, setQuery] = useState('');
  const [minIq, setMinIq] = useState(160);
  const [sortBy, setSortBy] = useState('iq-desc');

  const searchId = useId();
  const iqId = useId();
  const sortId = useId();

  const handleIqChange = (e) => {
    const v = e.target.valueAsNumber;
    setMinIq(Number.isNaN(v) ? 0 : v);
  };

  const visible = people
    .filter(
      (p) =>
        p.name.toLowerCase().includes(query.trim().toLowerCase()) &&
        p.iq >= minIq
    )
    .toSorted((a, b) =>
      sortBy === 'iq-desc' ? b.iq - a.iq : a.age - b.age
    );

  return (
    <section aria-label="Pioneer Directory">
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor={searchId}>Name</label>
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <label htmlFor={iqId}>Min IQ</label>
        <input
          id={iqId}
          type="number"
          value={minIq}
          onChange={handleIqChange}
        />

        <label htmlFor={sortId}>Sort By</label>
        <select
          id={sortId}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="iq-desc">IQ (High → Low)</option>
          <option value="age-asc">Age (Low → High)</option>
        </select>
      </form>

      <output role="status" aria-live="polite">
        Found {visible.length} pioneers
      </output>

      <ul>
        {visible.map((p) => (
          <li key={p.id}>
            {p.name} — Age: {p.age} — IQ: {p.iq}
          </li>
        ))}
      </ul>
    </section>
  );
}
