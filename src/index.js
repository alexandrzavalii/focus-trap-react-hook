import React from 'react'
import focusTrap from 'focus-trap-js'

const useFocusTrap = contRef => {
  React.useEffect(() => {
    const handleKeyEvent = event => {
      focusTrap(event, contRef.current)
    }
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [contRef])
}

export default useFocusTrap
