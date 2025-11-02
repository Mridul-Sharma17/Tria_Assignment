# DaisyUI Complete Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Themes](#themes)
5. [Components](#components)
6. [Best Practices](#best-practices)

---

## Introduction

DaisyUI is a plugin for Tailwind CSS that provides a set of pre-built, semantic, and accessible components. It reduces the amount of CSS you need to write and makes your codebase cleaner.

### Key Features
- 63+ pre-built components
- 35+ built-in themes
- Dark mode support
- Fully customizable
- Works with Tailwind CSS
- Semantic class names
- Small file size
- TypeScript support

---

## Installation

### Prerequisites
- Node.js installed on your system
- A project with Tailwind CSS or ability to install it

### For Ubuntu/Linux Systems

#### Step 1: Install Node.js (if not already installed)
```bash
sudo apt update
sudo apt install nodejs npm
node --version
npm --version
```

#### Step 2: Install DaisyUI with Vite

##### Create a new Vite project
```bash
npm create vite@latest ./ -- --template vanilla
```

Or for React:
```bash
npm create vite@latest ./ -- --template react
```

##### Install Tailwind CSS and DaisyUI
```bash
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

#### Step 3: Configure Vite

Create or modify `vite.config.js`:
```javascript
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
});
```

#### Step 4: Configure CSS

Create or modify your main CSS file (e.g., `src/style.css`):
```css
@import "tailwindcss";
@plugin "daisyui";
```

#### Step 5: Run Development Server
```bash
npm run dev
```

### Installation with other package managers

#### PNPM
```bash
pnpm add -D daisyui@latest
```

#### Yarn
```bash
yarn add -D daisyui@latest
```

#### Bun
```bash
bun add -d daisyui@latest
```

---

## Configuration

DaisyUI can be configured directly in your CSS file by adding configuration brackets after the plugin import.

### Basic Configuration

```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default;
  root: ":root";
  include: ;
  exclude: ;
  prefix: "";
  logs: true;
}
```

### Configuration Options

#### 1. Themes
Controls which themes are enabled in your application.

```css
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
```

**Options:**
- Comma-separated list of theme names
- `--default` flag: Sets the default theme
- `--prefersdark` flag: Sets default theme for dark mode
- `all`: Enable all 35 themes
- `false`: Disable all themes

**Examples:**
```css
@plugin "daisyui" {
  themes: nord --default, abyss --prefersdark, cupcake, dracula;
}

@plugin "daisyui" {
  themes: all;
}

@plugin "daisyui" {
  themes: false;
}
```

#### 2. Root
The CSS selector to receive CSS variables.

```css
@plugin "daisyui" {
  root: "#my-app";
}
```

This scopes all DaisyUI CSS variables to a specific element.

#### 3. Include
Only include specific components (whitelist approach).

```css
@plugin "daisyui" {
  include: button, input, select;
}
```

#### 4. Exclude
Exclude specific components (blacklist approach).

```css
@plugin "daisyui" {
  exclude: checkbox, footer, typography, glass;
}
```

#### 5. Prefix
Add a prefix to all DaisyUI classes.

```css
@plugin "daisyui" {
  prefix: "d-";
}
```

Now `btn` becomes `d-btn`, `card` becomes `d-card`, etc.

#### 6. Logs
Enable or disable console logs.

```css
@plugin "daisyui" {
  logs: false;
}
```

---

## Themes

DaisyUI comes with 35 built-in themes that can instantly transform your website's appearance.

### Available Themes

1. light (default)
2. dark
3. cupcake
4. bumblebee
5. emerald
6. corporate
7. synthwave
8. retro
9. cyberpunk
10. valentine
11. halloween
12. garden
13. forest
14. aqua
15. lofi
16. pastel
17. fantasy
18. wireframe
19. black
20. luxury
21. dracula
22. cmyk
23. autumn
24. business
25. acid
26. lemonade
27. night
28. coffee
29. winter
30. dim
31. nord
32. sunset

### Using Themes

#### Enable specific themes
```css
@plugin "daisyui" {
  themes: light --default;
}
```

#### Apply theme to HTML
```html
<html data-theme="light">
  <!-- Your app -->
</html>
```

#### Apply theme to specific sections
```html
<html data-theme="light">
  <div data-theme="light">
    This div uses light theme
    <span data-theme="light">Consistent light theme throughout!</span>
  </div>
</html>
```

### Creating Custom Themes

```css
@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "mytheme";
  default: true;
  prefersdark: false;
  color-scheme: light;

  --color-base-100: oklch(98% 0.02 240);
  --color-base-200: oklch(95% 0.03 240);
  --color-base-300: oklch(92% 0.04 240);
  --color-base-content: oklch(20% 0.05 240);
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --color-secondary: oklch(70% 0.25 200);
  --color-secondary-content: oklch(98% 0.01 200);
  --color-accent: oklch(65% 0.25 160);
  --color-accent-content: oklch(98% 0.01 160);
  --color-neutral: oklch(50% 0.05 240);
  --color-neutral-content: oklch(98% 0.01 240);
  --color-info: oklch(70% 0.2 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: oklch(65% 0.25 140);
  --color-success-content: oklch(98% 0.01 140);
  --color-warning: oklch(80% 0.25 80);
  --color-warning-content: oklch(20% 0.05 80);
  --color-error: oklch(65% 0.3 30);
  --color-error-content: oklch(98% 0.01 30);

  --radius-selector: 1rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;

  --size-selector: 0.25rem;
  --size-field: 0.25rem;

  --border: 1px;

  --depth: 1;
  --noise: 0;
}
```

### Customizing Existing Themes

```css
@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "light";
  default: true;
  --color-primary: blue;
  --color-secondary: teal;
}
```

### Using Light Theme (Recommended for this project)

For a consistent light theme experience, simply set it in your HTML:

```html
<html data-theme="light">
  <!-- Your entire app will use light theme -->
</html>
```

Or if you want to allow theme switching later:

```bash
npm install theme-change
```

```javascript
import { themeChange } from 'theme-change'

themeChange()
```

```html
<select data-choose-theme>
  <option value="light" selected>Light</option>
  <option value="cupcake">Cupcake</option>
  <option value="corporate">Corporate</option>
</select>
```

---

## Components

### 1. Button

Buttons allow users to take actions or make choices.

#### Basic Usage
```html
<button class="btn">Button</button>
```

#### Button Variants

**Sizes:**
```html
<button class="btn btn-xs">Extra Small</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-md">Medium (default)</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-xl">Extra Large</button>
```

**Colors:**
```html
<button class="btn">Default</button>
<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
```

**Styles:**
```html
<button class="btn btn-outline">Outline</button>
<button class="btn btn-dash">Dash</button>
<button class="btn btn-soft">Soft</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>
```

**States:**
```html
<button class="btn btn-active">Active</button>
<button class="btn" disabled>Disabled</button>
<button class="btn btn-disabled">Disabled (class)</button>
```

**Modifiers:**
```html
<button class="btn btn-wide">Wide Button</button>
<button class="btn btn-block">Block Button</button>
<button class="btn btn-square">▢</button>
<button class="btn btn-circle">○</button>
```

**With Icons:**
```html
<button class="btn">
  <svg>...</svg>
  Button with Icon
</button>
```

**Loading State:**
```html
<button class="btn">
  <span class="loading loading-spinner"></span>
  Loading
</button>
```

### 2. Input

Text input fields for user data entry.

#### Basic Usage
```html
<input type="text" placeholder="Type here" class="input" />
```

#### Input Variants

**Sizes:**
```html
<input type="text" class="input input-xs" />
<input type="text" class="input input-sm" />
<input type="text" class="input input-md" />
<input type="text" class="input input-lg" />
<input type="text" class="input input-xl" />
```

**Colors:**
```html
<input type="text" class="input input-primary" />
<input type="text" class="input input-secondary" />
<input type="text" class="input input-accent" />
<input type="text" class="input input-info" />
<input type="text" class="input input-success" />
<input type="text" class="input input-warning" />
<input type="text" class="input input-error" />
```

**Styles:**
```html
<input type="text" class="input input-ghost" />
```

**With Icons:**
```html
<label class="input">
  <svg>...</svg>
  <input type="text" placeholder="Search" />
</label>
```

**Input Types:**
```html
<input type="text" class="input" />
<input type="email" class="input" />
<input type="password" class="input" />
<input type="number" class="input" />
<input type="date" class="input" />
<input type="time" class="input" />
<input type="url" class="input" />
<input type="tel" class="input" />
<input type="search" class="input" />
```

**With Validation:**
```html
<input type="email" class="input validator" />
```

### 3. Card

Cards group and display content in an easily readable format.

#### Basic Usage
```html
<div class="card">
  <figure>
    <img src="image.jpg" alt="Image" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Card content goes here</p>
    <div class="card-actions">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

#### Card Variants

**Sizes:**
```html
<div class="card card-xs">...</div>
<div class="card card-sm">...</div>
<div class="card card-md">...</div>
<div class="card card-lg">...</div>
<div class="card card-xl">...</div>
```

**Styles:**
```html
<div class="card card-border">...</div>
<div class="card card-dash">...</div>
```

**With Badge:**
```html
<div class="card">
  <figure>
    <img src="image.jpg" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      Card Title
      <div class="badge badge-secondary">NEW</div>
    </h2>
  </div>
</div>
```

**Image Overlay:**
```html
<div class="card card-overlay">
  <figure>
    <img src="image.jpg" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Content</p>
  </div>
</div>
```

**Horizontal Layout:**
```html
<div class="card card-side">
  <figure>
    <img src="image.jpg" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Content</p>
  </div>
</div>
```

### 4. Modal

Modal displays content in a dialog box.

#### Method 1: HTML Dialog (Recommended)
```html
<button onclick="my_modal.showModal()">Open Modal</button>

<dialog id="my_modal" class="modal">
  <div class="modal-body">
    <h3>Modal Title</h3>
    <p>Modal content</p>
    <div class="modal-action">
      <button onclick="my_modal.close()">Close</button>
    </div>
  </div>
</dialog>
```

#### With Backdrop Close
```html
<dialog id="my_modal" class="modal">
  <div class="modal-body">
    <h3>Modal Title</h3>
    <p>Content</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
```

#### Modal Positions
```html
<dialog class="modal modal-top">...</dialog>
<dialog class="modal modal-middle">...</dialog>
<dialog class="modal modal-bottom">...</dialog>
```

### 5. Navbar

Navigation bar for the top of the page.

#### Basic Usage
```html
<div class="navbar">
  <div class="navbar-start">
    <a class="btn btn-ghost">Brand</a>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost">Link</a>
  </div>
  <div class="navbar-end">
    <button class="btn">Button</button>
  </div>
</div>
```

#### With Dropdown Menu
```html
<div class="navbar">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost">
        Menu
      </div>
      <div tabindex="0" class="dropdown-content">
        <a>Item 1</a>
        <a>Item 2</a>
      </div>
    </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost">Brand</a>
  </div>
  <div class="navbar-end">
    <button class="btn">Button</button>
  </div>
</div>
```

#### With Colors
```html
<div class="navbar bg-primary text-primary-content">
  ...
</div>
```

### 6. Table

Display data in table format.

#### Basic Usage
```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>Company</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cy Ganderton</td>
      <td>Quality Control Specialist</td>
      <td>Littel, Schaden and Vandervort</td>
    </tr>
  </tbody>
</table>
```

#### Table Variants

**Sizes:**
```html
<table class="table table-xs">...</table>
<table class="table table-sm">...</table>
<table class="table table-md">...</table>
<table class="table table-lg">...</table>
<table class="table table-xl">...</table>
```

**Styles:**
```html
<table class="table table-zebra">...</table>
<table class="table table-pinned-rows">...</table>
<table class="table table-pinned-cols">...</table>
```

**Active/Hover Rows:**
```html
<tr class="hover">...</tr>
<tr class="active">...</tr>
```

### 7. Badge

Small status indicators.

#### Basic Usage
```html
<div class="badge">Badge</div>
```

#### Badge Variants

**Sizes:**
```html
<div class="badge badge-xs">XS</div>
<div class="badge badge-sm">SM</div>
<div class="badge badge-md">MD</div>
<div class="badge badge-lg">LG</div>
<div class="badge badge-xl">XL</div>
```

**Colors:**
```html
<div class="badge badge-primary">Primary</div>
<div class="badge badge-secondary">Secondary</div>
<div class="badge badge-accent">Accent</div>
<div class="badge badge-info">Info</div>
<div class="badge badge-success">Success</div>
<div class="badge badge-warning">Warning</div>
<div class="badge badge-error">Error</div>
```

**Styles:**
```html
<div class="badge badge-outline">Outline</div>
<div class="badge badge-soft">Soft</div>
<div class="badge badge-dash">Dash</div>
<div class="badge badge-ghost">Ghost</div>
```

### 8. Alert

Display important messages to users.

#### Basic Usage
```html
<div class="alert">
  <svg>...</svg>
  <span>Alert message</span>
</div>
```

#### Alert Variants

**Colors:**
```html
<div class="alert alert-info">Info message</div>
<div class="alert alert-success">Success message</div>
<div class="alert alert-warning">Warning message</div>
<div class="alert alert-error">Error message</div>
```

**Styles:**
```html
<div class="alert alert-outline">Outline alert</div>
<div class="alert alert-soft">Soft alert</div>
<div class="alert alert-dash">Dash alert</div>
```

**With Actions:**
```html
<div class="alert">
  <span>Message</span>
  <div>
    <button class="btn btn-sm">Deny</button>
    <button class="btn btn-sm btn-primary">Accept</button>
  </div>
</div>
```

**Direction:**
```html
<div class="alert alert-vertical">...</div>
<div class="alert alert-horizontal">...</div>
```

### 9. Dropdown

Open menus or content on click.

#### Method 1: Details/Summary (Recommended)
```html
<details class="dropdown">
  <summary>Click to open</summary>
  <div class="dropdown-content">
    <a>Item 1</a>
    <a>Item 2</a>
    <a>Item 3</a>
  </div>
</details>
```

#### Method 2: Popover API (New)
```html
<button 
  style="anchor-name:--anchor-1" 
  popovertarget="popover-1"
>
  Button
</button>

<div 
  popover 
  id="popover-1" 
  style="position-anchor:--anchor-1"
  class="dropdown-content"
>
  <a>Item 1</a>
  <a>Item 2</a>
</div>
```

#### Method 3: CSS Focus
```html
<div class="dropdown">
  <div tabindex="0" role="button">Click to open</div>
  <div tabindex="0" class="dropdown-content">
    <a>Item 1</a>
    <a>Item 2</a>
  </div>
</div>
```

#### Dropdown Positions
```html
<details class="dropdown dropdown-top">...</details>
<details class="dropdown dropdown-bottom">...</details>
<details class="dropdown dropdown-left">...</details>
<details class="dropdown dropdown-right">...</details>
```

#### Alignment
```html
<details class="dropdown dropdown-start">...</details>
<details class="dropdown dropdown-center">...</details>
<details class="dropdown dropdown-end">...</details>
```

#### Hover Dropdown
```html
<details class="dropdown dropdown-hover">...</details>
```

### 10. Loading

Show loading animations.

#### Variants
```html
<span class="loading loading-spinner"></span>
<span class="loading loading-dots"></span>
<span class="loading loading-ring"></span>
<span class="loading loading-ball"></span>
<span class="loading loading-bars"></span>
<span class="loading loading-infinity"></span>
```

#### Sizes
```html
<span class="loading loading-spinner loading-xs"></span>
<span class="loading loading-spinner loading-sm"></span>
<span class="loading loading-spinner loading-md"></span>
<span class="loading loading-spinner loading-lg"></span>
<span class="loading loading-spinner loading-xl"></span>
```

#### Colors
```html
<span class="loading loading-spinner text-primary"></span>
<span class="loading loading-spinner text-secondary"></span>
<span class="loading loading-spinner text-accent"></span>
```

### 11. Toast

Stack notifications in corner of page.

#### Basic Usage
```html
<div class="toast">
  <div class="alert alert-info">
    <span>New message arrived</span>
  </div>
</div>
```

#### Positions
```html
<div class="toast toast-top toast-start">...</div>
<div class="toast toast-top toast-center">...</div>
<div class="toast toast-top toast-end">...</div>
<div class="toast toast-middle toast-start">...</div>
<div class="toast toast-middle toast-center">...</div>
<div class="toast toast-middle toast-end">...</div>
<div class="toast toast-bottom toast-start">...</div>
<div class="toast toast-bottom toast-center">...</div>
<div class="toast toast-bottom toast-end">...</div>
```

### 12. Other Important Components

#### Accordion
```html
<div class="collapse">
  <input type="checkbox" />
  <div class="collapse-title">
    Click to expand
  </div>
  <div class="collapse-content">
    <p>Content here</p>
  </div>
</div>
```

#### Avatar
```html
<div class="avatar">
  <div class="w-24 rounded">
    <img src="avatar.jpg" />
  </div>
</div>
```

#### Breadcrumbs
```html
<div class="breadcrumbs">
  <ul>
    <li><a>Home</a></li>
    <li><a>Documents</a></li>
    <li>File</li>
  </ul>
</div>
```

#### Checkbox
```html
<input type="checkbox" class="checkbox" />
<input type="checkbox" class="checkbox checkbox-primary" />
```

#### Radio
```html
<input type="radio" name="radio" class="radio" />
<input type="radio" name="radio" class="radio radio-primary" />
```

#### Select
```html
<select class="select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

#### Textarea
```html
<textarea class="textarea" placeholder="Enter text"></textarea>
```

#### Toggle
```html
<input type="checkbox" class="toggle" />
<input type="checkbox" class="toggle toggle-primary" />
```

#### Progress Bar
```html
<progress class="progress" value="70" max="100"></progress>
<progress class="progress progress-primary" value="70" max="100"></progress>
```

#### Divider
```html
<div class="divider">OR</div>
```

#### Menu
```html
<ul class="menu">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
</ul>
```

#### Steps
```html
<ul class="steps">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>
```

#### Tabs
```html
<div role="tablist" class="tabs">
  <a role="tab" class="tab">Tab 1</a>
  <a role="tab" class="tab tab-active">Tab 2</a>
  <a role="tab" class="tab">Tab 3</a>
</div>
```

#### Tooltip
```html
<div class="tooltip" data-tip="Tooltip text">
  Hover me
</div>
```

---

## Best Practices

### 1. Component Organization
- Keep components semantic and maintainable
- Use proper HTML5 tags with DaisyUI classes
- Combine with Tailwind utility classes when needed

### 2. Theme Management
- Use light theme for consistent, professional appearance
- Set `data-theme="light"` on the HTML tag
- Ensure all components look good in light theme

### 3. Accessibility
- Use proper ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers

### 4. Performance
- Use `include` or `exclude` config to reduce CSS size
- Only enable themes you actually use
- Lazy load components when possible

### 5. Responsive Design
```html
<button class="btn btn-sm md:btn-md lg:btn-lg">
  Responsive Button
</button>
```

### 6. Custom Styling
Combine DaisyUI with Tailwind utilities:
```html
<button class="btn btn-primary rounded-full shadow-xl hover:shadow-2xl">
  Custom Button
</button>
```

### 7. Color Customization
```html
<button class="btn" style="background-color: #custom-color">
  Custom Color
</button>
```

Or use Tailwind's color classes:
```html
<button class="btn bg-blue-500 hover:bg-blue-600">
  Tailwind Color
</button>
```

### 8. Form Validation
Use the `validator` class for automatic validation styling:
```html
<input type="email" class="input validator" required />
```

### 9. Layout with DaisyUI
```html
<div class="container mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="card">...</div>
    <div class="card">...</div>
    <div class="card">...</div>
  </div>
</div>
```

### 10. Light Theme Consistency
Keep light theme throughout your application:
```html
<html data-theme="light">
  <!-- All components automatically use light theme -->
</html>
```

Components will automatically adapt to light theme colors:
```html
<div class="card bg-base-100">
  <p class="text-base-content">Text automatically uses theme colors</p>
</div>
```

---

## Common Patterns

### Search Bar
```html
<label class="input input-primary">
  <svg>...</svg>
  <input type="text" placeholder="Search..." />
</label>
```

### Login Form
```html
<div class="card">
  <div class="card-body">
    <h2 class="card-title">Login</h2>
    <label class="form-control">
      <span class="label-text">Email</span>
      <input type="email" class="input input-primary" />
    </label>
    <label class="form-control">
      <span class="label-text">Password</span>
      <input type="password" class="input input-primary" />
    </label>
    <button class="btn btn-primary">Login</button>
  </div>
</div>
```

### Contact List Item
```html
<div class="card card-side">
  <figure>
    <div class="avatar">
      <div class="w-16 rounded-full">
        <img src="avatar.jpg" />
      </div>
    </div>
  </figure>
  <div class="card-body">
    <h2 class="card-title">John Doe</h2>
    <p>john@example.com</p>
    <p>+1 234 567 8900</p>
    <div class="card-actions">
      <button class="btn btn-sm btn-primary">Edit</button>
      <button class="btn btn-sm btn-error">Delete</button>
    </div>
  </div>
</div>
```

### Simple Navigation for Light Theme
```html
<div class="navbar bg-base-100 shadow-lg">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">Contact List</a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-primary">Add Contact</button>
  </div>
</div>
```

---

## Troubleshooting

### Components not showing correctly
- Ensure Tailwind CSS and DaisyUI are properly installed
- Check that CSS is properly imported
- Verify Vite config includes Tailwind plugin

### Light theme not applying
- Check `data-theme="light"` is set on HTML tag
- Verify light theme is enabled in config
- Ensure CSS variables are loading properly

### Custom colors not applying
- Make sure theme is configured correctly
- Check color variable names
- Verify CSS specificity

### Build size too large
- Use `include` or `exclude` config
- Only enable needed themes
- Purge unused CSS in production

---

## Resources

### Official Links
- **Website:** https://daisyui.com
- **GitHub:** https://github.com/saadeghi/daisyui
- **Discord:** https://daisyui.com/discord/
- **NPM:** https://www.npmjs.com/package/daisyui

### Useful Tools
- **Theme Change:** https://github.com/saadeghi/theme-change
- **DaisyUI Blueprint:** https://daisyui.com/blueprint/
- **Tailwind CSS:** https://tailwindcss.com

### Community
- GitHub Discussions for questions
- Discord server for community support
- Open issues on GitHub for bugs

---

## Quick Reference

### Most Common Classes

**Layout:**
- `container` - Container with max width
- `card` - Card container
- `card-body` - Card content area
- `card-title` - Card title
- `card-actions` - Card action buttons area

**Forms:**
- `input` - Text input
- `textarea` - Multiline text input
- `select` - Dropdown select
- `checkbox` - Checkbox input
- `radio` - Radio button
- `toggle` - Toggle switch
- `form-control` - Form field wrapper
- `label` - Form label

**Buttons:**
- `btn` - Button base
- `btn-primary` - Primary color
- `btn-sm` - Small size
- `btn-lg` - Large size
- `btn-outline` - Outline style
- `btn-ghost` - Ghost style

**Feedback:**
- `alert` - Alert message
- `badge` - Badge/tag
- `loading` - Loading spinner
- `toast` - Toast notification
- `modal` - Modal dialog
- `progress` - Progress bar

**Navigation:**
- `navbar` - Navigation bar
- `menu` - Menu list
- `tabs` - Tab navigation
- `breadcrumbs` - Breadcrumb navigation
- `steps` - Step indicator
- `dropdown` - Dropdown menu

**Data Display:**
- `table` - Data table
- `avatar` - Avatar image
- `stat` - Statistics display
- `timeline` - Timeline component

**Utilities:**
- `divider` - Visual divider
- `tooltip` - Tooltip popup
- `swap` - Swap visibility
- `collapse` - Collapsible content

---

This documentation should serve as a comprehensive guide for using DaisyUI in your projects. For the most up-to-date information, always refer to the official DaisyUI documentation at https://daisyui.com.
