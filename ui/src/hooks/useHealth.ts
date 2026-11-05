import { useEffect, useState } from 'react';
import { api } from '../services/api';
import type { HealthStatus } from '../types/health';

export function useHealth() {
  const [data, setData] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get<HealthStatus>('/health').then(setData).catch(setError);
  }, []);

  return { data, error };
}
