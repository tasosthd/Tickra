# TaskFlow Blueprint — Supabase Cloud Sync Version

This version includes:
- Supabase Google Auth
- Google avatar in the top-right bar
- Cloud-synced tasks using Supabase database
- Row Level Security-ready SQL
- Blue completion checkbox with white checkmark
- Multi-page app structure

## Setup

### 1. Supabase SQL
Run `supabase-schema.sql` in:
Supabase → SQL Editor

### 2. Supabase Google provider
Enable:
Authentication → Providers → Google

### 3. URL configuration
Supabase → Authentication → URL Configuration

Site URL:
https://tickra.vercel.app

Redirect URLs:
https://tickra.vercel.app/**
http://localhost:5500/**
http://127.0.0.1:5500/**

### 4. Add keys
Open `js/config.js` and replace:
- `PASTE_YOUR_SUPABASE_PROJECT_URL_HERE`
- `PASTE_YOUR_SUPABASE_ANON_PUBLIC_KEY_HERE`

Use:
Supabase → Project Settings → API

Use the anon public key only. Never put service_role in frontend code.

### 5. Deploy
Upload the folder to Vercel.


## Blank page troubleshooting

If the page ever looks blank:
1. Open browser DevTools → Console.
2. Check for red JavaScript errors.
3. Make sure `js/config.js` contains your real Supabase Project URL and anon public key.
4. Redeploy the full folder to Vercel.
5. In Vercel, hard refresh the site with Ctrl+F5 after deployment.


## Profile dropdown update
The Google profile picture no longer logs the user out directly.
Clicking the avatar opens a dropdown with:
- Google profile image
- name
- email
- Settings button
- Logout button with matching inline SVG icon


## Instagram-style mobile polish
This version includes:
- Better mobile topbar
- Sticky glass bottom navigation
- Mobile-safe spacing with safe-area support
- Task tables transformed into mobile cards
- Bottom-sheet style modals
- Swipe-friendly kanban columns
- Mobile profile bottom sheet
- Larger touch targets
- iOS zoom prevention on form fields


## Full-screen mobile task editor
On phones, the Add/Edit Task modal is now a full-screen app-like page:
- Full-screen height
- Top-left back arrow
- Sticky bottom save button
- Cancel closes from the back arrow
- Form fields are touch-friendly cards


## Separate add task page
Added `addtask.html`.
On phones, pressing Add Task opens this separate full-screen page instead of a modal.
The page includes:
- top-left back arrow
- full-screen task form
- sticky save button
- Supabase cloud save support
Desktop still keeps the modal for fast editing.


## Fixed blank page after addtask update
This version fixes the route detection for `addtask.html` and adds a runtime guard so a JavaScript error shows a readable error card instead of a totally blank screen.


## Add Task mobile full-width fix
The `addtask.html` page now fills the whole phone screen width.
Also fixed the missing save icon fallback that showed `undefined` on the save button.
