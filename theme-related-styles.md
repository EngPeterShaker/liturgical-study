# Cinematic Dark & Neon Theme Design System

This document outlines the visual design system used for the "Liturgical Study" presentation, focusing on a premium, cinematic feel with dark backgrounds, glassmorphism, and neon accents.

## 1. Color Palette (CSS Variables)
```css
:root {
    /* Backgrounds */
    --bg-dark: #05070a;
    --bg-glass: rgba(10, 15, 25, 0.7);
    
    /* Neon Accents */
    --neon-gold: #ffcc33;
    --neon-blue: #00f2ff;
    --neon-purple: #bc13fe;
    
    /* Typography */
    --text-main: #e0e6ed;
    --text-dim: #94a3b8;
    
    /* Borders & Glows */
    --glass-border: rgba(255, 255, 255, 0.1);
    --accent-glow: rgba(255, 204, 51, 0.4);
    
    /* Transitions */
    --slide-transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}
```

## 2. Global Aesthetics & Backgrounds
### Ambient Background
A fixed layer with subtle radial gradients to create depth without distracting from content.
```css
.ambient-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background:
        radial-gradient(circle at 20% 30%, rgba(255, 204, 51, 0.05) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(0, 242, 255, 0.05) 0%, transparent 40%);
    opacity: 0.6;
}
```

### Grid Overlay
Adds a "digital/structured" texture to the background using a CSS linear gradient pattern and a radial mask.
```css
.grid-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(circle at center, black, transparent 80%);
}
```

## 3. Component Styles
### Glassmorphism Card
```css
.card {
    background: var(--bg-glass);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.4s var(--slide-transition);
}

.card:hover {
    border-color: var(--neon-gold);
    box-shadow: 0 0 20px var(--accent-glow);
    transform: translateY(-5px);
}
```

### Neon Headers
Typography utilizing the gold accent with a subtle glow (text-shadow).
```css
.main-title {
    font-family: 'Marhey', cursive;
    color: var(--neon-gold);
    text-shadow: 0 0 30px var(--accent-glow);
}
```

### Animated Dividers
```css
.divider-line {
    width: 120px;
    height: 2px;
    background: linear-gradient(to left, transparent, var(--neon-gold), transparent);
}
```

## 4. Best Practices
- **Contrast:** Always use `var(--text-main)` on dark backgrounds. Avoid absolute black.
- **Micro-interactions:** Use smooth transitions (`cubic-bezier`) for all hover states.
- **Glass Blur:** Keep `backdrop-filter: blur()` values between 10px and 20px for the best performance/look balance.
