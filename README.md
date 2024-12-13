# **PopLog** - Console Log as Toast Notifications

**PopLog** is a lightweight JavaScript package that transforms `console.log` outputs into browser-friendly toast notifications. It makes debugging more interactive by displaying log messages as toasts on the screen, without the need to open developer tools.

## Features
- Converts `console.log` messages into styled toasts.
- Simple to use and integrates with any web project.
- Automatic initialization — no setup required.
- Works across different environments and browsers.

## Installation

### **For Project-Level Usage**

1. Download the `poplog.js` script and include it in your project:
   ```html
   <script src="path/to/poplog.js"></script>
   ```

2. Or, use the following CDN to include it directly in your HTML:
   ```html
   <script src="https://cdn.example.com/poplog.js"></script>
   ```

## Usage

Once the script is included, **PopLog** automatically overrides `console.log` to show log messages as toasts.

### Example:

```javascript
console.log('This is a toast message!');
console.log('You can log anything, and PopLog will display it as a toast.');
```

## How It Works

- **PopLog** listens to calls to `console.log` and shows each message as a toast at the bottom of the screen.
- The toast will automatically disappear after 4 seconds.

### Customization (Optional)

You can modify the appearance and behavior of the toasts by editing the `index.js` script in poplog node_modules directory. Customize styles such as background color, duration, and position as needed.
