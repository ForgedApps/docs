---
title: Settings Page Overview
weight: 1
---

# Settings Page Overview

The Settings Page is the central hub for configuring your Tech Radar for Compass. This page provides a comprehensive overview of all the configuration options available in the admin interface.

{{< callout type="info" >}}
The Settings Page is accessible from the admin interface and allows you to customize virtually every aspect of your radar.
{{< /callout >}}

## Understanding the Settings Page Structure

The Settings Page is organized into several sections, each controlling different aspects of the radar:

{{< cards >}}
{{< card link="#display-settings" title="Display Settings" icon="eye" description="Control how the radar is displayed to users" />}}

{{< card link="#content-settings" title="Content Settings" icon="document-text" description="Configure the content displayed on the radar" />}}

{{< card link="#logo-settings" title="Logo Settings" icon="photo" description="Customize the logo and branding" />}}

{{< card link="#chart-data" title="Chart Data" icon="chart-pie" description="Import and export radar data" />}}
{{< /cards >}}

## Configuration Data Structure

Behind the scenes, the Settings Page manages a configuration object with the following structure:

```typescript
interface ExtendedRadarConfig extends RadarConfig {
  logoSvg?: string
  showAppNameOnSubpages?: boolean
}

interface RadarConfig {
  version: string
  quadrants: Quadrant[]
  rings: Ring[]
  flags: Flag[]
  labels: Labels
  toggles: Toggles
  sections: string[]
  quadrantOrder: string[]
  aboutContent: string
}
```

This configuration controls all aspects of the radar's appearance and behavior.

## Auto-Saving Functionality

One of the key features of the Settings Page is its auto-saving functionality. When you make changes to any setting, the changes are automatically saved to the server without requiring manual submission.

{{< callout emoji="💾" >}}
All changes are saved automatically as you make them. There's no need to click a "Save" button after each change.
{{< /callout >}}

## Settings Page Components

The Settings Page is composed of several key components:

### Display Settings

The Display Settings section allows you to control how the radar is displayed to users:

- **Feature Toggles**: Enable or disable specific features like the chart, tag filter, quadrant list, and empty rings
- **Section Order**: Rearrange the order of sections on the main page using drag-and-drop
- **Quadrant Order**: Rearrange the order of quadrants using drag-and-drop

### Content Settings

The Content Settings section allows you to configure the content displayed on the radar:

- **General**: Basic settings like the radar version
- **Quadrant Details**: Configure each quadrant's color, title, and description
- **Rings**: Configure each ring's color, title, and radius
- **Status Flags**: Configure the colors and labels for status flags
- **Labels**: Customize various text labels throughout the application
- **About Page Content**: Customize the content of the About page

### Logo Settings

The Logo Settings section allows you to customize the logo displayed in the radar:

- **SVG Logo**: Upload or paste SVG code for your logo
- **Logo Preview**: Preview how your logo will appear
- **Show App Name**: Toggle whether to show the application name next to the logo on subpages

### Chart Data

The Chart Data section allows you to import and export radar data:

- **Import JSON**: Import radar data from a JSON file or pasted JSON content
- **Export JSON**: Export radar data to a JSON file

## Next Steps

Now that you understand the overall structure of the Settings Page, you can explore each section in more detail:

- [Configuration](../configuration/) - Detailed information about each configuration option
- [Visual Customization](../customization/) - How to customize the visual appearance of your radar
- [Managing Items](../managing-items/) - How to add, edit, and manage technology items
- [Import & Export](../import-export/) - How to import and export radar data 