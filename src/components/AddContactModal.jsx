import { useState, useEffect, useRef } from 'react'

function AddContactModal({ isOpen, onClose, onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState({})
  const nameInputRef = useRef(null)

  useEffect(() => {
    if (isOpen && nameInputRef.current) {
      setTimeout(() => {
        nameInputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  function validateForm() {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      onAddContact(formData)
      setFormData({ name: '', email: '', phone: '' })
      setErrors({})
    } else {
      setErrors(newErrors)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '' })
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal modal-open" onKeyDown={handleKeyDown}>
      <div className="modal-box w-11/12 max-w-2xl">
        <h3 className="font-bold text-lg sm:text-xl mb-4">Add New Contact</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sm sm:text-base">Name</span>
            </label>
            <input
              ref={nameInputRef}
              type="text"
              name="name"
              placeholder="Enter full name"
              className={`input input-bordered w-full text-sm sm:text-base ${errors.name ? 'input-error' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt text-error text-xs sm:text-sm">{errors.name}</span>
              </label>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sm sm:text-base">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className={`input input-bordered w-full text-sm sm:text-base ${errors.email ? 'input-error' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error text-xs sm:text-sm">{errors.email}</span>
              </label>
            )}
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-sm sm:text-base">Phone</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              className={`input input-bordered w-full text-sm sm:text-base ${errors.phone ? 'input-error' : ''}`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <label className="label">
                <span className="label-text-alt text-error text-xs sm:text-sm">{errors.phone}</span>
              </label>
            )}
          </div>

          <div className="modal-action flex-col sm:flex-row gap-2">
            <button type="button" className="btn btn-ghost w-full sm:w-auto order-2 sm:order-1" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary w-full sm:w-auto order-1 sm:order-2">
              Add Contact
            </button>
          </div>
        </form>
      </div>
      <div className="modal-backdrop" onClick={handleClose}></div>
    </div>
  )
}

export default AddContactModal
