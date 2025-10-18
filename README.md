# Marathon List

A Next.js web application for discovering and exploring marathon events and festivals around the world. Built with TypeScript, Chakra UI v3, and configured for static site generation.

## Features

- **Static Site Generation (SSG)** - Pages pre-built as static HTML at build time
- **TypeScript** - Full type safety throughout the application
- **Chakra UI v3** - Modern, accessible component styling with custom theming
- **Dynamic Event Pages** - Detailed pages for each marathon event
- **Multi-Race Support** - Events can include multiple races (marathon, 10km, 5km, etc.)
- **Festival System** - Group related events by festival/location
- **Responsive Design** - Card-based layout that works on all devices
- **Code Quality** - Prettier and ESLint integration for consistent formatting
- **Utility Functions** - Date formatting, price display, season detection
- **Zero Server Required** - Deploy anywhere static files are supported

## Project Structure

```
marathon-list/
├── app/
│   ├── [event_id]/
│   │   └── page.tsx            # Dynamic event detail pages
│   ├── layout.tsx              # Root layout with Chakra provider
│   ├── page.tsx                # Home page listing all events
│   └── providers.tsx           # Chakra UI provider configuration
├── components/
│   ├── EventCard.tsx           # Event card component
│   ├── EventReasonCard.tsx     # Reasons to run card
│   ├── ExternalSiteCard.tsx    # External links card
│   ├── Footer.tsx              # Site footer
│   ├── Header.tsx              # Main header
│   ├── HeaderSimple.tsx        # Simplified header
│   ├── InfoCard.tsx            # General info card
│   ├── InfoCardTitle.tsx       # Info card title component
│   └── RaceInfoCard.tsx        # Race details card
├── constants/
│   └── locale.ts               # Localization settings
├── data/
│   ├── events.json             # Event data (specific marathon events)
│   ├── festivals.json          # Festival data (marathon series/locations)
│   └── races.json              # Race distance definitions
├── types/
│   ├── Event.ts                # Event and Race interfaces
│   └── Festival.ts             # Festival interface
├── utils/
│   ├── formatDate.ts           # Date formatting utilities
│   ├── formatPrice.ts          # Price display formatting
│   ├── getBasePath.ts          # Base path configuration
│   ├── getReasonDetails.ts     # Event reason/attribute details
│   └── getSeason.ts            # Season detection from date
├── theme.ts                    # Custom Chakra UI theme
├── next.config.ts              # Next.js configuration (static export)
├── .prettierrc                 # Prettier configuration
└── .eslintrc.json              # ESLint configuration
```

## Getting Started

### Install dependencies:

```bash
npm install
```

### Run the development server:

```bash
npm run dev
# or for a clean start
npm run dev:clean
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production (static export):

```bash
npm run build
```

This will generate static HTML files in the `out/` directory that can be deployed to any static hosting service.

### Code Quality Scripts:

```bash
# Format code with Prettier
npm run format

# Check formatting without modifying files
npm run format:check

# Run ESLint
npm run lint
```

## Data Management

The application uses a two-tier data structure: **Festivals** and **Events**.

### Adding a Festival

Edit `data/festivals.json` to add a new marathon festival/series:

```json
{
  "id": "festival-id",
  "name": "Festival Name",
  "location": "City, Country",
  "description": "Detailed description of the festival",
  "reasons": ["scenic", "technical", "prestigious", "memorable"]
}
```

### Adding an Event

Edit `data/events.json` to add a specific marathon event:

```json
{
  "id": "event-id-2025",
  "name": "Event Name 2025",
  "festival_id": "festival-id",
  "start_date": "2025-08-30",
  "end_date": "2025-08-31",
  "main_date": "2025-08-31",
  "price_guideline": {
    "amount": 250,
    "currency": "AUD"
  },
  "participant_count": 35000,
  "races": [
    {
      "id": "marathon",
      "date": "2025-08-31",
      "label": "Marathon Name",
      "distance": 42.195
    },
    {
      "id": "10km",
      "date": "2025-08-31",
      "label": "10km Race Name",
      "distance": 10
    }
  ]
}
```

### Race Types

Common race types defined in `data/races.json`:

- Marathon (42.195 km)
- Half Marathon (21.0975 km)
- 10km, 5km
- Ultra distances

## Tech Stack

- **Framework**: Next.js 15.5.6 with App Router
- **Language**: TypeScript 5.9.3
- **UI Library**: Chakra UI v3.27.1
- **Styling**: Emotion (CSS-in-JS)
- **Animation**: Framer Motion 11.18.2
- **Icons**: React Icons 5.5.0
- **Code Quality**: ESLint, Prettier
- **Build**: Static Site Generation (SSG)

## Development Notes

### Custom Theme

The project includes a custom Chakra UI theme (`theme.ts`) that defines the visual identity of the application. You can modify colors, fonts, and component styles here.

### Utility Functions

- `formatDate()` - Formats dates based on locale settings
- `formatPrice()` - Displays prices with proper currency formatting
- `getSeason()` - Determines season from date (Spring, Summer, Fall, Winter)
- `getReasonDetails()` - Maps reason codes to display information
- `getBasePath()` - Handles base path configuration for deployment

### Component Architecture

The app uses a modular component structure:

- **Layout Components**: Header, HeaderSimple, Footer
- **Card Components**: EventCard, InfoCard, RaceInfoCard, EventReasonCard, ExternalSiteCard
- **Utility Components**: InfoCardTitle

## Deployment

After running `npm run build`, deploy the contents of the `out/` directory to your preferred static hosting service:

- **Vercel** - Automatic deployment from Git
- **Netlify** - Drag and drop `out/` folder
- **GitHub Pages** - Push `out/` to gh-pages branch
- **AWS S3** - Upload `out/` to S3 bucket
- **Any static host** - Upload the `out/` directory

### Base Path Configuration

If deploying to a subdirectory, configure the base path in `utils/getBasePath.ts`.
