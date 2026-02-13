import type { Course } from "./courseData";

export const htmlCourse: Course = {
  id: "html",
  title: "HTML",
  description: "Learn the building blocks of the web",
  icon: "🌐",
  color: "primary",
  topics: [
    {
      id: "html-basics",
      title: "HTML Basics",
      icon: "📄",
      level: "beginner",
      lessons: [
        {
          id: "what-is-html",
          title: "What is HTML?",
          description: "Understand the foundation of every webpage",
          content: `# What is HTML?

## 🔍 What is this?

**HTML** stands for **HyperText Markup Language**. Think of it as the **skeleton** of a website — it defines the structure and content of every web page you see.

Just like a house needs a frame before you add paint and furniture, every website needs HTML before you add styling (CSS) or interactivity (JavaScript).

> **Simple analogy:** HTML is like the **blueprint** of a building. It tells the browser *what* to show — headings, paragraphs, images, buttons — but not *how* they look.

---

## 💡 Why do we use this?

- **Every website uses HTML** — Google, YouTube, Amazon, Instagram — they ALL start with HTML
- It's the **foundation** of web development — you can't build a website without it
- It's **required knowledge** for any web development career
- It's the **easiest** programming language to start with
- Works together with **CSS** (styling) and **JavaScript** (interactivity)

---

## ⏰ When should we use this?

You use HTML **whenever** you create web content:

- Building a personal website or portfolio
- Creating a blog post
- Designing a web application
- Making an email template
- Building any front-end project

---

## 🌍 Where is this used in real websites?

| Website | HTML Usage |
|---------|-----------|
| **Google** | Search box, results list, navigation |
| **YouTube** | Video player, titles, comments |
| **Amazon** | Product cards, forms, navigation |
| **Wikipedia** | Articles, tables, headings |

**Every single website** on the internet uses HTML at its core!

---

## 📝 Syntax

HTML uses **tags** wrapped in angle brackets. Most tags come in pairs:

\`\`\`html
<tagname>Content goes here</tagname>
\`\`\`

- **Opening tag:** \`<tagname>\`
- **Content:** What appears on screen
- **Closing tag:** \`</tagname>\` (has a forward slash)

Some tags are **self-closing** (no content needed):
\`\`\`html
<br>    <!-- line break -->
<img>   <!-- image -->
<hr>    <!-- horizontal rule -->
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Wrong | Correct |
|---------|-------|---------|
| Forgetting closing tag | \`<p>Hello\` | \`<p>Hello</p>\` |
| Wrong nesting | \`<b><i>text</b></i>\` | \`<b><i>text</i></b>\` |
| Missing DOCTYPE | Starting with \`<html>\` | Starting with \`<!DOCTYPE html>\` |
| Using uppercase tags | \`<BODY>\` | \`<body>\` (lowercase preferred) |

---

## 🎯 Interview Tips

> "HTML is a markup language, NOT a programming language. It structures content but doesn't have logic like if/else or loops."

> "HTML5 is the latest version. It introduced semantic elements like \`<header>\`, \`<nav>\`, \`<section>\`, and APIs like localStorage."

---

## 🛠️ Mini Practice

**Task:** Create a simple HTML page with:
1. A heading that says "My First Page"
2. A paragraph introducing yourself
3. A horizontal line between them

Try it in the code editor below! 👇`,
          codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <hr>
  <p>Welcome to my first webpage! 
     I'm learning HTML and it's amazing.</p>
  
  <p>HTML is the foundation of 
     every website on the internet.</p>
</body>
</html>`,
          quiz: [
            { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correctIndex: 0 },
            { question: "What are HTML tags wrapped in?", options: ["Square brackets []", "Curly braces {}", "Angle brackets <>", "Parentheses ()"], correctIndex: 2 },
            { question: "Is HTML a programming language?", options: ["Yes", "No, it's a markup language", "Only in HTML5", "Sometimes"], correctIndex: 1 },
            { question: "Which tag declares an HTML5 document?", options: ["<html5>", "<!DOCTYPE html>", "<version html5>", "<html type='5'>"], correctIndex: 1 },
            { question: "What does a browser do with HTML?", options: ["Compiles it to machine code", "Renders it visually on screen", "Translates it to Python", "Sends it to a server"], correctIndex: 1 },
          ],
        },
        {
          id: "html-structure",
          title: "HTML Document Structure",
          description: "Learn the essential parts of every HTML document",
          content: `# HTML Document Structure

## 🔍 What is this?

Every HTML page follows a **specific structure** — like a letter has a header, body, and signature. An HTML document has three main parts:

1. **\`<!DOCTYPE html>\`** — Tells the browser "this is HTML5"
2. **\`<head>\`** — Information *about* the page (invisible to users)
3. **\`<body>\`** — Everything the user *sees* on screen

> **Simple analogy:** Think of it like a **book**:
> - DOCTYPE = "This is a novel" (book type)
> - \`<head>\` = Title page, ISBN, author (metadata)
> - \`<body>\` = The actual story (content)

---

## 💡 Why do we use this?

- **Browsers need structure** to correctly display your page
- **Search engines** read the \`<head>\` to understand your page
- **Accessibility tools** (screen readers) depend on proper structure
- **Without proper structure**, your page may not display correctly in all browsers

---

## ⏰ When should we use this?

**Every single HTML file** must follow this structure. No exceptions!

Whether you're building:
- A simple "Hello World" page
- A complex web application
- An email template

---

## 🌍 Where is this used in real websites?

Open **any website**, right-click → "View Page Source" — you'll see this exact structure!

Every page on Google, Facebook, or any website starts with:
\`\`\`html
<!DOCTYPE html>
<html>
  <head>...</head>
  <body>...</body>
</html>
\`\`\`

---

## 📝 Syntax

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Metadata goes here -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>
\`\`\`

### What goes in \`<head>\`?

| Tag | Purpose |
|-----|---------|
| \`<title>\` | Browser tab title |
| \`<meta charset>\` | Character encoding (use UTF-8) |
| \`<meta viewport>\` | Mobile responsiveness |
| \`<link>\` | External CSS files |
| \`<meta description>\` | SEO description |

### What goes in \`<body>\`?

Everything users see: text, images, buttons, forms, videos, etc.

---

## ⚠️ Common Mistakes

| Mistake | Problem |
|---------|---------|
| Forgetting \`<!DOCTYPE html>\` | Browser uses "quirks mode" — things look weird |
| No \`<meta charset="UTF-8">\` | Special characters (é, ñ, ü) won't display |
| No viewport meta | Site won't work well on mobile |
| Putting visible content in \`<head>\` | It won't show on screen! |
| Missing \`lang="en"\` on \`<html>\` | Bad for accessibility & SEO |

---

## 🎯 Interview Tips

> "The \`<!DOCTYPE html>\` declaration is NOT an HTML tag. It's an instruction to the browser about the HTML version."

> "The \`<meta viewport>\` tag is essential for responsive design on mobile devices."

---

## 🛠️ Mini Practice

**Task:** Create a properly structured HTML page with:
1. Correct DOCTYPE
2. Language set to English
3. UTF-8 charset
4. Viewport meta tag
5. Title: "My Portfolio"
6. A heading and paragraph in the body`,
          codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" 
    content="width=device-width, initial-scale=1.0">
  <meta name="description" 
    content="My personal portfolio website">
  <title>My Portfolio</title>
</head>
<body>
  <h1>Welcome to My Portfolio!</h1>
  <p>I'm a web developer learning 
     HTML and CSS step by step.</p>
  <p>This page has proper structure 
     with all essential meta tags.</p>
</body>
</html>`,
          quiz: [
            { question: "What does <!DOCTYPE html> do?", options: ["Creates a paragraph", "Declares this is an HTML5 document", "Adds a title", "Starts the body"], correctIndex: 1 },
            { question: "Where does the <title> tag go?", options: ["<body>", "<footer>", "<head>", "<main>"], correctIndex: 2 },
            { question: "What does <body> contain?", options: ["Metadata only", "All visible content", "Only CSS styles", "Server code"], correctIndex: 1 },
            { question: "Why is meta charset='UTF-8' important?", options: ["Makes page faster", "Displays special characters correctly", "Adds colors", "Creates links"], correctIndex: 1 },
            { question: "What does the viewport meta tag help with?", options: ["SEO only", "Mobile responsiveness", "Page speed", "Security"], correctIndex: 1 },
          ],
        },
        {
          id: "headings-paragraphs",
          title: "Headings & Paragraphs",
          description: "Structure your text content properly",
          content: `# Headings & Paragraphs

## 🔍 What is this?

**Headings** (\`<h1>\` to \`<h6>\`) are titles and subtitles on your page. **Paragraphs** (\`<p>\`) are blocks of text.

> **Simple analogy:** Like a **newspaper** — big headlines (\`<h1>\`), section titles (\`<h2>\`), and article text (\`<p>\`).

- \`<h1>\` = Main title (biggest, most important)
- \`<h2>\` = Section title
- \`<h3>\` = Subsection title
- \`<h4>\` to \`<h6>\` = Smaller headings
- \`<p>\` = Paragraph text

---

## 💡 Why do we use this?

- **Structure** — Organizes content into sections
- **SEO** — Search engines use headings to understand your page
- **Accessibility** — Screen readers navigate by headings
- **Readability** — Users can scan your page quickly

---

## ⏰ When should we use this?

| Situation | Use |
|-----------|-----|
| Page title | \`<h1>\` |
| Blog post sections | \`<h2>\` |
| Subsections within sections | \`<h3>\` |
| Any block of text | \`<p>\` |
| Short line break | \`<br>\` |

---

## 🌍 Where is this used in real websites?

- **Blog posts** — Title (\`<h1>\`), sections (\`<h2>\`), content (\`<p>\`)
- **News sites** — Headlines and article text
- **Documentation** — Structured sections
- **E-commerce** — Product names and descriptions

---

## 📝 Syntax

\`\`\`html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<p>This is a paragraph of text.</p>
<p>Line one.<br>Line two (with break).</p>
<!-- This is a comment - invisible to users -->
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Why it's wrong |
|---------|---------------|
| Multiple \`<h1>\` tags | Only use ONE \`<h1>\` per page (bad for SEO) |
| Skipping levels (h1 → h3) | Always go in order: h1 → h2 → h3 |
| Using headings for styling | Use CSS for size, headings for structure |
| Not using \`<p>\` for text | Plain text without \`<p>\` has no spacing |

---

## 🎯 Interview Tips

> "Each page should have exactly ONE \`<h1>\` tag for SEO. It tells search engines the main topic of the page."

> "Headings create a document outline. Screen readers let users jump between headings to navigate."

---

## 🛠️ Mini Practice

**Task:** Create a blog post structure with:
1. One \`<h1>\` for the blog title
2. Three \`<h2>\` sections
3. At least one \`<h3>\` subsection
4. Paragraphs under each heading
5. A comment in the code`,
          codeExample: `<h1>My Web Development Journey</h1>

<h2>Getting Started</h2>
<p>I began learning HTML last month. 
   It's the foundation of every website.</p>

<h3>First Steps</h3>
<p>My first task was understanding 
   how HTML documents are structured.</p>

<h2>What I've Learned</h2>
<p>So far I've covered headings, paragraphs, 
   and document structure.</p>

<h2>What's Next</h2>
<p>Next, I'll learn about links, images, 
   and lists.<br>
   I can't wait to build my first project!</p>

<!-- This page uses proper heading hierarchy -->`,
          quiz: [
            { question: "How many heading levels exist in HTML?", options: ["4", "5", "6", "8"], correctIndex: 2 },
            { question: "How many <h1> tags should a page have?", options: ["As many as needed", "Exactly one", "At least two", "None"], correctIndex: 1 },
            { question: "What tag creates a paragraph?", options: ["<text>", "<para>", "<p>", "<pg>"], correctIndex: 2 },
            { question: "Why shouldn't you skip heading levels?", options: ["It causes errors", "Bad for SEO and accessibility", "It looks ugly", "The page won't load"], correctIndex: 1 },
            { question: "What does <br> do?", options: ["Makes text bold", "Creates a line break", "Adds a border", "Creates a button"], correctIndex: 1 },
          ],
        },
        {
          id: "html-attributes",
          title: "HTML Attributes",
          description: "Add extra info to your HTML elements",
          content: `# HTML Attributes

## 🔍 What is this?

**Attributes** provide **extra information** about HTML elements. They're written inside the opening tag.

> **Simple analogy:** If a tag is a **noun** (like "car"), attributes are **adjectives** (like "red car", "fast car"). They describe and configure the element.

\`\`\`html
<tag attribute="value">Content</tag>
\`\`\`

---

## 💡 Why do we use this?

- **Configure elements** — Set image source, link destination, input type
- **Identify elements** — Use \`id\` and \`class\` for CSS/JavaScript
- **Accessibility** — Add \`alt\` text, \`aria-label\` for screen readers
- **SEO** — \`title\`, \`lang\`, \`meta\` attributes help search engines

---

## ⏰ When should we use this?

| You need to... | Use attribute |
|----------------|--------------|
| Link to a URL | \`href\` |
| Show an image | \`src\`, \`alt\` |
| Style with CSS | \`class\`, \`id\` |
| Add tooltip | \`title\` |
| Open in new tab | \`target="_blank"\` |
| Set input type | \`type\` |
| Make field required | \`required\` |

---

## 🌍 Where is this used in real websites?

- **Every link** uses \`href\`
- **Every image** uses \`src\` and \`alt\`
- **Every styled element** uses \`class\`
- **Every form input** uses \`type\`, \`name\`, \`placeholder\`

---

## 📝 Syntax

### Common Attributes

\`\`\`html
<!-- Global attributes (work on any element) -->
<p id="intro" class="highlight" title="Hover me">
  Text with attributes
</p>

<!-- Link attributes -->
<a href="https://google.com" target="_blank">Google</a>

<!-- Image attributes -->
<img src="photo.jpg" alt="A sunset" width="300">

<!-- Input attributes -->
<input type="email" placeholder="you@mail.com" required>
\`\`\`

### Rules:
- Attributes go in the **opening tag**
- Use **lowercase** for attribute names
- Values go in **double quotes**
- Some attributes don't need values: \`required\`, \`disabled\`

---

## ⚠️ Common Mistakes

| Mistake | Wrong | Correct |
|---------|-------|---------|
| Missing quotes | \`href=google.com\` | \`href="google.com"\` |
| Attribute in closing tag | \`</p class="x">\` | \`<p class="x">...</p>\` |
| Duplicate IDs | Two elements with \`id="main"\` | IDs must be unique |
| Forgetting alt on images | \`<img src="x.jpg">\` | \`<img src="x.jpg" alt="desc">\` |

---

## 🎯 Interview Tips

> "\`id\` must be unique on a page. \`class\` can be reused on multiple elements."

> "Boolean attributes like \`required\`, \`disabled\`, \`checked\` don't need a value — their presence is enough."

---

## 🛠️ Mini Practice

**Task:** Create a page with:
1. A paragraph with an \`id\` and \`class\`
2. A link that opens in a new tab
3. An image with \`alt\` text and dimensions
4. A required email input with a placeholder`,
          codeExample: `<h1>HTML Attributes Demo</h1>

<!-- id and class attributes -->
<p id="intro" class="highlight" 
   title="Hover to see this tooltip!">
  This paragraph has id, class, and title.
</p>

<!-- Link with target -->
<a href="https://google.com" 
   target="_blank" 
   rel="noopener">
  Open Google in new tab
</a>

<br><br>

<!-- Image with alt -->
<img src="https://picsum.photos/300/150" 
     alt="A beautiful random photo"
     width="300" height="150">

<br><br>

<!-- Input with attributes -->
<label for="email">Email:</label>
<input type="email" 
       id="email"
       placeholder="you@example.com" 
       required>`,
          quiz: [
            { question: "Where do attributes go?", options: ["In the closing tag", "In the opening tag", "Between tags", "In a separate file"], correctIndex: 1 },
            { question: "Can two elements have the same id?", options: ["Yes", "No, IDs must be unique", "Only in forms", "Only with JavaScript"], correctIndex: 1 },
            { question: "What does the alt attribute do on images?", options: ["Adds animation", "Provides text description for accessibility", "Changes the color", "Makes it clickable"], correctIndex: 1 },
            { question: "Which attribute opens a link in a new tab?", options: ["new='true'", "open='tab'", "target='_blank'", "blank='true'"], correctIndex: 2 },
            { question: "Which is a boolean attribute?", options: ["href", "src", "required", "class"], correctIndex: 2 },
          ],
        },
        {
          id: "html-comments",
          title: "HTML Comments",
          description: "Add invisible notes to your code",
          content: `# HTML Comments

## 🔍 What is this?

**Comments** are notes in your code that browsers **ignore**. They're invisible to users but help developers understand the code.

\`\`\`html
<!-- This is a comment -->
\`\`\`

---

## 💡 Why do we use this?

- **Explain complex code** — Help yourself and teammates understand logic
- **Temporarily disable code** — Comment out sections during debugging
- **Mark sections** — Organize long HTML files
- **Leave TODO notes** — Remind yourself of unfinished tasks

---

## 📝 Syntax

\`\`\`html
<!-- Single line comment -->

<!-- 
  Multi-line 
  comment 
-->

<!-- TODO: Add footer section -->

<!-- <p>This paragraph won't appear</p> -->
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Nesting comments | You CANNOT nest \`<!-- <!-- -->\` |
| Using \`//\` for comments | That's JavaScript! HTML uses \`<!-- -->\` |
| Putting sensitive info in comments | Users can see comments via View Source |
| Too many comments | Code should be self-explanatory when possible |

---

## 🛠️ Mini Practice

**Task:** Add comments to mark header, main content, and footer sections in your HTML.`,
          codeExample: `<!-- ===== HEADER SECTION ===== -->
<header>
  <h1>My Website</h1>
  <!-- Navigation links -->
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<!-- ===== MAIN CONTENT ===== -->
<main>
  <h2>Welcome!</h2>
  <p>This is the main content area.</p>
  
  <!-- TODO: Add blog posts here -->
  
  <!-- Temporarily disabled feature:
  <section>
    <h2>Newsletter Signup</h2>
    <form>...</form>
  </section>
  -->
</main>

<!-- ===== FOOTER ===== -->
<footer>
  <p>&copy; 2025 My Website</p>
</footer>`,
          quiz: [
            { question: "What is the correct HTML comment syntax?", options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"], correctIndex: 2 },
            { question: "Can users see HTML comments?", options: ["No, never", "Yes, via View Page Source", "Only with JavaScript", "Only on mobile"], correctIndex: 1 },
            { question: "Can you nest HTML comments?", options: ["Yes", "No", "Only in HTML5", "Only one level"], correctIndex: 1 },
            { question: "Should you put passwords in comments?", options: ["Yes, it's safe", "No — users can view source", "Only encrypted", "Only in head"], correctIndex: 1 },
            { question: "What's a good use of comments?", options: ["Styling elements", "Marking code sections and TODOs", "Creating links", "Adding images"], correctIndex: 1 },
          ],
        },
        {
          id: "html-entities",
          title: "HTML Entities",
          description: "Display special characters in HTML",
          content: `# HTML Entities

## 🔍 What is this?

**HTML Entities** are special codes to display characters that HTML reserves or that aren't on your keyboard. They start with \`&\` and end with \`;\`.

> Since \`<\` and \`>\` are used for tags, you need entities to display them as text.

---

## 💡 Why do we use this?

- **Reserved characters** — Display \`<\`, \`>\`, \`&\` as text
- **Special symbols** — ©, ®, €, ™, arrows, math symbols
- **Non-breaking space** — Prevent awkward line breaks
- **Characters not on keyboard** — Emojis, accented letters

---

## 📝 Common Entities

| Entity | Result | Description |
|--------|--------|-------------|
| \`&lt;\` | < | Less than |
| \`&gt;\` | > | Greater than |
| \`&amp;\` | & | Ampersand |
| \`&nbsp;\` | (space) | Non-breaking space |
| \`&copy;\` | © | Copyright |
| \`&reg;\` | ® | Registered |
| \`&trade;\` | ™ | Trademark |
| \`&hearts;\` | ♥ | Heart |
| \`&larr;\` | ← | Left arrow |
| \`&rarr;\` | → | Right arrow |
| \`&euro;\` | € | Euro |
| \`&quot;\` | " | Double quote |

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Forgetting \`;\` | \`&copy\` → \`&copy;\` |
| Using \`<\` in text | Use \`&lt;\` instead |
| Multiple spaces with spaces | HTML collapses spaces — use \`&nbsp;\` |

---

## 🛠️ Mini Practice

**Task:** Create a page showing a code snippet with \`<\` and \`>\` as visible text, plus a copyright notice.`,
          codeExample: `<h2>HTML Entities Demo</h2>

<h3>Reserved Characters</h3>
<p>To write a tag in text: 
   &lt;p&gt;Hello&lt;/p&gt;</p>
<p>The &amp; symbol needs an entity too.</p>

<h3>Common Symbols</h3>
<table border="1" cellpadding="8" 
  style="border-collapse:collapse; 
         font-family:monospace;">
  <tr style="background:#0d9488; color:white;">
    <th>Code</th><th>Result</th>
  </tr>
  <tr><td>&amp;copy;</td><td>&copy;</td></tr>
  <tr><td>&amp;reg;</td><td>&reg;</td></tr>
  <tr><td>&amp;trade;</td><td>&trade;</td></tr>
  <tr><td>&amp;hearts;</td><td>&hearts;</td></tr>
  <tr><td>&amp;larr;</td><td>&larr;</td></tr>
  <tr><td>&amp;rarr;</td><td>&rarr;</td></tr>
  <tr><td>&amp;euro;</td><td>&euro;</td></tr>
</table>

<h3>Non-Breaking Space</h3>
<p>Normal:   multiple   spaces   collapse</p>
<p>Entity: &nbsp;&nbsp;&nbsp;these 
   &nbsp;&nbsp;&nbsp;don't</p>

<hr>
<p>&copy; 2025 My Website&trade; 
   &mdash; All Rights Reserved&reg;</p>`,
          quiz: [
            { question: "What entity displays < as text?", options: ["&less;", "&lt;", "&left;", "&angle;"], correctIndex: 1 },
            { question: "Why do we need HTML entities?", options: ["For colors", "To display reserved characters", "For links", "For images"], correctIndex: 1 },
            { question: "What does &nbsp; create?", options: ["New line", "Non-breaking space", "New paragraph", "Nothing"], correctIndex: 1 },
            { question: "What entity shows ©?", options: ["&copyright;", "&copy;", "&(c);", "&copr;"], correctIndex: 1 },
            { question: "Entities must end with what character?", options: [".", ":", ";", ","], correctIndex: 2 },
          ],
        },
        {
          id: "html-whitespace",
          title: "Whitespace & Formatting",
          description: "How HTML handles spaces, tabs, and newlines",
          content: `# Whitespace in HTML

## 🔍 What is this?

HTML **collapses whitespace** — multiple spaces, tabs, and newlines in your code become a single space in the browser.

---

## 💡 Why does this matter?

- Writing \`Hello     World\` displays as \`Hello World\`
- Newlines in code don't create line breaks on screen
- You need \`<br>\`, \`<p>\`, or CSS for actual spacing

---

## 📝 How to Add Whitespace

| Need | Solution |
|------|---------|
| Line break | \`<br>\` |
| New paragraph | \`<p>\` |
| Multiple spaces | \`&nbsp;\` entities |
| Preserve all whitespace | \`<pre>\` tag |
| Spacing/layout | CSS margin/padding |

---

## 📝 The \`<pre>\` Tag

The \`<pre>\` (preformatted) tag preserves ALL whitespace and uses monospace font:

\`\`\`html
<pre>
  This    preserves
  all     spaces
  and newlines
</pre>
\`\`\`

Great for displaying code snippets!

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Adding extra spaces for indentation on screen | Use CSS \`text-indent\` or padding |
| Using \`<br><br><br>\` for spacing | Use CSS \`margin\` instead |
| Expecting newlines to show | Use \`<br>\` or \`<p>\` tags |

---

## 🛠️ Mini Practice

**Task:** Create a page demonstrating whitespace collapse vs \`<pre>\` preserved text.`,
          codeExample: `<h2>Whitespace in HTML</h2>

<h3>❌ Collapsed (normal)</h3>
<p>These     extra     spaces 
   
   and newlines are collapsed 
   into single spaces.</p>

<h3>✅ Preserved with &lt;pre&gt;</h3>
<pre style="background:#1e293b; color:#86efac; 
  padding:16px; border-radius:8px;">
function greet() {
    console.log("Hello!");
    return true;
}
</pre>

<h3>Line Breaks with &lt;br&gt;</h3>
<p>Line one<br>
   Line two<br>
   Line three</p>

<h3>Non-breaking Spaces</h3>
<p>Normal: Hello World (1 space)</p>
<p>Entity: Hello&nbsp;&nbsp;&nbsp;&nbsp;World 
   (4 &amp;nbsp;)</p>`,
          quiz: [
            { question: "What does HTML do with multiple spaces?", options: ["Shows all of them", "Collapses to one space", "Shows an error", "Removes text"], correctIndex: 1 },
            { question: "Which tag preserves all whitespace?", options: ["<space>", "<white>", "<pre>", "<keep>"], correctIndex: 2 },
            { question: "How to add a line break?", options: ["Press Enter in code", "Use <br>", "Add spaces", "Use <newline>"], correctIndex: 1 },
            { question: "What's the best way to add spacing between elements?", options: ["<br><br><br>", "&nbsp;&nbsp;&nbsp;", "CSS margin/padding", "Extra spaces"], correctIndex: 2 },
            { question: "What does &nbsp; stand for?", options: ["New block space", "Non-breaking space", "Normal basic space", "Nested blank space"], correctIndex: 1 },
          ],
        },
        {
          id: "doctype-deep-dive",
          title: "DOCTYPE Deep Dive",
          description: "Why DOCTYPE matters and its history",
          content: `# DOCTYPE Deep Dive

## 🔍 What is this?

\`<!DOCTYPE html>\` tells browsers which **version** of HTML to use. Without it, browsers enter **quirks mode** — an unpredictable compatibility mode.

---

## 💡 Why does this matter?

- **Standards mode** (with DOCTYPE) — Browser follows modern CSS/HTML rules
- **Quirks mode** (without DOCTYPE) — Browser emulates old bugs for backward compatibility
- **Quirks mode causes:** wrong box model, inconsistent rendering, CSS bugs

---

## 📝 History

| HTML Version | DOCTYPE |
|-------------|---------|
| HTML5 | \`<!DOCTYPE html>\` (simple!) |
| HTML 4.01 | Very long DOCTYPE with URL |
| XHTML 1.0 | Even longer with DTD reference |

HTML5 simplified it to just \`<!DOCTYPE html>\` — no URL, no version number needed!

---

## ⚠️ Rules

- Must be the **very first line** — no spaces or comments before it
- **Not case-sensitive** but \`<!DOCTYPE html>\` is convention
- It's NOT an HTML tag — it's a browser instruction
- Only needed ONCE per page

---

## 🛠️ Mini Practice

**Task:** Check what happens when you remove DOCTYPE from a page — notice how the browser renders things differently.`,
          codeExample: `<!-- ✅ HTML5 DOCTYPE (always use this) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOCTYPE Demo</title>
  <style>
    .box {
      width: 200px;
      padding: 20px;
      border: 5px solid #0d9488;
      background: #f0fdfa;
      margin: 10px;
      font-family: Arial;
    }
  </style>
</head>
<body>
  <h2>DOCTYPE Matters!</h2>
  
  <div class="box">
    <strong>With DOCTYPE:</strong><br>
    Width = 200px total<br>
    (border-box behavior in standards mode)
  </div>
  
  <p>Without DOCTYPE, browsers use 
     <strong>quirks mode</strong> which can 
     cause CSS to render differently!</p>
  
  <h3>Historical DOCTYPEs:</h3>
  <pre style="background:#1e293b; color:#86efac;
    padding:12px; border-radius:8px; 
    font-size:11px; overflow-x:auto;">
HTML5:  &lt;!DOCTYPE html&gt;

HTML4:  &lt;!DOCTYPE HTML PUBLIC 
  "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd"&gt;
  </pre>
  
  <p style="color:#0d9488; font-weight:bold;">
    Always use &lt;!DOCTYPE html&gt; — 
    it's simple and modern! ✅</p>
</body>
</html>`,
          quiz: [
            { question: "What happens without DOCTYPE?", options: ["Page won't load", "Browser uses quirks mode", "No effect", "CSS is disabled"], correctIndex: 1 },
            { question: "Where must DOCTYPE appear?", options: ["In <head>", "In <body>", "Very first line of the file", "At the end"], correctIndex: 2 },
            { question: "Is DOCTYPE an HTML tag?", options: ["Yes", "No — it's a browser instruction", "Only in HTML5", "Sometimes"], correctIndex: 1 },
            { question: "What's the HTML5 DOCTYPE?", options: ["<!DOCTYPE HTML5>", "<!DOCTYPE html>", "<!DOCTYPE version='5'>", "<!html5>"], correctIndex: 1 },
            { question: "Why did HTML5 simplify DOCTYPE?", options: ["Faster loading", "Old versions were unnecessarily complex", "Security reasons", "It doesn't matter"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "html-attributes-deep",
      title: "Attributes Deep Dive",
      icon: "🏷️",
      level: "beginner",
      lessons: [
        {
          id: "global-attributes",
          title: "Global Attributes",
          description: "Attributes that work on every HTML element",
          content: `# Global Attributes

## 🔍 What is this?

**Global attributes** can be used on **any** HTML element. They're universal tools for identification, styling, accessibility, and behavior.

---

## 📝 Key Global Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| \`id\` | Unique identifier | \`id="header"\` |
| \`class\` | Group identifier (reusable) | \`class="card"\` |
| \`style\` | Inline CSS | \`style="color:red"\` |
| \`title\` | Tooltip on hover | \`title="More info"\` |
| \`lang\` | Language of content | \`lang="hi"\` |
| \`dir\` | Text direction | \`dir="rtl"\` (right-to-left) |
| \`hidden\` | Hide element | \`hidden\` |
| \`tabindex\` | Keyboard tab order | \`tabindex="1"\` |
| \`contenteditable\` | Make editable | \`contenteditable="true"\` |
| \`draggable\` | Enable drag | \`draggable="true"\` |
| \`spellcheck\` | Enable spellcheck | \`spellcheck="true"\` |

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Using \`id\` for styling | Prefer \`class\` — more reusable |
| Inline \`style\` everywhere | Use external CSS instead |
| \`tabindex\` > 0 | Messes up natural tab order. Use 0 or -1 |

---

## 🛠️ Mini Practice

**Task:** Create elements using \`title\`, \`hidden\`, \`contenteditable\`, and \`tabindex\`.`,
          codeExample: `<h2>Global Attributes Demo</h2>

<!-- title = tooltip -->
<p title="I'm a tooltip! Hover me.">
  🖱️ Hover over this paragraph.</p>

<!-- contenteditable -->
<div contenteditable="true" 
  style="border:2px dashed #0d9488; 
  padding:12px; border-radius:8px; 
  margin:12px 0;">
  ✏️ Click here and type — I'm editable!
</div>

<!-- lang for different languages -->
<p lang="hi">नमस्ते! यह हिंदी में है।</p>
<p lang="en">Hello! This is in English.</p>

<!-- hidden element -->
<p>The next paragraph is hidden:</p>
<p hidden>You can't see me! 👻</p>

<!-- tabindex for keyboard navigation -->
<h3>Tab Order Demo</h3>
<p>Press Tab key to navigate:</p>
<button tabindex="1" 
  style="padding:8px 16px; margin:4px;">
  First (tabindex=1)</button>
<button tabindex="2" 
  style="padding:8px 16px; margin:4px;">
  Second (tabindex=2)</button>
<button tabindex="3" 
  style="padding:8px 16px; margin:4px;">
  Third (tabindex=3)</button>

<!-- spellcheck -->
<h3>Spellcheck Demo</h3>
<textarea spellcheck="true" rows="2" 
  style="width:100%; padding:8px; 
  border-radius:6px; border:2px solid #ddd;">
  Type a misspelled word here
</textarea>`,
          quiz: [
            { question: "What makes an attribute 'global'?", options: ["It's very popular", "It works on ANY HTML element", "It only works in <body>", "It needs JavaScript"], correctIndex: 1 },
            { question: "What does contenteditable do?", options: ["Adds animation", "Makes element editable by user", "Changes color", "Adds border"], correctIndex: 1 },
            { question: "What does the title attribute show?", options: ["Page title", "Tooltip on hover", "Bold text", "Link destination"], correctIndex: 1 },
            { question: "What does the hidden attribute do?", options: ["Makes text small", "Hides element from the page", "Disables element", "Changes color"], correctIndex: 1 },
            { question: "Should you use id or class for CSS styling?", options: ["Always id", "Prefer class — it's reusable", "Neither", "Both equally"], correctIndex: 1 },
          ],
        },
        {
          id: "data-attributes",
          title: "Data Attributes",
          description: "Store custom data in HTML elements",
          content: `# Data Attributes

## 🔍 What is this?

**Data attributes** (\`data-*\`) let you store **custom data** on any HTML element. They're your own attributes that HTML won't interfere with.

\`\`\`html
<div data-user-id="123" data-role="admin">User Card</div>
\`\`\`

---

## 💡 Why do we use this?

- **Pass data to JavaScript** without extra queries
- **Store metadata** on elements (IDs, types, states)
- **CSS styling hooks** — Style based on data values
- **No conflicts** — \`data-*\` names never clash with HTML attributes

---

## 📝 Syntax

\`\`\`html
<!-- Setting data attributes -->
<button data-action="delete" data-item-id="42">
  Delete
</button>

<!-- Reading in JavaScript -->
<script>
  const btn = document.querySelector('button');
  console.log(btn.dataset.action);  // "delete"
  console.log(btn.dataset.itemId);  // "42" (camelCase!)
</script>

<!-- CSS styling with data attributes -->
<style>
  [data-status="active"] { color: green; }
  [data-status="inactive"] { color: red; }
</style>
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Storing sensitive data | Data attributes are visible in source! |
| Using non-\`data-\` custom attrs | Always prefix with \`data-\` |
| Forgetting camelCase in JS | \`data-user-id\` → \`dataset.userId\` |

---

## 🛠️ Mini Practice

**Task:** Create product cards with \`data-price\`, \`data-category\`, and \`data-in-stock\`.`,
          codeExample: `<style>
  .product {
    border: 2px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    margin: 8px 0;
    font-family: Arial;
  }
  [data-in-stock="true"] {
    border-color: #22c55e;
    background: #f0fdf4;
  }
  [data-in-stock="false"] {
    border-color: #ef4444;
    background: #fef2f2;
    opacity: 0.7;
  }
  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
  }
  [data-in-stock="true"] .badge {
    background: #22c55e; color: white;
  }
  [data-in-stock="false"] .badge {
    background: #ef4444; color: white;
  }
</style>

<h2>Products (styled via data attributes)</h2>

<div class="product" 
  data-price="29.99" 
  data-category="electronics"
  data-in-stock="true">
  <h3>Wireless Mouse</h3>
  <span class="badge">In Stock</span>
  <p>Category: Electronics | $29.99</p>
</div>

<div class="product" 
  data-price="49.99" 
  data-category="audio"
  data-in-stock="false">
  <h3>Bluetooth Speaker</h3>
  <span class="badge">Out of Stock</span>
  <p>Category: Audio | $49.99</p>
</div>

<div class="product" 
  data-price="9.99" 
  data-category="accessories"
  data-in-stock="true">
  <h3>USB Cable</h3>
  <span class="badge">In Stock</span>
  <p>Category: Accessories | $9.99</p>
</div>`,
          quiz: [
            { question: "How do data attributes start?", options: ["custom-", "attr-", "data-", "my-"], correctIndex: 2 },
            { question: "How to access data-user-id in JavaScript?", options: ["element.data.userId", "element.dataset.userId", "element.getAttribute('userId')", "element.userId"], correctIndex: 1 },
            { question: "Can you style based on data attributes in CSS?", options: ["No", "Yes, with [data-attr='value']", "Only with JavaScript", "Only with classes"], correctIndex: 1 },
            { question: "Should you store passwords in data attributes?", options: ["Yes", "No — visible in page source", "Only encrypted", "Only on forms"], correctIndex: 1 },
            { question: "Why use data- prefix for custom attributes?", options: ["It's required by law", "Prevents conflicts with HTML attributes", "Makes page faster", "No reason"], correctIndex: 1 },
          ],
        },
        {
          id: "boolean-aria-attributes",
          title: "Boolean & ARIA Attributes",
          description: "Special attribute types for behavior and accessibility",
          content: `# Boolean & ARIA Attributes

## 🔍 What is this?

**Boolean attributes** don't need a value — their presence alone activates the feature. **ARIA attributes** make your site accessible for people using screen readers.

---

## 📝 Boolean Attributes

\`\`\`html
<!-- These are equivalent: -->
<input required>
<input required="required">
<input required="">

<!-- Common boolean attributes: -->
<input disabled>         <!-- Can't interact -->
<input readonly>         <!-- Can't edit -->
<input checked>          <!-- Pre-checked -->
<video autoplay muted>   <!-- Auto-plays muted -->
<details open>           <!-- Pre-expanded -->
<script defer>           <!-- Load after HTML -->
<script async>           <!-- Load in parallel -->
\`\`\`

---

## 📝 ARIA Attributes

ARIA = **Accessible Rich Internet Applications**

\`\`\`html
<!-- Label for screen readers -->
<button aria-label="Close menu">✕</button>

<!-- Describe element's state -->
<div aria-expanded="false">Menu</div>

<!-- Hide decorative elements -->
<span aria-hidden="true">🎨</span>

<!-- Live region (announces changes) -->
<div aria-live="polite">Status: Loading...</div>

<!-- Describe roles -->
<div role="alert">Error: Invalid email!</div>
<nav role="navigation">...</nav>
\`\`\`

---

## 💡 When to use ARIA?

> **Rule:** Use native HTML first! ARIA is a **last resort**.

| Need | First Choice | ARIA Fallback |
|------|-------------|---------------|
| Button | \`<button>\` | \`<div role="button">\` |
| Navigation | \`<nav>\` | \`<div role="navigation">\` |
| Alert | \`<output>\` | \`<div role="alert">\` |
| Label | \`<label>\` | \`aria-label\` |

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| \`disabled="false"\` | Remove the attribute entirely — presence = true |
| ARIA instead of semantic HTML | Use \`<button>\` not \`<div role="button">\` |
| Decorative icons without \`aria-hidden\` | Screen readers announce every emoji |

---

## 🛠️ Mini Practice

**Task:** Create a form with disabled/required fields, and a button with \`aria-label\`.`,
          codeExample: `<style>
  body { font-family: Arial; padding: 20px; }
  .demo { margin: 16px 0; padding: 16px;
    background: #f0fdfa; border-radius: 8px;
    border: 2px solid #0d9488; }
  input, button { padding: 8px 16px; margin: 4px;
    border-radius: 6px; border: 2px solid #ddd; }
  button { cursor: pointer; background: #0d9488;
    color: white; border: none; }
  input:disabled { background: #f5f5f5;
    cursor: not-allowed; }
</style>

<h2>Boolean Attributes</h2>

<div class="demo">
  <h3>Required vs Optional</h3>
  <label>Name (required): 
    <input type="text" required 
      placeholder="Can't be empty"></label>
  <br><br>
  <label>Nickname (optional): 
    <input type="text" 
      placeholder="Optional"></label>
</div>

<div class="demo">
  <h3>Disabled & Readonly</h3>
  <label>Disabled: 
    <input type="text" disabled 
      value="Can't click me"></label>
  <br><br>
  <label>Readonly: 
    <input type="text" readonly 
      value="Can see but not edit"></label>
</div>

<div class="demo">
  <h3>Checked (pre-selected)</h3>
  <label><input type="checkbox" checked> 
    I agree (pre-checked)</label>
  <br>
  <label><input type="checkbox"> 
    Newsletter (unchecked)</label>
</div>

<h2>ARIA Attributes</h2>

<div class="demo">
  <h3>aria-label (for screen readers)</h3>
  <button aria-label="Close dialog">
    ✕</button>
  <button aria-label="Search">
    🔍</button>
  <button aria-label="Settings">
    ⚙️</button>
  <p><small>Icons have aria-labels so 
    screen readers announce their purpose
  </small></p>
</div>

<div class="demo">
  <h3>aria-hidden (hide decorative icons)</h3>
  <p><span aria-hidden="true">🎉</span> 
    Congratulations! You passed!</p>
  <p><small>The emoji is hidden from 
    screen readers</small></p>
</div>`,
          quiz: [
            { question: "How do boolean attributes work?", options: ["Need value='true'", "Presence alone activates them", "Need JavaScript", "Only work in forms"], correctIndex: 1 },
            { question: "What does ARIA stand for?", options: ["Advanced Rich Internet Apps", "Accessible Rich Internet Applications", "Automatic Reader Interface API", "Alternative Rendering In Apps"], correctIndex: 1 },
            { question: "What does aria-label do?", options: ["Adds visible text", "Provides label for screen readers", "Changes font", "Adds animation"], correctIndex: 1 },
            { question: "Should you use ARIA instead of <button>?", options: ["Yes, always", "No — use native HTML first", "Only for mobile", "Only with CSS"], correctIndex: 1 },
            { question: "What does aria-hidden='true' do?", options: ["Makes element invisible", "Hides from screen readers only", "Deletes element", "Disables element"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "text-media",
      title: "Text & Media",
      icon: "🖼️",
      level: "beginner",
      lessons: [
        {
          id: "formatting-tags",
          title: "Text Formatting",
          description: "Bold, italic, and other text styles",
          content: `# Text Formatting Tags

## 🔍 What is this?

Text formatting tags change how text **looks** on the page — bold, italic, underline, highlight, and more.

There are two types:
- **Visual tags** (\`<b>\`, \`<i>\`) — Just change appearance
- **Semantic tags** (\`<strong>\`, \`<em>\`) — Change appearance AND add meaning

> **Simple analogy:** Visual tags are like putting on a costume 🎭 — you look different but you're the same. Semantic tags are like getting a promotion 📈 — your role actually changes.

---

## 💡 Why do we use this?

- **Emphasize important information** — Bold key points, italic for emphasis
- **Accessibility** — Screen readers say \`<strong>\` text with extra emphasis
- **SEO** — Search engines give weight to \`<strong>\` and \`<em>\` content
- **Readability** — Helps users scan and find important info quickly

---

## ⏰ When should we use this?

| Situation | Tag to Use |
|-----------|-----------|
| Important text | \`<strong>\` |
| Emphasized text | \`<em>\` |
| Highlighted text | \`<mark>\` |
| Chemical formulas (H₂O) | \`<sub>\` |
| Math powers (x²) | \`<sup>\` |
| Old/wrong price | \`<s>\` |
| Fine print | \`<small>\` |

---

## 🌍 Where is this used in real websites?

- **E-commerce:** \`<strong>\` for prices, \`<s>\` for old prices
- **News:** \`<em>\` for quotes, \`<strong>\` for breaking news
- **Documentation:** \`<mark>\` for important notes
- **Science sites:** \`<sub>\` and \`<sup>\` for formulas

---

## 📝 Syntax

\`\`\`html
<strong>Very important text</strong>    <!-- Bold + semantic -->
<b>Just visually bold</b>              <!-- Bold only -->

<em>Emphasized text</em>               <!-- Italic + semantic -->
<i>Just visually italic</i>            <!-- Italic only -->

<mark>Highlighted text</mark>          <!-- Yellow highlight -->
<small>Fine print text</small>         <!-- Smaller text -->
<s>Strikethrough text</s>              <!-- Crossed out -->
<u>Underlined text</u>                 <!-- Underline -->

<p>Water: H<sub>2</sub>O</p>          <!-- Subscript -->
<p>Area: 5m<sup>2</sup></p>           <!-- Superscript -->
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Why it's wrong |
|---------|---------------|
| Using \`<b>\` instead of \`<strong>\` | Misses semantic meaning for SEO and accessibility |
| Using formatting for layout | Use CSS for spacing, sizing — not \`<br>\` or \`<small>\` |
| Overusing \`<strong>\` | If everything is bold, nothing stands out |
| Using \`<u>\` for links | Users think underlined text = link. Use \`<u>\` carefully |

---

## 🎯 Interview Tips

> "Always prefer semantic tags (\`<strong>\`, \`<em>\`) over visual tags (\`<b>\`, \`<i>\`) for better accessibility and SEO."

> "\`<mark>\` is great for search result highlighting — it visually highlights matching text."

---

## 🛠️ Mini Practice

**Task:** Create a product card with:
1. Product name in \`<strong>\`
2. Old price with \`<s>\` and new price in \`<strong>\`
3. A \`<mark>\` tag for "Sale!"
4. \`<small>\` for terms and conditions`,
          codeExample: `<h2>Text Formatting Examples</h2>

<p><strong>Important:</strong> Always save your work 
   before closing the browser.</p>

<p><em>This text is emphasized</em> to draw 
   your attention to this point.</p>

<p><mark>Highlighted!</mark> This part is important 
   and stands out visually.</p>

<p>Water formula: H<sub>2</sub>O</p>
<p>Einstein's equation: E = mc<sup>2</sup></p>

<hr>

<h3>🛒 Product Card</h3>
<p><strong>Premium Headphones</strong></p>
<p><mark>🔥 Sale!</mark></p>
<p><s>$99.99</s> → <strong>$49.99</strong></p>
<p><small>* While supplies last. 
   Terms apply.</small></p>`,
          quiz: [
            { question: "Which tag makes text semantically important?", options: ["<b>", "<strong>", "<bold>", "<imp>"], correctIndex: 1 },
            { question: "What does <em> do?", options: ["Makes text big", "Adds semantic emphasis (italic)", "Creates a link", "Adds color"], correctIndex: 1 },
            { question: "Which tag highlights text with a yellow background?", options: ["<hl>", "<highlight>", "<mark>", "<color>"], correctIndex: 2 },
            { question: "Why prefer <strong> over <b>?", options: ["Looks better", "Has semantic meaning for accessibility & SEO", "Faster loading", "More colorful"], correctIndex: 1 },
            { question: "What does <sub> do?", options: ["Subtitle text", "Subscript (below baseline)", "Subtract text", "Submit text"], correctIndex: 1 },
          ],
        },
        {
          id: "more-text-tags",
          title: "More Text Tags",
          description: "pre, code, kbd, samp, time, progress, meter",
          content: `# More Text Tags

## 🔍 What is this?

HTML has specialized text tags for displaying **code**, **keyboard input**, **time**, **progress**, and **measurements**.

---

## 📝 Tag Reference

| Tag | Purpose | Example |
|-----|---------|---------|
| \`<pre>\` | Preformatted text (keeps spaces) | Code blocks |
| \`<code>\` | Inline code snippet | \`<code>let x = 5;</code>\` |
| \`<kbd>\` | Keyboard input | Press \`<kbd>Ctrl+S</kbd>\` |
| \`<samp>\` | Computer output | \`<samp>Error 404</samp>\` |
| \`<time>\` | Machine-readable date/time | \`<time datetime="2025-01-01">Jan 1</time>\` |
| \`<progress>\` | Progress bar | \`<progress value="70" max="100">\` |
| \`<meter>\` | Measurement gauge | \`<meter value="0.7">\` |

---

## 💡 When to use each?

- **\`<pre>\` + \`<code>\`** → Code blocks in tutorials
- **\`<kbd>\`** → Keyboard shortcuts in documentation
- **\`<time>\`** → Blog post dates (SEO friendly!)
- **\`<progress>\`** → File uploads, loading bars
- **\`<meter>\`** → Disk usage, ratings, scores

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Using \`<pre>\` without \`<code>\` for code | Wrap: \`<pre><code>...</code></pre>\` |
| \`<progress>\` for static values | Use \`<meter>\` for static measurements |
| \`<time>\` without \`datetime\` | Always add machine-readable format |

---

## 🛠️ Mini Practice

**Task:** Create a page with a code block, keyboard shortcuts, a progress bar, and a date using \`<time>\`.`,
          codeExample: `<style>
  body { font-family: Arial; padding: 20px; }
  code { background: #f1f5f9; padding: 2px 6px; 
    border-radius: 4px; font-size: 14px; }
  kbd { background: #1e293b; color: white; 
    padding: 2px 8px; border-radius: 4px; 
    font-size: 13px; border: 1px solid #475569; }
  samp { background: #0f172a; color: #22c55e; 
    padding: 2px 8px; border-radius: 4px; 
    font-family: monospace; }
  pre { background: #1e293b; color: #86efac; 
    padding: 16px; border-radius: 8px; 
    overflow-x: auto; }
  pre code { background: transparent; color: inherit; }
</style>

<h2>Inline Code</h2>
<p>Use <code>console.log()</code> to debug 
   JavaScript.</p>

<h2>Code Block</h2>
<pre><code>function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("World"));</code></pre>

<h2>Keyboard Input</h2>
<p>Save: <kbd>Ctrl</kbd> + <kbd>S</kbd></p>
<p>Copy: <kbd>Ctrl</kbd> + <kbd>C</kbd></p>
<p>Undo: <kbd>Ctrl</kbd> + <kbd>Z</kbd></p>

<h2>Computer Output</h2>
<p>Terminal says: <samp>Build successful ✅</samp></p>

<h2>Time (SEO-friendly dates)</h2>
<p>Published: <time datetime="2025-06-15">
  June 15, 2025</time></p>

<h2>Progress Bar</h2>
<label>Course progress:</label><br>
<progress value="7" max="10" 
  style="width:200px; height:20px;">
</progress> 70%

<h2>Meter (Gauge)</h2>
<label>Disk usage:</label><br>
<meter value="0.7" min="0" max="1" 
  low="0.3" high="0.7" optimum="0.5"
  style="width:200px; height:20px;">
</meter> 70%`,
          quiz: [
            { question: "Which tag displays preformatted text?", options: ["<format>", "<raw>", "<pre>", "<fixed>"], correctIndex: 2 },
            { question: "What does <kbd> represent?", options: ["Key-based drawing", "Keyboard input", "Kind bold", "Knowledge base"], correctIndex: 1 },
            { question: "What does <time datetime='...'> help with?", options: ["Animation timing", "SEO — machine-readable dates", "Page speed", "Keyboard shortcuts"], correctIndex: 1 },
            { question: "When to use <meter> vs <progress>?", options: ["Same thing", "meter=static measurement, progress=ongoing task", "progress=static, meter=ongoing", "No difference"], correctIndex: 1 },
            { question: "How to display a code block?", options: ["<code> only", "<pre><code>...code...</code></pre>", "<block>", "<script>"], correctIndex: 1 },
          ],
        },
        {
          id: "links-images",
          title: "Links & Images",
          description: "Connect pages and add visuals",
          content: `# Links & Images

## 🔍 What is this?

**Links** (\`<a>\`) let users click to navigate to other pages, websites, or sections. **Images** (\`<img>\`) display pictures on your page.

> **Simple analogy:** Links are like **doors** 🚪 — they take you somewhere new. Images are like **paintings** 🖼️ hung on the wall.

---

## 💡 Why do we use this?

### Links:
- **Navigation** — Move between pages on your site
- **External references** — Link to other websites
- **Downloads** — Link to files (PDFs, images)
- **Page sections** — Jump to a specific part of a page (anchor links)

### Images:
- **Visual communication** — Pictures convey information faster than text
- **Branding** — Logos, banners, hero images
- **Products** — Show what you're selling
- **User experience** — Pages with images are more engaging

---

## 📝 Syntax

### Links
\`\`\`html
<a href="https://google.com">Visit Google</a>
<a href="https://google.com" target="_blank" rel="noopener">New tab</a>
<a href="#contact">Jump to Contact</a>
<a href="mailto:hi@example.com">Email Us</a>
\`\`\`

### Images
\`\`\`html
<img src="photo.jpg" alt="Sunset at beach" width="400" height="300">
<a href="https://example.com">
  <img src="logo.png" alt="Company Logo">
</a>
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Why it's wrong |
|---------|---------------|
| Missing \`alt\` on images | Breaks accessibility |
| Not using \`rel="noopener"\` with \`target="_blank"\` | Security vulnerability |
| Broken image paths | Case-sensitive file names! |

---

## 🎯 Interview Tips

> "The \`alt\` attribute is essential for accessibility and SEO. It also shows when the image fails to load."

> "\`target='_blank'\` should always be paired with \`rel='noopener noreferrer'\`."`,
          codeExample: `<h2>My Projects</h2>

<!-- Clickable image link -->
<a href="https://example.com" target="_blank" 
   rel="noopener">
  <img 
    src="https://picsum.photos/400/200" 
    alt="My portfolio project screenshot"
    width="400" height="200"
    style="border-radius: 8px;">
</a>

<p>
  <a href="https://github.com" target="_blank" 
     rel="noopener">
    🔗 View on GitHub
  </a>
</p>

<!-- Email link -->
<p>📧 <a href="mailto:hello@example.com">
  Contact Me
</a></p>

<!-- Anchor link -->
<p><a href="#about">⬇️ Jump to About section</a></p>

<div style="height: 300px;"></div>

<section id="about">
  <h2>About Me</h2>
  <p>I'm a web developer learning HTML!</p>
</section>`,
          quiz: [
            { question: "Which tag creates a clickable link?", options: ["<link>", "<a>", "<href>", "<url>"], correctIndex: 1 },
            { question: "Why is the alt attribute on images important?", options: ["Makes images colorful", "Required for accessibility and SEO", "Adds animations", "Makes images bigger"], correctIndex: 1 },
            { question: "How do you open a link in a new tab?", options: ["new='true'", "target='_blank'", "open='new'", "tab='new'"], correctIndex: 1 },
            { question: "Which creates an email link?", options: ["href='email:...'", "href='mail:...'", "href='mailto:...'", "href='send:...'"], correctIndex: 2 },
            { question: "Is <img> a self-closing tag?", options: ["Yes — no closing tag needed", "No — needs </img>", "Sometimes", "Only in HTML5"], correctIndex: 0 },
          ],
        },
        {
          id: "responsive-images",
          title: "Responsive Images",
          description: "picture, srcset, lazy loading, figure",
          content: `# Responsive Images

## 🔍 What is this?

**Responsive images** adapt to different screen sizes and devices. HTML provides \`<picture>\`, \`srcset\`, \`loading="lazy"\`, and \`<figure>\` for this.

---

## 📝 Key Concepts

### 1. \`<figure>\` + \`<figcaption>\`
Wraps an image with a caption — semantic and accessible:
\`\`\`html
<figure>
  <img src="chart.png" alt="Sales chart">
  <figcaption>Figure 1: Sales data for 2025</figcaption>
</figure>
\`\`\`

### 2. \`srcset\` + \`sizes\`
Serve different image sizes based on screen:
\`\`\`html
<img src="small.jpg"
     srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
     alt="Responsive photo">
\`\`\`

### 3. \`<picture>\` element
Serve different image **formats** or art direction:
\`\`\`html
<picture>
  <source media="(max-width: 600px)" srcset="mobile.jpg">
  <source media="(max-width: 1000px)" srcset="tablet.jpg">
  <img src="desktop.jpg" alt="Hero image">
</picture>
\`\`\`

### 4. Lazy Loading
Load images only when they scroll into view:
\`\`\`html
<img src="photo.jpg" alt="..." loading="lazy">
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| No \`alt\` on \`<img>\` inside \`<picture>\` | The \`<img>\` fallback still needs \`alt\` |
| Lazy loading above-the-fold images | Only lazy-load below-fold images |
| Using \`<figure>\` without \`<figcaption>\` | If no caption needed, just use \`<img>\` |

---

## 🛠️ Mini Practice

**Task:** Create a photo gallery with \`<figure>\`, lazy loading, and a \`<picture>\` element.`,
          codeExample: `<style>
  body { font-family: Arial; padding: 20px; }
  figure { margin: 0 0 20px; }
  figcaption { font-size: 13px; color: #666;
    text-align: center; margin-top: 8px;
    font-style: italic; }
  img { max-width: 100%; height: auto;
    border-radius: 8px; }
</style>

<h2>📸 Responsive Images</h2>

<h3>1. Figure with Caption</h3>
<figure>
  <img src="https://picsum.photos/500/300" 
    alt="Beautiful landscape photo">
  <figcaption>Figure 1: A beautiful landscape 
    with semantic HTML markup</figcaption>
</figure>

<h3>2. Lazy Loading</h3>
<p>This image loads only when you scroll to it:</p>
<img src="https://picsum.photos/500/300?random=2" 
  alt="Lazy loaded photo" 
  loading="lazy"
  width="500" height="300">

<h3>3. Picture Element</h3>
<picture>
  <source media="(max-width: 400px)" 
    srcset="https://picsum.photos/400/300?random=3">
  <source media="(max-width: 800px)" 
    srcset="https://picsum.photos/800/400?random=3">
  <img src="https://picsum.photos/1200/500?random=3" 
    alt="Responsive hero image"
    style="width:100%; border-radius:8px;">
</picture>
<p style="color:#666; font-size:13px;">
  ☝️ This image changes based on screen size 
  using &lt;picture&gt; element</p>

<h3>4. Figure vs Plain Image</h3>
<p><strong>Use &lt;figure&gt;</strong> when image 
  has a caption or is referenced in text.</p>
<p><strong>Use plain &lt;img&gt;</strong> for 
  decorative or inline images.</p>`,
          quiz: [
            { question: "What does loading='lazy' do?", options: ["Makes image smaller", "Loads image only when scrolled into view", "Adds animation", "Compresses image"], correctIndex: 1 },
            { question: "What is <figure> used for?", options: ["Making images bigger", "Wrapping image with semantic caption", "Creating figures", "Drawing shapes"], correctIndex: 1 },
            { question: "What does <picture> allow?", options: ["3D images", "Different images for different screen sizes", "Image editing", "Image filters"], correctIndex: 1 },
            { question: "Should above-the-fold images be lazy loaded?", options: ["Yes, always", "No — they should load immediately", "Only on mobile", "Only with JavaScript"], correctIndex: 1 },
            { question: "What does srcset specify?", options: ["Image colors", "Multiple image sources for different sizes", "Image borders", "Image captions"], correctIndex: 1 },
          ],
        },
        {
          id: "lists-tables",
          title: "Lists & Tables",
          description: "Organize data with lists and tables",
          content: `# Lists & Tables

## 🔍 What is this?

**Lists** organize items in order or as bullet points. **Tables** display data in rows and columns.

> **Simple analogy:** 
> - Lists = **Shopping list** 🛒 (items one after another)
> - Tables = **Spreadsheet** 📊 (data in rows and columns)

### Three Types of Lists:
1. **Unordered** (\`<ul>\`) — Bullet points (no specific order)
2. **Ordered** (\`<ol>\`) — Numbered items (order matters)
3. **Description** (\`<dl>\`) — Term + definition pairs

---

## 💡 Why do we use this?

### Lists:
- **Navigation menus** — Navbars are just styled lists!
- **Feature lists** — Show what's included
- **Steps/instructions** — Ordered processes

### Tables:
- **Data comparison** — Pricing plans, specs
- **Schedules** — Timetables, calendars
- **Reports** — Financial data, statistics

---

## ⚠️ Common Mistakes

| Mistake | Why it's wrong |
|---------|---------------|
| Using tables for page layout | Use CSS Grid/Flexbox instead |
| \`<li>\` outside of \`<ul>\` or \`<ol>\` | \`<li>\` must be direct child of a list |
| Missing \`<thead>\`/\`<tbody>\` | Bad for accessibility |
| Forgetting \`<th>\` for headers | Screen readers can't distinguish headers |

---

## 🎯 Interview Tips

> "Never use tables for layout! Tables are for tabular data only."

> "Navbars are semantically unordered lists (\`<ul>\`) styled with CSS."`,
          codeExample: `<h2>🛒 Product Features</h2>
<ul>
  <li>Wireless Bluetooth 5.0</li>
  <li>30-hour battery life</li>
  <li>Active noise cancellation</li>
  <li>Foldable design</li>
</ul>

<h2>📋 How to Order</h2>
<ol>
  <li>Choose your color</li>
  <li>Add to cart</li>
  <li>Complete checkout</li>
</ol>

<h2>📊 Plan Comparison</h2>
<table border="1" cellpadding="10" 
       cellspacing="0"
       style="border-collapse: collapse; 
              width: 100%;">
  <thead style="background: #0d9488; 
                color: white;">
    <tr>
      <th>Feature</th>
      <th>Free</th>
      <th>Pro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Storage</td>
      <td>5 GB</td>
      <td>100 GB</td>
    </tr>
    <tr>
      <td>Support</td>
      <td>Email</td>
      <td>24/7 Live Chat</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>$0/mo</td>
      <td>$9.99/mo</td>
    </tr>
  </tbody>
</table>`,
          quiz: [
            { question: "Which tag creates a bullet list?", options: ["<ol>", "<ul>", "<list>", "<bl>"], correctIndex: 1 },
            { question: "What does <li> stand for?", options: ["Line item", "List item", "Link item", "Layout item"], correctIndex: 1 },
            { question: "Should you use tables for page layout?", options: ["Yes, always", "No, use CSS Grid/Flexbox", "Only for mobile", "Only in HTML5"], correctIndex: 1 },
            { question: "What's the difference between <th> and <td>?", options: ["Color", "Size", "th is header, td is data", "No difference"], correctIndex: 2 },
            { question: "What element must <li> be inside?", options: ["<div>", "<ul> or <ol>", "<body>", "<section>"], correctIndex: 1 },
          ],
        },
        {
          id: "advanced-tables",
          title: "Advanced Tables",
          description: "colspan, rowspan, caption, scope, accessible tables",
          content: `# Advanced Tables

## 🔍 What is this?

Advanced table features let you create **complex**, **merged-cell**, and **accessible** tables with captions, column/row spanning, and proper structure.

---

## 📝 Key Features

### Table Structure
\`\`\`html
<table>
  <caption>Monthly Sales Report</caption>
  <thead>...</thead>
  <tbody>...</tbody>
  <tfoot>...</tfoot>
</table>
\`\`\`

### colspan & rowspan
\`\`\`html
<td colspan="2">Spans 2 columns</td>
<td rowspan="3">Spans 3 rows</td>
\`\`\`

### scope attribute (Accessibility)
\`\`\`html
<th scope="col">Name</th>    <!-- Column header -->
<th scope="row">Total</th>   <!-- Row header -->
\`\`\`

---

## 💡 Why does this matter?

- **\`<caption>\`** — Describes the table for screen readers
- **\`<thead>\`/\`<tbody>\`/\`<tfoot>\`** — Semantic structure, enables sticky headers
- **\`scope\`** — Screen readers correctly associate headers with data
- **\`colspan\`/\`rowspan\`** — Merge cells for complex layouts

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| No \`<caption>\` | Always add for accessibility |
| Missing \`scope\` on \`<th>\` | Helps screen readers navigate |
| Using colspan for layout | Tables are for data only |

---

## 🛠️ Mini Practice

**Task:** Create a schedule table with merged cells, caption, thead/tbody/tfoot, and scope attributes.`,
          codeExample: `<style>
  table { border-collapse: collapse; width: 100%;
    font-family: Arial; font-size: 14px; }
  th, td { border: 1px solid #ddd; padding: 10px; }
  th { background: #0d9488; color: white; }
  caption { font-weight: bold; font-size: 16px;
    margin-bottom: 8px; color: #0d9488; }
  tfoot { background: #f0fdfa; font-weight: bold; }
</style>

<table>
  <caption>📊 Q1 Sales Report</caption>
  
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Product A</th>
      <th scope="col">Product B</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$5,000</td>
      <td>$3,000</td>
      <td>$8,000</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>$6,200</td>
      <td>$4,100</td>
      <td>$10,300</td>
    </tr>
    <tr>
      <th scope="row">March</th>
      <td>$7,500</td>
      <td>$5,000</td>
      <td>$12,500</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <th scope="row">Q1 Total</th>
      <td colspan="2" style="text-align:center;">
        Combined Products</td>
      <td><strong>$30,800</strong></td>
    </tr>
  </tfoot>
</table>

<h3 style="margin-top:24px;">
  Colspan & Rowspan Demo</h3>
<table>
  <tr>
    <th colspan="3" style="text-align:center;">
      Schedule (colspan=3)</th>
  </tr>
  <tr>
    <td rowspan="2" 
      style="background:#f0fdfa; 
      font-weight:bold;">
      Morning<br>(rowspan=2)</td>
    <td>9:00 - Math</td>
    <td>10:00 - English</td>
  </tr>
  <tr>
    <td>9:00 - Science</td>
    <td>10:00 - Art</td>
  </tr>
</table>`,
          quiz: [
            { question: "What does <caption> do in a table?", options: ["Adds a border", "Provides a title/description", "Colors the header", "Merges cells"], correctIndex: 1 },
            { question: "What does colspan='2' do?", options: ["Makes cell twice as tall", "Spans cell across 2 columns", "Adds 2 borders", "Creates 2 rows"], correctIndex: 1 },
            { question: "What does the scope attribute help with?", options: ["Styling", "Screen reader accessibility", "Performance", "SEO"], correctIndex: 1 },
            { question: "What goes in <tfoot>?", options: ["Table title", "Table summary/totals", "Table borders", "Table scripts"], correctIndex: 1 },
            { question: "Where should <thead> appear?", options: ["After <tbody>", "Before <tbody>", "Inside <tbody>", "After <tfoot>"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "html-forms",
      title: "Forms",
      icon: "📝",
      level: "intermediate",
      lessons: [
        {
          id: "form-basics",
          title: "Form Basics",
          description: "Create interactive forms for user input",
          content: `# HTML Forms

## 🔍 What is this?

**Forms** collect information from users — like login credentials, search queries, feedback, and orders. The \`<form>\` element wraps all the input fields.

> **Simple analogy:** A form is like a **paper application** you fill out at a doctor's office — name, email, checkboxes, signature, submit.

---

## 💡 Why do we use this?

- **User authentication** — Login, signup, password reset
- **Data collection** — Surveys, feedback, contact forms
- **Search** — Google's search bar is a form!
- **E-commerce** — Checkout, payment, shipping info
- **File uploads** — Profile pictures, documents

Forms are the **primary way** users interact with web applications.

---

## 📝 Syntax

\`\`\`html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Submit</button>
</form>
\`\`\`

### Key Attributes:
- **action** — Where to send the data (URL)
- **method** — How to send: \`GET\` (in URL) or \`POST\` (hidden)
- **name** — Key name for the data (server reads this)
- **required** — Must be filled before submit

---

## ⚠️ Common Mistakes

| Mistake | Why it's wrong |
|---------|---------------|
| No \`<label>\` for inputs | Screen readers can't identify the field |
| Missing \`name\` attribute | Server won't receive the data! |
| Using GET for passwords | Password visible in URL! Use POST |

---

## 🎯 Interview Tips

> "The \`name\` attribute is what gets sent to the server. Without it, the input data is ignored."

> "Always use \`<label>\` paired with inputs via \`for\`/\`id\` matching."`,
          codeExample: `<style>
  form { max-width: 400px; margin: 20px auto;
    font-family: Arial, sans-serif; }
  .form-group { margin-bottom: 16px; }
  label { display: block; margin-bottom: 4px;
    font-weight: bold; color: #333; }
  input[type="text"], input[type="email"],
  input[type="password"], input[type="number"],
  select, textarea { width: 100%; padding: 10px;
    border: 2px solid #ddd; border-radius: 6px;
    font-size: 14px; box-sizing: border-box; }
  input:focus { border-color: #0d9488; outline: none; }
  button { width: 100%; padding: 12px;
    background: #0d9488; color: white; border: none;
    border-radius: 6px; font-size: 16px; cursor: pointer; }
  button:hover { background: #0f766e; }
</style>

<form action="/register" method="POST">
  <h2 style="text-align:center; 
    color:#0d9488;">📝 Sign Up</h2>
  
  <div class="form-group">
    <label for="name">Full Name</label>
    <input type="text" id="name" name="name" 
      placeholder="John Doe" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" 
      placeholder="john@example.com" required>
  </div>
  
  <div class="form-group">
    <label for="pass">Password</label>
    <input type="password" id="pass" name="password" 
      minlength="8" placeholder="Min 8 chars" required>
  </div>
  
  <div class="form-group">
    <label>Gender</label>
    <label style="font-weight:normal">
      <input type="radio" name="gender" value="male"> Male
    </label>
    <label style="font-weight:normal">
      <input type="radio" name="gender" value="female"> Female
    </label>
  </div>
  
  <div class="form-group">
    <label style="font-weight:normal">
      <input type="checkbox" required> 
      I agree to the Terms of Service
    </label>
  </div>
  
  <button type="submit">Create Account</button>
</form>`,
          quiz: [
            { question: "What attribute specifies where form data is sent?", options: ["method", "action", "target", "send"], correctIndex: 1 },
            { question: "Which input type hides characters?", options: ["hidden", "secret", "password", "private"], correctIndex: 2 },
            { question: "Why must you use <label> tags?", options: ["Styling only", "Accessibility — screen readers need them", "Performance", "Security"], correctIndex: 1 },
            { question: "When should you use method='POST'?", options: ["Always", "For sensitive data like passwords", "Never", "Only for search"], correctIndex: 1 },
            { question: "What happens without a 'name' attribute?", options: ["Input looks different", "Server won't receive that field's data", "Page crashes", "Nothing bad"], correctIndex: 1 },
          ],
        },
        {
          id: "all-input-types",
          title: "All Input Types",
          description: "Every HTML5 input type explained",
          content: `# All HTML5 Input Types

## 🔍 What is this?

HTML5 provides **20+ input types** — each with built-in validation and mobile-optimized keyboards.

---

## 📝 Complete Input Types

| Type | Shows | Mobile Keyboard |
|------|-------|----------------|
| \`text\` | Plain text field | Standard |
| \`email\` | Email with @ validation | Email keyboard |
| \`password\` | Hidden characters | Standard |
| \`number\` | Numeric spinner | Number pad |
| \`tel\` | Phone number | Phone keypad |
| \`url\` | URL with validation | URL keyboard |
| \`search\` | Search with clear button | Standard |
| \`date\` | Date picker | Date picker |
| \`time\` | Time picker | Time picker |
| \`datetime-local\` | Date + time | DateTime picker |
| \`month\` | Month/year | Month picker |
| \`week\` | Week number | Week picker |
| \`color\` | Color picker | Color wheel |
| \`range\` | Slider | Slider |
| \`file\` | File upload | File browser |
| \`checkbox\` | Toggle on/off | Checkbox |
| \`radio\` | Pick one from group | Radio button |
| \`hidden\` | Invisible data field | None |
| \`submit\` | Submit button | Button |
| \`reset\` | Reset form | Button |
| \`image\` | Image as submit button | Button |

---

## 🌍 Also: datalist, output, fieldset

- **\`<datalist>\`** — Autocomplete suggestions for inputs
- **\`<output>\`** — Calculation result display
- **\`<fieldset>\` + \`<legend>\`** — Group related fields with a title

---

## 🛠️ Mini Practice

**Task:** Create a form using at least 8 different input types.`,
          codeExample: `<style>
  body { font-family: Arial; padding: 20px; }
  .field { margin-bottom: 14px; }
  label { display: block; font-weight: bold;
    margin-bottom: 4px; font-size: 14px; }
  input, select { padding: 8px; border: 2px solid #ddd;
    border-radius: 6px; font-size: 14px; }
  input:focus { border-color: #0d9488; outline: none; }
  fieldset { border: 2px solid #0d9488;
    border-radius: 8px; padding: 16px; margin: 16px 0; }
  legend { font-weight: bold; color: #0d9488;
    padding: 0 8px; }
</style>

<h2>🎛️ All Input Types</h2>

<fieldset>
  <legend>📝 Text Inputs</legend>
  <div class="field">
    <label>Text: <input type="text" 
      placeholder="Your name"></label>
  </div>
  <div class="field">
    <label>Email: <input type="email" 
      placeholder="you@mail.com"></label>
  </div>
  <div class="field">
    <label>Password: <input type="password" 
      placeholder="Secret"></label>
  </div>
  <div class="field">
    <label>Search: <input type="search" 
      placeholder="Search..."></label>
  </div>
  <div class="field">
    <label>URL: <input type="url" 
      placeholder="https://..."></label>
  </div>
  <div class="field">
    <label>Tel: <input type="tel" 
      placeholder="123-456-7890"></label>
  </div>
</fieldset>

<fieldset>
  <legend>🔢 Numeric & Date</legend>
  <div class="field">
    <label>Number: <input type="number" 
      min="0" max="100" value="50"></label>
  </div>
  <div class="field">
    <label>Range: <input type="range" 
      min="0" max="100" value="50"></label>
  </div>
  <div class="field">
    <label>Date: <input type="date"></label>
  </div>
  <div class="field">
    <label>Time: <input type="time"></label>
  </div>
  <div class="field">
    <label>Color: <input type="color" 
      value="#0d9488"></label>
  </div>
</fieldset>

<fieldset>
  <legend>📋 Datalist (Autocomplete)</legend>
  <div class="field">
    <label>Framework: 
      <input list="frameworks" 
        placeholder="Type to search...">
    </label>
    <datalist id="frameworks">
      <option value="React">
      <option value="Vue">
      <option value="Angular">
      <option value="Svelte">
    </datalist>
  </div>
</fieldset>

<fieldset>
  <legend>🧮 Output</legend>
  <form oninput="result.value=
    parseInt(a.value)+parseInt(b.value)">
    <input type="number" id="a" value="5" 
      style="width:60px"> +
    <input type="number" id="b" value="3" 
      style="width:60px"> =
    <output name="result" for="a b">8</output>
  </form>
</fieldset>`,
          quiz: [
            { question: "Which input type shows a color picker?", options: ["type='picker'", "type='color'", "type='palette'", "type='rgb'"], correctIndex: 1 },
            { question: "What does <datalist> provide?", options: ["Data storage", "Autocomplete suggestions", "Database connection", "Data validation"], correctIndex: 1 },
            { question: "What does <fieldset> do?", options: ["Creates a field", "Groups related form elements", "Adds validation", "Creates columns"], correctIndex: 1 },
            { question: "Which input shows a slider?", options: ["type='slider'", "type='range'", "type='slide'", "type='bar'"], correctIndex: 1 },
            { question: "What does <output> display?", options: ["Error messages", "Calculation results", "Images", "Links"], correctIndex: 1 },
          ],
        },
        {
          id: "form-validation",
          title: "Form Validation",
          description: "Validate user input with HTML5 attributes",
          content: `# Form Validation

## 🔍 What is this?

**Form validation** ensures users fill out forms correctly BEFORE submitting. HTML5 has **built-in validation** — no JavaScript needed!

---

## 📝 Validation Attributes

| Attribute | What it does |
|-----------|-------------|
| \`required\` | Field must be filled |
| \`minlength\` / \`maxlength\` | Character limits |
| \`min\` / \`max\` | Number range |
| \`pattern\` | Regex pattern match |
| \`type="email"\` | Must be valid email format |
| \`type="url"\` | Must be valid URL format |
| \`autocomplete\` | Browser autofill hints |

---

## 📝 Autocomplete Values

\`\`\`html
<input autocomplete="name">
<input autocomplete="email">
<input autocomplete="tel">
<input autocomplete="address-line1">
<input autocomplete="cc-number">    <!-- credit card -->
<input autocomplete="new-password"> <!-- signup -->
<input autocomplete="current-password"> <!-- login -->
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Only client-side validation | ALWAYS validate on server too |
| No error messages | Use \`:invalid\` CSS to show hints |
| Too strict patterns | Allow international formats |

---

## 🎯 Interview Tips

> "HTML5 validation is the first layer. Server-side validation is mandatory for security."

> "The Constraint Validation API (\`setCustomValidity()\`, \`reportValidity()\`) allows custom error messages in JavaScript."`,
          codeExample: `<style>
  body { font-family: Arial; padding: 20px; background: #f8faf8; }
  form { max-width: 400px; margin: 0 auto; }
  .field { margin-bottom: 16px; }
  label { display: block; font-weight: bold; margin-bottom: 4px; color: #333; }
  input { width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; box-sizing: border-box; font-size: 14px; }
  input:focus { border-color: #0d9488; outline: none; }
  input:invalid:not(:placeholder-shown) { border-color: #ef4444; background: #fef2f2; }
  input:valid:not(:placeholder-shown) { border-color: #22c55e; background: #f0fdf4; }
  .hint { font-size: 12px; color: #666; margin-top: 4px; }
  button { width: 100%; padding: 12px; background: #0d9488; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; margin-top: 8px; }
  button:hover { background: #0f766e; }
  h2 { text-align: center; color: #0d9488; }
</style>

<form>
  <h2>📝 Registration</h2>
  
  <div class="field">
    <label for="name">Full Name *</label>
    <input type="text" id="name" required minlength="2" maxlength="50" placeholder="John Doe" autocomplete="name">
    <p class="hint">Min 2 characters</p>
  </div>
  
  <div class="field">
    <label for="email">Email *</label>
    <input type="email" id="email" required placeholder="you@example.com" autocomplete="email">
    <p class="hint">Must be valid email</p>
  </div>
  
  <div class="field">
    <label for="pass">Password *</label>
    <input type="password" id="pass" required minlength="8" placeholder="Min 8 characters" autocomplete="new-password">
  </div>
  
  <div class="field">
    <label for="age">Age *</label>
    <input type="number" id="age" required min="13" max="120" placeholder="18">
    <p class="hint">Must be 13-120</p>
  </div>
  
  <div class="field">
    <label for="phone">Phone</label>
    <input type="tel" id="phone" pattern="[0-9]{10}" placeholder="1234567890" autocomplete="tel">
    <p class="hint">10 digits (optional)</p>
  </div>
  
  <button type="submit">Create Account</button>
</form>`,
          quiz: [
            { question: "Which attribute makes a field mandatory?", options: ["mandatory", "required", "must-fill", "needed"], correctIndex: 1 },
            { question: "What does minlength='8' do?", options: ["Sets font size", "Requires at least 8 characters", "Limits to 8 words", "Sets width to 8px"], correctIndex: 1 },
            { question: "Which input type auto-validates email format?", options: ["type='text'", "type='mail'", "type='email'", "type='address'"], correctIndex: 2 },
            { question: "What does the pattern attribute use?", options: ["CSS selectors", "Regular expressions", "JavaScript", "HTML entities"], correctIndex: 1 },
            { question: "Is client-side validation enough for security?", options: ["Yes", "No — always validate on server too", "Only for passwords", "Only with HTTPS"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "semantic-html",
      title: "Semantic HTML",
      icon: "🏗️",
      level: "intermediate",
      lessons: [
        {
          id: "semantic-elements",
          title: "Semantic Elements",
          description: "Write meaningful, accessible HTML",
          content: `# Semantic HTML

## 🔍 What is this?

**Semantic elements** describe their **meaning** clearly. Instead of generic \`<div>\` containers, you use tags that tell browsers, search engines, and screen readers what the content IS.

### Non-Semantic vs Semantic:
| ❌ Non-Semantic | ✅ Semantic |
|----------------|------------|
| \`<div class="header">\` | \`<header>\` |
| \`<div class="nav">\` | \`<nav>\` |
| \`<div class="main">\` | \`<main>\` |
| \`<div class="footer">\` | \`<footer>\` |
| \`<div class="sidebar">\` | \`<aside>\` |
| \`<div class="article">\` | \`<article>\` |

---

## 💡 Why do we use this?

### SEO (Search Engine Optimization)
Google reads semantic tags to understand your page structure. Pages with proper semantic HTML rank **better**.

### Accessibility
Screen readers use semantic tags to navigate. Users can jump directly to \`<nav>\`, \`<main>\`, or \`<footer>\`.

### Code Readability
Other developers instantly understand your code structure.

---

## ⏰ When should we use this?

| Content | Semantic Tag |
|---------|-------------|
| Site logo + title area | \`<header>\` |
| Navigation links | \`<nav>\` |
| Primary page content | \`<main>\` |
| Thematic section | \`<section>\` |
| Blog post / news article | \`<article>\` |
| Sidebar, related links | \`<aside>\` |
| Copyright, contact info | \`<footer>\` |
| Figures with captions | \`<figure>\` + \`<figcaption>\` |

---

## ⚠️ Common Mistakes

| Mistake | Why it's wrong |
|---------|---------------|
| Using \`<div>\` for everything | Misses SEO and accessibility benefits |
| Multiple \`<main>\` elements | Only ONE \`<main>\` per page |
| Using \`<section>\` without heading | Each \`<section>\` should have a heading |

---

## 🎯 Interview Tips

> "Semantic HTML improves SEO, accessibility, and code maintainability."

> "An \`<article>\` should be independently distributable — like a blog post you could share on its own."

> "There should be only ONE \`<main>\` element per page."`,
          codeExample: `<!-- ✅ Properly structured semantic page -->
<header style="background:#0d9488; color:white; 
  padding:16px 24px;">
  <h1 style="margin:0;">🌐 My Website</h1>
  <nav style="margin-top:8px;">
    <a href="/" style="color:white; 
      margin-right:16px;">Home</a>
    <a href="/about" style="color:white; 
      margin-right:16px;">About</a>
    <a href="/blog" style="color:white; 
      margin-right:16px;">Blog</a>
    <a href="/contact" style="color:white;">
      Contact</a>
  </nav>
</header>

<main style="display:flex; gap:24px; 
  padding:24px; font-family:Arial;">
  <section style="flex:2;">
    <h2>Latest Articles</h2>
    
    <article style="background:#f0fdfa; 
      padding:16px; border-radius:8px; 
      margin-bottom:12px;">
      <h3>Learning Semantic HTML</h3>
      <p>Semantic HTML helps search engines 
         and screen readers understand your page.</p>
      <footer>
        <small>Published: Jan 2025</small>
      </footer>
    </article>
    
    <article style="background:#f0fdfa; 
      padding:16px; border-radius:8px;">
      <h3>CSS Flexbox Guide</h3>
      <p>Flexbox makes layout easy and 
         responsive.</p>
      <footer>
        <small>Published: Feb 2025</small>
      </footer>
    </article>
  </section>
  
  <aside style="flex:1; background:#f5f5f5; 
    padding:16px; border-radius:8px;">
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">HTML Cheatsheet</a></li>
      <li><a href="#">CSS Tricks</a></li>
      <li><a href="#">MDN Web Docs</a></li>
    </ul>
  </aside>
</main>

<footer style="background:#333; color:white; 
  padding:16px 24px; text-align:center;">
  <p>&copy; 2025 My Website. All rights reserved.</p>
</footer>`,
          quiz: [
            { question: "What makes a tag 'semantic'?", options: ["It has a class", "It describes its content's meaning", "It uses CSS", "It's self-closing"], correctIndex: 1 },
            { question: "Which element is for navigation?", options: ["<menu>", "<links>", "<nav>", "<navigate>"], correctIndex: 2 },
            { question: "How many <main> elements should a page have?", options: ["As many as needed", "Exactly one", "At least two", "None"], correctIndex: 1 },
            { question: "What's a major benefit of semantic HTML?", options: ["Faster loading", "Better SEO and accessibility", "More colors", "Smaller files"], correctIndex: 1 },
            { question: "What should an <article> contain?", options: ["Any content", "Independently distributable content", "Only images", "Navigation links"], correctIndex: 1 },
          ],
        },
        {
          id: "article-section-div",
          title: "article vs section vs div",
          description: "When to use which container element",
          content: `# article vs section vs div

## 🔍 What is this?

These three elements all act as **containers**, but they have very different **semantic meanings**.

---

## 📝 Quick Guide

| Element | Meaning | Use when... |
|---------|---------|-------------|
| \`<article>\` | Standalone content | Content makes sense independently (blog post, news, product card) |
| \`<section>\` | Thematic grouping | Grouping related content with a heading (About section, Features section) |
| \`<div>\` | No meaning (generic) | Just need a container for styling/layout (no semantic purpose) |

---

## 💡 Decision Tree

1. **Can this content be shared independently?** → \`<article>\`
2. **Is it a thematic section with a heading?** → \`<section>\`
3. **Just need a box for styling?** → \`<div>\`

---

## 📝 nav vs aside

| Element | Use for |
|---------|---------|
| \`<nav>\` | **Major navigation** blocks only (main menu, sidebar nav, breadcrumbs). NOT every group of links |
| \`<aside>\` | **Tangentially related** content — sidebars, pull quotes, ads, related links. Content is related but not essential |

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| \`<section>\` as generic wrapper | Use \`<div>\` if no semantic meaning |
| \`<article>\` for non-standalone content | Use \`<section>\` or \`<div>\` instead |
| \`<nav>\` around every link group | Only for major navigation blocks |

---

## 🛠️ Mini Practice

**Task:** Structure a blog page with proper \`<article>\`, \`<section>\`, \`<aside>\`, and \`<div>\` usage.`,
          codeExample: `<style>
  body { font-family: Arial; padding: 16px; }
  .demo { border: 2px dashed; padding: 12px;
    margin: 8px 0; border-radius: 8px; }
  .article-demo { border-color: #0d9488;
    background: #f0fdfa; }
  .section-demo { border-color: #2563eb;
    background: #eff6ff; }
  .div-demo { border-color: #9ca3af;
    background: #f9fafb; }
  .aside-demo { border-color: #f59e0b;
    background: #fffbeb; }
  .label { font-size: 11px; font-weight: bold;
    text-transform: uppercase; letter-spacing: 1px;
    margin-bottom: 4px; }
</style>

<h2>When to use what?</h2>

<article class="demo article-demo">
  <p class="label" style="color:#0d9488;">
    &lt;article&gt; — Standalone content</p>
  <h3>Blog Post: CSS Grid Guide</h3>
  <p>This post can be shared independently 
     on social media or RSS feeds.</p>
  <footer><small>By Jane • Jan 2025</small></footer>
</article>

<section class="demo section-demo">
  <p class="label" style="color:#2563eb;">
    &lt;section&gt; — Thematic group</p>
  <h3>Features</h3>
  <p>A group of related content under one 
     heading. Not standalone.</p>
</section>

<div class="demo div-demo">
  <p class="label" style="color:#9ca3af;">
    &lt;div&gt; — Generic container</p>
  <p>Just a box for styling. No semantic 
     meaning. Use for layout only.</p>
</div>

<aside class="demo aside-demo">
  <p class="label" style="color:#f59e0b;">
    &lt;aside&gt; — Related but tangential</p>
  <h4>Related Articles</h4>
  <ul>
    <li>HTML for Beginners</li>
    <li>CSS Flexbox Tips</li>
  </ul>
</aside>

<nav class="demo" style="border-color:#dc2626; 
  background:#fef2f2;">
  <p class="label" style="color:#dc2626;">
    &lt;nav&gt; — Major navigation only</p>
  <a href="#">Home</a> | 
  <a href="#">About</a> | 
  <a href="#">Contact</a>
</nav>`,
          quiz: [
            { question: "When should you use <article>?", options: ["For any container", "For standalone, shareable content", "For styling only", "For navigation"], correctIndex: 1 },
            { question: "When is <div> appropriate?", options: ["Always", "When you need a generic container with no semantic meaning", "Never", "Only for text"], correctIndex: 1 },
            { question: "Should <section> always have a heading?", options: ["No", "Yes — it defines a thematic group", "Only on mobile", "Only for SEO"], correctIndex: 1 },
            { question: "What is <aside> for?", options: ["Main content", "Navigation", "Tangentially related content", "Footer"], correctIndex: 2 },
            { question: "Should every list of links use <nav>?", options: ["Yes", "No — only major navigation blocks", "Only in footer", "Only with CSS"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "advanced-html",
      title: "Advanced HTML",
      icon: "🚀",
      level: "advanced",
      lessons: [
        {
          id: "audio-video",
          title: "Audio & Video",
          description: "Embed media in your pages",
          content: `# Audio & Video

## 🔍 What is this?

The \`<audio>\` and \`<video>\` elements let you embed media directly into web pages — no plugins needed!

---

## 📝 Syntax

\`\`\`html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser doesn't support audio.
</audio>

<video controls width="600" poster="thumb.jpg">
  <source src="video.mp4" type="video/mp4">
  <track src="captions.vtt" kind="subtitles" srclang="en" label="English">
  Your browser doesn't support video.
</video>

<video autoplay muted loop playsinline>
  <source src="bg.mp4" type="video/mp4">
</video>
\`\`\`

### Key Attributes:
- **controls** — Show play/pause/volume
- **autoplay** — Start automatically (requires \`muted\`)
- **muted** — No sound initially
- **loop** — Repeat forever
- **poster** — Thumbnail image for video

### \`<track>\` for Captions:
- **kind**: subtitles, captions, descriptions, chapters
- **srclang**: Language code
- **label**: Display name in player

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Autoplay with sound | Always add \`muted\` |
| No fallback text | Add text between tags |
| No captions | Use \`<track>\` for accessibility |

---

## 🎯 Interview Tips

> "Browsers require \`muted\` for autoplay to work."

> "Use \`<track>\` for subtitles/captions — it's essential for accessibility."`,
          codeExample: `<h2>🎵 Audio Player</h2>
<audio controls style="width: 100%;">
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
  Your browser doesn't support audio.
</audio>

<h2>🎬 Video Player</h2>
<video controls width="100%" 
  style="border-radius: 8px; max-width:500px;"
  poster="https://picsum.photos/500/300">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser doesn't support video.
</video>

<h2>📝 Captions & Tracks</h2>
<p>The <code>&lt;track&gt;</code> element adds 
   subtitles/captions to video:</p>
<pre style="background:#1e293b; color:#86efac; 
  padding:16px; border-radius:8px; font-size:13px;">
&lt;video controls&gt;
  &lt;source src="movie.mp4"&gt;
  &lt;track 
    src="captions.vtt" 
    kind="subtitles" 
    srclang="en" 
    label="English"&gt;
&lt;/video&gt;
</pre>
<p style="font-size:14px; color:#666;">
  Captions use WebVTT (.vtt) format — 
  essential for deaf/hard-of-hearing users 
  and non-native speakers!</p>`,
          quiz: [
            { question: "What attribute is required for autoplay video?", options: ["controls", "muted", "loop", "poster"], correctIndex: 1 },
            { question: "What does the poster attribute do?", options: ["Adds a border", "Shows thumbnail before playback", "Makes video larger", "Adds subtitles"], correctIndex: 1 },
            { question: "Which tag embeds YouTube videos?", options: ["<video>", "<youtube>", "<iframe>", "<embed>"], correctIndex: 2 },
            { question: "What does the <track> element provide?", options: ["Audio tracks", "Subtitles and captions", "Background music", "Video filters"], correctIndex: 1 },
            { question: "What does aria-label do?", options: ["Adds color", "Provides label for screen readers", "Creates animation", "Sets font size"], correctIndex: 1 },
          ],
        },
        {
          id: "meta-seo-storage",
          title: "Meta Tags, SEO & Storage",
          description: "Meta tags, favicon, localStorage and sessionStorage",
          content: `# Meta Tags, SEO & Web Storage

## 🔍 What is this?

**Meta tags** give browsers and search engines info about your page. **Web Storage** (localStorage/sessionStorage) lets you save data in the browser.

---

## 📝 Essential Meta Tags

\`\`\`html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page description for Google (under 160 chars)">
  <meta name="keywords" content="html, css, web development">
  <meta name="author" content="Your Name">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="refresh" content="30">
  <link rel="icon" href="favicon.ico">
  <link rel="preload" href="font.woff2" as="font" crossorigin>
  <link rel="prefetch" href="next-page.html">
  <title>Page Title (under 60 chars)</title>
</head>
\`\`\`

### meta http-equiv:
- **X-UA-Compatible** — IE rendering mode
- **refresh** — Auto-refresh or redirect
- **Content-Security-Policy** — CSP for security

### Preload vs Prefetch:
- **preload** — Load resource NOW (needed on current page)
- **prefetch** — Load resource LATER (might need on next page)

---

## 📝 Web Storage

| Feature | localStorage | sessionStorage |
|---------|-------------|---------------|
| Persists | Forever (until cleared) | Until tab closes |
| Capacity | ~5MB | ~5MB |
| Scope | All tabs same origin | Current tab only |

---

## 📝 Favicon

\`\`\`html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Missing viewport meta | Site won't be mobile responsive |
| Description over 160 chars | Google truncates it |
| Storing passwords in localStorage | NEVER — it's not secure |
| No favicon | Browsers show generic icon |`,
          codeExample: `<h2>🏷️ Meta Tags for SEO</h2>
<pre style="background:#1e293b; color:#86efac; padding:16px; border-radius:8px; font-size:13px; overflow-x:auto;">
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" 
    content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta name="description" 
    content="Learn HTML & CSS step by step"&gt;
  &lt;meta http-equiv="X-UA-Compatible" 
    content="IE=edge"&gt;
  &lt;link rel="icon" href="favicon.ico"&gt;
  &lt;link rel="preload" href="style.css" as="style"&gt;
  &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
</pre>

<h2>💾 localStorage Demo</h2>
<div style="font-family:Arial; padding:16px; background:#f0fdfa; border-radius:8px;">
  <label style="font-weight:bold;">Your Name:</label><br>
  <input type="text" id="nameInput" placeholder="Enter name" style="padding:8px; border:2px solid #ddd; border-radius:6px; margin:8px 0; width:200px;">
  <br>
  <button onclick="localStorage.setItem('username', document.getElementById('nameInput').value); document.getElementById('output').textContent = 'Saved: ' + document.getElementById('nameInput').value;" style="padding:8px 16px; background:#0d9488; color:white; border:none; border-radius:6px; cursor:pointer; margin:4px;">Save</button>
  <button onclick="document.getElementById('output').textContent = 'Loaded: ' + (localStorage.getItem('username') || 'Nothing saved');" style="padding:8px 16px; background:#2563eb; color:white; border:none; border-radius:6px; cursor:pointer; margin:4px;">Load</button>
  <button onclick="localStorage.removeItem('username'); document.getElementById('output').textContent = 'Cleared!';" style="padding:8px 16px; background:#ea580c; color:white; border:none; border-radius:6px; cursor:pointer; margin:4px;">Clear</button>
  <p id="output" style="margin-top:12px; font-weight:bold; color:#333;">Try the buttons above!</p>
</div>

<h2 style="margin-top:20px;">📊 HTML Entities</h2>
<table border="1" cellpadding="8" style="border-collapse:collapse; font-family:monospace; margin-top:8px;">
  <tr style="background:#0d9488; color:white;"><th>Entity</th><th>Result</th><th>Name</th></tr>
  <tr><td>&amp;lt;</td><td>&lt;</td><td>Less than</td></tr>
  <tr><td>&amp;gt;</td><td>&gt;</td><td>Greater than</td></tr>
  <tr><td>&amp;amp;</td><td>&amp;</td><td>Ampersand</td></tr>
  <tr><td>&amp;copy;</td><td>&copy;</td><td>Copyright</td></tr>
  <tr><td>&amp;hearts;</td><td>&hearts;</td><td>Heart</td></tr>
  <tr><td>&amp;nbsp;</td><td>(space)</td><td>Non-breaking space</td></tr>
</table>`,
          quiz: [
            { question: "What does the viewport meta tag do?", options: ["Adds color", "Enables mobile responsive design", "Creates viewport element", "Sets page speed"], correctIndex: 1 },
            { question: "How long does localStorage data persist?", options: ["Until tab closes", "Forever until cleared", "24 hours", "1 session"], correctIndex: 1 },
            { question: "What's the difference between preload and prefetch?", options: ["Same thing", "preload=now, prefetch=later", "prefetch=now, preload=later", "Both load immediately"], correctIndex: 1 },
            { question: "Should you store passwords in localStorage?", options: ["Yes", "No — not secure", "Only encrypted", "Only temporarily"], correctIndex: 1 },
            { question: "What HTML entity represents ©?", options: ["&copyright;", "&copy;", "&(c);", "&cr;"], correctIndex: 1 },
          ],
        },
        {
          id: "iframe-security",
          title: "iframe & Security",
          description: "iframe sandbox, CSP basics, structured data",
          content: `# iframe & Web Security

## 🔍 What is this?

**\`<iframe>\`** embeds another page inside yours. **CSP** (Content Security Policy) controls what resources can load. **Structured data** helps search engines understand your content.

---

## 📝 iframe

\`\`\`html
<!-- Basic iframe -->
<iframe src="https://example.com" width="600" height="400"></iframe>

<!-- YouTube embed -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID" 
  allowfullscreen></iframe>

<!-- Sandbox (security!) -->
<iframe src="untrusted.html" 
  sandbox="allow-scripts allow-same-origin">
</iframe>
\`\`\`

### Sandbox Values:
- \`allow-scripts\` — Allow JavaScript
- \`allow-same-origin\` — Same-origin access
- \`allow-forms\` — Allow form submission
- \`allow-popups\` — Allow popups
- Empty \`sandbox\` = maximum restrictions

---

## 📝 CSP Basics

Content Security Policy prevents XSS attacks:
\`\`\`html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'">
\`\`\`

---

## 📝 Structured Data (JSON-LD)

Helps Google show rich results:
\`\`\`html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Learn HTML",
  "author": { "@type": "Person", "name": "John" }
}
</script>
\`\`\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| iframe without sandbox | Always sandbox untrusted content |
| No CSP headers | Add basic CSP to prevent XSS |
| Embedding untrusted sites | Can steal data or show malicious content |

---

## 🛠️ Mini Practice

**Task:** Embed a YouTube video with proper iframe attributes and sandbox.`,
          codeExample: `<style>
  body { font-family: Arial; padding: 20px; }
  .demo { margin: 16px 0; padding: 16px;
    background: #f0fdfa; border-radius: 8px;
    border: 2px solid #0d9488; }
</style>

<h2>🖼️ iframe Examples</h2>

<div class="demo">
  <h3>Embedded Page</h3>
  <iframe 
    src="https://www.wikipedia.org" 
    width="100%" height="200"
    style="border:2px solid #ddd; border-radius:8px;"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
    title="Wikipedia embed">
  </iframe>
  <p style="font-size:12px; color:#666;">
    ☝️ Sandboxed iframe with lazy loading</p>
</div>

<div class="demo">
  <h3>Sandbox Levels</h3>
  <table border="1" cellpadding="8" 
    style="border-collapse:collapse; 
    font-size:14px; width:100%;">
    <tr style="background:#0d9488; color:white;">
      <th>Sandbox Value</th><th>Allows</th>
    </tr>
    <tr>
      <td><code>sandbox</code> (empty)</td>
      <td>Maximum restrictions ⛔</td>
    </tr>
    <tr>
      <td><code>allow-scripts</code></td>
      <td>JavaScript execution</td>
    </tr>
    <tr>
      <td><code>allow-forms</code></td>
      <td>Form submission</td>
    </tr>
    <tr>
      <td><code>allow-popups</code></td>
      <td>Opening new windows</td>
    </tr>
  </table>
</div>

<div class="demo">
  <h3>Structured Data (JSON-LD)</h3>
  <pre style="background:#1e293b; color:#86efac; 
    padding:12px; border-radius:8px; font-size:12px;">
&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CodeMaster",
  "url": "https://codemaster.dev"
}
&lt;/script&gt;</pre>
  <p style="font-size:13px; color:#666;">
    Helps Google show rich search results!</p>
</div>`,
          quiz: [
            { question: "What does the sandbox attribute do on iframe?", options: ["Adds styling", "Restricts embedded content capabilities", "Makes it responsive", "Adds border"], correctIndex: 1 },
            { question: "What does CSP prevent?", options: ["Slow loading", "Cross-site scripting (XSS) attacks", "Broken images", "Wrong fonts"], correctIndex: 1 },
            { question: "What is JSON-LD used for?", options: ["Styling", "Structured data for search engines", "Database queries", "Animation"], correctIndex: 1 },
            { question: "Should you sandbox untrusted iframe content?", options: ["No need", "Yes — always sandbox for security", "Only on mobile", "Only with JavaScript"], correctIndex: 1 },
            { question: "What does allow-scripts do in sandbox?", options: ["Blocks all scripts", "Allows JavaScript to run", "Adds script tags", "Removes scripts"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "accessibility",
      title: "Accessibility",
      icon: "♿",
      level: "advanced",
      lessons: [
        {
          id: "accessibility-basics",
          title: "Accessibility Basics",
          description: "ARIA roles, keyboard navigation, screen readers, alt text",
          content: `# Web Accessibility (a11y)

## 🔍 What is this?

**Accessibility** (a11y) means making websites usable by **everyone**, including people with disabilities — visual, auditory, motor, and cognitive.

> **Over 1 billion people** worldwide have some form of disability. Accessible websites are also **legally required** in many countries!

---

## 💡 Why does this matter?

- **Legal requirement** — ADA, WCAG compliance
- **Larger audience** — 15% of world population has a disability
- **Better SEO** — Google rewards accessible sites
- **Better UX** — Accessibility improves UX for everyone

---

## 📝 Key Accessibility Practices

### 1. Alt Text Rules
\`\`\`html
<!-- Informative image: describe the content -->
<img src="chart.png" alt="Sales increased 20% in Q1 2025">

<!-- Decorative image: empty alt -->
<img src="divider.png" alt="">

<!-- Complex image: link to long description -->
<img src="infographic.png" alt="Company growth infographic" 
  aria-describedby="desc">
<p id="desc" hidden>Detailed description...</p>
\`\`\`

### 2. ARIA Roles
\`\`\`html
<div role="alert">Error: Invalid email!</div>
<div role="banner">Site header</div>
<div role="search">Search area</div>
<div role="status">Loading... 50%</div>
\`\`\`

### 3. Keyboard Navigation
- All interactive elements must be **keyboard accessible**
- Use \`tabindex="0"\` to make custom elements focusable
- Use \`tabindex="-1"\` to make elements programmatically focusable
- **Never** use \`tabindex > 0\`

### 4. Screen Reader Tips
- Use semantic HTML (\`<nav>\`, \`<main>\`, \`<button>\`)
- Add \`aria-label\` for icon-only buttons
- Use \`aria-live\` for dynamic content updates
- Hide decorative content with \`aria-hidden="true"\`

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| No alt on images | Every \`<img>\` needs alt (even if empty for decorative) |
| \`<div>\` as button | Use \`<button>\` — it's keyboard accessible by default |
| Color-only indicators | Add text/icons alongside color changes |
| Small click targets | Minimum 44x44px for touch targets |
| No focus styles | Never remove \`:focus\` outline without replacement |
| Auto-playing media | Provide pause controls |

---

## 🎯 Interview Tips

> "The first rule of ARIA: Don't use ARIA if native HTML can do the job."

> "WCAG 2.1 Level AA is the most common accessibility standard required."

> "Color contrast ratio should be at least 4.5:1 for normal text."

---

## 🛠️ Mini Practice

**Task:** Audit a page for accessibility: add alt text, ARIA labels, keyboard navigation, and proper heading hierarchy.`,
          codeExample: `<style>
  body { font-family: Arial; padding: 20px; }
  .good { border: 2px solid #22c55e; 
    background: #f0fdf4; padding: 12px;
    border-radius: 8px; margin: 8px 0; }
  .bad { border: 2px solid #ef4444; 
    background: #fef2f2; padding: 12px;
    border-radius: 8px; margin: 8px 0; }
  .label { font-size: 12px; font-weight: bold; }
  button { padding: 10px 20px; border-radius: 6px;
    border: none; cursor: pointer; margin: 4px;
    font-size: 14px; }
  button:focus { outline: 3px solid #0d9488;
    outline-offset: 2px; }
  .skip-link { position: absolute; top: -40px;
    left: 0; background: #0d9488; color: white;
    padding: 8px 16px; z-index: 100; }
  .skip-link:focus { top: 0; }
</style>

<!-- Skip navigation link -->
<a href="#main" class="skip-link">
  Skip to main content</a>

<h2>♿ Accessibility Best Practices</h2>

<h3>1. Alt Text</h3>
<div class="bad">
  <p class="label" style="color:#ef4444;">
    ❌ BAD</p>
  <code>&lt;img src="photo.jpg"&gt;</code>
  <p>No alt text — screen reader says 
     "image" with no context</p>
</div>
<div class="good">
  <p class="label" style="color:#22c55e;">
    ✅ GOOD</p>
  <code>&lt;img src="photo.jpg" 
    alt="Team celebrating product launch"&gt;
  </code>
  <p>Descriptive alt text for screen readers</p>
</div>

<h3>2. Keyboard-Accessible Buttons</h3>
<div class="bad">
  <p class="label" style="color:#ef4444;">
    ❌ div as button (not keyboard accessible)</p>
  <div onclick="alert('clicked')" 
    style="padding:8px 16px; background:#ddd;
    display:inline-block; cursor:pointer;">
    Click me</div>
</div>
<div class="good">
  <p class="label" style="color:#22c55e;">
    ✅ Real button (Tab + Enter works)</p>
  <button style="background:#0d9488; color:white;">
    Click me</button>
  <button aria-label="Close" 
    style="background:#ef4444; color:white;">
    ✕</button>
</div>

<h3 id="main">3. Focus Styles</h3>
<p>Tab through these buttons — notice the 
   focus outline:</p>
<button style="background:#0d9488; color:white;">
  Button 1</button>
<button style="background:#2563eb; color:white;">
  Button 2</button>
<button style="background:#ea580c; color:white;">
  Button 3</button>

<h3>4. ARIA Live Region</h3>
<div role="status" aria-live="polite" 
  style="padding:12px; background:#fef3c7;
  border-radius:8px; margin-top:8px;">
  ✅ Screen readers announce changes here 
  automatically
</div>`,
          quiz: [
            { question: "What does a11y stand for?", options: ["A11 years", "Accessibility (a + 11 letters + y)", "Always 11 ways", "Access level 11"], correctIndex: 1 },
            { question: "What should decorative images have?", options: ["alt='decorative'", "alt='' (empty)", "No alt at all", "alt='image'"], correctIndex: 1 },
            { question: "Why not use <div> as a button?", options: ["Looks bad", "Not keyboard accessible by default", "Loads slowly", "Not supported"], correctIndex: 1 },
            { question: "What's the minimum color contrast ratio for text?", options: ["2:1", "3:1", "4.5:1", "10:1"], correctIndex: 2 },
            { question: "What does aria-live='polite' do?", options: ["Makes element polite", "Announces content changes to screen readers", "Adds animation", "Hides element"], correctIndex: 1 },
          ],
        },
      ],
    },
    {
      id: "seo-basics",
      title: "SEO Basics",
      icon: "🔍",
      level: "advanced",
      lessons: [
        {
          id: "html-seo",
          title: "HTML SEO Essentials",
          description: "Meta SEO tags, heading hierarchy, canonical, Open Graph",
          content: `# HTML SEO Essentials

## 🔍 What is this?

**SEO** (Search Engine Optimization) is about making your website **findable on Google**. HTML provides specific tags that help search engines understand and rank your page.

---

## 📝 Essential SEO Tags

### 1. Title Tag (Most Important!)
\`\`\`html
<title>Learn HTML & CSS Free | CodeMaster</title>
\`\`\`
- Under 60 characters
- Main keyword first
- Brand name last

### 2. Meta Description
\`\`\`html
<meta name="description" content="Learn HTML & CSS from scratch with interactive lessons, quizzes, and projects. Free beginner course.">
\`\`\`
- Under 160 characters
- Include keywords naturally
- Write a compelling call-to-action

### 3. Heading Hierarchy
\`\`\`html
<h1>Main Topic (ONE per page)</h1>
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
  <h2>Section 2</h2>
\`\`\`
- Only ONE \`<h1>\` per page
- Don't skip levels (h1 → h3)
- Include keywords in headings

### 4. Canonical URL
\`\`\`html
<link rel="canonical" href="https://yoursite.com/page">
\`\`\`
- Prevents duplicate content issues
- Tells Google which URL is the "real" one

### 5. Open Graph (Social Media)
\`\`\`html
<meta property="og:title" content="Learn HTML Free">
<meta property="og:description" content="Interactive HTML course">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
<meta property="og:url" content="https://yoursite.com/html-course">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Learn HTML Free">
\`\`\`

### 6. Robots Meta
\`\`\`html
<meta name="robots" content="index, follow">
<!-- or -->
<meta name="robots" content="noindex, nofollow">
\`\`\`

---

## 💡 Quick SEO Checklist

- ✅ Unique \`<title>\` on every page
- ✅ Meta description on every page
- ✅ One \`<h1>\`, proper heading hierarchy
- ✅ Semantic HTML (\`<nav>\`, \`<main>\`, \`<article>\`)
- ✅ Alt text on all images
- ✅ Canonical URL
- ✅ Open Graph tags
- ✅ Mobile responsive (viewport meta)
- ✅ Fast loading (preload, lazy loading)
- ✅ Internal linking between pages

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Duplicate titles | Every page needs a unique title |
| Keyword stuffing | Write naturally for humans, not bots |
| Missing alt on images | Always add descriptive alt text |
| No canonical URL | Leads to duplicate content penalties |
| No Open Graph | Social shares look bad without og:image |

---

## 🎯 Interview Tips

> "The \`<title>\` tag is the single most important on-page SEO factor."

> "Open Graph tags control how your page appears when shared on social media."

> "Canonical URLs prevent duplicate content penalties when same content exists at multiple URLs."

---

## 🛠️ Mini Practice

**Task:** Add complete SEO tags to a blog post page: title, description, canonical, Open Graph, and proper heading hierarchy.`,
          codeExample: `<h2>🔍 SEO Tag Examples</h2>

<h3>Complete Head Section</h3>
<pre style="background:#1e293b; color:#86efac; 
  padding:16px; border-radius:8px; font-size:12px;
  overflow-x:auto;">
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" 
    content="width=device-width, initial-scale=1.0"&gt;
  
  &lt;!-- SEO --&gt;
  &lt;title&gt;Learn HTML Free | CodeMaster&lt;/title&gt;
  &lt;meta name="description" 
    content="Learn HTML from scratch with 
    interactive lessons and quizzes."&gt;
  &lt;link rel="canonical" 
    href="https://codemaster.dev/html"&gt;
  
  &lt;!-- Open Graph --&gt;
  &lt;meta property="og:title" 
    content="Learn HTML Free"&gt;
  &lt;meta property="og:description" 
    content="Interactive HTML course"&gt;
  &lt;meta property="og:image" 
    content="https://codemaster.dev/og.jpg"&gt;
  &lt;meta property="og:type" content="website"&gt;
  
  &lt;!-- Twitter --&gt;
  &lt;meta name="twitter:card" 
    content="summary_large_image"&gt;
  
  &lt;!-- Favicon --&gt;
  &lt;link rel="icon" href="/favicon.ico"&gt;
&lt;/head&gt;
</pre>

<h3 style="margin-top:20px;">
  📊 SEO Checklist</h3>
<table border="1" cellpadding="10" 
  style="border-collapse:collapse; 
  width:100%; font-family:Arial; 
  font-size:14px;">
  <tr style="background:#0d9488; color:white;">
    <th>Element</th>
    <th>Status</th>
    <th>Rule</th>
  </tr>
  <tr>
    <td>&lt;title&gt;</td>
    <td>✅</td>
    <td>Under 60 chars, keyword first</td>
  </tr>
  <tr>
    <td>Meta description</td>
    <td>✅</td>
    <td>Under 160 chars, compelling</td>
  </tr>
  <tr>
    <td>One &lt;h1&gt;</td>
    <td>✅</td>
    <td>Exactly one per page</td>
  </tr>
  <tr>
    <td>Canonical URL</td>
    <td>✅</td>
    <td>Prevents duplicate content</td>
  </tr>
  <tr>
    <td>Open Graph</td>
    <td>✅</td>
    <td>Title, description, image</td>
  </tr>
  <tr>
    <td>Alt text</td>
    <td>✅</td>
    <td>Every meaningful image</td>
  </tr>
  <tr>
    <td>Semantic HTML</td>
    <td>✅</td>
    <td>nav, main, article, section</td>
  </tr>
</table>

<p style="margin-top:16px; color:#666; 
  font-size:14px;">
  💡 <strong>Tip:</strong> Use Google's 
  <a href="https://search.google.com/test/rich-results" 
    target="_blank" rel="noopener">
    Rich Results Test</a> to validate 
  your structured data!</p>`,
          quiz: [
            { question: "What's the most important on-page SEO element?", options: ["Meta keywords", "<title> tag", "Footer links", "Image alt"], correctIndex: 1 },
            { question: "What does a canonical URL prevent?", options: ["Slow loading", "Duplicate content penalties", "Broken links", "XSS attacks"], correctIndex: 1 },
            { question: "What do Open Graph tags control?", options: ["Page layout", "How page appears in social media shares", "Search ranking", "Page speed"], correctIndex: 1 },
            { question: "How many <h1> tags should a page have?", options: ["None", "Exactly one", "As many as needed", "At least three"], correctIndex: 1 },
            { question: "What's the max length for meta description?", options: ["50 chars", "100 chars", "160 chars", "300 chars"], correctIndex: 2 },
          ],
        },
      ],
    },
  ],
};
