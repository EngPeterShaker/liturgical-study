# Professional Presentation (PPT) Slide System

This document explains the logic and styles for the slide-based navigation system, including the click-to-reveal functionality and slide transitions.

## 1. Slide Structure (CSS)
Slides are stacked absolutely and controlled via class toggling (`active`, `prev`).

```css
.slides-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.8s, transform 0.8s;
    transform: translateY(20px) scale(0.98);
}

.slide.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
}

.slide.prev {
    transform: translateY(-20px) scale(1.02);
    opacity: 0;
}
```

## 2. Click-to-Reveal System
This system allows internal slide blocks to appear sequentially on each click before moving to the next slide.

### CSS Reveal Classes
```css
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    pointer-events: none;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}
```

### JS Navigation Logic
The `nextSlide` function prioritizes revealing hidden elements within the current slide.

```javascript
function nextSlide() {
    const currentSlide = slides[currentIndex];
    const unrevealed = currentSlide.querySelectorAll('.reveal:not(.visible)');

    if (unrevealed.length > 0) {
        // Show next internal block
        unrevealed[0].classList.add('visible');
    } else if (currentIndex < totalSlides - 1) {
        // Move to next slide
        scrollToSlide(currentIndex + 1);
        
        // Auto-reveal the first Item of the new slide (Title/Header)
        const newSlideReveals = slides[currentIndex].querySelectorAll('.reveal');
        if (newSlideReveals.length > 0) {
            newSlideReveals[0].classList.add('visible');
        }
    }
}
```

## 3. Global Controls
### Keyboard Shortcuts
Implemented via a global `keydown` listener.
- **Next:** `Space`, `Enter`, `ArrowRight`, `ArrowDown`, `PageDown`, `n`.
- **Prev:** `Backspace`, `ArrowLeft`, `ArrowUp`, `PageUp`, `p`.
- **Utils:** `f` (Fullscreen), `?` (Help Menu), `Home`/`End` (Jump).

### Progress Indicator
A fixed top bar that calculates percentage based on the current slide index.
```javascript
function updateNavigation() {
    const progress = ((currentIndex + 1) / totalSlides) * 100;
    progressBar.style.width = progress + '%';
}
```

## 4. Navigation Rules
1. **Title/Header Priority:** When entering a slide, the first `.reveal` element (usually the title) should be revealed automatically.
2. **Backward Reset:** When navigating back to a previous slide (`prevSlide`), all its reveal elements are automatically made visible for a smooth review experience.
3. **Event Propagation:** Use `e.stopPropagation()` on UI buttons (like Nav Dots or Nav Arrows) to prevent them from triggering the global "Click-to-Advance" listener.
