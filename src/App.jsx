import { useState } from 'react'
import ContactList from './components/ContactList'
import SearchBar from './components/SearchBar'
import AddContactModal from './components/AddContactModal'
import SuccessAlert from './components/SuccessAlert'
import ConfirmDialog from './components/ConfirmDialog'

const initialContacts = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    phone: '+1 (555) 234-5678'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael.j@email.com',
    phone: '+1 (555) 345-6789'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@email.com',
    phone: '+1 (555) 456-7890'
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.wilson@email.com',
    phone: '+1 (555) 567-8901'
  },
  {
    id: 6,
    name: 'Sarah Brown',
    email: 'sarah.brown@email.com',
    phone: '+1 (555) 678-9012'
  }
]

function App() {
  const [contacts, setContacts] = useState(initialContacts)
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(null)

  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  const filteredContacts = sortedContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
