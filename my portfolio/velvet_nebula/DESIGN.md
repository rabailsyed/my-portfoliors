# Design System Document: The Luminous Canvas

## 1. Overview & Creative North Star
**Creative North Star: "The Luminous Canvas"**

This design system is built to move away from the rigid, grid-bound nature of standard web templates and toward a "High-End Editorial" experience. The goal is to treat the screen as a dark, expansive gallery where light—not lines—defines the boundaries. 

By leveraging **Space Grotesk** for high-impact headlines and **Manrope** for refined body text, we create a rhythmic hierarchy that feels both technical and poetic. We reject the "boxy" nature of traditional UI, opting instead for **intentional asymmetry**, overlapping glass containers, and ethereal glows that guide the user's eye through a narrative journey. This is "Minimal Luxury Tech": a fusion of high-performance precision and soft, feminine elegance.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, void-like foundation (`#0e0e0e`), punctuated by vibrant, glowing accents that simulate light refracting through glass.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through:
- **Background Color Shifts:** Use `surface-container-low` against the base `surface` to denote a new area.
- **Tonal Transitions:** Subtle shifts in dark grey to create a sense of structure without the "caged" feel of lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of frosted glass.
- **Base Layer:** `surface` (#0e0e0e) or `surface-dim`.
- **Primary Containers:** `surface-container-low` (#131313).
- **Interactive Elements:** `surface-container-high` (#202020) or `surface-variant` (#262626).
Each inner container should use a progressively higher tier to define its importance, creating a "nested" depth that feels organic.

### The "Glass & Gradient" Rule
To achieve "Luxury Tech," use Glassmorphism for floating elements. 
- **Recipe:** Use `surface-variant` at 40-60% opacity with a `backdrop-filter: blur(20px)`.
- **Signature Textures:** Apply linear gradients (e.g., `primary` #d277ff to `secondary` #c2c1ff) at low opacities as background meshes. This adds "soul" and prevents the dark theme from feeling flat or sterile.

---

## 3. Typography
Our typography is the voice of the portfolio: authoritative yet approachable.

- **Display & Headlines (Space Grotesk):** This is our "Editorial" layer. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections to create a high-fashion, premium impact.
- **Body & Titles (Manrope):** This is our "Functional" layer. Manrope provides a clean, neutral balance to the expressive headlines. 
- **Visual Rhythm:** Always pair a `display-lg` headline with a `body-lg` sub-header. The contrast between the geometric tech-vibe of Space Grotesk and the soft legibility of Manrope creates the "Minimal Luxury" tension.

---

## 4. Elevation & Depth
In this design system, depth is a product of light, not physics.

- **The Layering Principle:** Stacking `surface-container` tiers is the default. Avoid shadows on flat, docked elements. 
- **Ambient Shadows:** For floating elements (like Modals or Hovering Cards), use "Ambient Shadows." 
    - **Color:** A tinted version of the `surface-tint` (#d277ff) at 5% opacity.
    - **Specs:** Blur values of 40px–80px. Never use hard, dark-grey shadows.
- **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use a "Ghost Border." Apply the `outline-variant` (#484848) at **15% opacity**. It should be felt, not seen.
- **Glow Accents:** Use the `primary_dim` (#d277ff) or `secondary_dim` (#6462ec) with a high Gaussian blur (150px+) behind key content to simulate a soft "backlight."

---

## 5. Components

### Buttons
- **Primary:** Rounded `full` (9999px). Use a gradient from `primary` (#d277ff) to `primary_container` (#bf5af2). Text color: `on_primary` (#380052).
- **Secondary (Glass):** Rounded `full`. Background: `surface-variant` at 20% opacity + backdrop blur. Border: Ghost Border (10% opacity `outline`).
- **Tertiary:** No background. `label-md` uppercase with `primary` color and 2px bottom padding on hover.

### Cards & Lists
- **The Portfolio Card:** Never use dividers. Use `surface-container-low` as the base. On hover, transition to `surface-container-high` and add a subtle `primary` glow to the top-left corner.
- **Lists:** Separate items using 24px–32px of vertical white space from the Spacing Scale. Use `on_surface_variant` (#acabaa) for secondary metadata.

### Inputs & Chips
- **Input Fields:** Minimalist "Underline" style or subtle `surface-container-lowest` fill. Use `primary` for the active focus state.
- **Chips:** `sm` (0.25rem) or `full` roundedness. Use `secondary_container` for the background with `on_secondary_container` text for a soft, feminine pop of color.

### Signature Component: The "Frosted Project Header"
A full-width `display-md` headline sitting atop a mesh gradient of `primary`, `secondary`, and `tertiary` colors, obscured by a high-blur glass overlay.

---

## 6. Do's and Don'ts

### Do:
- **Embrace Negative Space:** Allow headlines to "breathe." Luxury is defined by the space you don't fill.
- **Use "On-Surface" Hierarchy:** Use `on_surface` (#e7e5e4) for primary text and `on_surface_variant` (#acabaa) for descriptions to create natural focus.
- **Subtle Motion:** Elements should "float" into view with soft ease-out transitions (0.6s).

### Don't:
- **No Pure White:** Never use `#ffffff`. It is too harsh for a luxury dark theme. Use `on_surface` (#e7e5e4).
- **No Sharp Corners:** Avoid `none` or `sm` roundedness for large containers. Stick to `lg` (1rem) or `xl` (1.5rem) to maintain the "soft" aesthetic.
- **No Grids for Everything:** Allow some elements to be offset from the grid (asymmetry) to create a bespoke, non-templated look.