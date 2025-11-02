import { useEffect } from 'react'

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [onClose])

  const alertClass = type === 'success' ? 'alert-success' : 'alert-error'

  return (
    <div className="toast toast-top toast-end z-50">
      <div className={`alert ${alertClass} shadow-lg`}>
        <div className="flex items-center gap-2">
          {type === 'success' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <span>{message}</span>
        </div>
      </div>
    </div>
  )
}

export default Toast
