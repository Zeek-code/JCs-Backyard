# JC's Backyard - Community Garden Website

A modern, responsive website for JC's Backyard, a community garden dedicated to educating people on how food is grown and fostering connections through shared knowledge and fresh produce.

## 🚀 Tech Stack

- **Next.js 15** (App Router) - React framework with static export support
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Inter & Merriweather

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── blog/              # Blog/News page
│   ├── guides/            # Growing Guides page
│   ├── portfolio/         # Portfolio/Gallery page
│   ├── visit/             # Visit page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Site navigation
│   └── Footer.tsx         # Site footer
├── garden_data.json       # Single source of truth for all content
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository** (or navigate to project folder):
   ```bash
   git clone git@github.com:Zeek-code/JCs-Backyard.git
   cd JCs-Backyard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

1. **Build the static site**:
   ```bash
   npm run build
   ```

   This creates an `out/` directory with all static files ready for deployment.

## 🎨 Customization

### Updating Content

All website content is stored in `garden_data.json` at the root of the project. This is your single source of truth. Edit this file to update:

- Garden name, tagline, and description
- Location and contact information
- Hours and programs
- Educational content (vegetables, herbs, fruits, soil health)
- Blog posts
- Gallery items
- Theme colors

**Important**: After editing `garden_data.json`, restart your dev server or rebuild the site to see changes.

### Changing Theme Colors

1. Edit `garden_data.json` → `garden.theme.colors` to update color values
2. Edit `tailwind.config.js` to sync Tailwind color tokens:

```javascript
colors: {
  primary: '#90EE90',  // Spring Green
  accent1: '#FFBF00',  // Amber
  accent2: '#B8336A',  // American Rose
  // ...
}
```

### Replacing Placeholder Images

Currently using Unsplash placeholder images. To replace:

1. Add your images to `public/images/` directory
2. Update image URLs in:
   - `app/page.tsx` (hero background)
   - `app/portfolio/page.tsx` (gallery images)

## 🌐 GitHub Pages Deployment

This site is configured for static export and GitHub Pages hosting.

### Option 1: Manual Deployment (Project Site)

1. **Configure basePath** (if using project site `username.github.io/repo-name`):
   - Uncomment and update `basePath` in `next.config.js`:
     ```javascript
     basePath: '/JCs-Backyard',
     ```
   - Rebuild: `npm run build`

2. **Build the static site**:
   ```bash
   npm run build
   ```

3. **Deploy to GitHub**:
   - Copy contents of `out/` folder to root of your repo (or to `docs/` folder)
   - Or create a `gh-pages` branch and push `out/` contents there

4. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `gh-pages` if using separate branch)
   - Folder: `/` (or `/docs` if you used docs folder)
   - Click Save

5. **Add .nojekyll file**:
   - Create `.nojekyll` file in the root (or docs/) of your deployed branch
   - This prevents Jekyll from processing your site

### Option 2: GitHub Actions (Automatic Deployment)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

Then configure GitHub Pages to deploy from `gh-pages` branch.

### For User/Organization Sites (`username.github.io`)

1. **Leave basePath empty** in `next.config.js` (or omit it)
2. Build: `npm run build`
3. Copy `out/` contents to root of repo
4. Push to `main` branch
5. GitHub Pages will auto-deploy

## 📝 Notes

### Content Sources

Some content in `garden_data.json` is fictional/narrated for demonstration purposes:

- Contact information (email/phone) - fictional but realistic
- Specific address details
- Detailed program descriptions
- Educational content examples
- Blog post titles and excerpts
- Gallery items

Replace with actual information when available.

### SEO

Meta tags are configured in:
- `app/layout.tsx` (root metadata)
- Individual page files (page-specific metadata)

Update these with actual information for better SEO.

### Images

Currently using Unsplash placeholder URLs. Replace with actual images:
- Add images to `public/` directory
- Update image paths in components

## 🤝 Contributing

This is a draft website. To contribute:

1. Edit `garden_data.json` for content updates
2. Edit page files in `app/` for layout/structure changes
3. Edit components in `components/` for reusable UI elements
4. Edit `tailwind.config.js` for styling customization

## 📄 License

All rights reserved - JC's Backyard

---

**Built with ❤️ for the community**

