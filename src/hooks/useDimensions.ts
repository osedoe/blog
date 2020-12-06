import { MutableRefObject, useLayoutEffect } from 'react';

export interface DimensionData {
  x: number;
  y: number;
  width: number;
  height: number;
}

type UseDimensionsRef = MutableRefObject<HTMLElement | null>;
type UseDimensionsCallback = (data: DimensionData | null) => void;

const useDimensions = (ref: UseDimensionsRef, callback: UseDimensionsCallback = () => {
}) => {
  useLayoutEffect(() => {
    if (ref.current) {
      const { offsetWidth: width, offsetHeight: height } = ref.current;
      const { x, y } = ref.current.getBoundingClientRect();
      callback({ x, y, width, height });
    } else callback(null);
  }, [ref, callback]);
};

export { useDimensions };
