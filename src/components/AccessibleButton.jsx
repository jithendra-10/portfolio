import React from 'react';

/**
 * An accessible button component with proper focus styling.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {() => void} [props.onClick] - The function to call on click.
 * @param {string} [props.className] - Additional CSS classes to merge.
 * @param {string} [props.ariaLabel] - ARIA label for screen readers, especially for icon-only buttons.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The button type.
 */
const AccessibleButton = ({ children, onClick, className = '', ariaLabel, type = 'button' }) => {
  // Base classes for styling and accessibility
  const baseClasses = `
    px-4 py-2 bg-violet-600 text-white rounded-md 
    transition-colors hover:bg-violet-700
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    focus:ring-violet-500 dark:focus:ring-offset-gray-800
  `;

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${className}`} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default AccessibleButton;