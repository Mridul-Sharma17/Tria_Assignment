import ContactCard from './ContactCard'

const ContactList = ({ contacts, onDeleteClick, hasSearch, onAddClick }) => {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-16">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-base-content/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <p className="text-xl font-bold text-base-content/80 mb-2">
          {hasSearch ? 'No contacts found' : 'Your contact list is empty'}
        </p>
        <p className="text-base-content/60 mb-6">
          {hasSearch 
            ? 'Try a different search term' 
            : 'Get started by adding your first contact'}
        </p>
        {!hasSearch && onAddClick && (
          <button 
            onClick={onAddClick}
            className="btn btn-primary btn-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Your First Contact
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} onDeleteClick={onDeleteClick} />
      ))}
    </div>
  )
}

export default ContactList
