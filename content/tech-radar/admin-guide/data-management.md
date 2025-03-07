---
title: Data Management
weight: 4
---

This guide covers how to manage your Tech Radar data, including importing, exporting, and backing up your configuration.

## Data Structure

The Tech Radar stores its data in JSON format, which includes:

- Quadrant configurations
- Ring definitions
- Item data
- Status flags
- Visual settings
- Feature toggles
- Custom labels

## Importing Data

{{< figure src="/images/chart-data.png" alt="Chart Data Import Interface" class="hx-my-4" >}}

### Import Methods

You can import data in two ways:

1. **Paste JSON**: Directly paste JSON content into the import field
2. **Upload File**: Upload a JSON file containing radar data

### Import Process

To import data:

1. Navigate to Settings > Chart Data
2. Click "Import JSON"
3. Choose your import method
4. Review the data preview
5. Click "Import" to apply changes

{{< callout type="warning" >}}
Importing new data will override existing configurations. Make sure to backup your current data first.
{{< /callout >}}

## Exporting Data

### Export Process

To export your radar data:

1. Navigate to Settings > Chart Data
2. Click "Export JSON"
3. Choose a download location
4. Save the `radar-data.json` file

### Export Contents

Note that the exported file includes item data and history. It does not include radar configuration, but this will be added in a future update.

## Backup and Restore

### Creating Backups

Best practices for backing up:

1. Export data regularly
2. Store backups securely
3. Version your backups
4. Document any changes

### Restore Process

To restore from a backup:

1. Navigate to Settings > Chart Data
2. Click "Import JSON"
3. Select your backup file
4. Review the data
5. Confirm the restore

## Troubleshooting

### Common Issues

Solutions for common problems:

1. **Invalid JSON**: Check syntax and format
2. **Missing Fields**: Verify required data
3. **Version Mismatch**: Update data structure
4. **Import Failures**: Review validation errors

## Version Control

### Version History

The radar maintains:

- Item change history

## Next Steps

After setting up data management:

1. Create a backup schedule
2. Document procedures
3. Train team members
4. Test recovery process

{{< callout type="info" >}}
Regular backups and proper data management are crucial for maintaining a reliable Tech Radar.
{{< /callout >}} 