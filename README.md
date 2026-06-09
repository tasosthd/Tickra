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
