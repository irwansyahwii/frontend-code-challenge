'use client';

import { ReactNode } from 'react';
import { CounterStoreProvider } from './counter-store-provider';

export const Providers = ({children}: {children: ReactNode})=> {
  return (
    <CounterStoreProvider>
      {children}
    </CounterStoreProvider>
  )
}