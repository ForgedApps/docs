# Forged Apps Website

The official website for Forged Apps, built with [Next.js](https://nextjs.org/) and [Fumadocs](https://fumadocs.vercel.app/).

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/forged-apps/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

## Repository Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── tech-radar/        # Tech Radar product pages
│   │   ├── docs/          # Documentation pages
│   │   └── pricing/       # Pricing page
│   ├── mcpflare/          # MCPflare product page
│   └── legal/             # Legal pages
├── content/               # MDX documentation content
│   └── docs/              # Tech Radar documentation
├── components/            # React components
│   ├── analytics/         # Google Analytics, Featurebase
│   └── ...
├── lib/                   # Utility functions
├── public/                # Static assets
│   └── images/           # Images
└── source.config.ts       # Fumadocs configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Testing

Validate your local development environment:

```bash
node validate-env.js
```

This checks that the dev server is running and all routes are accessible. See `validate-env.js` and [.claude/testing.md](.claude/testing.md) for details.

## Deployment

This site is deployed automatically to GitHub Pages on push to the `main` branch.

### Manual Deployment

1. Build the static site:
   ```bash
   npm run build
   ```

2. The static files are generated in the `out/` directory

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Documentation:** Fumadocs
- **Styling:** Tailwind CSS
- **Analytics:** Google Analytics
- **Support:** Featurebase

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a Pull Request

## License

See [LICENSE](LICENSE) for details.

---

Built with Next.js and Fumadocs
