---
title: Status Flags
weight: 3
---

# Configuring Status Flags

Status flags indicate the state of items on the radar, helping users understand which technologies are new, have changed, or remain unchanged. This page explains how to configure status flags to effectively communicate technology changes.

## Understanding Status Flags

{{< callout emoji="🚩" >}}
Status flags provide visual cues about the history and movement of technologies on your radar, making it easier for users to identify what's new or has changed.
{{< /callout >}}

By default, the Tech Radar for Compass includes three status flags:

1. **New** - For newly added items that weren't on previous versions of the radar
2. **Changed** - For items that have moved between rings since the last update
3. **Default** - For unchanged items that remain in the same ring

Status flags affect both the visual representation of items on the radar chart (typically through different shapes or colors) and additional indicators in the list view.

## Configuring Status Flags

You can customize the status flags in the Settings page:

1. Navigate to the Settings page in the admin interface
2. Scroll to the "Status Flags" section under Content Settings
3. For each flag, you can configure:

{{< tabs items="Color,Title,Description" >}}
{{< tab >}}
### Color

The color used for the flag in the radar visualization and list view.

- Click the color picker to select a color
- Choose colors that are visually distinct from each other
- Consider using colors that intuitively match the flag's meaning (e.g., green for new)
{{< /tab >}}

{{< tab >}}
### Title

The display name of the flag. This is shown in the legend and may appear in tooltips.

- Keep titles concise but descriptive
- Use consistent terminology
- Consider using action-oriented terms (e.g., "New" rather than "Added")
{{< /tab >}}

{{< tab >}}
### Description

A brief description of what the flag represents. This helps users understand the meaning of each flag.

- Clearly explain when this flag is applied to an item
- Keep descriptions concise but informative
- Consider including examples
{{< /tab >}}
{{< /tabs >}}

## How Status Flags Are Applied

Status flags are automatically applied to items based on their history and movement:

- **New Flag**: Applied when an item is first added to the radar
- **Changed Flag**: Applied when an item moves from one ring to another
- **Default Flag**: Applied to items that haven't changed since the last update

{{< callout type="info" >}}
The system automatically assigns the appropriate flag when items are added or edited. You don't need to manually set flags for individual items.
{{< /callout >}}

## Visual Representation

Status flags affect how items appear on the radar:

1. **On the Radar Chart**: Items may be displayed with different shapes or colors based on their flag
   - New items might appear as triangles
   - Changed items might appear as squares
   - Default items might appear as circles

2. **In the List View**: Items may have additional indicators or badges showing their status

## Example Configuration

Here's an example configuration for status flags:

| Flag | Color | Title | Description |
|------|-------|-------|-------------|
| new | #86b782 | New | Technologies that are newly added to the radar |
| changed | #f38a3e | Changed | Technologies that have moved between rings |
| default | #b32059 | Unchanged | Technologies that remain in the same ring |

## Best Practices

When configuring status flags, consider these best practices:

1. **Use Intuitive Colors**: Choose colors that intuitively match the flag's meaning
2. **Maintain Consistency**: Use consistent naming conventions and color schemes
3. **Provide Clear Descriptions**: Help users understand what each flag represents
4. **Consider Accessibility**: Ensure sufficient color contrast for all users
5. **Keep It Simple**: Avoid adding too many custom flags, as this can confuse users

## Advanced Usage

For advanced users, it's possible to customize how status flags affect the visual representation of items:

### Custom Flag Shapes

By modifying the source code, you can customize how different flags are visually represented on the radar chart:

```typescript
// Example of customizing flag shapes in the source code
const getBlipShape = (flag: string) => {
  switch (flag) {
    case 'new':
      return 'triangle';
    case 'changed':
      return 'square';
    default:
      return 'circle';
  }
};
```

### Additional Flags

While the default flags cover most use cases, you might want to add custom flags for specific scenarios:

- **Deprecated** - For technologies that are being phased out
- **Experimental** - For technologies that are highly experimental
- **Recommended** - For technologies that are specifically recommended

{{< callout type="warning" >}}
Adding custom flags requires modifications to the source code. This is an advanced customization that should be done carefully.
{{< /callout >}}

## Next Steps

After configuring your status flags, you can:

- [Add items](../managing-items/) to your radar
- [Customize the visual appearance](../customization/) of your radar
- [Configure other settings](../configuration/) to fine-tune your radar 