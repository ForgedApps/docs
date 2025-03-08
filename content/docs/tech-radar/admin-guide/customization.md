---
title: Customization
weight: 5
---

This guide covers how to customize the appearance and branding of your Tech Radar.

## Logo Customization

{{< figure src="/images/logo.png" alt="Logo Customization Settings" class="hx-my-4" >}}

### Setting a Custom Logo

1. Navigate to Settings > Logo
2. Paste SVG code directly
3. Preview your logo in both light and dark themes
4. Click "Save Logo" to apply changes

### Logo Requirements

- Must be in SVG format
- Should include `<svg>` tags
- Use `currentColor` for fill/stroke to support themes
- Recommended dimensions: 150x65 pixels

{{< callout type="tip" >}}
Test your logo in both light and dark themes to ensure good visibility.
{{< /callout >}}

## Labels and Text

{{< figure src="/images/labels.png" alt="Labels and Text Customization" class="hx-my-4" >}}

### Customizable Labels

You can customize various text elements:

- **Search Placeholder**: Default search prompt
- **Footer Text**: Bottom of page message
- **Page Title**: Main radar page title
- **Page Overview**: Description text
- **Quadrant Labels**: Category names
- **Not Found Message**: 404 error text

### Updating Labels

1. Navigate to Settings > Labels
2. Modify desired text fields
3. Save changes
4. Preview in different sections

## Feature Toggles

{{< figure src="/images/feature-toggles.png" alt="Feature Toggles" class="hx-my-4" >}}

### Available Toggles

- **Show Chart**: Display radar visualization
- **Show Tag Filter**: Enable tag filtering
- **Show Quadrant List**: Display quadrant navigation
- **Show Empty Rings**: Show rings without items

### Managing Toggles

1. Go to Settings > Feature Toggles
2. Enable/disable features as needed
3. Save configuration
4. Test navigation and functionality

## Section Organization

{{< figure src="/images/section-order.png" alt="Section Order Configuration" class="hx-my-4" >}}

### Configuring Sections

1. Navigate to Settings > Section Order
2. Available sections:
   - Radar visualization
   - Tags filter
   - Item list
3. Drag and drop to reorder
4. Save new arrangement

### Quadrant Order

1. Go to Settings > Quadrant Order
2. Drag quadrants to desired positions
3. Save new arrangement
4. Verify radar visualization

## About Page Content

{{< figure src="/images/about-content.png" alt="About Radar Content" class="hx-my-4" >}}

### Customizing Help Content

1. Go to Settings > About Page Content
2. Edit the HTML content
3. Available tags:
   - `<h2>` for sections
   - `<p>` for paragraphs
   - `<ul>` and `<li>` for lists
   - `<strong>` for emphasis

### Best Practices

1. Keep content clear and concise
2. Use proper heading hierarchy
3. Include usage instructions
4. Add relevant examples
5. Maintain formatting consistency

## Best Practices

### Branding Guidelines

1. Maintain consistent colors
2. Use clear, readable fonts
3. Keep layout clean
4. Test all customizations
5. Document changes

### User Experience

1. Ensure readable text contrast
2. Maintain clear navigation
3. Use consistent terminology
4. Test on different devices
5. Gather user feedback

## Next Steps

After customizing the appearance:

1. [Set up data management](/docs/tech-radar/admin-guide/data-management/)
2. [Start managing items](/docs/tech-radar/admin-guide/managing-items/) 