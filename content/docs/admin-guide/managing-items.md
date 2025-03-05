---
title: Managing Items
weight: 2
---

# Managing Radar Items

This page explains how to manage technology items on the Tech Radar for Compass.

## Item Structure

Each item on the radar has the following structure:

{{< callout emoji="📋" >}}
Understanding the item structure is essential for effectively managing your radar content.
{{< /callout >}}

```typescript
interface Item {
  id: string;              // Unique identifier
  quadrant: string;        // Quadrant ID
  tags: string[];          // Array of tags
  releases: ItemRelease[]; // Array of releases
  archived?: boolean;      // Whether the item is archived
}

interface ItemRelease {
  id: string;              // Release ID
  title: string;           // Item title
  body: string;            // Description/content
  releaseDate: string;     // Date of release
  ring: string;            // Ring ID
  flag: Flag;              // Status flag (new, changed, default)
  position: [x, y];        // Position coordinates on the radar
  version?: string;        // Optional version information
}
```

## Adding Items

To add a new item to the radar:

1. Navigate to the admin interface
2. Click on the "Items" tab
3. Click the "Add Item" button
4. Fill in the required information:
   - **ID**: A unique identifier (usually lowercase with hyphens)
   - **Title**: The display name of the item
   - **Quadrant**: The quadrant where the item belongs
   - **Ring**: The adoption stage of the item
   - **Description**: A detailed description of the item
   - **Tags**: Relevant tags for filtering
5. Click "Save" to add the item to the radar

{{< callout type="info" >}}
When adding a new item, it will automatically be assigned the "new" flag to indicate it's a new addition to the radar.
{{< /callout >}}

## Editing Items

To edit an existing item:

1. Navigate to the admin interface
2. Click on the "Items" tab
3. Find the item you want to edit in the list
4. Click the "Edit" button next to the item
5. Modify the item details as needed
6. Click "Save" to apply the changes

{{< callout type="warning" >}}
When you edit an item and change its ring, it will automatically be assigned the "changed" flag to indicate it has moved.
{{< /callout >}}

## Moving Items Between Rings

Moving an item between rings indicates a change in its adoption status:

1. Edit the item as described above
2. Change the "Ring" field to the new ring
3. Save the changes

The item will be displayed with the "changed" flag in the new ring, indicating it has moved.

## Adding Item History

The radar tracks the history of items across different releases:

1. Edit the item
2. Click "Add Release"
3. Enter the release information:
   - **Release ID**: Typically a date or version number
   - **Ring**: The ring for this specific release
   - **Description**: Any notes about this release
4. Save the changes

Each release creates a historical record of the item, allowing users to see how it has evolved over time.

## Archiving Items

Instead of deleting items, you can archive them to maintain historical records:

1. Edit the item
2. Check the "Archive" checkbox
3. Save the changes

Archived items are not displayed on the radar but are still accessible in the admin interface.

## Bulk Operations

For managing multiple items at once:

### Import JSON

You can import items in bulk using the JSON import feature:

1. Go to the Settings page
2. In the Chart Data section, click "Import JSON"
3. Paste or upload your JSON data
4. Click "Import" to add the items

### Export JSON

To export all items:

1. Go to the Settings page
2. In the Chart Data section, click "Export JSON"
3. The data will be downloaded as a JSON file

This is useful for backup purposes or for transferring data between instances. 