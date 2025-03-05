---
title: Feature Toggles
weight: 4
---

# Configuring Feature Toggles

Feature toggles allow you to enable or disable specific features of the Tech Radar for Compass. This page explains how to configure feature toggles to customize the user experience.

## Understanding Feature Toggles

{{< callout emoji="🔄" >}}
Feature toggles provide a way to control which features are available to users, allowing you to tailor the radar experience to your organization's needs.
{{< /callout >}}

Feature toggles control various aspects of the radar's functionality and appearance. By enabling or disabling specific features, you can create a streamlined experience that focuses on the aspects most important to your users.

## Available Feature Toggles

The Tech Radar for Compass includes several feature toggles that control different aspects of the user interface:

### Show Chart

Controls whether the radar chart visualization is displayed on the main page.

- **Enabled**: The radar chart is displayed, providing a visual representation of technologies
- **Disabled**: The radar chart is hidden, showing only the list view

{{< callout type="info" >}}
Disabling the chart can be useful for organizations that prefer a list-based view or want to reduce visual complexity.
{{< /callout >}}

### Show Tag Filter

Controls whether the tag filtering functionality is available to users.

- **Enabled**: Users can filter items by tags, making it easier to find related technologies
- **Disabled**: Tag filtering is not available

{{< callout type="info" >}}
Tag filtering is particularly useful when you have many items with overlapping categories or domains.
{{< /callout >}}

### Show Quadrant List

Controls whether the list of quadrants is displayed on the main page.

- **Enabled**: The list of quadrants is displayed, allowing users to quickly navigate to specific quadrants
- **Disabled**: The quadrant list is hidden

### Show Empty Rings

Controls whether rings with no items are displayed in the list view.

- **Enabled**: Empty rings are displayed, maintaining a consistent structure
- **Disabled**: Empty rings are hidden, creating a more compact view

## Configuring Feature Toggles

You can configure feature toggles in the Settings page:

1. Navigate to the Settings page in the admin interface
2. Scroll to the "Feature Toggles" section under Display Settings
3. Toggle the switches to enable or disable specific features
4. Changes are saved automatically

{{< figure src="/images/feature-toggles.png" alt="Feature Toggles Configuration" caption="Feature Toggles Configuration in the Settings Page" >}}

## Impact of Feature Toggles

Understanding how each feature toggle affects the user experience can help you make informed decisions:

### Impact of Show Chart Toggle

| Enabled | Disabled |
|---------|----------|
| Radar chart is displayed on the main page | Radar chart is hidden |
| Users can visualize technology relationships | Users rely on the list view for navigation |
| More screen space is used | More compact interface |

### Impact of Show Tag Filter Toggle

| Enabled | Disabled |
|---------|----------|
| Tag filter is displayed | Tag filter is hidden |
| Users can filter items by tags | Users must use search or manual browsing |
| More filtering options available | Simpler interface |

### Impact of Show Quadrant List Toggle

| Enabled | Disabled |
|---------|----------|
| Quadrant list is displayed | Quadrant list is hidden |
| Quick navigation between quadrants | Users must use other navigation methods |
| More context about quadrant structure | More compact interface |

### Impact of Show Empty Rings Toggle

| Enabled | Disabled |
|---------|----------|
| Empty rings are displayed | Empty rings are hidden |
| Consistent structure across quadrants | More compact view |
| Clear visualization of adoption stages | Focus on rings with actual content |

## Use Cases for Feature Toggles

Different organizations may want to configure feature toggles in different ways:

### Simplified View

For organizations with a large number of technologies or users who prefer a simpler interface:

- **Show Chart**: Disabled
- **Show Tag Filter**: Enabled
- **Show Quadrant List**: Enabled
- **Show Empty Rings**: Disabled

This configuration provides a streamlined, list-based view while maintaining filtering capabilities.

### Comprehensive View

For organizations that want to provide all available information and visualization options:

- **Show Chart**: Enabled
- **Show Tag Filter**: Enabled
- **Show Quadrant List**: Enabled
- **Show Empty Rings**: Enabled

This configuration provides the full radar experience with all navigation and filtering options.

### Focused View

For organizations that want to focus on the visual radar without additional complexity:

- **Show Chart**: Enabled
- **Show Tag Filter**: Disabled
- **Show Quadrant List**: Disabled
- **Show Empty Rings**: Disabled

This configuration emphasizes the radar visualization while minimizing additional UI elements.

## Best Practices

When configuring feature toggles, consider these best practices:

1. **Consider Your Audience**: Enable features that align with how your users prefer to navigate and explore the radar
2. **Balance Simplicity and Functionality**: Provide enough features for effective use without overwhelming users
3. **Test Different Configurations**: Try different combinations to find what works best for your organization
4. **Gather User Feedback**: Adjust toggles based on feedback from actual users
5. **Document Your Choices**: Make sure users understand what features are available and why

## Next Steps

After configuring your feature toggles, you can:

- [Configure quadrants and rings](../quadrants-and-rings/) to structure your radar
- [Customize the visual appearance](../customization/) of your radar
- [Add items](../managing-items/) to populate your radar 