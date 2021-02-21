import { useEffect, useMemo, useState } from 'react';
import { EventMap } from '../types/types';

const canUseDOM = typeof window !== 'undefined';

const managedEventListener = <T extends EventTarget, K extends keyof EventMap<T> & string>
(target: T, type: K, callback: (event: EventMap<T>[K]) => void, options?: AddEventListenerOptions) => {
  target.addEventListener(type, callback as EventListener, options);
  return () => {
    target.removeEventListener(type, callback as EventListener, options);
  };
};

/**
 * Tracks match state of a media query.
 * @param query Media query to parse.
 * @returns `true` if the associated media query list matches the state of the [`document`](https://developer.mozilla.org/docs/Web/API/Document), or `false` otherwise.
 * @example
 * function Example() {
 *   const isWidescreen = useMedia('(min-aspect-ratio: 16/9)');
 *   // ...
 * }
 */
export const useMedia = (query: string): boolean => {
  const mediaQueryList = useMemo(() => canUseDOM && matchMedia(query), [query]);
  const [matches, setMatches] = useState(mediaQueryList && mediaQueryList.matches);

  useEffect(
    () =>
      mediaQueryList
      ? managedEventListener(mediaQueryList, 'change', ((event: MediaQueryListEvent) => {
        setMatches(event.matches);
      }) as EventListener)
      : undefined,
    [mediaQueryList]
  );

  return matches;
};
