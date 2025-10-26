import React from 'react';

/**
 * A component to display an optimized image with WebP support and lazy loading.
 *
 * @param {object} props
 * @param {string} props.src - The path to the original image (e.g., .jpg or .png).
 * @param {string} props.alt - The alt text for the image.
 * @param {number} props.width - The intrinsic width of the image.
 * @param {number} props.height - The intrinsic height of the image.
 * @param {string} [props.className] - Optional CSS classes for styling.
 */
const OptimizedImage = ({ src, alt, width, height, className }) => {
  // Automatically derive the WebP path from the original source
  // e.g., 'images/project.jpg' becomes 'images/project.webp'
  const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');

  return (
    <picture>
      {/* Browsers that support WebP will use this source */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback for browsers that do not support WebP */}
      <source srcSet={src} type={src.endsWith('.png') ? 'image/png' : 'image/jpeg'} />
      
      {/* The img tag is what's actually rendered. It gets the sources from above. */}
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading="lazy" // Native lazy loading!
        decoding="async" // Helps the browser prioritize content rendering
      />
    </picture>
  );
};

export default OptimizedImage;
