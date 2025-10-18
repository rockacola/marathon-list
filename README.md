# Marathon List

A Next.js web application for displaying marathon information, built with TypeScript and configured for static site generation.

## Features

- Static Site Generation (SSG) - pages pre-built as static HTML at build time
- TypeScript for type safety
- Chakra UI v3 for modern, accessible component styling
- Dynamic detail pages for each marathon
- Marathon data managed in JSON file
- Responsive card-based layout
- No server required - deploy anywhere static files are supported

## Project Structure

```
marathon-list/
├── app/
│   ├── layout.tsx              # Root layout with Chakra provider
│   ├── page.tsx                # Home page listing all marathons
│   ├── providers.tsx           # Chakra UI provider configuration
│   └── marathon/
│       └── [id]/
│           └── page.tsx        # Dynamic detail page for each marathon
├── components/
│   └── MarathonCard.tsx        # Marathon card component
├── data/
│   └── marathons.json          # Marathon data
├── types/
│   └── marathon.ts             # TypeScript interfaces
└── next.config.ts              # Next.js configuration (static export)
```

## Getting Started

### Install dependencies:
```bash
npm install
```

### Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production (static export):
```bash
npm run build
```

This will generate static HTML files in the `out/` directory that can be deployed to any static hosting service.

## Adding Marathon Data

Edit `data/marathons.json` to add or modify marathon information. Each marathon should follow this structure:

```json
{
  "id": "unique-id",
  "name": "Marathon Name",
  "location": "City, Country",
  "date": "YYYY-MM-DD",
  "distance": "42.195 km",
  "website": "https://example.com",
  "description": "Marathon description"
}
```

## Deployment

After running `npm run build`, deploy the contents of the `out/` directory to your preferred static hosting service (Netlify, Vercel, GitHub Pages, etc.).