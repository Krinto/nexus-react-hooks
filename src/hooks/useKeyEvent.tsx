import { useEffect } from 'react'
import map from "ramda/src/map";

export type KeyEvents = 'keydown' | 'keyup' | 'keypress';
export type KeyModifiers = 'ctrl' | 'alt' | 'shift' | 'none';

type KeyHook = {
  keys: string[], 
  eventType: KeyEvents, 
  modifier: KeyModifiers,
  target: Document | HTMLIFrameElement | null
 };

const codeLowerCaseA: number = 65;
const codeUpperCaseZ: number = 122;

const isKeyFromGivenList = (keyCode: number, allowedKeys: number[] = []) => {
  if (allowedKeys.includes(keyCode) || allowedKeys.length === 0) {
    return true;
  }
  return false;
};

const isWithModifier = (modifier: KeyModifiers, event: KeyboardEvent) => {
  switch (modifier) {
    case 'ctrl':
      if(event.ctrlKey) {
        return true;
      }
    break;
    case 'alt':
      if(event.altKey) {
        return true;
      }
    break;
    case 'shift':
      if(event.shiftKey) {
        return true;
      }
    break;
    case 'none':
      return true;
  }
  return false;
};

function getAsciiCode(event: KeyboardEvent) {
  let keyCode = event.which;
  if (keyCode >= codeLowerCaseA && keyCode <= codeUpperCaseZ) {
    keyCode = event.key.charCodeAt(0);
  }
  return keyCode;
}

function convertToAsciiEquivalent(inputArray: string[]): number[] {
  return map(item => {
    return item.charCodeAt(0);
  }, inputArray);
}


const useKeyEvent = (callback: (code: number, event: KeyboardEvent) => void, deps: KeyHook) => {
  let allowedKeys: number[] = convertToAsciiEquivalent(deps.keys);

  const handleEvent = (event: Event): () => void => {
    console.log(event);
    let keyboardEvent: KeyboardEvent = event as KeyboardEvent;
    const asciiCode = getAsciiCode(keyboardEvent);
    return (() => {
      if (isKeyFromGivenList(asciiCode, allowedKeys) && isWithModifier(deps.modifier, keyboardEvent)) {
        event.preventDefault();
        callback(asciiCode, keyboardEvent);
      }
    });
  };

  useEffect(() => {
    console.log(deps.target);
    if(deps.target != null) {
      deps.target.addEventListener(deps.eventType as string, handleEvent);
        return () => {
          if(deps.target != null) {
            deps.target.removeEventListener(deps.eventType as string, handleEvent);
          }
        };
    }
  }, [deps.target]);
};

export default useKeyEvent;
  