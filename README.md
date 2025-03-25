# Forged Apps Documentation

This repository contains the documentation for Forged Apps, built using [Hugo](https://gohugo.io/) with the [Hextra](https://github.com/imfing/hextra) theme. The site is designed to provide comprehensive documentation and technical insights through our Tech Radar and other resources.

## 🚀 Quick Start

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (latest version recommended)
- [Git](https://git-scm.com/downloads)
- [Go](https://golang.org/dl/) (for running Hugo)

### Local Development

1. Clone the repository with submodules:
   ```bash
   git clone --recurse-submodules https://github.com/your-org/your-repo.git
   cd your-repo
   ```

2. Start the Hugo development server:
   ```bash
   hugo server
   ```

3. Open your browser and visit http://localhost:1313

## 📁 Repository Structure

```
.
├── content/          # Main content directory
│   ├── tech-radar/   # Tech Radar section
│   └── about/        # About section
├── static/           # Static assets
│   └── images/       # Images including logos
├── layouts/          # Custom layout overrides
├── assets/          # Asset files
├── i18n/            # Internationalization
└── themes/          # Theme submodule
```

## 🤝 Contributing

We welcome contributions to improve our documentation! Here's how you can help:

1. **Fork** the repository
2. Create a new **branch** for your changes
3. Make your changes following our documentation guidelines
4. Submit a **Pull Request** with a clear description of your changes

### Documentation Guidelines

- Place all images in the `/static/images/` directory
- Reference images using the path `/images/image.png`
- Use supported Hextra theme shortcodes for enhanced content:
  - Callout
  - Cards
  - Details
  - FileTree
  - Icon
  - Steps
  - Tabs

### Content Creation

1. Create new content files in the appropriate section under `content/`
2. Use Markdown format with front matter
3. Follow the existing structure and style
4. Test your changes locally before submitting

## 🛠 Technical Details

- Built with Hugo Extended version
- Uses Hextra theme (configured as a submodule)
- System-based theme preference
- GitHub edit integration enabled
- Syntax highlighting with classes enabled
- Raw HTML in Markdown supported

## 📝 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

## 🤔 Need Help?

If you have questions or run into issues:

1. Check existing GitHub issues
2. Create a new issue with a clear description
3. Provide steps to reproduce any problems
4. Reach out to support@forgedapps.com

---

Built with ❤️ using [Hugo](https://gohugo.io/) and [Hextra](https://github.com/imfing/hextra) 