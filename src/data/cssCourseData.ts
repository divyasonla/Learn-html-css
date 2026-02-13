import type { Course } from "./courseData";

export const cssCourse: Course = {
  id: "css",
  title: "CSS",
  description: "Style and design beautiful websites",
  icon: "🎨",
  color: "info",
  topics: [
    {
      id: "css-basics",
      title: "CSS Basics",
      icon: "🎯",
      level: "beginner",
      lessons: [
        {
          id: "what-is-css",
          title: "What is CSS?",
          description: "Learn how CSS brings HTML to life",
          content: `# What is CSS?

## 🔍 What is this?

**CSS** stands for **Cascading Style Sheets**. It controls the **visual appearance** of HTML elements — colors, fonts, spacing, layout, animations, and more.

> **Simple analogy:** If HTML is the **skeleton** 🦴 of a website, CSS is the **skin, clothes, and makeup** 💅. It makes things look beautiful!

---

## 💡 Why do we use this?

- **Separation of concerns** — HTML = structure, CSS = presentation
- **Consistency** — Style once, apply everywhere
- **Responsive design** — Make sites work on all screen sizes
- **User experience** — Beautiful sites keep users engaged
- **Reusability** — One CSS file can style your entire website

Without CSS, every website would look like a plain document from the 1990s!

---

## ⏰ When should we use this?

**Always!** Every website needs CSS. You use it to:
- Change colors and fonts
- Add spacing and alignment
- Create layouts (sidebar + content)
- Make animations
- Build responsive designs

---

## 🌍 Where is this used in real websites?

**Literally everywhere:**
- **Google** — Clean white layout, blue links (CSS!)
- **Apple** — Sleek animations, beautiful typography
- **Spotify** — Dark theme, rounded cards
- **Instagram** — Grid layout, filters, transitions

---

## 📝 Three Ways to Add CSS

### 1. Inline CSS (Avoid for large projects)
\`\`\`html
<p style="color: blue; font-size: 18px;">Blue text</p>
\`\`\`

### 2. Internal CSS (OK for single pages)
\`\`\`html
<style>
  p { color: blue; }
</style>
\`\`\`

### 3. External CSS (✅ Best Practice!)
\`\`\`html
<link rel="stylesheet" href="styles.css">
\`\`\`

### CSS Syntax:
\`\`\`css
selector {
  property: value;
  property: value;
}
\`\`\`

### Selector Types:
| Selector | Syntax | Targets |
|----------|--------|---------|
| Element | \`p { }\` | All \`<p>\` tags |
| Class | \`.intro { }\` | class="intro" |
| ID | \`#main { }\` | id="main" |
| Universal | \`* { }\` | Everything |
| Descendant | \`div p { }\` | \`<p>\` inside \`<div>\` |

---

## ⚠️ Common Mistakes

| Mistake | Why it's wrong |
|---------|---------------|
| Using only inline styles | Can't reuse, hard to maintain |
| \`#id\` for everything | IDs are too specific; prefer classes |
| Forgetting semicolons | CSS silently breaks without them |
| Misspelling properties | \`colour\` ≠ \`color\` (American spelling!) |
| Not linking stylesheet | Add \`<link>\` in \`<head>\`, not \`<body>\` |

---

## 🎯 Interview Tips

> "The 'Cascading' in CSS means styles cascade down — later rules override earlier ones, and more specific selectors win."

> "Specificity order: inline style > #id > .class > element. Use classes for most styling."

> "External CSS is best practice because it separates concerns and allows caching."

---

## 🛠️ Mini Practice

**Task:** Style a simple page with EXTERNAL CSS (use \`<style>\`):
1. Body with custom background and font
2. Heading with custom color and centering
3. Two paragraphs with different classes
4. One element styled by ID`,
          codeExample: `<style>
  /* Element selector */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0fdf4;
    padding: 20px;
    margin: 0;
  }
  
  /* Element selector */
  h1 {
    color: #0d9488;
    text-align: center;
    border-bottom: 3px solid #0d9488;
    padding-bottom: 10px;
  }
  
  /* Class selector */
  .highlight {
    background-color: #fef3c7;
    padding: 12px;
    border-radius: 8px;
    border-left: 4px solid #f59e0b;
    margin: 12px 0;
  }
  
  .info {
    background-color: #e0f2fe;
    padding: 12px;
    border-radius: 8px;
    border-left: 4px solid #3b82f6;
    margin: 12px 0;
  }
  
  /* ID selector */
  #special {
    color: #dc2626;
    font-weight: bold;
    font-size: 18px;
  }
  
  /* Descendant selector */
  .highlight strong {
    color: #b45309;
  }
</style>

<h1>CSS Selectors in Action</h1>

<p class="highlight">
  <strong>Class selector:</strong> 
  This uses .highlight class
</p>

<p class="info">
  <strong>Another class:</strong> 
  This uses .info class  
</p>

<p id="special">
  ID selector: This uses #special
</p>

<p>Plain paragraph — styled by 
  element selector only.</p>`,
          quiz: [
            { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Code Styling Syntax"], correctIndex: 1 },
            { question: "Which is the best way to add CSS?", options: ["Inline styles", "Internal <style>", "External stylesheet", "JavaScript"], correctIndex: 2 },
            { question: "How do you select by class?", options: ["#name", ".name", "name", "@name"], correctIndex: 1 },
            { question: "What's the specificity order (highest to lowest)?", options: ["class > id > inline", "inline > id > class > element", "element > class > id", "id > inline > class"], correctIndex: 1 },
            { question: "Why use classes instead of IDs for styling?", options: ["Classes look better", "Classes are reusable on multiple elements", "IDs don't work with CSS", "No difference"], correctIndex: 1 },
          ],
        },
        {
          id: "colors-units",
          title: "Colors & Units",
          description: "Master CSS colors and measurement units",
          content: `# Colors & Units

## 🔍 What is this?

**Colors** define the visual appearance of elements. **Units** define sizes — how big, how wide, how much spacing.

> **Simple analogy:** Colors are like **paint** 🎨 and units are like a **ruler** 📏. You need both to design!

---

## 💡 Why do we use this?

- **Brand identity** — Companies are known by their colors (Facebook blue, YouTube red)
- **Readability** — Good color contrast makes text readable
- **Responsive sizing** — Relative units adapt to different screens
- **Consistency** — Defined color palettes look professional

---

## 📝 Color Values

### Named Colors
\`red\`, \`blue\`, \`teal\`, \`coral\` (147 named colors)

### Hex Colors
\`#ff0000\` = red, \`#0d9488\` = teal
- \`#RGB\` or \`#RRGGBB\` format
- Each pair: 00 (none) to FF (full)

### RGB / RGBA
\`rgb(255, 0, 0)\` = red
\`rgba(255, 0, 0, 0.5)\` = 50% transparent red

### HSL / HSLA (✅ Recommended!)
\`hsl(160, 84%, 39%)\` = teal
- **H** = Hue (0-360, color wheel)
- **S** = Saturation (0% gray → 100% vivid)
- **L** = Lightness (0% black → 100% white)

> 🎯 **Pro tip:** HSL is easiest to read and adjust. Want lighter? Increase L. Want muted? Decrease S.

---

## 📝 CSS Units

### Absolute Units
| Unit | Description | Use case |
|------|------------|----------|
| \`px\` | Pixels (fixed) | Borders, small details |

### Relative Units (✅ Preferred!)
| Unit | Relative to | Best for |
|------|------------|----------|
| \`%\` | Parent element | Widths, layouts |
| \`em\` | Parent font size | Spacing relative to text |
| \`rem\` | Root font size (16px) | Font sizes, consistent spacing |
| \`vw\` | Viewport width | Full-screen layouts |
| \`vh\` | Viewport height | Full-screen sections |

### Quick Reference:
- \`1rem\` = 16px (default)
- \`100vw\` = full screen width
- \`50%\` = half of parent

---

## ⏰ When should we use which unit?

| What to size | Recommended unit |
|-------------|-----------------|
| Font sizes | \`rem\` |
| Spacing/padding | \`rem\` or \`em\` |
| Container widths | \`%\` or \`max-width\` in px |
| Borders | \`px\` |
| Full-screen hero | \`100vh\` |
| Images | \`%\` with \`max-width\` |

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Using only \`px\` | Use \`rem\` for scalable designs |
| Low color contrast | Check contrast ratio (min 4.5:1) |
| Too many colors | Stick to 3-5 brand colors max |
| \`100vw\` causing scrollbar | Use \`100%\` for width instead |
| Hardcoding colors everywhere | Use CSS variables |

---

## 🎯 Interview Tips

> "HSL is the most developer-friendly color format. You can easily create variants by adjusting lightness."

> "rem is based on root font size (usually 16px), while em is based on the parent element's font size. rem is more predictable."

---

## 🛠️ Mini Practice

**Task:** Create a color palette display showing:
1. Your brand color in Hex, RGB, and HSL
2. Four cards with different background colors
3. Text demonstrating contrast (dark on light, light on dark)`,
          codeExample: `<style>
  :root {
    --brand: hsl(160, 84%, 39%);
    --brand-light: hsl(160, 84%, 90%);
    --brand-dark: hsl(160, 84%, 20%);
    --accent: hsl(36, 95%, 55%);
  }
  body { 
    font-family: Arial; 
    padding: 20px; 
    background: #f8faf8; 
  }
  .palette {
    display: flex; 
    gap: 12px; 
    flex-wrap: wrap;
    margin: 16px 0;
  }
  .swatch {
    width: 120px;
    height: 80px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }
  .units-demo {
    margin-top: 20px;
    padding: 1.5rem;
    background: var(--brand-light);
    border-radius: 8px;
  }
  .units-demo p {
    margin: 0.5em 0;
  }
</style>

<h2 style="color: var(--brand);">
  🎨 Color Formats</h2>

<div class="palette">
  <div class="swatch" 
    style="background:#0d9488; color:white;">
    Hex: #0d9488
  </div>
  <div class="swatch" 
    style="background:rgb(13,148,136); color:white;">
    RGB
  </div>
  <div class="swatch" 
    style="background:hsl(160,84%,39%); color:white;">
    HSL ✅
  </div>
  <div class="swatch" 
    style="background:hsla(160,84%,39%,0.5);">
    50% alpha
  </div>
</div>

<h3>CSS Variables + HSL Variants</h3>
<div class="palette">
  <div class="swatch" 
    style="background:var(--brand-light);">Light</div>
  <div class="swatch" 
    style="background:var(--brand); color:white;">
    Brand</div>
  <div class="swatch" 
    style="background:var(--brand-dark); color:white;">
    Dark</div>
  <div class="swatch" 
    style="background:var(--accent); color:white;">
    Accent</div>
</div>

<div class="units-demo">
  <h3>📏 Units Demo</h3>
  <p style="font-size: 1rem;">1rem = 16px (root)</p>
  <p style="font-size: 1.25rem;">1.25rem = 20px</p>
  <p style="font-size: 0.875rem;">0.875rem = 14px</p>
  <p>Width: 80% of parent container</p>
  <div style="width:80%; height:20px; 
    background:var(--brand); border-radius:4px;"></div>
</div>`,
          quiz: [
            { question: "Which color format is most developer-friendly?", options: ["Hex", "RGB", "HSL", "Named colors"], correctIndex: 2 },
            { question: "What does rem refer to?", options: ["Parent font size", "Root (html) font size", "Browser default", "Viewport"], correctIndex: 1 },
            { question: "What unit is best for font sizes?", options: ["px", "em", "rem", "%"], correctIndex: 2 },
            { question: "In HSL, what does L control?", options: ["Length", "Lightness (dark to bright)", "Line height", "Layout"], correctIndex: 1 },
            { question: "Why avoid using px for everything?", options: ["px is deprecated", "Not scalable for responsive design", "Browsers don't support px", "px is slower"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "box-model",
      title: "Box Model",
      icon: "📦",
      level: "beginner",
      lessons: [
        {
          id: "box-model-basics",
          title: "The Box Model",
          description: "Understand how every element is a box",
          content: `# The CSS Box Model

## 🔍 What is this?

Every HTML element is a rectangular **box** with four layers. Understanding the box model is **fundamental** to CSS layout.

> **Simple analogy:** Think of a picture frame:
> - **Content** = The photo 📸
> - **Padding** = The mat/space between photo and frame 🖼️
> - **Border** = The frame itself 🪟
> - **Margin** = Space between this frame and other frames on the wall

---

## 📊 Visual Diagram

\`\`\`
┌─────────── MARGIN ───────────┐
│                               │
│  ┌──────── BORDER ────────┐  │
│  │                         │  │
│  │  ┌──── PADDING ────┐   │  │
│  │  │                  │   │  │
│  │  │    CONTENT       │   │  │
│  │  │  (text/image)    │   │  │
│  │  │                  │   │  │
│  │  └──────────────────┘   │  │
│  │                         │  │
│  └─────────────────────────┘  │
│                               │
└───────────────────────────────┘
\`\`\`

---

## 💡 Why do we use this?

- **Control spacing** between and within elements
- **Control element size** precisely
- **Create layouts** with proper spacing
- **Debug layout issues** — 90% of layout bugs are box model issues!

---

## ⏰ When should we use each?

| Property | Use for |
|----------|--------|
| \`padding\` | Space inside the element (between content and border) |
| \`margin\` | Space outside the element (between elements) |
| \`border\` | Visual edge of the element |
| \`width/height\` | Size of the content area |

---

## 📝 Syntax

\`\`\`css
/* Individual sides */
padding-top: 10px;
margin-left: 20px;
border-bottom: 2px solid teal;

/* Shorthand: All sides */
padding: 10px;            /* all 4 sides */
margin: 10px 20px;        /* vertical | horizontal */
padding: 10px 20px 30px;  /* top | horizontal | bottom */
margin: 10px 20px 30px 40px; /* top | right | bottom | left (clockwise) */
\`\`\`

### ⭐ box-sizing: border-box (MUST USE!)

\`\`\`css
* { box-sizing: border-box; }
\`\`\`

| Setting | width: 300px means... |
|---------|----------------------|
| \`content-box\` (default) | Content = 300px, TOTAL = 300 + padding + border |
| \`border-box\` ✅ | TOTAL = 300px (includes padding + border) |

---

## 🌍 Where is this used?

**Everywhere!** Every card, button, input, and container uses the box model.

- Card with padding → content doesn't touch edges
- Buttons with padding → larger click area
- Sections with margin → spacing between sections

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Not using \`box-sizing: border-box\` | Add \`* { box-sizing: border-box; }\` to every project |
| Margin collapse confusion | Vertical margins between siblings collapse to the larger value |
| Using margin for internal spacing | Margin = outside, Padding = inside |
| Setting width without box-sizing | Total size becomes unpredictable |

---

## 🎯 Interview Tips

> "Always use \`box-sizing: border-box\` globally. It makes width calculations predictable because padding and border are included."

> "Margin collapse: When two vertical margins touch, they collapse into one (the larger value). This only happens vertically, not horizontally."

---

## 🛠️ Mini Practice

**Task:** Create three boxes:
1. First box: 200px wide, 20px padding, 3px border
2. Second box: Same but with different margin
3. Show the difference between border-box and content-box`,
          codeExample: `<style>
  * { box-sizing: border-box; }
  body { font-family: Arial; padding: 20px; }
  
  h3 { color: #0d9488; }
  
  .box {
    width: 250px;
    padding: 20px;
    border: 3px solid #0d9488;
    margin: 15px;
    background-color: #f0fdfa;
    border-radius: 8px;
  }
  
  .box-label {
    font-size: 13px;
    color: #666;
    margin-top: 8px;
  }
  
  /* Without border-box */
  .content-box {
    box-sizing: content-box;
    border-color: #ea580c;
    background-color: #fff7ed;
  }
  
  /* Margin demo */
  .margin-demo {
    display: flex;
    gap: 0;
    background: #e5e7eb;
    padding: 8px;
    border-radius: 8px;
    margin: 16px 0;
  }
  .m-box {
    background: #0d9488;
    color: white;
    padding: 16px;
    border-radius: 6px;
    font-size: 14px;
  }
  .m-box:first-child { margin-right: 20px; }
  .m-box:last-child { margin-left: 10px; }
</style>

<h3>📦 box-sizing: border-box ✅</h3>
<div class="box">
  <strong>border-box</strong>
  <p class="box-label">
    width: 250px<br>
    Total = 250px ✅<br>
    (padding + border included)
  </p>
</div>

<h3>📦 box-sizing: content-box ❌</h3>
<div class="box content-box">
  <strong>content-box (default)</strong>
  <p class="box-label">
    width: 250px<br>
    Total = 250 + 40 + 6 = 296px 😵<br>
    (padding + border add extra)
  </p>
</div>

<h3>📦 Margin = Space Between</h3>
<div class="margin-demo">
  <div class="m-box">margin-right: 20px</div>
  <div class="m-box">margin-left: 10px</div>
</div>

<h3>📦 Padding = Space Inside</h3>
<div style="background:#0d9488; color:white; 
  border-radius:8px;">
  <div style="padding: 8px;">padding: 8px</div>
</div>
<br>
<div style="background:#0d9488; color:white; 
  border-radius:8px;">
  <div style="padding: 32px;">padding: 32px</div>
</div>`,
          quiz: [
            { question: "What are the 4 layers of the box model (inside out)?", options: ["Content, Padding, Border, Margin", "Margin, Border, Padding, Content", "Top, Right, Bottom, Left", "Header, Body, Footer, Sidebar"], correctIndex: 0 },
            { question: "What does box-sizing: border-box do?", options: ["Removes the border", "Includes padding and border in the width", "Adds a shadow", "Centers the element"], correctIndex: 1 },
            { question: "Which property adds space OUTSIDE an element?", options: ["padding", "spacing", "margin", "border"], correctIndex: 2 },
            { question: "What's the shorthand order for margin: 10px 20px 30px 40px?", options: ["Left Right Top Bottom", "Top Right Bottom Left (clockwise)", "Top Bottom Left Right", "Right Left Top Bottom"], correctIndex: 1 },
            { question: "What is margin collapse?", options: ["Margins disappear", "Vertical margins merge to the larger value", "Margins double", "Margins add up"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "css-layout",
      title: "Layout",
      icon: "📐",
      level: "intermediate",
      lessons: [
        {
          id: "display-position",
          title: "Display & Position",
          description: "Control how elements flow and stack",
          content: `# Display & Position

## 🔍 What is this?

**Display** controls how an element behaves in the flow. **Position** controls where an element is placed.

---

## 📝 Display Values

| Value | Behavior |
|-------|----------|
| \`block\` | Takes full width, starts new line (\`<div>\`, \`<p>\`, \`<h1>\`) |
| \`inline\` | Only takes needed width, no new line (\`<span>\`, \`<a>\`, \`<strong>\`) |
| \`inline-block\` | Inline but accepts width/height |
| \`flex\` | Flexbox container (1D layout) |
| \`grid\` | Grid container (2D layout) |
| \`none\` | Hidden — removed from layout |

---

## 📝 Position Values

| Value | Behavior | Scrolls? |
|-------|----------|----------|
| \`static\` | Normal flow (default) | Yes |
| \`relative\` | Normal flow + offset | Yes |
| \`absolute\` | Removed from flow, positioned relative to nearest positioned ancestor | Yes |
| \`fixed\` | Positioned relative to viewport | **No** (stays put) |
| \`sticky\` | Normal until scroll threshold, then fixed | Hybrid |

### Position requires offset properties:
\`top\`, \`right\`, \`bottom\`, \`left\`

---

## 🌍 Where is this used?

- **Sticky navbar** → \`position: sticky; top: 0;\`
- **Modal overlay** → \`position: fixed; inset: 0;\`
- **Badge on avatar** → \`position: absolute;\` inside \`position: relative;\` parent
- **Hidden menu** → \`display: none;\` → \`display: block;\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| \`absolute\` without \`relative\` parent | Element positions relative to \`<body>\` — add \`relative\` to parent |
| \`z-index\` without \`position\` | z-index only works on positioned elements |
| \`display: none\` for accessibility | Use \`visibility: hidden\` or \`opacity: 0\` to keep in accessibility tree |

---

## 🎯 Interview Tips

> "\`z-index\` only works on positioned elements (relative, absolute, fixed, sticky) — not static."

> "\`position: sticky\` requires a \`top\` (or other offset) value to know when to stick."

---

## 🛠️ Mini Practice

**Task:** Create a page with a sticky header, a badge (absolute) on a card, and a fixed "back to top" button.`,
          codeExample: `<style>
  body { font-family: Arial; margin: 0; }
  
  /* Sticky header */
  .header {
    position: sticky;
    top: 0;
    background: #0d9488;
    color: white;
    padding: 12px 20px;
    z-index: 10;
    font-weight: bold;
  }
  
  /* Card with badge */
  .card {
    position: relative;
    width: 200px;
    padding: 20px;
    margin: 20px;
    background: #f0fdfa;
    border: 2px solid #0d9488;
    border-radius: 10px;
  }
  .badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ea580c;
    color: white;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
  }
  
  /* Display demo */
  .block { 
    display: block; 
    background: #bfdbfe; 
    padding: 8px; 
    margin: 4px 0; 
  }
  .inline { 
    display: inline; 
    background: #fde68a; 
    padding: 4px 8px; 
  }
  .inline-block { 
    display: inline-block; 
    background: #bbf7d0; 
    padding: 8px; 
    width: 120px; 
    text-align: center; 
  }
</style>

<div class="header">📌 Sticky Header (scroll down!)</div>

<div style="padding: 20px;">
  <h3>Display Values</h3>
  <div class="block">Block (full width)</div>
  <div class="block">Block (full width)</div>
  
  <p>
    <span class="inline">Inline</span>
    <span class="inline">Inline</span>
    <span class="inline">Side by side</span>
  </p>
  
  <span class="inline-block">Inline-Block</span>
  <span class="inline-block">Inline-Block</span>
  
  <h3>Position: Absolute Badge</h3>
  <div class="card">
    <div class="badge">NEW</div>
    <strong>Product Card</strong>
    <p style="font-size:14px; color:#666;">
      Badge uses absolute positioning 
      inside relative parent.
    </p>
  </div>
</div>

<div style="height: 600px; padding: 20px;">
  <p>⬆️ Scroll up — header stays sticky!</p>
</div>`,
          quiz: [
            { question: "Which display value makes an element take full width?", options: ["inline", "block", "inline-block", "flex"], correctIndex: 1 },
            { question: "Which position stays fixed when you scroll?", options: ["static", "relative", "fixed", "absolute"], correctIndex: 2 },
            { question: "What does position: absolute need on its parent?", options: ["display: flex", "position: relative", "z-index: 1", "overflow: hidden"], correctIndex: 1 },
            { question: "Which position is 'hybrid' — normal then fixed on scroll?", options: ["static", "relative", "absolute", "sticky"], correctIndex: 3 },
            { question: "Does z-index work on position: static?", options: ["Yes", "No — needs relative/absolute/fixed/sticky", "Only with display: flex", "Always"], correctIndex: 1 },
          ],
        },
        {
          id: "flexbox",
          title: "Flexbox",
          description: "Create flexible, responsive layouts",
          content: `# CSS Flexbox

## 🔍 What is this?

Flexbox is a **one-dimensional** layout system — it arranges items in a **row** or **column**. It's the most widely used CSS layout method today.

> **Simple analogy:** Flexbox is like arranging books on a **shelf** 📚. You decide: left to right? Centered? Spaced evenly? Stack vertically?

---

## 💡 Why do we use this?

- **Easy centering** — Vertically AND horizontally (was hard before Flexbox!)
- **Responsive layouts** — Items wrap and resize automatically
- **Space distribution** — Evenly space items with one property
- **Alignment** — Align items to start, end, center, or stretch
- **Order control** — Rearrange items without changing HTML

---

## ⏰ When should we use this?

| Layout Need | Use Flexbox? |
|------------|-------------|
| Navbar with logo + links | ✅ Yes |
| Center something perfectly | ✅ Yes |
| Cards in a row | ✅ Yes |
| Space items evenly | ✅ Yes |
| Complex 2D grid | ❌ Use CSS Grid |
| Overlap elements | ❌ Use Position |

---

## 🌍 Where is this used?

- **Every navbar** — Logo left, links right
- **Card layouts** — Cards in a row/grid
- **Footer** — Columns of links
- **Centering** — Login forms, modals
- **Pricing tables** — Plans side by side

---

## 📊 Visual Reference

\`\`\`
flex-direction: row (default)
┌───┐ ┌───┐ ┌───┐
│ 1 │ │ 2 │ │ 3 │  → Main axis
└───┘ └───┘ └───┘

flex-direction: column
┌───┐
│ 1 │  ↓ Main axis
└───┘
┌───┐
│ 2 │
└───┘

justify-content (main axis):
flex-start:   |1 2 3          |
center:       |     1 2 3     |
flex-end:     |          1 2 3|
space-between:|1      2      3|
space-around: |  1    2    3  |
space-evenly: | 1   2   3    |

align-items (cross axis):
flex-start:  Items at top
center:      Items centered
flex-end:    Items at bottom
stretch:     Items fill height
\`\`\`

---

## 📝 Syntax

### Container Properties
\`\`\`css
.container {
  display: flex;
  flex-direction: row;        /* row | column */
  justify-content: center;    /* main axis alignment */
  align-items: center;        /* cross axis alignment */
  flex-wrap: wrap;            /* allow wrapping */
  gap: 16px;                  /* space between items */
}
\`\`\`

### Item Properties
\`\`\`css
.item {
  flex-grow: 1;     /* How much to grow */
  flex-shrink: 0;   /* How much to shrink */
  flex-basis: 200px; /* Initial size */
  /* Shorthand: */
  flex: 1;          /* grow:1, shrink:1, basis:0 */
}
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Putting flex props on children | \`display: flex\` goes on the **parent** container |
| Forgetting \`flex-wrap: wrap\` | Items overflow without wrapping |
| Using margin for spacing | Use \`gap\` instead — cleaner! |
| Not understanding main vs cross axis | Main = direction of flow, Cross = perpendicular |

---

## 🎯 Interview Tips

> "Flexbox is one-dimensional (row OR column). CSS Grid is two-dimensional (rows AND columns simultaneously)."

> "The 'holy grail' centering: \`display: flex; justify-content: center; align-items: center;\` — centers both axes."

> "\`flex: 1\` means the item will grow to fill available space equally."

---

## 🛠️ Mini Practice

**Task:** Build a navbar with:
1. Logo on the left
2. Nav links centered
3. Login button on the right
Using only Flexbox!`,
          codeExample: `<style>
  body { font-family: Arial; margin: 0; padding: 16px; }
  
  /* 1. Centered content */
  .center-demo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background: #f0fdfa;
    border: 2px dashed #0d9488;
    border-radius: 8px;
    margin-bottom: 16px;
  }
  
  /* 2. Space between */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    background: #0d9488;
    border-radius: 8px;
    margin-bottom: 16px;
  }
  .navbar a { 
    color: white; 
    text-decoration: none; 
    padding: 6px 12px; 
  }
  .logo { 
    font-weight: bold; 
    font-size: 18px; 
    color: white; 
  }
  
  /* 3. Flex wrap cards */
  .card-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 16px;
  }
  .flex-card {
    flex: 1 1 150px;
    background: #f0fdfa;
    border: 2px solid #0d9488;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
  }
  
  /* 4. Column layout */
  .column-demo {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .col-item {
    background: #0d9488;
    color: white;
    padding: 12px;
    border-radius: 6px;
    text-align: center;
  }
</style>

<h3>1️⃣ Perfect Centering</h3>
<div class="center-demo">
  <span>✨ I'm perfectly centered!</span>
</div>

<h3>2️⃣ Navbar (space-between)</h3>
<nav class="navbar">
  <span class="logo">🌐 Brand</span>
  <div>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>

<h3>3️⃣ Wrapping Cards (flex-wrap)</h3>
<div class="card-row">
  <div class="flex-card">📱 Mobile</div>
  <div class="flex-card">💻 Desktop</div>
  <div class="flex-card">📊 Analytics</div>
  <div class="flex-card">🔒 Security</div>
</div>

<h3>4️⃣ Column Layout</h3>
<div class="column-demo">
  <div class="col-item">Step 1: Learn HTML</div>
  <div class="col-item">Step 2: Learn CSS</div>
  <div class="col-item">Step 3: Build Projects!</div>
</div>`,
          quiz: [
            { question: "How do you enable flexbox?", options: ["display: block", "display: flex", "display: grid", "display: inline"], correctIndex: 1 },
            { question: "Which property aligns items on the MAIN axis?", options: ["align-items", "justify-content", "align-content", "flex-align"], correctIndex: 1 },
            { question: "How do you center vertically AND horizontally?", options: ["text-align: center", "margin: auto", "justify-content: center + align-items: center", "align: center"], correctIndex: 2 },
            { question: "What does flex-wrap: wrap do?", options: ["Removes items", "Items move to next line when no space", "Makes items circular", "Reverses order"], correctIndex: 1 },
            { question: "What's the modern way to add space between flex items?", options: ["margin on each item", "padding on container", "gap property", "spacer divs"], correctIndex: 2 },
          ],
        },
        {
          id: "css-grid",
          title: "CSS Grid",
          description: "Build two-dimensional layouts",
          content: `# CSS Grid

## 🔍 What is this?

CSS Grid is a **two-dimensional** layout system — it handles **rows AND columns** at the same time.

> **Simple analogy:** Flexbox is like arranging items on a **shelf** (one direction). Grid is like arranging items on a **chessboard** (both directions) ♟️.

---

## 💡 Why do we use this?

- **Complex layouts** — Header, sidebar, content, footer
- **Magazine layouts** — Items spanning multiple rows/columns
- **Photo galleries** — Even grid of images
- **Dashboard layouts** — Widgets in a grid

---

## ⏰ When should we use Grid vs Flexbox?

| Layout Need | Best Tool |
|------------|-----------|
| Navbar (1D) | Flexbox |
| Card row (1D) | Flexbox |
| Full page layout (2D) | Grid |
| Dashboard widgets (2D) | Grid |
| Items in row AND column control | Grid |
| Simple centering | Flexbox |

> **Rule of thumb:** 1D = Flexbox, 2D = Grid. Many layouts use both!

---

## 📊 Visual Reference

\`\`\`
grid-template-columns: 1fr 1fr 1fr;

┌──────┬──────┬──────┐
│  1   │  2   │  3   │
├──────┼──────┼──────┤
│  4   │  5   │  6   │
└──────┴──────┴──────┘

grid-column: span 2;

┌─────────────┬──────┐
│  SPANS 2    │  2   │
├──────┬──────┼──────┤
│  3   │  4   │  5   │
└──────┴──────┴──────┘
\`\`\`

---

## 📝 Syntax

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: auto;
  gap: 16px;
}

/* Make an item span */
.wide-item {
  grid-column: span 2;  /* span 2 columns */
}
.tall-item {
  grid-row: span 2;     /* span 2 rows */
}
\`\`\`

### Key Values:
- **\`1fr\`** — One fraction of available space
- **\`repeat(3, 1fr)\`** — Three equal columns
- **\`auto\`** — Size to content
- **\`minmax(200px, 1fr)\`** — Responsive: min 200px, max fill

### Responsive Grid (No Media Queries!)
\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
\`\`\`
This creates as many columns as fit, each at least 250px!

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Using Grid for simple rows | Flexbox is simpler for 1D |
| Forgetting \`gap\` | Items touch without it |
| Not using \`fr\` units | \`fr\` is more flexible than \`%\` or \`px\` |
| Complex media queries for grid | Use \`auto-fit\` + \`minmax()\` instead |

---

## 🎯 Interview Tips

> "CSS Grid is two-dimensional (rows AND columns). Flexbox is one-dimensional. They complement each other."

> "\`repeat(auto-fit, minmax(250px, 1fr))\` creates a responsive grid WITHOUT media queries!"

> "\`fr\` means 'fraction of available space'. \`1fr 2fr\` means second column is twice as wide."

---

## 🛠️ Mini Practice

**Task:** Create a dashboard layout:
1. Header spanning full width
2. Sidebar on the left (200px)
3. Main content area (flexible)
4. Footer spanning full width`,
          codeExample: `<style>
  body { font-family: Arial; margin: 0; padding: 16px; }
  
  /* Responsive card grid */
  .card-grid {
    display: grid;
    grid-template-columns: 
      repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-bottom: 24px;
  }
  .grid-card {
    background: #f0fdfa;
    border: 2px solid #0d9488;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
  }
  
  /* Spanning items */
  .span-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }
  .span-item {
    background: #0d9488;
    color: white;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
  }
  .wide { grid-column: span 2; background: #ea580c; }
  .tall { grid-row: span 2; background: #2563eb; }
  
  /* Dashboard layout */
  .dashboard {
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 8px;
    min-height: 250px;
  }
  .dash-header { 
    grid-column: 1 / -1; 
    background: #0d9488; 
    color: white; 
    padding: 12px; 
    border-radius: 8px; 
  }
  .dash-sidebar { 
    background: #e0f2fe; 
    padding: 12px; 
    border-radius: 8px; 
  }
  .dash-main { 
    background: #f0fdf4; 
    padding: 12px; 
    border-radius: 8px; 
  }
  .dash-footer { 
    grid-column: 1 / -1; 
    background: #333; 
    color: white; 
    padding: 8px; 
    border-radius: 8px; 
    text-align: center;
    font-size: 13px;
  }
</style>

<h3>1️⃣ Responsive Card Grid</h3>
<p style="color:#666; font-size:14px;">
  Uses auto-fit + minmax — no media queries!</p>
<div class="card-grid">
  <div class="grid-card">📱 Mobile</div>
  <div class="grid-card">💻 Web</div>
  <div class="grid-card">🎨 Design</div>
  <div class="grid-card">📊 Data</div>
  <div class="grid-card">🔒 Security</div>
  <div class="grid-card">🚀 Deploy</div>
</div>

<h3>2️⃣ Spanning Items</h3>
<div class="span-grid">
  <div class="span-item wide">Spans 2 Columns</div>
  <div class="span-item tall">Spans 2<br>Rows</div>
  <div class="span-item">Normal</div>
  <div class="span-item">Normal</div>
</div>

<h3>3️⃣ Dashboard Layout</h3>
<div class="dashboard">
  <div class="dash-header">🌐 Header (full width)</div>
  <div class="dash-sidebar">📋 Sidebar<br>(180px)</div>
  <div class="dash-main">📝 Main Content<br>(fills remaining)</div>
  <div class="dash-footer">Footer (full width)</div>
</div>`,
          quiz: [
            { question: "Is CSS Grid 1D or 2D?", options: ["1D", "2D — rows AND columns", "3D", "Depends on usage"], correctIndex: 1 },
            { question: "What does 1fr mean?", options: ["1 pixel", "1 frame", "1 fraction of available space", "1 font"], correctIndex: 2 },
            { question: "How do you make a responsive grid without media queries?", options: ["grid-template-columns: auto", "repeat(auto-fit, minmax(250px, 1fr))", "grid-auto-flow: dense", "flex-wrap: wrap"], correctIndex: 1 },
            { question: "How do you span 2 columns?", options: ["width: 200%", "grid-column: span 2", "colspan: 2", "span: 2"], correctIndex: 1 },
            { question: "When should you use Grid over Flexbox?", options: ["Always", "For 2D layouts (rows AND columns)", "Only for tables", "Never, Flexbox is better"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "css-styling",
      title: "Styling",
      icon: "✨",
      level: "intermediate",
      lessons: [
        {
          id: "backgrounds-shadows",
          title: "Backgrounds & Shadows",
          description: "Add depth and visual richness",
          content: `# Backgrounds & Shadows

## 🔍 What is this?

**Backgrounds** fill the space behind content with colors, gradients, or images. **Shadows** add depth and dimension to elements.

> **Simple analogy:** Backgrounds are like **wallpaper** 🖼️ and shadows are like the **depth** you see when something is raised above a surface.

---

## 💡 Why do we use this?

- **Visual hierarchy** — Shadows lift important elements
- **Depth & realism** — Flat designs feel interactive with subtle shadows
- **Branding** — Gradient backgrounds are trendy and eye-catching
- **Sections** — Different backgrounds separate page areas

---

## 📝 Background Properties

\`\`\`css
/* Solid color */
background-color: hsl(160, 84%, 39%);

/* Gradient */
background: linear-gradient(135deg, #0d9488, #06b6d4);
background: radial-gradient(circle, #0d9488, #065f46);

/* Image */
background-image: url('photo.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;

/* Shorthand */
background: url('bg.jpg') center/cover no-repeat;
\`\`\`

## 📝 Shadow Properties

\`\`\`css
/* Box shadow: x, y, blur, spread, color */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);      /* subtle */
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);      /* elevated */
box-shadow: 0 0 0 3px hsl(160, 84%, 39%);         /* ring/outline */
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);   /* inner shadow */

/* Text shadow: x, y, blur, color */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Too dark shadows | Use low opacity (0.1 - 0.2) |
| Shadow color doesn't match | Use the element's brand color with opacity |
| Too many gradients | Keep it subtle; 1-2 gradient elements per page |
| Background image not visible | Check \`background-size: cover\` and path |

---

## 🛠️ Mini Practice

**Task:** Create 4 cards with different backgrounds:
1. Solid color
2. Linear gradient
3. Image background with overlay
4. Cards with varying shadow depths`,
          codeExample: `<style>
  body { font-family: Arial; padding: 20px; 
    background: #f5f5f5; }
  
  .cards { display: flex; flex-wrap: wrap; gap: 16px; }
  
  .card {
    width: 200px;
    height: 160px;
    border-radius: 12px;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .card h4 { margin: 0 0 4px; }
  .card p { margin: 0; font-size: 13px; opacity: 0.8; }
  
  .solid { background: #0d9488; }
  .gradient { 
    background: linear-gradient(
      135deg, #0d9488, #06b6d4, #3b82f6); 
  }
  .radial { 
    background: radial-gradient(
      circle at top right, #f59e0b, #ea580c); 
  }
  .image-bg {
    background: 
      linear-gradient(to top, 
        rgba(0,0,0,0.7), transparent),
      url('https://picsum.photos/400/300') center/cover;
  }
  
  /* Shadow demo */
  .shadow-row { 
    display: flex; flex-wrap: wrap; 
    gap: 16px; margin-top: 20px; 
  }
  .shadow-card {
    width: 150px;
    padding: 16px;
    background: white;
    border-radius: 10px;
    text-align: center;
    font-size: 13px;
  }
  .s1 { box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  .s2 { box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
  .s3 { box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
  .s4 { box-shadow: 0 20px 50px rgba(0,0,0,0.25); }
</style>

<h3>🎨 Background Types</h3>
<div class="cards">
  <div class="card solid">
    <h4>Solid Color</h4>
    <p>Simple & clean</p>
  </div>
  <div class="card gradient">
    <h4>Linear Gradient</h4>
    <p>Multi-color blend</p>
  </div>
  <div class="card radial">
    <h4>Radial Gradient</h4>
    <p>Circle outward</p>
  </div>
  <div class="card image-bg">
    <h4>Image + Overlay</h4>
    <p>Photo background</p>
  </div>
</div>

<h3>📐 Shadow Depth Levels</h3>
<div class="shadow-row">
  <div class="shadow-card s1">Level 1<br><small>Subtle</small></div>
  <div class="shadow-card s2">Level 2<br><small>Card</small></div>
  <div class="shadow-card s3">Level 3<br><small>Elevated</small></div>
  <div class="shadow-card s4">Level 4<br><small>Floating</small></div>
</div>`,
          quiz: [
            { question: "What does background-size: cover do?", options: ["Tiles the image", "Scales to cover entire element", "Centers without scaling", "Crops the image"], correctIndex: 1 },
            { question: "What are the box-shadow values in order?", options: ["blur, x, y, color", "x, y, blur, spread, color", "color, x, y, blur", "spread, blur, x, y"], correctIndex: 1 },
            { question: "How do you create a gradient overlay on an image?", options: ["Two background-images", "Use linear-gradient AND url() together", "opacity on image", "filter: gradient"], correctIndex: 1 },
            { question: "What does 'inset' do in box-shadow?", options: ["Removes shadow", "Creates an inner shadow", "Makes shadow bigger", "Adds border"], correctIndex: 1 },
            { question: "How should shadow color relate to the design?", options: ["Always use black", "Match the element's brand color with low opacity", "Use bright colors", "No color needed"], correctIndex: 1 },
          ],
        },
        {
          id: "fonts-typography",
          title: "Fonts & Typography",
          description: "Master text styling and font pairing",
          content: `# Fonts & Typography

## 🔍 What is this?

**Typography** is the art of styling text — choosing fonts, sizes, spacing, and weight to make content readable and beautiful.

> **Simple analogy:** Typography is like choosing the **voice** 🗣️ of your website. A fun font says "playful," a serif font says "professional."

---

## 💡 Why do we use this?

- **95% of the web is text** — typography IS web design
- **Readability** — Good typography keeps users reading
- **Brand identity** — Fonts convey personality
- **Hierarchy** — Different weights/sizes show importance

---

## 📝 Font Properties

\`\`\`css
/* Font family */
font-family: 'Inter', Arial, sans-serif;

/* Size (use rem!) */
font-size: 1rem;     /* 16px */
font-size: clamp(1rem, 2.5vw, 2rem); /* fluid */

/* Weight */
font-weight: 400;  /* normal */
font-weight: 700;  /* bold */

/* Style */
font-style: italic;

/* Line height (readability!) */
line-height: 1.6;  /* 1.5-1.8 for body text */

/* Letter spacing */
letter-spacing: 0.05em;

/* Text transform */
text-transform: uppercase;
text-transform: capitalize;

/* Text decoration */
text-decoration: underline;
text-decoration: none;

/* Text alignment */
text-align: center;
text-align: justify;
\`\`\`

---

## 📝 Using Google Fonts

\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
\`\`\`

\`\`\`css
body { font-family: 'Inter', sans-serif; }
\`\`\`

---

## ⏰ Typography Best Practices

| Rule | Value |
|------|-------|
| Body font size | 16px minimum (1rem) |
| Line height | 1.5-1.8 for body |
| Line length | 45-75 characters per line |
| Font pairings | Max 2-3 fonts per site |
| Heading scale | Use consistent ratio (1.25x, 1.5x) |

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Too many fonts | Stick to 2-3 max |
| Tiny text on mobile | Min 16px for body |
| No fallback fonts | Always add generic fallback |
| Poor contrast | Dark text on light bg or vice versa |
| Lines too long | Use max-width on text containers |

---

## 🎯 Interview Tips

> "Use \`rem\` for font sizes — it respects user browser settings and scales predictably."

> "\`line-height: 1.6\` is the sweet spot for body text readability."

---

## 🛠️ Mini Practice

**Task:** Create a typography showcase:
1. Heading with Google Font
2. Body text with proper line-height
3. A blockquote with italic styling
4. Uppercase small text for labels`,
          codeExample: `<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap');
  
  body { 
    font-family: 'Inter', sans-serif; 
    padding: 20px; 
    max-width: 600px; 
    margin: 0 auto;
    color: #333;
    line-height: 1.6;
  }
  
  h1 { 
    font-family: 'Playfair Display', serif; 
    font-size: 2.5rem; 
    line-height: 1.2;
    color: #0d9488;
    margin-bottom: 8px;
  }
  
  .subtitle { 
    color: #666; 
    font-size: 1.1rem; 
    margin-bottom: 24px; 
  }
  
  .label { 
    text-transform: uppercase; 
    letter-spacing: 0.15em; 
    font-size: 0.75rem; 
    font-weight: 600; 
    color: #0d9488;
    margin-bottom: 8px;
  }
  
  p { margin-bottom: 16px; }
  
  blockquote { 
    border-left: 4px solid #0d9488; 
    padding: 16px 20px; 
    margin: 20px 0; 
    background: #f0fdfa; 
    border-radius: 0 8px 8px 0;
    font-style: italic; 
    color: #555;
  }
  
  .weight-demo span { 
    display: inline-block; 
    margin: 4px 12px 4px 0; 
  }
  
  .small { font-size: 0.875rem; color: #888; }
</style>

<p class="label">Typography Demo</p>
<h1>The Art of Beautiful Text</h1>
<p class="subtitle">Good typography makes the web readable and delightful.</p>

<p class="label">Body Text</p>
<p>This paragraph uses Inter at 1rem (16px) with 
   a line-height of 1.6 for optimal readability. 
   The ideal line length is 45-75 characters.</p>

<blockquote>
  "Typography is the craft of endowing human 
  language with a durable visual form."
  <br><strong>— Robert Bringhurst</strong>
</blockquote>

<p class="label">Font Weights</p>
<div class="weight-demo">
  <span style="font-weight:300;">Light 300</span>
  <span style="font-weight:400;">Regular 400</span>
  <span style="font-weight:600;">SemiBold 600</span>
  <span style="font-weight:700;">Bold 700</span>
</div>

<p class="label" style="margin-top:20px;">Text Transform</p>
<p>
  <span style="text-transform:uppercase; letter-spacing:0.1em;">uppercase</span> • 
  <span style="text-transform:capitalize;">capitalize each word</span> • 
  <span style="text-transform:lowercase;">LOWERCASE</span>
</p>

<p class="small">* Pair a display font (headings) with 
  a body font (text) for visual contrast.</p>`,
          quiz: [
            { question: "What unit is best for font-size?", options: ["px", "pt", "rem", "cm"], correctIndex: 2 },
            { question: "What's the recommended line-height for body text?", options: ["1.0", "1.5-1.8", "2.5", "0.8"], correctIndex: 1 },
            { question: "How many fonts should a website typically use?", options: ["As many as possible", "2-3 maximum", "Exactly 1", "10+"], correctIndex: 1 },
            { question: "What does text-transform: uppercase do?", options: ["Makes text bigger", "Converts to all capital letters", "Adds underline", "Changes font"], correctIndex: 1 },
            { question: "Why always include a generic font fallback?", options: ["Looks better", "In case custom font fails to load", "Required by HTML spec", "For animation"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "responsive-design",
      title: "Responsive Design",
      icon: "📱",
      level: "advanced",
      lessons: [
        {
          id: "media-queries",
          title: "Media Queries & Mobile-First",
          description: "Make your site work on any device",
          content: `# Responsive Design

## 🔍 What is this?

**Responsive design** makes your website look great on **all screen sizes** — from phones (320px) to desktops (1920px+).

**Media queries** let you apply CSS based on the screen size:

\`\`\`css
@media (max-width: 768px) {
  /* These styles apply on tablets and smaller */
}
\`\`\`

> **Simple analogy:** It's like having different outfits for different occasions 👔👕 — formal for work, casual for weekends. Your site changes "outfit" based on the screen.

---

## 💡 Why do we use this?

- **60%+ of web traffic** is on mobile devices!
- **Google ranks** mobile-friendly sites higher
- **User experience** — nobody zooms and scrolls horizontally
- **Professional requirement** — every modern site must be responsive

---

## ⏰ Mobile-First Approach (✅ Best Practice!)

**Start with mobile styles, THEN add desktop styles:**

\`\`\`css
/* Default = mobile */
.container {
  flex-direction: column;
  padding: 16px;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    padding: 24px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
\`\`\`

### Common Breakpoints:
| Device | Width |
|--------|-------|
| Small phone | 320px |
| Phone | 375px - 480px |
| Tablet | 768px |
| Laptop | 1024px |
| Desktop | 1280px+ |

---

## 🌍 Where is this used?

- **Every modern website!**
- Navbar collapses to hamburger menu on mobile
- Grid goes from 3 columns → 1 column
- Font sizes adjust
- Images resize

---

## 📝 Key Responsive Techniques

### 1. Flexible images:
\`\`\`css
img { max-width: 100%; height: auto; }
\`\`\`

### 2. Viewport meta (REQUIRED):
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### 3. CSS Grid auto-fit:
\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
\`\`\`

### 4. Clamp for fluid typography:
\`\`\`css
font-size: clamp(1rem, 2.5vw, 2rem);
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Desktop-first approach | Start mobile, add complexity up |
| Forgetting viewport meta | Site won't scale on mobile! |
| Using px for everything | Use rem, %, vw for flexibility |
| Too many breakpoints | 2-3 breakpoints is usually enough |
| Hiding content on mobile | Reorganize, don't hide |
| Fixed widths | Use max-width + percentage |

---

## 🎯 Interview Tips

> "Mobile-first is the industry standard because it's easier to add complexity (desktop) than to remove it (mobile)."

> "\`clamp(min, preferred, max)\` creates fluid typography without media queries."

> "Use \`min-width\` for mobile-first and \`max-width\` for desktop-first breakpoints."

---

## 🛠️ Mini Practice

**Task:** Make a 3-column card layout responsive:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
Use mobile-first approach!`,
          codeExample: `<meta name="viewport" 
  content="width=device-width, initial-scale=1.0">
<style>
  * { box-sizing: border-box; margin: 0; }
  body { 
    font-family: Arial; 
    padding: 16px; 
    background: #f5f5f5; 
  }
  
  h2 { 
    text-align: center; 
    color: #0d9488;
    font-size: clamp(1.2rem, 3vw, 2rem);
    margin-bottom: 16px;
  }
  
  /* MOBILE FIRST (default = mobile) */
  .responsive-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #0d9488;
  }
  .card h3 { 
    color: #0d9488; 
    margin-bottom: 8px; 
  }
  .card p { 
    color: #666; 
    font-size: 14px; 
    line-height: 1.5; 
  }
  
  /* Responsive image */
  img { 
    max-width: 100%; 
    height: auto; 
    border-radius: 8px;
    margin-bottom: 12px;
  }
  
  /* TABLET (768px+) */
  @media (min-width: 500px) {
    .responsive-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  /* DESKTOP (1024px+) - not triggered in 
     small preview but works on real screens */
  @media (min-width: 900px) {
    .responsive-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .info-box {
    background: #fef3c7;
    border: 2px solid #f59e0b;
    border-radius: 8px;
    padding: 12px;
    margin-top: 16px;
    font-size: 13px;
  }
</style>

<h2>📱 Responsive Card Grid</h2>
<p style="text-align:center; color:#666; 
  margin-bottom:16px; font-size:14px;">
  Resize the preview window to see 
  columns change!
</p>

<div class="responsive-grid">
  <div class="card">
    <h3>📄 HTML</h3>
    <p>The structure and content of web pages. 
       Every site starts here.</p>
  </div>
  <div class="card">
    <h3>🎨 CSS</h3>
    <p>Visual styling — colors, layout, 
       typography, animations.</p>
  </div>
  <div class="card">
    <h3>⚡ JavaScript</h3>
    <p>Interactivity — buttons, forms, 
       dynamic content.</p>
  </div>
  <div class="card">
    <h3>📱 Responsive</h3>
    <p>Works on all devices — phones, 
       tablets, desktops.</p>
  </div>
  <div class="card">
    <h3>♿ Accessible</h3>
    <p>Usable by everyone including 
       screen reader users.</p>
  </div>
  <div class="card">
    <h3>🚀 Performance</h3>
    <p>Fast loading, optimized images, 
       clean code.</p>
  </div>
</div>

<div class="info-box">
  💡 <strong>This uses mobile-first!</strong> 
  Default = 1 column. @media adds columns 
  for larger screens.
</div>`,
          quiz: [
            { question: "What does mobile-first mean?", options: ["Only support mobile", "Design mobile first, add desktop styles with min-width", "Use a mobile framework", "Disable desktop features"], correctIndex: 1 },
            { question: "Which meta tag is REQUIRED for responsive design?", options: ["charset", "viewport", "description", "author"], correctIndex: 1 },
            { question: "What does clamp() do for font sizes?", options: ["Limits to one size", "Creates fluid sizing between min and max", "Makes text bold", "Adds animation"], correctIndex: 1 },
            { question: "How many breakpoints do most sites need?", options: ["10+", "2-3 is usually enough", "Exactly 1", "None"], correctIndex: 1 },
            { question: "How do you make images responsive?", options: ["width: 100px", "max-width: 100%; height: auto", "display: flex", "position: fixed"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "advanced-css",
      title: "Advanced CSS",
      icon: "🔥",
      level: "advanced",
      lessons: [
        {
          id: "transitions-animations",
          title: "Transitions & Animations",
          description: "Add motion and interactivity",
          content: `# Transitions & Animations

## 🔍 What is this?

**Transitions** smoothly animate between two states (e.g., hover). **Animations** create complex multi-step motion sequences.

> **Simple analogy:** 
> - Transition = **opening a door** 🚪 (one smooth motion from A to B)
> - Animation = **a dance routine** 💃 (multiple steps, can loop)

---

## 💡 Why do we use this?

- **User feedback** — Buttons respond to hover/click
- **Visual polish** — Smooth state changes feel professional
- **Attention** — Guide users to important elements
- **Engagement** — Animated UIs feel more alive

---

## 📝 Transitions (State A → State B)

\`\`\`css
.button {
  background: teal;
  transition: all 0.3s ease;
  /* transition: property duration timing-function delay; */
}
.button:hover {
  background: darkblue;
  transform: scale(1.05);
}
\`\`\`

### Timing Functions:
- \`ease\` — Start slow, fast middle, slow end (default)
- \`linear\` — Constant speed
- \`ease-in\` — Start slow
- \`ease-out\` — End slow
- \`ease-in-out\` — Slow start and end

---

## 📝 Animations (@keyframes)

\`\`\`css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.bouncing {
  animation: bounce 1s ease infinite;
  /* animation: name duration timing iterations; */
}
\`\`\`

---

## ⏰ When to use which?

| Need | Use |
|------|-----|
| Hover effect | \`transition\` |
| Smooth color change | \`transition\` |
| Loading spinner | \`@keyframes\` animation |
| Entrance animation | \`@keyframes\` animation |
| Continuous motion | \`@keyframes\` with \`infinite\` |

---

## 🌍 Where is this used?

- **Buttons** — Hover transitions (color, shadow, scale)
- **Loading indicators** — Spinning/pulsing animations
- **Page entrance** — Fade-in content
- **Notifications** — Slide-in alerts
- **Skeleton screens** — Shimmer loading effect

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Animating width/height | Animate \`transform\` instead (much smoother) |
| Too many animations | Subtle is better; limit to 2-3 per page |
| Animation on page load only | Consider \`prefers-reduced-motion\` |
| Not using \`will-change\` | Add for complex animations to enable GPU |
| Infinite spin on everything | Only for loading indicators! |

---

## 🎯 Interview Tips

> "Always animate \`transform\` and \`opacity\` — they're GPU-accelerated and don't cause layout reflows."

> "Use \`prefers-reduced-motion\` media query to respect users who have motion sensitivity."

> "\`transition\` is for state changes (hover, active). \`animation\` is for keyframe sequences."

---

## 🛠️ Mini Practice

**Task:** Create:
1. Button with hover transition (scale + shadow)
2. A pulsing notification dot
3. A fade-in entrance animation
4. A loading spinner`,
          codeExample: `<style>
  body { font-family: Arial; padding: 20px; }
  
  /* 1. Hover transitions */
  .btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 8px;
  }
  .btn-primary {
    background: #0d9488;
    color: white;
  }
  .btn-primary:hover {
    background: #0f766e;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(13,148,136,0.3);
  }
  .btn-accent {
    background: #ea580c;
    color: white;
  }
  .btn-accent:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(234,88,12,0.3);
  }
  
  /* 2. Pulsing dot */
  @keyframes pulse {
    0%, 100% { 
      transform: scale(1); 
      opacity: 1; 
    }
    50% { 
      transform: scale(1.5); 
      opacity: 0.5; 
    }
  }
  .notification {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 16px 0;
  }
  .dot {
    width: 10px;
    height: 10px;
    background: #ef4444;
    border-radius: 50%;
    animation: pulse 1.5s ease infinite;
  }
  
  /* 3. Fade in */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .fade-card {
    background: #f0fdfa;
    border: 2px solid #0d9488;
    padding: 20px;
    border-radius: 10px;
    margin: 8px 0;
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
  }
  .fade-card:nth-child(2) { animation-delay: 0.2s; }
  .fade-card:nth-child(3) { animation-delay: 0.4s; }
  
  /* 4. Spinner */
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  .spinner {
    width: 36px;
    height: 36px;
    border: 4px solid #e5e7eb;
    border-top-color: #0d9488;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin: 16px 0;
  }
</style>

<h3>1️⃣ Hover Transitions</h3>
<button class="btn btn-primary">Hover Me ↑</button>
<button class="btn btn-accent">Scale Me 🔍</button>

<h3>2️⃣ Pulsing Notification</h3>
<div class="notification">
  <span class="dot"></span>
  <span>3 new messages</span>
</div>

<h3>3️⃣ Staggered Fade In</h3>
<div class="fade-card">First item fades in</div>
<div class="fade-card">Second with delay</div>
<div class="fade-card">Third with more delay</div>

<h3>4️⃣ Loading Spinner</h3>
<div class="spinner"></div>
<span style="color:#666;">Loading...</span>`,
          quiz: [
            { question: "What's the difference between transition and animation?", options: ["No difference", "Transition = A→B state change; Animation = multi-step keyframes", "Animation is faster", "Transition needs JavaScript"], correctIndex: 1 },
            { question: "Which properties should you prefer to animate?", options: ["width and height", "transform and opacity (GPU-accelerated)", "margin and padding", "font-size and color"], correctIndex: 1 },
            { question: "What does animation: bounce 1s ease infinite mean?", options: ["Bounce once", "Bounce for 1 second then stop", "Bounce continuously with ease timing", "Bounce immediately"], correctIndex: 2 },
            { question: "What media query respects motion sensitivity?", options: ["prefers-color-scheme", "prefers-reduced-motion", "prefers-contrast", "prefers-animation"], correctIndex: 1 },
            { question: "Which timing function has constant speed?", options: ["ease", "ease-in", "linear", "ease-out"], correctIndex: 2 },
          ],
        },
        {
          id: "css-variables-pseudo",
          title: "CSS Variables & Pseudo Elements",
          description: "Advanced techniques for maintainable CSS",
          content: `# CSS Variables & Pseudo Elements

## 🔍 What is this?

**CSS Variables** (custom properties) store reusable values. **Pseudo elements** (\`::before\`, \`::after\`) add decorative content without extra HTML. **Pseudo classes** (\`:hover\`, \`:nth-child\`) target elements in specific states.

---

## 💡 Why use CSS Variables?

- **One change updates everywhere** — Change brand color in one place
- **Theme support** — Dark/light mode with variable swaps
- **Maintainability** — No hunting through files for color values
- **JavaScript access** — Can be modified dynamically

---

## 📝 CSS Variables Syntax

\`\`\`css
/* Define variables (usually on :root) */
:root {
  --brand: hsl(160, 84%, 39%);
  --brand-light: hsl(160, 84%, 90%);
  --radius: 8px;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Use variables */
.card {
  background: var(--brand-light);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.button {
  background: var(--brand);
  border-radius: var(--radius);
}
\`\`\`

---

## 📝 Pseudo Classes

\`\`\`css
a:hover { color: var(--brand); }        /* mouse over */
a:active { transform: scale(0.98); }    /* clicking */
a:focus { outline: 2px solid var(--brand); } /* keyboard */
input:invalid { border-color: red; }     /* form validation */
li:first-child { font-weight: bold; }    /* first item */
li:last-child { border: none; }          /* last item */
li:nth-child(odd) { background: #f5f5f5; } /* alternating */
\`\`\`

---

## 📝 Pseudo Elements

\`\`\`css
/* Add decorative content */
.quote::before {
  content: "❝";
  font-size: 2em;
  color: var(--brand);
}

.required::after {
  content: " *";
  color: red;
}

/* Decorative shapes */
.hero::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  background: var(--brand);
  border-radius: 50%;
  opacity: 0.1;
}
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Forgetting \`content\` on pseudo elements | \`::before\`/\`::after\` need \`content: ""\` even if empty |
| Variables without fallback | Use \`var(--color, fallback)\` |
| Pseudo on self-closing tags | \`::before\`/\`::after\` don't work on \`<img>\`, \`<input>\` |
| Not using :root for globals | Define global variables on \`:root\` |

---

## 🎯 Interview Tips

> "CSS Variables are inherited — child elements can access parent variables. They can also be scoped to components."

> "Pseudo elements (\`::before\`/\`::after\`) are for decorative content only. Don't put essential info there — screen readers may skip it."

---

## 🛠️ Mini Practice

**Task:** Create a theme with CSS variables:
1. Define brand colors, radius, and shadows as variables
2. Use pseudo classes for alternating row colors
3. Add decorative \`::before\` quotes to a testimonial`,
          codeExample: `<style>
  :root {
    --brand: hsl(160, 84%, 39%);
    --brand-light: hsl(160, 84%, 92%);
    --accent: hsl(36, 95%, 55%);
    --text: hsl(160, 30%, 15%);
    --muted: hsl(160, 10%, 50%);
    --radius: 10px;
    --shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  body { 
    font-family: Arial; 
    padding: 20px; 
    color: var(--text); 
  }
  
  /* Cards using variables */
  .var-card {
    background: var(--brand-light);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 16px;
    margin-bottom: 12px;
  }
  
  /* Pseudo classes */
  .striped-list {
    list-style: none;
    padding: 0;
    border-radius: var(--radius);
    overflow: hidden;
  }
  .striped-list li {
    padding: 10px 16px;
    transition: background 0.2s;
  }
  .striped-list li:nth-child(odd) {
    background: var(--brand-light);
  }
  .striped-list li:hover {
    background: var(--brand);
    color: white;
    cursor: pointer;
  }
  .striped-list li:first-child {
    font-weight: bold;
  }
  
  /* Pseudo elements */
  .testimonial {
    position: relative;
    padding: 20px 20px 20px 50px;
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    margin: 16px 0;
    font-style: italic;
    color: var(--muted);
  }
  .testimonial::before {
    content: "❝";
    position: absolute;
    left: 12px;
    top: 8px;
    font-size: 36px;
    color: var(--brand);
    font-style: normal;
  }
  .testimonial .author {
    font-style: normal;
    font-weight: bold;
    color: var(--text);
    margin-top: 8px;
  }
  
  /* Required label */
  .required::after {
    content: " *";
    color: #ef4444;
  }
  
  .btn {
    padding: 10px 20px;
    background: var(--brand);
    color: white;
    border: none;
    border-radius: var(--radius);
    cursor: pointer;
    transition: all 0.3s;
  }
  .btn:hover {
    background: var(--accent);
    transform: translateY(-1px);
  }
  .btn:active {
    transform: scale(0.97);
  }
</style>

<h3>🎨 CSS Variables in Action</h3>
<div class="var-card">
  All values come from <code>:root</code> variables!
</div>

<h3>📋 Pseudo Classes</h3>
<ul class="striped-list">
  <li>First item (bold via :first-child)</li>
  <li>Second item</li>
  <li>Third item (alternating bg)</li>
  <li>Fourth item</li>
  <li>Fifth item</li>
</ul>

<h3>💬 Pseudo Element (::before quote)</h3>
<div class="testimonial">
  This platform taught me HTML and CSS 
  from scratch. The examples are amazing!
  <div class="author">— Sarah, Student</div>
</div>

<h3>📝 Required Label (::after)</h3>
<p>
  <label class="required">Email</label><br>
  <input type="email" placeholder="you@mail.com" 
    style="padding:8px; border-radius:6px; 
    border:2px solid #ddd; margin-top:4px;">
</p>

<h3>🖱️ Hover + Active states</h3>
<button class="btn">Hover & Click Me!</button>`,
          quiz: [
            { question: "How do you define a CSS variable?", options: ["$color: blue", "var color = blue", "--color: blue (in a selector)", "@variable color blue"], correctIndex: 2 },
            { question: "How do you USE a CSS variable?", options: ["$color", "var(--color)", "use(--color)", "--color"], correctIndex: 1 },
            { question: "Which pseudo elements add decorative content?", options: [":hover and :active", "::before and ::after", "::first-line and ::first-letter", ":nth-child and :last-child"], correctIndex: 1 },
            { question: "Do ::before/::after work on <img> tags?", options: ["Yes", "No — only on elements that can have children", "Only with display: block", "Only in Chrome"], correctIndex: 1 },
            { question: "What is REQUIRED for ::before/::after to appear?", options: ["display: block", "content property (even empty '')", "position: absolute", "z-index"], correctIndex: 1 },
          ],
        },
      ],
    },
  ],
};
