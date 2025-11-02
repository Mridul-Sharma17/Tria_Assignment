const ContactCard = ({ contact, onDeleteClick }) => {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-red-500'
  ]
  
  const colorIndex = contact.id % colors.length
  const avatarColor = colors[colorIndex]

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow border border-base-300">
      <div className="card-body p-4">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="avatar placeholder mb-3">
            <div className={`${avatarColor} text-white rounded-full w-16 h-16 flex items-center justify-center`}>
              <span className="text-2xl font-semibold">{contact.name.charAt(0).toUpperCase()}</span>
            </div>
          </div>
          <h2 className="text-lg font-semibold text-base-content">{contact.name}</h2>
        </div>

        <div className="space-y-3 pt-3 border-t border-base-200">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-base-content/80 break-all">{contact.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm text-base-content/80">{contact.phone}</span>
          </div>
        </div>

        {onDeleteClick && (
          <div className="card-actions justify-center mt-4 pt-3 border-t border-base-200">
            <button
              onClick={() => onDeleteClick(contact)}
              className="btn btn-sm btn-ghost text-error"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactCard
