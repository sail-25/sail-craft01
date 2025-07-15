
# Deployment Guide

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Configure Base URL**:
   - The Vite config is set to use `/sailcraft-solutions/` as the base URL for production
   - Update the base URL in `vite.config.ts` to match your repository name if different

3. **Automatic Deployment**:
   - Every push to the `main` branch triggers automatic deployment
   - The site will be available at: `https://[username].github.io/[repository-name]/`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

### Environment Variables

For production deployment, ensure these are set in your repository secrets:
- No environment variables are currently required for basic functionality

### SPA Routing

The project includes:
- `404.html` for handling client-side routing on GitHub Pages
- Script in `index.html` to handle URL redirects for SPA navigation
- Proper base URL configuration in Vite config

### Build Optimization

The build is optimized with:
- Code splitting for vendor libraries
- Minification and tree shaking
- Asset optimization
- Proper caching headers

### Troubleshooting

Common issues:
1. **404 errors on page refresh**: Ensure `404.html` is in the `public` folder
2. **Assets not loading**: Check base URL configuration in `vite.config.ts`
3. **Build failures**: Check Node.js version (requires 18+)

### Performance

The site is optimized for:
- Fast loading with code splitting
- Responsive design for all devices
- SEO optimization with proper meta tags
- Accessibility compliance
