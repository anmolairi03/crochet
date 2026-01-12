# Product Images Directory

Place your product images in this directory.

## Recommended Structure:
- `/images/keyrings/` - Keyring product images
- `/images/bags/` - Bag product images
- `/images/flowers/` - Flower product images
- `/images/buckets/` - Bucket product images
- `/images/decor/` - Home decor product images
- `/images/accessories/` - Accessory product images

## Image Guidelines:
- Recommended size: 800x800px or larger (square format)
- File formats: JPG, PNG, or WebP
- File naming: Use descriptive names like `crochet-heart-keyring-1.jpg`

After adding images, update the `images` array in `src/data/products.ts` to point to your actual image paths.

Example:
```typescript
images: ['/images/keyrings/crochet-heart-keyring-1.jpg']
```

