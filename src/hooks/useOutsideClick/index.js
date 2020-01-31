/* global document */
import { useEffect } from 'react';

function useOutsideClick(ref, callback) {
  function handleClick(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    // Unsubscribe on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
}

export default useOutsideClick;
