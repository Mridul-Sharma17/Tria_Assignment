# React & Vercel Complete Documentation

## Table of Contents
1. [React Introduction](#react-introduction)
2. [React Functional Components](#react-functional-components)
3. [React Hooks](#react-hooks)
4. [State Management](#state-management)
5. [Component Patterns](#component-patterns)
6. [Vercel Deployment](#vercel-deployment)
7. [Best Practices](#best-practices)

---

## React Introduction

React is a JavaScript library for building user interfaces, developed and maintained by Meta (Facebook). It allows you to build complex UIs from small, isolated pieces of code called components.

### Key Features
- **Component-Based**: Build encapsulated components that manage their own state
- **Declarative**: Makes code more predictable and easier to debug
- **Learn Once, Write Anywhere**: Can develop new features without rewriting existing code
- **Virtual DOM**: Efficient updates and rendering

### Why Functional Components?
- Simpler and more concise syntax
- Better performance
- Easier to test
- Hooks enable state and lifecycle features
- Recommended by React team as the modern approach

---

## React Functional Components

### What are Functional Components?

Functional components are JavaScript functions that return JSX (JavaScript XML). They are the modern way to write React components.

### Basic Syntax

```jsx
function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
```

### Exporting Components

```jsx
export default function App() {
  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}
```

### Component Names
- Must start with a capital letter
- Use PascalCase (e.g., `MyButton`, `ContactList`, `UserProfile`)
- HTML tags must be lowercase

### JSX Rules

#### 1. Return a Single Root Element
```jsx
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Content</p>
    </>
  );
}
```

#### 2. Close All Tags
```jsx
<img src="image.jpg" />
<br />
<input type="text" />
```

#### 3. Use camelCase for Attributes
```jsx
<div className="container">
  <button onClick={handleClick}>Click</button>
</div>
```

### Embedding JavaScript in JSX

```jsx
function Profile() {
  const user_name = "John Doe";
  const user_age = 25;
  
  return (
    <div>
      <h1>{user_name}</h1>
      <p>Age: {user_age}</p>
    </div>
  );
}
```

### Conditional Rendering

#### Using If-Else
```jsx
function Greeting({ is_logged_in }) {
  if (is_logged_in) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in</h1>;
}
```

#### Using Ternary Operator
```jsx
function Status({ is_active }) {
  return (
    <div>
      {is_active ? <span>Active</span> : <span>Inactive</span>}
    </div>
  );
}
```

#### Using Logical AND (&&)
```jsx
function Notification({ has_messages }) {
  return (
    <div>
      {has_messages && <span>You have new messages</span>}
    </div>
  );
}
```

### Rendering Lists

```jsx
function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}
        </li>
      ))}
    </ul>
  );
}
```

**Important**: Always include a `key` prop when mapping arrays. Use unique IDs from your data.

---

## React Hooks

Hooks are special functions that let you "hook into" React features. They must be called at the top level of your component.

### Rules of Hooks
1. Only call Hooks at the top level (not inside loops, conditions, or nested functions)
2. Only call Hooks from functional components or custom Hooks

### useState Hook

`useState` lets you add state to functional components.

#### Basic Usage
```jsx
import { useState } from 'react';

function Counter() {
  const [count, set_count] = useState(0);
  
  function handle_click() {
    set_count(count + 1);
  }
  
  return (
    <button onClick={handle_click}>
      Clicked {count} times
    </button>
  );
}
```

#### Multiple State Variables
```jsx
function Form() {
  const [name, set_name] = useState('');
  const [email, set_email] = useState('');
  const [age, set_age] = useState(0);
  
  return (
    <form>
      <input 
        value={name} 
        onChange={(e) => set_name(e.target.value)} 
      />
      <input 
        value={email} 
        onChange={(e) => set_email(e.target.value)} 
      />
      <input 
        type="number"
        value={age} 
        onChange={(e) => set_age(e.target.value)} 
      />
    </form>
  );
}
```

#### State with Objects
```jsx
function UserForm() {
  const [user, set_user] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  function handle_name_change(e) {
    set_user({
      ...user,
      name: e.target.value
    });
  }
  
  return (
    <input 
      value={user.name} 
      onChange={handle_name_change} 
    />
  );
}
```

#### State with Arrays
```jsx
function TodoList() {
  const [todos, set_todos] = useState([]);
  
  function add_todo(text) {
    set_todos([...todos, { id: Date.now(), text }]);
  }
  
  function remove_todo(id) {
    set_todos(todos.filter(todo => todo.id !== id));
  }
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => remove_todo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
```

### useEffect Hook

`useEffect` lets you perform side effects in your components (data fetching, subscriptions, manual DOM changes).

#### Basic Usage
```jsx
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, set_data] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => set_data(data));
  }, []);
  
  return <div>{data}</div>;
}
```

#### Dependency Array
- Empty array `[]`: Runs once after initial render
- With dependencies `[value]`: Runs when dependencies change
- No array: Runs after every render

```jsx
function SearchComponent({ query }) {
  const [results, set_results] = useState([]);
  
  useEffect(() => {
    fetch(`https://api.example.com/search?q=${query}`)
      .then(response => response.json())
      .then(data => set_results(data));
  }, [query]);
  
  return <div>{results.length} results</div>;
}
```

#### Cleanup Function
```jsx
function Timer() {
  const [seconds, set_seconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      set_seconds(s => s + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return <div>{seconds} seconds</div>;
}
```

### Other Useful Hooks

#### useRef
```jsx
import { useRef } from 'react';

function TextInput() {
  const input_ref = useRef(null);
  
  function focus_input() {
    input_ref.current.focus();
  }
  
  return (
    <>
      <input ref={input_ref} />
      <button onClick={focus_input}>Focus</button>
    </>
  );
}
```

#### useCallback
```jsx
import { useState, useCallback } from 'react';

function Parent() {
  const [count, set_count] = useState(0);
  
  const handle_click = useCallback(() => {
    set_count(c => c + 1);
  }, []);
  
  return <Child onClick={handle_click} />;
}
```

#### useMemo
```jsx
import { useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const sorted_items = useMemo(() => {
    return items.sort((a, b) => a.value - b.value);
  }, [items]);
  
  return <div>{sorted_items.length}</div>;
}
```

---

## State Management

### Lifting State Up

When multiple components need to share state, move the state to their closest common parent.

```jsx
function ParentComponent() {
  const [filter_text, set_filter_text] = useState('');
  
  return (
    <div>
      <SearchBar 
        filter_text={filter_text} 
        on_change={set_filter_text} 
      />
      <ContactList filter_text={filter_text} />
    </div>
  );
}

function SearchBar({ filter_text, on_change }) {
  return (
    <input 
      value={filter_text}
      onChange={(e) => on_change(e.target.value)}
    />
  );
}

function ContactList({ filter_text }) {
  return <div>Filtered by: {filter_text}</div>;
}
```

### Props

Props are arguments passed to components, similar to function parameters.

#### Passing Props
```jsx
function App() {
  return (
    <UserCard 
      name="John Doe" 
      email="john@example.com" 
      age={25}
    />
  );
}
```

#### Receiving Props
```jsx
function UserCard({ name, email, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```

#### Default Props
```jsx
function Button({ text = "Click me", variant = "primary" }) {
  return <button className={variant}>{text}</button>;
}
```

#### Props with Spread
```jsx
function ProfileCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <UserDetails {...props} />
    </div>
  );
}
```

### State Structure Best Practices

#### Keep State DRY (Don't Repeat Yourself)
```jsx
function Form() {
  const [first_name, set_first_name] = useState('');
  const [last_name, set_last_name] = useState('');
  
  const full_name = `${first_name} ${last_name}`;
  
  return <div>{full_name}</div>;
}
```

#### Group Related State
```jsx
function ContactForm() {
  const [contact, set_contact] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  function update_field(field, value) {
    set_contact({
      ...contact,
      [field]: value
    });
  }
  
  return (
    <form>
      <input 
        value={contact.name}
        onChange={(e) => update_field('name', e.target.value)}
      />
    </form>
  );
}
```

---

## Component Patterns

### Container/Presentational Pattern

#### Container Component (Logic)
```jsx
function ContactListContainer() {
  const [contacts, set_contacts] = useState([]);
  const [loading, set_loading] = useState(true);
  
  useEffect(() => {
    fetch_contacts().then(data => {
      set_contacts(data);
      set_loading(false);
    });
  }, []);
  
  if (loading) return <Loading />;
  
  return <ContactListView contacts={contacts} />;
}
```

#### Presentational Component (UI)
```jsx
function ContactListView({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
```

### Composition Pattern

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>Content goes here</p>
    </Card>
  );
}
```

### Custom Hooks

Create reusable logic by extracting it into custom hooks.

```jsx
function use_local_storage(key, initial_value) {
  const [value, set_value] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial_value;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, set_value];
}

function App() {
  const [name, set_name] = use_local_storage('user_name', '');
  
  return (
    <input 
      value={name}
      onChange={(e) => set_name(e.target.value)}
    />
  );
}
```

### Form Handling Pattern

```jsx
function ContactForm({ on_submit }) {
  const [form_data, set_form_data] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  function handle_change(e) {
    const { name, value } = e.target;
    set_form_data(prev => ({
      ...prev,
      [name]: value
    }));
  }
  
  function handle_submit(e) {
    e.preventDefault();
    on_submit(form_data);
    set_form_data({ name: '', email: '', phone: '' });
  }
  
  return (
    <form onSubmit={handle_submit}>
      <input 
        name="name"
        value={form_data.name}
        onChange={handle_change}
      />
      <input 
        name="email"
        value={form_data.email}
        onChange={handle_change}
      />
      <input 
        name="phone"
        value={form_data.phone}
        onChange={handle_change}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Search/Filter Pattern

```jsx
function SearchableList({ items }) {
  const [search_query, set_search_query] = useState('');
  
  const filtered_items = items.filter(item =>
    item.name.toLowerCase().includes(search_query.toLowerCase())
  );
  
  return (
    <div>
      <input 
        type="text"
        value={search_query}
        onChange={(e) => set_search_query(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filtered_items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Vercel Deployment

Vercel is a platform for deploying web applications with zero configuration. It provides automatic deployments, preview URLs, and global CDN.

### Prerequisites

1. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket
2. **Vercel Account**: Sign up at https://vercel.com
3. **Vite Project**: Your React app should be using Vite

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Create Vercel Account
1. Go to https://vercel.com/signup
2. Sign up with GitHub, GitLab, or Bitbucket (recommended)
3. Authorize Vercel to access your repositories

#### Step 2: Import Project
1. Click "Add New Project" or "Import Project"
2. Select your Git repository
3. Vercel will automatically detect it's a Vite project

#### Step 3: Configure Project
```
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build (or yarn build)
Output Directory: dist
Install Command: npm install (or yarn install)
```

#### Step 4: Environment Variables (if needed)
- Click "Environment Variables"
- Add any required variables (API keys, etc.)
- Remember: Prefix with `VITE_` to access in your app

#### Step 5: Deploy
1. Click "Deploy"
2. Wait for build to complete (usually 1-2 minutes)
3. Get your live URL: `https://your-app.vercel.app`

### Method 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```

#### Step 3: Deploy from Project Directory
```bash
cd your-project
vercel
```

Follow the prompts:
- Set up and deploy? Yes
- Which scope? Select your account
- Link to existing project? No (first time)
- Project name? Your project name
- Directory? ./
- Want to modify settings? No

#### Step 4: Production Deployment
```bash
vercel --prod
```

### Project Configuration for Vercel

#### For Single Page Applications (SPAs)

Create `vercel.json` in your project root:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures deep linking works correctly for SPAs.

#### Vite Configuration for Vercel

Your `vite.config.js` should look like:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})
```

### Environment Variables in Vercel

#### Adding Environment Variables

**Via Dashboard:**
1. Go to your project settings
2. Click "Environment Variables"
3. Add variables (e.g., `VITE_API_URL`)
4. Choose environment: Production, Preview, or Development

**Via CLI:**
```bash
vercel env add VITE_API_URL
```

#### Accessing Environment Variables in React

```jsx
const api_url = import.meta.env.VITE_API_URL;

function fetch_data() {
  fetch(`${api_url}/contacts`)
    .then(response => response.json())
    .then(data => console.log(data));
}
```

**Important**: 
- Variables must be prefixed with `VITE_` to be exposed
- Rebuild required after adding new variables

### Automatic Deployments

#### Git Integration Benefits
- **Push to Deploy**: Every push to main branch triggers deployment
- **Preview Deployments**: Every PR gets a unique preview URL
- **Rollback**: Easy rollback to previous deployments
- **Branch Deployments**: Each branch gets its own URL

#### Preview URLs
When you create a pull request:
```
Main: https://your-app.vercel.app
PR #5: https://your-app-git-feature-username.vercel.app
```

### Custom Domain

#### Step 1: Add Domain
1. Go to project settings
2. Click "Domains"
3. Add your custom domain

#### Step 2: Configure DNS
Follow Vercel's instructions to add DNS records:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Step 3: Verify
- Vercel will automatically provision SSL certificate
- Domain will be live within minutes to hours

### Performance Optimization

#### Automatic Optimizations by Vercel
- **Edge Network**: Global CDN with 100+ locations
- **Compression**: Automatic Brotli/Gzip compression
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Maintained by Vite
- **Caching**: Aggressive caching with cache invalidation

#### Build Optimizations

```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})
```

### Vercel Analytics (Optional)

#### Install Vercel Analytics
```bash
npm install @vercel/analytics
```

#### Add to Your App
```jsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

### Deployment Checklist

Before deploying, ensure:

- [ ] All dependencies are in `package.json`
- [ ] Build script is defined: `"build": "vite build"`
- [ ] Environment variables are configured
- [ ] `.gitignore` includes `node_modules` and `dist`
- [ ] No console errors in production build
- [ ] App works locally with `npm run build` && `npm run preview`
- [ ] `vercel.json` is configured for SPA (if needed)

### Common Issues and Solutions

#### Build Fails
```bash
npm run build
```
Test locally first. Check for:
- Missing dependencies
- Import errors
- TypeScript errors

#### 404 Errors on Refresh
Add `vercel.json` with rewrites configuration (see above)

#### Environment Variables Not Working
- Ensure variables are prefixed with `VITE_`
- Rebuild after adding new variables
- Check they're added to correct environment

#### Slow Build Times
- Remove unused dependencies
- Check for large files in dist
- Use code splitting

### Monitoring and Logs

#### View Build Logs
1. Go to Deployments tab
2. Click on a deployment
3. View build logs for errors

#### Runtime Logs
1. Go to project
2. Click "Logs" or "Functions"
3. View real-time logs

### Cost and Limits

#### Free (Hobby) Plan Includes:
- Unlimited deployments
- Unlimited preview deployments
- 100 GB bandwidth per month
- Automatic SSL certificates
- Custom domains

#### Usage Monitoring
- Dashboard shows bandwidth usage
- Email alerts for quota limits
- Upgrade options available

---

## Best Practices

### Component Structure

```
src/
├── components/
│   ├── contact_list.jsx
│   ├── contact_card.jsx
│   ├── search_bar.jsx
│   └── add_contact_form.jsx
├── hooks/
│   └── use_contacts.js
├── utils/
│   └── helpers.js
├── App.jsx
└── main.jsx
```

### Naming Conventions

#### For This Assignment
- Use underscore_case for variables and functions
- Use PascalCase for component names
- Use descriptive names

```jsx
function ContactList() {
  const [contact_list, set_contact_list] = useState([]);
  const [search_query, set_search_query] = useState('');
  
  function handle_search(query) {
    set_search_query(query);
  }
  
  return <div>...</div>;
}
```

### Performance Best Practices

#### 1. Avoid Unnecessary Re-renders
```jsx
function ContactCard({ contact }) {
  return <div>{contact.name}</div>;
}

export default React.memo(ContactCard);
```

#### 2. Use Keys Properly
```jsx
{contacts.map(contact => (
  <ContactCard key={contact.id} contact={contact} />
))}
```

#### 3. Lazy Load Components
```jsx
import { lazy, Suspense } from 'react';

const ContactDetails = lazy(() => import('./contact_details'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ContactDetails />
    </Suspense>
  );
}
```

### Code Organization

#### Keep Components Small
```jsx
function Contact({ contact }) {
  return (
    <div>
      <ContactHeader name={contact.name} />
      <ContactInfo email={contact.email} phone={contact.phone} />
      <ContactActions onEdit={handle_edit} onDelete={handle_delete} />
    </div>
  );
}
```

#### Extract Reusable Logic
```jsx
function use_filtered_list(items, search_term) {
  return items.filter(item =>
    item.name.toLowerCase().includes(search_term.toLowerCase())
  );
}
```

### Error Handling

```jsx
function DataComponent() {
  const [data, set_data] = useState(null);
  const [error, set_error] = useState(null);
  const [loading, set_loading] = useState(true);
  
  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        set_data(data);
        set_loading(false);
      })
      .catch(err => {
        set_error(err.message);
        set_loading(false);
      });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{data}</div>;
}
```

### Testing Locally Before Deploy

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to test production build locally.

---

## Quick Reference

### Essential Hooks
```jsx
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
```

### Common Patterns

#### State Update
```jsx
set_value(new_value)
set_value(prev => prev + 1)
```

#### Event Handling
```jsx
<button onClick={handle_click}>Click</button>
<input onChange={(e) => handle_change(e.target.value)} />
```

#### Conditional Rendering
```jsx
{condition && <Component />}
{condition ? <A /> : <B />}
```

#### List Rendering
```jsx
{items.map(item => <Item key={item.id} {...item} />)}
```

### Vercel Commands
```bash
vercel login
vercel
vercel --prod
vercel env add VAR_NAME
vercel domains add example.com
vercel logs
```

---

## Resources

### Official Documentation
- **React**: https://react.dev
- **Vercel**: https://vercel.com/docs
- **Vite**: https://vitejs.dev

### React Learning Path
1. Quick Start: https://react.dev/learn
2. Thinking in React: https://react.dev/learn/thinking-in-react
3. Managing State: https://react.dev/learn/managing-state
4. Hooks Reference: https://react.dev/reference/react

### Vercel Resources
- Getting Started: https://vercel.com/docs/getting-started-with-vercel
- Vite on Vercel: https://vercel.com/docs/frameworks/vite
- CLI Reference: https://vercel.com/docs/cli

---

This documentation covers everything you need to build a React application with functional components and deploy it to Vercel. Focus on keeping your code clean, using functional components with hooks, and following the underscore naming convention as specified in your assignment requirements.
