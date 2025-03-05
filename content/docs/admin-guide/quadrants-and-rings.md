---
title: Quadrants & Rings
weight: 2
---

# Configuring Quadrants & Rings

Quadrants and rings are the fundamental organizing structures of the Tech Radar. This page explains how to configure them to match your organization's needs.

## Understanding Quadrants & Rings

{{< callout emoji="🎯" >}}
Quadrants and rings form the visual and conceptual structure of your radar, helping users understand how technologies are categorized and evaluated.
{{< /callout >}}

### Quadrants

Quadrants represent different technology categories. By default, the AOE Technology Radar includes four quadrants:

1. **Languages & Frameworks** - Programming languages and frameworks used for development
2. **Methods & Patterns** - Development methodologies, architectural patterns, and processes
3. **Platforms & Operations** - Infrastructure, platforms, and operational technologies
4. **Tools** - Development and operational tools

### Rings

Rings represent different stages of technology adoption, from innermost to outermost:

1. **Adopt** - Technologies that are proven and recommended for use
2. **Trial** - Technologies that are promising and should be explored in projects
3. **Assess** - Technologies worth exploring to understand their potential impact
4. **Hold** - Technologies that should be avoided for new projects

## Configuring Quadrants

You can customize the quadrants in the Settings page:

1. Navigate to the Settings page in the admin interface
2. Scroll to the "Quadrant Details" section under Content Settings
3. For each quadrant, you can configure:

{{< tabs items="Color,Title,Description" >}}
{{< tab >}}
### Color

The color used for the quadrant in the radar visualization. This helps users visually distinguish between different quadrants.

- Click the color picker to select a color
- Choose a color that aligns with your organization's branding
- Ensure sufficient contrast with the background and other quadrants
{{< /tab >}}

{{< tab >}}
### Title

The display name of the quadrant. This is shown in the radar visualization and the list view.

- Keep titles concise but descriptive
- Use consistent naming conventions across quadrants
- Consider your organization's terminology
{{< /tab >}}

{{< tab >}}
### Description

A brief description of what the quadrant represents. This helps users understand what types of technologies belong in each quadrant.

- Clearly explain the scope of the quadrant
- Provide examples of technologies that belong in this quadrant
- Keep descriptions concise but informative
{{< /tab >}}
{{< /tabs >}}

### Reordering Quadrants

You can change the order in which quadrants appear:

1. Navigate to the "Quadrant Order" section under Display Settings
2. Drag and drop quadrants to rearrange them
3. The new order affects both the radar visualization and the list view

## Configuring Rings

Rings can be customized to match your organization's adoption stages:

1. Navigate to the Settings page in the admin interface
2. Scroll to the "Rings" section under Content Settings
3. For each ring, you can configure:

{{< tabs items="Color,Title,Radius" >}}
{{< tab >}}
### Color

The color used for the ring in the radar visualization. This helps users visually distinguish between different adoption stages.

- Click the color picker to select a color
- Choose colors that create a visual gradient from inner to outer rings
- Ensure sufficient contrast with the background and blips
{{< /tab >}}

{{< tab >}}
### Title

The display name of the ring. This is shown in the radar visualization and the list view.

- Keep titles concise but descriptive
- Use action-oriented terms (e.g., "Adopt" rather than "Adoption")
- Consider your organization's terminology for technology adoption
{{< /tab >}}

{{< tab >}}
### Radius

The relative size of the ring (value between 0 and 1). This controls how much space each ring occupies in the radar visualization.

- Values should be in ascending order from innermost to outermost ring
- All values must be between 0 and 1
- The difference between consecutive rings determines the width of each ring
{{< /tab >}}
{{< /tabs >}}

{{< callout type="warning" >}}
Ring radius values should be in ascending order from innermost to outermost ring. For example, if you have four rings, their radius values might be 0.2, 0.4, 0.6, and 0.8.
{{< /callout >}}

## Best Practices

When configuring quadrants and rings, consider these best practices:

1. **Maintain Consistency**: Use consistent naming conventions and color schemes
2. **Consider Your Audience**: Tailor quadrant and ring names to your organization's terminology
3. **Balance Visual Appeal**: Choose colors that are visually appealing and accessible
4. **Provide Clear Descriptions**: Help users understand what each quadrant and ring represents
5. **Limit the Number**: While you can add more quadrants or rings, keeping to 4-5 of each is generally more manageable

## Example Configuration

Here's an example configuration for a software development organization:

### Quadrants

| Quadrant | Color | Description |
|----------|-------|-------------|
| Languages & Frameworks | #1ebccd | Programming languages and frameworks used for development |
| Architecture & Patterns | #86b782 | Architectural approaches and design patterns |
| Infrastructure & Operations | #f38a3e | Tools and platforms for deploying and operating software |
| Tools & Practices | #b32059 | Development tools and team practices |

### Rings

| Ring | Color | Radius | Description |
|------|-------|--------|-------------|
| Adopt | #93c47d | 0.2 | Technologies we use and recommend |
| Trial | #ffd966 | 0.4 | Technologies we're actively evaluating |
| Assess | #6fa8dc | 0.6 | Technologies we're exploring |
| Hold | #e06666 | 0.8 | Technologies we're moving away from |

## Next Steps

After configuring your quadrants and rings, you can:

- [Add items](../managing-items/) to populate your radar
- [Customize the visual appearance](../customization/) of your radar
- [Configure other settings](../configuration/) to fine-tune your radar 