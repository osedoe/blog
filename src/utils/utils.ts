import { EventMap } from "../types/types"

export const canUseDOM = typeof window !== "undefined"

export function managedEventListener<T extends EventTarget, K extends keyof EventMap<T> & string>(
  target: T,
  type: K,
  callback: (event: EventMap<T>[K]) => void,
  options?: AddEventListenerOptions,
) {
  target.addEventListener(type, callback as EventListener, options)
  return () => {
    target.removeEventListener(type, callback as EventListener, options)
  }
}
