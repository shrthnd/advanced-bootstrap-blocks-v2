import React from 'react'

/**
 * Construct block settings
 *
 * @param {Object} settings - Default block settings
 * @param {string} settings.title - Block title
 */
export const defaultBlockSettings = (settings) => {
  const { title } = settings
  return {
    title,
    icon: {
      background: 'white',
      foreground: 'purple',
      src: (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 16 16"
          className="bi bi-bootstrap"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12 1H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4z"
          />
          <path
            fillRule="evenodd"
            d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"
          />
        </svg>
      ),
    },
    category: 'layout',
  }
}

/**
 * Convert className array to string
 * Same behavior as native JS DOMTokenList?
 *
 * @param {Array} classNameArray - Array containing component classNames
 */
export const classNames = (classNameArray) => {
  return classNameArray.join(' ').trim()
}

/**
 * Return empty array if blockname equals className
 *
 * @param {string} blockName
 * @param {string} className
 */
export const removeDefaultBlockClassName = (blockName, className) => {
  return blockName === className ? [] : blockName
}
