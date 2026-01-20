# AGENTS.md - AI Agent Guidelines for Forged Apps Documentation

This document provides context and guidelines for AI agents working with this codebase.

## Project Overview

This is a **Next.js 14 documentation site** for **Forged Apps**, a company that builds developer experience products. The site documents products including **Tech Radar for Compass** and **MCPflare**.

### Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Documentation**: [Fumadocs](https://fumadocs.vercel.app/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Analytics**: Google Analytics
- **Support**: Featurebase

## Repository Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── tech-radar/        # Tech Radar product pages
│   │   ├── docs/          # Documentation pages
│   │   └── pricing/       # Pricing page
│   ├── mcpflare/          # MCPflare product page
│   └── legal/             # Legal pages
├── content/docs/          # MDX documentation content
│   ├── admin-guide/       # Administrator documentation
│   └── user-guide/        # End-user documentation
├── components/            # React components
│   ├── analytics/         # Google Analytics, Featurebase
│   └── ...
├── lib/                   # Utility functions
├── public/                # Static assets
│   └── images/           # Images
├── .claude/              # Claude Code configuration
│   ├── settings.local.json  # Claude permissions
│   ├── testing.md          # Testing documentation
│   ├── validate-env.js     # Environment validator
│   └── test-utils.sh       # Testing utilities
├── source.config.ts       # Fumadocs configuration
└── package.json           # Dependencies and scripts
```

## Local Development

### Prerequisites

- Node.js v18 or later
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Access at http://localhost:3000
```

### Important Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Testing Infrastructure

### CRITICAL: Always Validate Environment Before Making Changes

Before implementing any new functionality, AI agents MUST validate the local development environment:

1. **Check if dev server is running**
2. **Verify key routes are accessible**
3. **Test that the environment is healthy**

### Quick Environment Check

Run this command before starting work:

```bash
node validate-env.js
```

Or use the bash utilities:

```bash
bash test-utils.sh
```

### Testing Workflow

When implementing new features:

1. **Pre-flight Check**: Run environment validation
2. **Incremental Testing**: After each change, verify it works locally
3. **Route Testing**: Test new routes are accessible via `curl http://localhost:3000/your-route`
4. **Build Validation**: Run `npm run build` to ensure production build succeeds
5. **Documentation**: Update relevant docs in `content/docs/`

### Environment Validation Commands

```bash
# Quick check if server is running
curl -I http://localhost:3000

# Get homepage content
curl http://localhost:3000

# Check specific route
curl http://localhost:3000/tech-radar

# Validate TypeScript
npx tsc --noEmit

# Run production build
npm run build
```

### Key Routes to Test

- `/` - Homepage
- `/tech-radar` - Tech Radar landing page
- `/tech-radar/docs` - Documentation index
- `/tech-radar/pricing` - Pricing page
- `/mcpflare` - MCPflare landing page
- `/legal/privacy` - Privacy policy
- `/legal/terms` - Terms of service
- `/legal/security` - Security page

## Content Guidelines

### Creating New Pages

1. **Location**: Place MDX files in `content/docs/` for documentation
2. **Format**: Use MDX (Markdown + JSX)
3. **Naming**: Use lowercase, hyphen-separated filenames

### MDX Front Matter

```mdx
---
title: Page Title
description: Page description for SEO
---

# Page Heading

Content here...
```

### Navigation Structure

Edit `content/docs/meta.json` to configure navigation:

```json
{
  "title": "Section Title",
  "pages": ["page-slug", "another-page"]
}
```

## Image Handling

- Store images in `/public/images/`
- Reference with `/images/filename.png`
- Use descriptive, hyphen-separated filenames

Example:

```mdx
![Tech Radar Overview](/images/tech-radar-overview.png)
```

## Fumadocs Components

Fumadocs provides these components for enhanced documentation:

### Callout/Admonition

```mdx
import { Callout } from 'fumadocs-ui/components/callout';

<Callout type="info">
Informational message
</Callout>

<Callout type="warn">
Warning message
</Callout>
```

### Cards

```mdx
import { Cards, Card } from 'fumadocs-ui/components/card';

<Cards>
  <Card title="Card Title" href="/path">
    Card description
  </Card>
</Cards>
```

### Steps

```mdx
import { Steps, Step } from 'fumadocs-ui/components/steps';

<Steps>
  <Step>
    ### First Step
    Content
  </Step>
  <Step>
    ### Second Step
    Content
  </Step>
</Steps>
```

### Tabs

```mdx
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';

<Tabs items={['Tab 1', 'Tab 2']}>
  <Tab value="Tab 1">Content 1</Tab>
  <Tab value="Tab 2">Content 2</Tab>
</Tabs>
```

## Configuration Files

### Key Files Reference

| File | Purpose |
|------|---------|
| `next.config.mjs` | Next.js configuration |
| `source.config.ts` | Fumadocs configuration |
| `tailwind.config.js` | Tailwind CSS config |
| `tsconfig.json` | TypeScript config |
| `app/layout.tsx` | Root layout with providers |
| `package.json` | Dependencies and scripts |
| `.claude/settings.local.json` | Claude Code permissions |

## Best Practices for AI Agents

### Do

- ✅ **ALWAYS validate environment before making changes**
- ✅ Test changes incrementally after each modification
- ✅ Run `npm run build` to verify production builds
- ✅ Use MDX for documentation pages
- ✅ Follow existing file naming conventions
- ✅ Place images in `/public/images/`
- ✅ Update `meta.json` when adding new pages
- ✅ Use TypeScript for new components
- ✅ Follow existing code style and patterns
- ✅ Test routes with curl after creating them

### Don't

- ❌ Skip environment validation before implementing features
- ❌ Use relative image paths
- ❌ Modify configuration files without understanding impact
- ❌ Create pages without updating navigation
- ❌ Ignore TypeScript errors
- ❌ Make changes without testing locally
- ❌ Use inline styles instead of Tailwind classes

### Testing Checklist

Before marking work as complete:

- [ ] Environment validation passed
- [ ] New routes are accessible via curl
- [ ] TypeScript compilation succeeds (`npx tsc --noEmit`)
- [ ] Production build succeeds (`npm run build`)
- [ ] Navigation updated if new pages added
- [ ] Images load correctly
- [ ] Mobile responsive (if UI changes)

## Content Writing Style

- Use clear, concise language
- Write for developers and technical users
- Include code examples where helpful
- Use callouts for important information
- Organize with clear headings

## Development Workflow Example

```bash
# 1. Validate environment
node validate-env.js

# 2. Make changes (edit files)

# 3. Test locally
curl http://localhost:3000/your-new-route

# 4. Validate TypeScript
npx tsc --noEmit

# 5. Test production build
npm run build

# 6. Document changes
```

## Related Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs Documentation](https://fumadocs.vercel.app/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Testing Documentation](./.claude/testing.md)

## Support

For questions about the codebase or Forged Apps products, contact support@forgedapps.com.
