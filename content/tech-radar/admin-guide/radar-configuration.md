---
title: Radar Configuration
weight: 2
---

This guide covers how to configure the core components of your Tech Radar: quadrants, rings, items, and status flags. Each component plays a crucial role in organizing and communicating your technology landscape.

## Accessing Configuration

To access the radar configuration:

1. Navigate to Apps > Manage your apps in Compass
2. Find **Tech Radar for Compass** and click "Configure"
3. Click the "Settings" tab
4. Use the navigation menu to access different configuration sections

## Quadrants

Quadrants help organize technologies into logical categories. By default, the radar includes four quadrants, but you can customize these to match your organization's needs.

### Quadrant Details

{{< figure src="/images/quadrant-details.png" alt="Quadrant Details Configuration" class="hx-my-4" >}}

For each quadrant, you can configure:

- **Title**: The display name (e.g., "Languages & Frameworks")
- **Description**: A brief explanation of what belongs in this quadrant
- **Color**: The visual representation in the radar chart
- **Order**: The display order in both the radar and list views


{{< figure src="/images/quadrant-order.png" alt="Quadrant Order Configuration" class="hx-my-4" >}}

### Default Quadrants

The default quadrants are:

1. **Languages & Frameworks**: Programming languages and development frameworks
2. **Tools**: Development and operational tools
3. **Platforms & Operations**: Infrastructure and operational technologies
4. **Methods & Patterns**: Development methodologies and architectural patterns

{{< callout type="tip" >}}
Choose quadrant names that clearly communicate the types of technologies they contain.
{{< /callout >}}

## Rings

Rings represent different levels of technology adoption, helping teams understand which technologies they should use, evaluate, or avoid.

{{< figure src="/images/rings.png" alt="Ring Configuration" class="hx-my-4" >}}

### Configuring Rings

For each ring, you can set:

- **Title**: The ring name (e.g., "Adopt")
- **Description**: Guidelines for what belongs in this ring
- **Radius**: The relative size of the ring (0-1)
- **Color**: The ring's visual representation

### Default Rings

The standard rings, from innermost to outermost:

1. **Adopt**: Proven technologies recommended for use
2. **Trial**: Technologies worth pursuing in new projects
3. **Assess**: Technologies to evaluate in proof-of-concepts
4. **Hold**: Technologies to avoid in new projects

## Status Flags

Status flags help users identify changes and new additions to the radar.

{{< figure src="/images/status-flags.png" alt="Status Flags Configuration" class="hx-my-4" >}}

### Configuring Flags

For each flag, you can set:

- **Title**: The flag name (e.g., "New")
- **Color**: Visual indicator color
- **Description**: When this flag should be used

### Default Flags

1. **New**: Recently added items
2. **Changed**: Items that moved between rings
3. **Default**: Unchanged items

{{< callout type="info" >}}
Changes to flags apply to all existing and new items on the radar.
{{< /callout >}}

## Configuration Tips

1. **Start Simple**: Begin with the default configuration
2. **Be Consistent**: Use clear naming conventions
3. **Review Regularly**: Update configurations as needs change
4. **Document Changes**: Keep track of configuration updates
5. **Get Feedback**: Involve stakeholders in the configuration process

## Next Steps

After configuring these core components:

1. [Customize the visual appearance](/docs/admin-guide/customization)
2. [Set up data management](/docs/admin-guide/data-management)
3. Start adding your technologies to the radar 