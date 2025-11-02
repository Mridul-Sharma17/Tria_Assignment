import { useState } from 'react'
import ContactList from './components/ContactList'
import SearchBar from './components/SearchBar'
import AddContactModal from './components/AddContactModal'

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

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddContact = (newContact) => {
    setContacts(prev => [...prev, newContact])
  }

  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Contact List</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Add Contact</button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="stats shadow mb-8">
          <div className="stat">
            <div className="stat-title">Total Contacts</div>
            <div className="stat-value text-primary">{contacts.length}</div>
          </div>
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <ContactList contacts={filteredContacts} />
      </div>

      <AddContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddContact={handleAddContact}
      />
    </div>
  )
}

export default App
