# 10 Day Language Journey Website

A modern, responsive website for language learning programs with AI integration.

## Project Structure

```
/project-folder
├── index.html                          # Main HTML file
├── /css
│   └── styles.css                      # Main stylesheet
├── /js
│   ├── script.js                       # Main JavaScript functionality
│   └── components.js                   # Component loader utility (optional)
├── /components
│   ├── header.html                     # Reusable header component
│   └── footer.html                     # Reusable footer component
└── /assets
    ├── /images
    │   ├── John.jpg                    # Profile image
    │   └── hero-background.jpg         # Hero section background (optional)
    ├── /video
    │   └── English_Transformation_in_Ten_Days.mp4
    └── /fonts                          # Custom fonts (optional)
        ├── Inter-Regular.woff2
        ├── Inter-Regular.woff
        ├── Inter-Bold.woff2
        └── Inter-Bold.woff
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Architecture**: Reusable header and footer components
- **Smooth Animations**: Card hover effects and smooth scrolling
- **Modern UI**: Clean, professional design with Inter font family
- **Asset Organization**: Structured folder system for easy maintenance

## Setup Instructions

1. **Create the folder structure** as shown above
2. **Place files** in their respective directories
3. **Add your assets**:
   - Profile image: `assets/images/John.jpg`
   - Video: `assets/video/English_Transformation_in_Ten_Days.mp4`
   - Fonts (optional): Download Inter font files to `assets/fonts/`

## Using Components (Optional)

### Option 1: Static Include (Current)
The header and footer are directly written in `index.html`.

### Option 2: Dynamic Loading
To use the component files dynamically:

1. Replace the header section in `index.html` with:
   ```html
   <div id="header-placeholder"></div>
   ```

2. Replace the footer section in `index.html` with:
   ```html
   <div id="footer-placeholder"></div>
   ```

3. Include the component loader:
   ```html
   <script src="js/components.js"></script>
   ```

4. Uncomment the loading lines in `js/components.js`

## Customization

### Colors
- Primary Blue: `#3498db`
- Dark Blue: `#2c3e50`
- Background: `#f8f8f8`

### Fonts
- Currently using Google Fonts (Inter)
- To use local fonts, uncomment the `@font-face` rules in `css/styles.css`

### Images
- Replace placeholder images with your actual content
- Update hero background by modifying the CSS in `styles.css`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Progressive enhancement approach

## Dependencies

- **Tailwind CSS**: Loaded via CDN
- **Google Fonts**: Inter font family
- **Modern JavaScript**: ES6+ features used

## Performance Optimizations

- Separated CSS and JS files for better caching
- Optimized image paths
- Font loading strategies implemented
- Minimal external dependencies

## Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files maintaining the folder structure.