```md

Global SCSS Styling System - Usage Guide
This is a Tailwind-like utility class system for your Angular project.
📦 Installation

Import this file in your styles.scss (main global styles file):

scss@import './path-to/styles.scss';

Or add it to your angular.json:

json"styles": [
  "src/styles.scss",
  "src/path-to/styles.scss"
]
🎨 Color Constants
Available Color Variables
scss$primary-color: #3b82f6;
$secondary-color: #8b5cf6;
$success-color: #10b981;
$error-color: #ef4444;
$warning-color: #f59e0b;
$info-color: #06b6d4;
Button Colors
scss$button-primary: #3b82f6;
$button-secondary: #6b7280;
$button-success: #10b981;
$button-danger: #ef4444;
Usage in Components
scss// In your component's SCSS file
.my-element {
  background-color: $primary-color;
  color: $text-primary;
}
📏 Container Classes
Main Container (Full Width)
html<div class="container-main">
  <!-- Takes 100% width -->
</div>
Sub Container (Max 1400px)
html<div class="container-sub">
  <!-- Max-width: 1400px with responsive padding -->
</div>
Combined Usage
html<div class="container-main">
  <div class="container-sub">
    <!-- Centered content with max-width 1400px -->
  </div>
</div>
📐 Spacing Utilities (Margin & Padding)
Spacing Scale

0 = 0
1 = 0.25rem (4px)
2 = 0.5rem (8px)
3 = 0.75rem (12px)
4 = 1rem (16px)
5 = 1.25rem (20px)
6 = 1.5rem (24px)
8 = 2rem (32px)
10 = 2.5rem (40px)
12 = 3rem (48px)
16 = 4rem (64px)
20 = 5rem (80px)
auto = auto

Margin Classes
All Sides:
html<div class="m-4">Margin 1rem on all sides</div>
Individual Sides:
html<div class="mt-4">Margin top 1rem</div>
<div class="mr-4">Margin right 1rem</div>
<div class="mb-4">Margin bottom 1rem</div>
<div class="ml-4">Margin left 1rem</div>
Horizontal/Vertical:
html<div class="mx-4">Margin left & right 1rem</div>
<div class="my-4">Margin top & bottom 1rem</div>
Centering:
html<div class="mx-auto">Centered horizontally</div>
Padding Classes
Same pattern as margin:
html<div class="p-4">Padding 1rem on all sides</div>
<div class="pt-4">Padding top 1rem</div>
<div class="pr-4">Padding right 1rem</div>
<div class="pb-4">Padding bottom 1rem</div>
<div class="pl-4">Padding left 1rem</div>
<div class="px-4">Padding left & right 1rem</div>
<div class="py-4">Padding top & bottom 1rem</div>
📱 Responsive Spacing
Use breakpoint prefixes for responsive spacing:
Breakpoints

sm: 576px
md: 768px
lg: 992px
xl: 1200px
xxl: 1400px

Examples
html<!-- Margin changes at different breakpoints -->
<div class="m-2 m-md-4 m-lg-6">
  <!-- Mobile: 0.5rem, Tablet: 1rem, Desktop: 1.5rem -->
</div>

<!-- Responsive padding -->
<div class="p-4 p-lg-8">
  <!-- Mobile: 1rem, Desktop: 2rem -->
</div>

<!-- Responsive directional spacing -->
<div class="mt-2 mt-md-4 mt-lg-8">
  Responsive margin top
</div>
🎯 Button Styles
Button Classes
html<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-success">Success Button</button>
<button class="btn btn-danger">Danger Button</button>
Button Sizes
html<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Regular</button>
<button class="btn btn-primary btn-lg">Large</button>
Disabled State
html<button class="btn btn-primary" disabled>Disabled</button>
🎨 Color Utilities
Text Colors
html<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-light">Light text</p>
<p class="text-white">White text</p>
Background Colors
html<div class="bg-primary">White background</div>
<div class="bg-secondary">Gray background</div>
<div class="bg-dark">Dark background</div>
<div class="bg-color-primary">Blue background</div>
📦 Display Utilities
Basic Display
html<div class="d-none">Hidden</div>
<div class="d-block">Block</div>
<div class="d-flex">Flex</div>
<div class="d-inline">Inline</div>
<div class="d-inline-block">Inline Block</div>
<div class="d-grid">Grid</div>
Responsive Display
html<!-- Hidden on mobile, visible on tablet+ -->
<div class="d-none d-md-block">Responsive visibility</div>

<!-- Visible on mobile, hidden on desktop -->
<div class="d-block d-lg-none">Mobile only</div>
🔄 Flexbox Utilities
Flex Direction & Wrap
html<div class="d-flex flex-row">Row direction</div>
<div class="d-flex flex-column">Column direction</div>
<div class="d-flex flex-wrap">Wrap items</div>
Justify Content
html<div class="d-flex justify-start">Start</div>
<div class="d-flex justify-center">Center</div>
<div class="d-flex justify-end">End</div>
<div class="d-flex justify-between">Space between</div>
<div class="d-flex justify-around">Space around</div>
Align Items
html<div class="d-flex align-start">Start</div>
<div class="d-flex align-center">Center</div>
<div class="d-flex align-end">End</div>
Gap
html<div class="d-flex gap-2">0.5rem gap</div>
<div class="d-flex gap-4">1rem gap</div>
<div class="d-flex gap-8">2rem gap</div>
📝 Text Utilities
Text Alignment
html<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
Font Weight
html<p class="font-light">Light (300)</p>
<p class="font-normal">Normal (400)</p>
<p class="font-medium">Medium (500)</p>
<p class="font-semibold">Semibold (600)</p>
<p class="font-bold">Bold (700)</p>
Font Size
html<p class="text-xs">Extra small (0.75rem)</p>
<p class="text-sm">Small (0.875rem)</p>
<p class="text-base">Base (1rem)</p>
<p class="text-lg">Large (1.125rem)</p>
<p class="text-xl">Extra large (1.25rem)</p>
<p class="text-2xl">2XL (1.5rem)</p>
<p class="text-3xl">3XL (1.875rem)</p>
<p class="text-4xl">4XL (2.25rem)</p>
📏 Width & Height
html<div class="w-25">25% width</div>
<div class="w-50">50% width</div>
<div class="w-75">75% width</div>
<div class="w-100">100% width</div>

<div class="h-100">100% height</div>
🎯 Border Utilities
Border
html<div class="border">Border all sides</div>
<div class="border-t">Border top</div>
<div class="border-r">Border right</div>
<div class="border-b">Border bottom</div>
<div class="border-l">Border left</div>
Border Radius
html<div class="rounded">Small radius (0.25rem)</div>
<div class="rounded-md">Medium radius (0.375rem)</div>
<div class="rounded-lg">Large radius (0.5rem)</div>
<div class="rounded-full">Fully rounded (circle)</div>
📍 Position Utilities
html<div class="position-relative">Relative</div>
<div class="position-absolute">Absolute</div>
<div class="position-fixed">Fixed</div>
<div class="position-sticky">Sticky</div>
🌑 Shadow Utilities
html<div class="shadow-sm">Small shadow</div>
<div class="shadow">Regular shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
📱 Complete Responsive Example
html<div class="container-main">
  <div class="container-sub">
    <div class="d-flex flex-column flex-md-row gap-4 p-4 p-md-6 p-lg-8">
      <div class="w-100 w-md-50 p-4 bg-primary rounded shadow">
        <h2 class="text-xl text-md-2xl font-bold mb-4">Card Title</h2>
        <p class="text-sm text-md-base text-secondary">Card content</p>
        <button class="btn btn-primary mt-4">Action</button>
      </div>
      <div class="w-100 w-md-50 p-4 bg-secondary rounded shadow">
        <h2 class="text-xl font-bold mb-4">Another Card</h2>
        <p class="text-sm text-secondary">More content</p>
      </div>
    </div>
  </div>
</div>
🎨 Using Color Variables in Components
scss// your-component.component.scss
@import 'path-to/styles.scss';

.custom-element {
  background: $primary-color;
  border: 1px solid $border-color;

  &:hover {
    background: $primary-hover;
  }
}

.custom-text {
  color: $text-primary;
  font-size: 1rem;
}
💡 Best Practices

Mobile First: Base styles apply to mobile, use breakpoints for larger screens
Consistent Spacing: Use the spacing scale (1-20) for consistency
Color Variables: Use SCSS variables in component styles for consistency
Combine Utilities: Mix and match utilities for complex layouts
Responsive Design: Always test on multiple screen sizes

🔧 Customization
To customize colors, spacing, or breakpoints, edit the variables at the top of styles.scss:
scss// Change primary color
$primary-color: #your-color;

// Add custom spacing
$spacings: (
  // ... existing values
  18: 4.5rem,  // Add custom spacing
);

// Modify breakpoints
$breakpoints: (
  // ... modify as needed
);
