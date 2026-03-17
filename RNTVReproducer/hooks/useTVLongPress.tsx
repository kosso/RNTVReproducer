
import { useEffect, useRef } from 'react';
import { TVEventHandler } from 'react-native';

// Detects a longPress up, down, left or right. 
// 
// emits {boolean, eventType} when longPressed  
// eventTypes: longUp | longDown | longLeft | longRight
//
// Usage: 
//
// useTVRemoteLongPress((longPressed: boolean, type: string) => {
//     console.log(`longPress: ${longPressed ? 'keydown' : 'keyup'} - type: ${type}`)
//     // do things ...
// })

export const useTVRemoteLongPress = (onLongPressed: any) => {
  const subscriptionRef = useRef(null)
  useEffect(() => {
    const handleTVEvent = (event: any) => {
      const { eventType, eventKeyAction } = event;
      if (eventType === 'longUp' || eventType === 'longDown' || eventType === 'longLeft' || eventType === 'longRight') {
        if (eventKeyAction === 0) {
          onLongPressed(true, eventType)
        } else if (eventKeyAction === 1) {
          onLongPressed(false, eventType)
        }
      }
    };
    // Subscribe to TV events
    subscriptionRef.current = TVEventHandler.addListener(handleTVEvent)
    return () => {
      // Unsubscribe from TV events
      if (subscriptionRef.current) {
        subscriptionRef.current.remove();
      }
    }
  }, [onLongPressed])
}