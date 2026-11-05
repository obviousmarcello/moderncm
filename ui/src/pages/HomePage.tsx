import { useHealth } from '../hooks/useHealth';

export function HomePage() {
  const { data, error } = useHealth();
  return (
    <section>
      <h1>Welcome</h1>
      <p>
        API status:{' '}
        {error ? <span className="error">unreachable</span> : (data?.status ?? 'checking…')}
      </p>
    </section>
  );
}
