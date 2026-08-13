# The Preacher

The Preacher is a GitHub Pages-ready frontend for live and recorded church audio programmes.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages

The included GitHub Actions workflow builds `dist` and deploys it to GitHub Pages whenever `main` changes. The app uses hash-based routes so listener, broadcaster, and admin pages continue to work on refresh from a static host.

## Firebase and media setup

The current UI uses realistic seeded local state so every first-pass flow can be explored without credentials. Firebase authentication, Firestore persistence, WebRTC room coordination, and Cloudinary uploads should be connected through environment variables in the next implementation pass:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_CLOUDINARY_CLOUD_NAME`
- `VITE_CLOUDINARY_UPLOAD_PRESET`