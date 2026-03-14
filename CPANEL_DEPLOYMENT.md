# cPanel Deployment Guide for Sub-Application

## Changes Made

### 1. Vite Configuration
- ✅ Already configured: `base: '/sbhnew/'` in vite.config.ts

### 2. React Router
- ✅ Added `basename="/sbhnew"` to BrowserRouter in src/App.tsx

### 3. .htaccess File
- ✅ Created public/.htaccess with proper rewrite rules

## Deployment Steps

### 1. Build the Application
```bash
npm run build
```

### 2. Upload Files to cPanel

Upload the **contents** of the `dist` folder to:
```
public_html/sbhnew/
```

**Important:**
- Upload ALL files and folders from inside the dist folder
- Do NOT upload the dist folder itself
- Ensure the .htaccess file is uploaded

### 3. Verify File Structure on Server

Your server structure should look like:
```
public_html/
└── sbhnew/
    ├── index.html
    ├── .htaccess
    ├── assets/
    │   ├── index-abc123.js
    │   └── index-xyz456.css
    └── ...other files
```

### 4. Set File Permissions

Via cPanel File Manager or FTP:
- All files: **644** (rw-r--r--)
- All folders: **755** (rwxr-xr-x)

### 5. Verify .htaccess

Make sure `.htaccess` exists in the `sbhnew` folder with these contents:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /sbhnew/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /sbhnew/index.html [L]
</IfModule>
Options -Indexes
```

## Troubleshooting 403 Error

### Solution 1: Check Folder Permissions
```bash
# Via SSH or cPanel terminal
chmod 755 public_html/sbhnew
chmod 644 public_html/sbhnew/*
chmod -R 755 public_html/sbhnew/assets
```

### Solution 2: Check Owner/Group
Ensure files are owned by the correct user:
```bash
chown -R username:username public_html/sbhnew
```
Replace `username` with your cPanel username.

### Solution 3: Verify Apache mod_rewrite
Create a PHP info file to check:
```php
<?php phpinfo(); ?>
```
Look for `mod_rewrite` in the loaded modules.

### Solution 4: Check Index File
Ensure index.html is in the subdirectory:
- File must exist: `public_html/sbhnew/index.html`
- File must be readable (644 permission)

### Solution 5: Parent Directory .htaccess
Check if there's a `.htaccess` in `public_html/` that might be blocking access.
Add this exception if needed:
```apache
DirectoryIndex index.html index.php

# Allow access to sbhnew subdirectory
<IfModule mod_rewrite.c>
  RewriteEngine On
  # Don't rewrite sbhnew directory
  RewriteRule ^sbhnew/ - [L]
</IfModule>
```

## Testing

After deployment, test these URLs:
- `https://yourdomain.com/sbhnew/` - Should load homepage
- `https://yourdomain.com/sbhnew/doctors` - Should load doctors page
- `https://yourdomain.com/sbhnew/aboutus` - Should load about page

## Common Issues

### Issue: "403 Forbidden"
**Solution:** Check file permissions (755 for folders, 644 for files)

### Issue: "404 Not Found" on refresh
**Solution:** Verify .htaccess rewrite rules are correct

### Issue: Blank page / CORS errors
**Solution:** Clear browser cache and rebuild application

### Issue: Assets not loading
**Solution:** Check that base path in vite.config.ts matches your subdirectory

## Rebuild After Changes

After making any code changes:
```bash
npm run build
```

Then re-upload the contents of the `dist` folder to the server.
