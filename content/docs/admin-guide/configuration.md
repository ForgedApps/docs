---
title: Configuration
weight: 1
---

# Configuring the Tech Radar

This page explains how to configure the Tech Radar for Compass using the Settings page in the admin interface.

{{< callout type="info" >}}
All configuration changes are saved automatically when you modify a setting, unless otherwise noted.
{{< /callout >}}

## Accessing the Settings Page

To access the Settings page:

1. Navigate to the admin interface (typically at `/admin`)
2. Log in with your administrator credentials
3. Click on the "Settings" tab in the navigation menu

## Display Settings

The Display Settings section allows you to configure how the radar is displayed to users.

### Feature Toggles

Feature toggles control which elements of the radar are visible to users.

{{< tabs items="Show Chart,Show Tag Filter,Show Quadrant List,Show Empty Rings" >}}
{{< tab >}}
### Show Chart

Enables or disables the radar chart visualization on the main page.

- **Enabled**: The radar chart is displayed on the main page
- **Disabled**: The radar chart is hidden, showing only the list view
{{< /tab >}}

{{< tab >}}
### Show Tag Filter

Enables or disables the tag filtering functionality.

- **Enabled**: Users can filter items by tags
- **Disabled**: Tag filtering is not available
{{< /tab >}}

{{< tab >}}
### Show Quadrant List

Enables or disables the list of quadrants on the main page.

- **Enabled**: The list of quadrants is displayed
- **Disabled**: The quadrant list is hidden
{{< /tab >}}

{{< tab >}}
### Show Empty Rings

Controls whether rings with no items are displayed.

- **Enabled**: Empty rings are displayed in the list view
- **Disabled**: Empty rings are hidden from the list view
{{< /tab >}}
{{< /tabs >}}

### Section Order

The Section Order setting allows you to rearrange the order of sections on the main page using drag-and-drop. Available sections include:

- **radar** - The radar visualization
- **overview** - The overview of all items
- **about** - The about page content

### Quadrant Order

The Quadrant Order setting allows you to rearrange the order of quadrants using drag-and-drop. This affects both the radar visualization and the list view.

## Content Settings

The Content Settings section allows you to configure the content displayed on the radar.

### General

The General section includes basic settings for the radar:

- **Version**: The version number displayed next to the radar name (e.g., "1.0")

### Quadrant Details

The Quadrant Details section allows you to configure each quadrant:

{{< callout emoji="🎨" >}}
Each quadrant can be customized with a color, title, and description.
{{< /callout >}}

For each quadrant, you can set:

- **Color**: The color used for the quadrant in the radar visualization
- **Title**: The display name of the quadrant
- **Description**: A brief description of what the quadrant represents

### Rings

The Rings section allows you to configure each ring:

For each ring, you can set:

- **Color**: The color used for the ring in the radar visualization
- **Title**: The display name of the ring
- **Radius**: The relative size of the ring (value between 0 and 1)

### Status Flags

Status flags indicate the state of items on the radar. For each flag, you can configure:

- **Color**: The color used for the flag
- **Title**: The display name of the flag
- **Description**: A brief description of what the flag represents

The default flags are:

- **new**: For newly added items
- **changed**: For items that have changed since the last update
- **default**: For unchanged items

### Labels

The Labels section allows you to customize various text labels throughout the application:

- **title**: The main title of the radar
- **quadrant**: Label for quadrants
- **quadrantOverview**: Label for the quadrant overview section
- **zoomIn**: Text for the zoom in button
- **filterByTag**: Label for the tag filter
- **footer**: Footer text
- **notUpdated**: Text shown for items not updated
- **notFound**: Text shown when items are not found
- **pageAbout**: Title for the About page
- **pageOverview**: Title for the Overview page
- **searchPlaceholder**: Placeholder text for the search box
- **metaDescription**: Meta description for SEO

### About Page Content

The About Page Content section allows you to customize the content of the About page. HTML formatting is supported, including:

- `<h2>`, `<h3>` for headings
- `<p>` for paragraphs
- `<ul>`, `<li>` for lists
- `<strong>`, `<em>` for text formatting

## Logo

The Logo section allows you to customize the logo displayed in the radar.

{{< callout type="warning" >}}
The logo must be provided as SVG code. Make sure your SVG is valid before saving.
{{< /callout >}}

You can:

- Paste SVG code directly into the editor
- Preview how the logo will appear
- Reset to the default logo
- Toggle whether to show the app name next to the logo on subpages

## Chart Data

The Chart Data section allows you to import and export radar data in JSON format.

### Import JSON

To import data:

1. Click the "Import JSON" button
2. Either paste JSON content directly or upload a JSON file
3. Click "Import" to apply the changes

### Export JSON

To export data:

1. Click the "Export JSON" button
2. The data will be downloaded as a JSON file named "radar-data.json" 