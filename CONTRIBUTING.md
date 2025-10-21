# Contributing Guidelines

Thank you for your interest in contributing to this project! We welcome all contributors and appreciate your help in making this project better.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Getting Started

### Prerequisites
- Git
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/ducquyen199/landingpage.git
   cd landingpage
   ```
3. **Add** the original repository as upstream:
   ```bash
   git remote add upstream https://github.com/QuyenNguyen/landingpage.git
   ```
4. **Install** dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Making Changes

### Branching Strategy

1. **Create** a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   # or
   git checkout -b docs/update-documentation
   ```

2. **Make** your changes and test them thoroughly

3. **Keep** your branch up to date with upstream:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

### Commit Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for clear and consistent commit messages:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Commit Types

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, eslint fixes, etc.)
- `refactor:` - Code refactoring without feature changes
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks, dependency updates
- `ci:` - CI/CD configuration changes

#### Examples

```bash
git commit -m "feat(hero): add dark mode toggle button"
git commit -m "fix(navbar): resolve mobile menu alignment issue"
git commit -m "docs: update installation instructions"
git commit -m "refactor(footer): improve component structure"
```

## Submitting Changes

### Pull Request Process

1. **Push** your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create** a Pull Request on GitHub with:
   - Clear, descriptive title
   - Detailed description of changes
   - Reference to related issues (e.g., "Closes #123")
   - Screenshots or demos if applicable

3. **Ensure** your PR:
   - Has a clear title following commit message format
   - Includes a detailed description of changes
   - References any related issues
   - Includes tests if applicable
   - Updates documentation if needed
   - Follows the project's coding standards
   - Has no merge conflicts

4. **Respond** to review comments promptly

## Code Standards

### General Guidelines
- Write clean, readable, and maintainable code
- Add meaningful comments for complex logic
- Follow the existing code style and patterns
- Use consistent naming conventions
- Keep functions small and focused

### React/Component Guidelines
- Use functional components and hooks
- Keep components reusable and modular
- Add PropTypes or TypeScript types
- Write meaningful component names
- Extract reusable logic into custom hooks

### Testing
- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for reasonable code coverage
- Test edge cases and error scenarios

### Responsive Design
- Test on mobile, tablet, and desktop views
- Ensure touch-friendly interactions
- Use responsive units (rem, %, em)
- Test with Tailwind CSS breakpoints

## Reporting Issues

### Bug Reports

When reporting a bug, please include:

- Clear title describing the issue
- Detailed description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (browser, OS, Node version)
- Screenshots or screen recordings if applicable
- Related code or error messages

### Feature Requests

When suggesting a feature:

- Clear, descriptive title
- Detailed description of the proposed feature
- Use cases and benefits
- Possible implementation approach (optional)
- Related issues or discussions

## Development Workflow

### Before Starting

```bash
# Update your local main
git checkout main
git fetch upstream
git rebase upstream/main

# Create feature branch
git checkout -b feature/your-feature
```

### During Development

```bash
# Run development server
npm run dev

# Format code
npm run format

# Lint code
npm run lint

# Run tests
npm run test
```

### Before Submitting PR

```bash
# Update with latest upstream
git fetch upstream
git rebase upstream/main

# Run all checks
npm run build
npm run test
npm run lint
```

## Project Structure

```
landingpage/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   └── App.jsx         # Main App component
├── public/             # Static assets
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Communication

- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for questions and general discussions
- **Email**: For security issues, please email instead of using public issues

## Questions?

Feel free to:
- Open an issue for questions or discussions
- Check existing issues and discussions first
- Ask for help in the community

---

**Thank you for contributing! Your effort helps make this project better! 🚀**

**Happy coding!**