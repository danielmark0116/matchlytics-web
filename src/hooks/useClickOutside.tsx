/** @format */

import React, { useEffect } from "react";

const useClickOutside = (
  ref: React.MutableRefObject<HTMLElement | null>,
  callbackWhenClickedOutside: () => void
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackWhenClickedOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callbackWhenClickedOutside, ref]);
};

export default useClickOutside;
