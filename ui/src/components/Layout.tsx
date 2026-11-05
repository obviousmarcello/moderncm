import type { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header className="layout__header">ModernCM</header>
      <main className="layout__main">{children}</main>
    </div>
  );
}
