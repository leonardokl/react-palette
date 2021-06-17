import React from "react";
import { getPalette, PaletteColors } from "./getPalette";

export type PaletteState = {
  loading: boolean;
  error?: Error;
  data: PaletteColors;
};

const initialState: PaletteState = {
  loading: true,
  data: {},
  error: undefined,
};

function reducer(state: PaletteState, action): PaletteState {
  switch (action.type) {
    case "getPalette":
      return initialState;
    case "resolvePalette":
      return { ...state, data: action.payload, loading: false };
    case "rejectPalette":
      return { ...state, error: action.payload, loading: false };
  }
}

export function usePalette(src: string) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    let subscribed = true;
    !subscribed || dispatch({ type: "getPalette" });

    getPalette(src)
      .then((palette) => {
        !subscribed || dispatch({ type: "resolvePalette", payload: palette });
      })
      .catch((ex) => {
        !subscribed || dispatch({ type: "rejectPalette", payload: ex });
      });
    
    return () => {
      subscribed = false;
    };
  }, [src]);

  return state;
}
