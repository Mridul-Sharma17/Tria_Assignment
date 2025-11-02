import { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import SearchBar from './components/SearchBar'
import AddContactModal from './components/AddContactModal'
import SuccessAlert from './components/SuccessAlert'
import ConfirmDialog from './components/ConfirmDialog'

const defaultContacts = [
  {
    id: 1,
    name: 'Mridul Sharma',
    email: 'mridul@gmail.com',
    phone: '+91 98765 43210'
  },
  {
    id: 2,
    name: 'Ankit Gond',
    email: 'ankit@gmail.com',
    phone: '+91 87654 32109'
  },
  {
    id: 3,
    name: 'Shubham Markhale',
    email: 'shubham@gmail.com',
    phone: '+91 76543 21098'
  },
  {
    id: 4,
    name: 'Anurag Etarvi',
    email: 'anurag@gmail.com',
    phone: '+91 65432 10987'
  },
  {
    id: 5,
    name: 'Jaya Sharma',
    email: 'jaya@gmail.com',
    phone: '+91 54321 09876'
  },
  {
    id: 6,
    name: 'Vyakhya Agarwal',
    email: 'vyakhya@gmail.com',
    phone: '+91 43210 98765'
  }
]

function loadContacts() {
  const saved = localStorage.getItem('contacts')
  if (saved) {
    try {
      return JSON.parse(saved)
    } catch (e) {
      return defaultContacts
    }
  }
  return defaultContacts
}

function App() {
  const [contacts, setContacts] = useState(loadContacts)
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(null)

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  const filteredContacts = sortedContacts.filter(contact => {
    if (!searchQuery) return true
    
    const query = searchQuery.toLowerCase()
    const nameMatch = contact.name.toLowerCase().includes(query)
    const emailMatch = contact.email.toLowerCase().includes(query)
    const phoneMatch = contact.phone.toLowerCase().includes(query)
    
    return nameMatch || emailMatch || phoneMatch
  })

  const handleAddContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: Date.now()
    }
    setContacts(prev => [...prev, contactWithId])
    setIsModalOpen(false)
    setSuccessMessage('Contact added successfully!')
  }

  const handleDeleteClick = (contact) => {
    setConfirmDelete(contact)
  }

  const confirmDeleteContact = () => {
    if (confirmDelete) {
      setContacts(prev => prev.filter(c => c.id !== confirmDelete.id))
      setSuccessMessage('Contact deleted successfully!')
      setConfirmDelete(null)
    }
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-semibold">Contact List</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            Add Contact
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
          <div className="bg-base-100 rounded-lg shadow-md px-6 py-4 min-w-fit">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-primary">{contacts.length}</div>
              <div className="text-sm text-base-content/70">Total Contacts</div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </div>

        <ContactList contacts={filteredContacts} onDeleteClick={handleDeleteClick} />
      </div>

      <AddContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddContact={handleAddContact}
      />

      <ConfirmDialog
        isOpen={confirmDelete !== null}
        title="Delete Contact"
        message={`Are you sure you want to delete ${confirmDelete?.name}? This action cannot be undone.`}
        onConfirm={confirmDeleteContact}
        onCancel={() => setConfirmDelete(null)}
      />

      {successMessage && (
        <SuccessAlert
          message={successMessage}
          onClose={() => setSuccessMessage('')}
        />
      )}
    </div>
  )
}

export default App
