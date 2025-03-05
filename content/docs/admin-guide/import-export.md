---
title: Import & Export
weight: 4
---

# Importing and Exporting Radar Data

This page explains how to import and export data for the Tech Radar for Compass.

## Data Format

The Tech Radar uses JSON as its data format. The structure follows this pattern:

```json
[
  {
    "id": "example-technology",
    "quadrant": "languages-and-frameworks",
    "tags": ["frontend", "javascript"],
    "releases": [
      {
        "id": "2023-06",
        "title": "Example Technology",
        "body": "This is a description of the technology...",
        "releaseDate": "2023-06-01",
        "ring": "trial",
        "flag": "new",
        "position": [123, 456]
      }
    ]
  }
]
```

{{< callout type="info" >}}
The data format is an array of items, each with metadata and a history of releases.
{{< /callout >}}

## Exporting Data

Exporting your radar data is useful for backups, migrations, or sharing with other instances.

### Using the UI

To export data using the admin interface:

1. Navigate to the Settings page
2. Scroll to the Chart Data section
3. Click the "Export JSON" button
4. The data will be downloaded as a file named "radar-data.json"

### Using the API

If you have API access, you can export data programmatically:

```bash
curl -X GET "https://your-radar-instance/api/data" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  > radar-data.json
```

## Importing Data

You can import data to populate your radar or update it in bulk.

{{< callout type="warning" >}}
Importing data will overwrite existing items with the same IDs. Make sure to back up your data before importing.
{{< /callout >}}

### Using the UI

To import data using the admin interface:

1. Navigate to the Settings page
2. Scroll to the Chart Data section
3. Click the "Import JSON" button
4. Choose one of the import methods:
   - **Paste JSON**: Paste your JSON content directly into the text area
   - **Upload File**: Upload a JSON file from your computer
5. Click "Import" to process the data

### Using the API

If you have API access, you can import data programmatically:

```bash
curl -X POST "https://your-radar-instance/api/data" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d @radar-data.json
```

## Data Validation

When importing data, the system performs validation to ensure the data is correctly formatted.

The validation checks include:

- Each item must have a string ID
- Each item must have a valid quadrant
- Each item must have a releases array
- Each item must have a tags array
- Each release must have an ID, title, ring, and position

If validation fails, you'll see an error message explaining the issue.

## Migrating Between Environments

When migrating data between environments (e.g., from development to production):

1. Export the data from the source environment
2. Review the exported JSON to ensure it contains the expected data
3. Import the data into the target environment
4. Verify that all items appear correctly in the target environment

{{< callout emoji="💡" >}}
Consider using version control to track changes to your radar data over time.
{{< /callout >}}

## Bulk Editing with External Tools

For advanced users, you can use external tools to modify the exported JSON:

1. Export the data
2. Edit the JSON file using a text editor or script
3. Import the modified data

This approach is useful for:

- Bulk renaming items
- Moving multiple items between quadrants
- Adding the same tag to multiple items
- Updating multiple descriptions with consistent terminology

## Best Practices

When working with radar data imports and exports:

1. **Regular Backups**: Export and save your data regularly
2. **Version Control**: Store exports in version control to track changes
3. **Validate Before Import**: Check your JSON for errors before importing
4. **Test in Development**: Test imports in a development environment before applying to production
5. **Document Changes**: Keep notes about what was changed in each import 