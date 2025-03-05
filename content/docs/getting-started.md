---
title: Getting Started
weight: 1
---

# Getting Started with Tech Radar for Compass

This guide will help you get started with Tech Radar for Compass, from installation to basic configuration.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js (v14 or later)
- Yarn package manager
- Atlassian Compass instance (if integrating with Compass)

## Installation

{{< tabs items="From Source,Using Docker" >}}
{{< tab >}}
### Installing from Source

1. Clone the repository:

```bash
git clone https://github.com/your-org/tech-radar-for-compass.git
cd tech-radar-for-compass
```

2. Install dependencies:

```bash
yarn install
```

3. Build the application:

```bash
yarn build
```
{{< /tab >}}

{{< tab >}}
### Using Docker

1. Pull the Docker image:

```bash
docker pull your-org/tech-radar-for-compass:latest
```

2. Run the container:

```bash
docker run -p 3000:3000 your-org/tech-radar-for-compass:latest
```
{{< /tab >}}
{{< /tabs >}}

## Basic Configuration

After installation, you'll need to configure the radar to match your organization's needs.

{{< callout emoji="⚙️" >}}
The configuration is managed through the admin interface, which is accessible at `/admin` after starting the application.
{{< /callout >}}

### Initial Setup

1. Start the application:

```bash
yarn start
```

2. Navigate to `http://localhost:3000/admin` in your browser
3. Log in with the default credentials (admin/admin)
4. Change the default password when prompted

## Next Steps

Once you've completed the basic setup, you can:

- [Configure the radar quadrants and rings](/docs/admin-guide/configuration/)
- [Add technology items](/docs/admin-guide/managing-items/)
- [Customize the appearance](/docs/customization/)
- [Integrate with Atlassian Compass](/docs/admin-guide/compass-integration/) 