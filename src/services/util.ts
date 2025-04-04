import { lazy, LazyExoticComponent } from "react";

// src/utils/lazyWithDelay.ts
export function lazyWithDelay<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  delay: number = 3000
): LazyExoticComponent<T> {
  return lazy(() =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(factory());
      }, delay);
    })
  );
}
