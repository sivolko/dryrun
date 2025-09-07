# GitHub Copilot Instructions for Furni Demo Project

## Project Overview
This is a modern furniture e-commerce website template built with Bootstrap 5, featuring dark mode toggle, image optimization, and responsive design. The project emphasizes performance, accessibility, and business stakeholder communication.

## Code Style & Standards

### HTML Guidelines
- Use semantic HTML5 elements
- Maintain consistent Bootstrap 5 class usage
- Ensure all pages include dark mode toggle and back-to-top functionality
- Use `<picture>` tags with WebP optimization for images
- Include proper alt attributes for accessibility

### CSS/SCSS Guidelines
- Follow existing color scheme: `$primary: #3b5d50`, `$secondary: #f9bf29`
- Use CSS custom properties for theme switching
- Maintain responsive design principles
- Keep dark mode classes consistent across all components
- Use meaningful class names that reflect component purpose

### JavaScript Guidelines
- Use IIFE (Immediately Invoked Function Expression) pattern for encapsulation
- Implement localStorage for persistent user preferences
- Use Font Awesome icons with proper fallbacks
- Ensure all interactive elements work in both light and dark modes
- Follow event delegation patterns for dynamic content

## Architecture Principles

### Component Structure
```
Pages (9 total):
├── index.html (Main landing)
├── shop.html (Product catalog)
├── about.html (Company info)
├── services.html (Service offerings)
├── blog.html (Content hub)
├── contact.html (Contact form)
├── cart.html (Shopping cart)
├── checkout.html (Order process)
└── thankyou.html (Confirmation)

Assets:
├── css/ (Compiled styles)
├── scss/ (Source styles)
├── js/ (Custom functionality)
└── images/ (Optimized media)
```

### Feature Implementation
- **Dark Mode**: Toggle with persistence, icon switching (sun/moon)
- **Image Optimization**: WebP conversion with JPG/PNG fallbacks
- **Performance**: Lazy loading, optimized assets, minimal JavaScript
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## Business Requirements

### Stakeholder Communication
- Create business-friendly documentation
- Use clear, non-technical language in comments
- Provide visual diagrams (Mermaid) for architecture
- Include performance metrics and optimization benefits

### Development Workflow
- Use semantic commit messages: `feat:`, `fix:`, `docs:`, `style:`
- Create feature branches: `feature/feature-name`
- Include comprehensive PR descriptions
- Test across different devices and browsers

## Performance Guidelines

### Image Optimization
- Convert all images to WebP format (quality: 80)
- Implement lazy loading for non-critical images
- Use appropriate image dimensions
- Include proper fallbacks for browser compatibility

### Code Optimization
- Minimize JavaScript execution on page load
- Use efficient CSS selectors
- Implement critical CSS inlining where beneficial
- Optimize font loading strategies

## Documentation Standards

### README Requirements
- Include setup instructions
- Document all features and functionality
- Provide architecture diagrams
- List dependencies and requirements
- Include performance metrics

### Code Comments
- Explain business logic and complex functionality
- Document browser compatibility considerations
- Include TODO items for future enhancements
- Use JSDoc format for JavaScript functions

## Testing & Quality Assurance

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness across devices
- Dark mode functionality in all supported browsers
- Image optimization fallback testing

### Performance Targets
- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: Pass all metrics
- Image optimization: 40%+ size reduction with WebP

## Security Considerations
- Sanitize user inputs in contact forms
- Use HTTPS for all external resources
- Implement proper CSP headers where applicable
- Validate all form submissions

## Deployment Guidelines
- Test locally using Python HTTP server
- Verify all assets load correctly
- Check responsive design on multiple screen sizes
- Validate HTML, CSS, and JavaScript

## Git Workflow
- Create descriptive commit messages
- Use feature branches for new functionality
- Include issue numbers in commit messages when applicable
- Maintain clean commit history

## Review Criteria

### Pull Request Checklist
- [ ] All acceptance criteria met
- [ ] Code follows project standards
- [ ] Documentation updated
- [ ] Performance impact assessed
- [ ] Browser compatibility verified
- [ ] Accessibility standards maintained
- [ ] Business requirements addressed

### Code Review Focus Areas
1. **Functionality**: Does the code work as intended?
2. **Performance**: Does it maintain or improve site performance?
3. **Accessibility**: Is it usable by all users?
4. **Maintainability**: Is the code clean and well-documented?
5. **Business Value**: Does it meet stakeholder requirements?

## Emergency Procedures
- For critical bugs: Create hotfix branch from main
- For performance issues: Prioritize image optimization and JavaScript cleanup
- For accessibility issues: Review ARIA labels and keyboard navigation

---

**Last Updated**: September 5, 2025  
**Project Version**: 1.0.0  
**Maintainer**: @sivolko
