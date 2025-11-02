import { useState } from 'react'

function AddContactModal({ isOpen, onClose, onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      onAddContact({
        id: Date.now(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim()
      })

      setFormData({ name: '', email: '', phone: '' })
      setErrors({})
      onClose()
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '' })
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Add New Contact</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.name}</span>
              </label>
            )}
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.email}</span>
              </label>
            )}
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              className={`input input-bordered w-full ${errors.phone ? 'input-error' : ''}`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.phone}</span>
              </label>
            )}
          </div>

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddContactModal
