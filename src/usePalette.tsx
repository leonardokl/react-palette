import { useEffect, useReducer } from "react";
import { getPalette, PaletteColors } from "./getPalette";

export type PaletteState = {
  loading: boolean;
  error?: Error;
  data: PaletteColors;
}

const initialState: PaletteState = {
  loading: true,
  data: {},
  error: undefined
}

function reducer(state: PaletteState, action) {
  switch (action.type) {
    case 'getPalette':
      return initialState;
    case 'resolvePalette':
      return { ...state, data: action.payload, loading: false };
    case 'rejectPalette':
      return { ...state, error: action.payload, loading: false };
  }
}

export function usePalette(src: string) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'getPalette' });

    getPalette(src)
      .then(palette => {
        dispatch({ type: 'resolvePalette', payload: palette });
      })
      .catch(ex => {
        dispatch({ type: 'rejectPalette', payload: ex });
      });
  }, [src]);

  return state;
}
