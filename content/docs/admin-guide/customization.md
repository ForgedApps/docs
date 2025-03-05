---
title: Visual Customization
weight: 3
---

# Visual Customization

This page explains how to customize the visual appearance of the Tech Radar for Compass.

## Logo Customization

The logo is one of the most important visual elements of your radar. You can customize it in the Logo section of the Settings page.

{{< callout emoji="🎨" >}}
A well-designed logo enhances brand recognition and makes your radar feel like an integrated part of your organization's tools.
{{< /callout >}}

### SVG Logo

To customize the logo:

1. Navigate to the Settings page
2. Scroll to the Logo section
3. Paste your SVG code into the editor
4. Preview how it looks in the preview panel
5. Click "Save Logo" to apply the changes

{{< callout type="info" >}}
Using SVG with `currentColor` for fill/stroke will allow your logo to adapt to light and dark themes automatically.
{{< /callout >}}

### Logo Display Options

You can also configure how the logo is displayed:

- **Show App Name on Subpages**: Toggle whether to show the application name next to the logo on subpages

## Color Scheme

The color scheme of the radar can be customized in various sections of the Settings page.

### Quadrant Colors

Each quadrant can have its own color:

1. Navigate to the Settings page
2. Go to the Quadrant Details section
3. Use the color picker to select a color for each quadrant
4. Changes are saved automatically

### Ring Colors

Each ring can have its own color:

1. Navigate to the Settings page
2. Go to the Rings section
3. Use the color picker to select a color for each ring
4. Changes are saved automatically

### Flag Colors

Status flags can also be customized:

1. Navigate to the Settings page
2. Go to the Status Flags section
3. Use the color picker to select a color for each flag
4. Changes are saved automatically

## Chart Customization

The radar chart itself can be customized in several ways.

### Chart Size

To adjust the chart size:

1. Edit the `config.json` file
2. Modify the `chart.size` value (default is 800)
3. Modify the `chart.blipSize` value to adjust the size of blips (default is 12)

```json
"chart": {
  "size": 800,
  "blipSize": 12
}
```

### Ring Sizes

You can adjust the relative size of each ring:

1. Navigate to the Settings page
2. Go to the Rings section
3. For each ring, adjust the "Radius" value (between 0 and 1)
4. Changes are saved automatically

{{< callout type="warning" >}}
Ring radius values should be in ascending order from innermost to outermost ring, with values between 0 and 1.
{{< /callout >}}

## Text Customization

Various text elements throughout the radar can be customized.

### Labels

To customize labels:

1. Navigate to the Settings page
2. Go to the Labels section
3. Edit the text for each label
4. Changes are saved automatically

### About Page Content

The About page content can be fully customized with HTML:

1. Navigate to the Settings page
2. Go to the About Page Content section
3. Edit the content using HTML formatting
4. Changes are saved automatically

## Advanced Customization

For more advanced customization, you may need to modify the source code.

{{< callout type="info" >}}
Advanced customization requires development skills and understanding of the codebase.
{{< /callout >}}

### Custom CSS

To add custom CSS:

1. Create a file named `custom.css` in the appropriate directory
2. Add your CSS rules
3. Import the CSS file in your application

### Custom Components

To create custom components:

1. Create new React components in the source code
2. Integrate them into the existing component hierarchy
3. Build and deploy the application

## Best Practices

When customizing your radar, consider these best practices:

1. **Maintain Consistency**: Use a consistent color scheme that aligns with your brand
2. **Ensure Readability**: Make sure text remains readable against background colors
3. **Test Accessibility**: Ensure your customizations maintain accessibility standards
4. **Preserve Functionality**: Don't let visual changes interfere with the radar's functionality
5. **Document Changes**: Keep track of customizations for future reference 