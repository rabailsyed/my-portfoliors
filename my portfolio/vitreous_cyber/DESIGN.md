# Design System Strategy: The Synthetic Ether

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Synthetic Ether."** This is not a standard portfolio framework; it is a high-fidelity digital environment that mimics a futuristic, hyper-modern interface. It moves away from the "flat web" by embracing depth, refraction, and luminosity.

To break the "template" look, we utilize **Intentional Asymmetry**. Elements should not always align to a rigid center; instead, allow hero typography to bleed off-canvas or overlap 3D assets. This creates a bespoke, editorial feel that suggests the interface is an organic, evolving entity rather than a static grid. Use overlapping layers to create a sense of physical space, where content feels "suspended" in a dark, atmospheric void.

## 2. Colors: Luminosity & Depth
The palette is rooted in a high-contrast relationship between a deep, slate-void and hyper-saturated neon accents.

*   **The "No-Line" Rule:** Sectioning must never be achieved with solid 1px borders. Instead, define boundaries through background shifts. Transition from `surface` (#060e20) to `surface_container_low` (#091328) to create structural zones.
*   **Surface Hierarchy & Nesting:** Treat the UI as a stack of frosted panels. 
    *   **Level 0 (Base):** `surface_dim` (#060e20).
    *   **Level 1 (Sections):** `surface_container_low` (#091328).
    *   **Level 2 (Cards):** `surface_container` (#0f1930) with a 15px backdrop-blur.
*   **The Glass & Gradient Rule:** For primary actions and focal points, use a "Linear Pulse" gradient—transitioning from `primary` (#99f7ff) to `secondary` (#ac89ff) at a 135-degree angle. This injects "visual soul" and breaks the monotony of flat dark mode.
*   **Signature Textures:** Apply a subtle 3% noise texture over `surface` layers to simulate high-end matte materials and prevent color banding in dark gradients.

## 3. Typography: Editorial Futurism
We use a pairing of **Space Grotesk** for high-impact displays and **Inter** for functional readability.

*   **Display & Headlines (Space Grotesk):** These are your "anchors." Use `display-lg` (3.5rem) with tighter letter-spacing (-0.04em) to create an authoritative, architectural look.
*   **Body & Labels (Inter):** Inter provides the "high-tech" functional contrast. Use `body-md` (0.875rem) for long-form content to maintain a sleek, minimalist footprint.
*   **Hierarchy as Brand:** Use `secondary_dim` (#874cff) for `label-md` elements to create a sophisticated, low-contrast secondary hierarchy that doesn't compete with the primary neon cyan content.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are forbidden. We use **Luminous Diffusion**.

*   **The Layering Principle:** Place a `surface_container_highest` (#192540) element on top of `surface_dim` to create a natural "lift." The depth is perceived through the shift in slate tones, not artificial black shadows.
*   **Ambient Shadows:** When a floating 3D element requires a shadow, use a large 40px–60px blur with 10% opacity, tinted with `primary` (#99f7ff). This simulates the "glow" of the object onto the glass surface.
*   **The "Ghost Border" Fallback:** For Glassmorphism containers, use a 1px border with `outline_variant` (#40485d) at **15% opacity**. This creates the "edge" of the glass without cutting through the background blur.
*   **Glassmorphism Specs:** All glass panels must use `surface_container` at 60% opacity, a 15px `backdrop-filter: blur()`, and the Ghost Border.

## 5. Components: Primitive Logic

*   **Buttons:**
    *   **Primary:** A gradient fill (`primary` to `primary_container`) with a `primary` outer glow (8px blur, 30% opacity). Border-radius: `md` (0.75rem).
    *   **Secondary:** Ghost Border (`outline_variant` at 20%) with a backdrop blur. No fill.
*   **Chips:** Use `surface_container_high` with `label-sm` text. Use a `primary` dot (4px) on the left for "active" states to simulate a power indicator.
*   **Input Fields:** Strictly minimal. Only a bottom border using `outline` (#6d758c) at 30% opacity. Upon focus, the border animates to 100% `primary` with a subtle cyan "underglow."
*   **Cards & Lists:** **No dividers.** Separate list items using 16px of vertical whitespace. For cards, use background tonal shifts (`surface_container_low` to `surface_container`).
*   **Signature Component - The "Neon Portal":** A large-scale decorative element using a 3D-transformed `secondary_container` (#7000ff) circle with a 100px blur, placed behind glass panels to create "atmospheric weather" in the UI.

## 6. Do's and Don'ts

### Do:
*   **DO** overlap 3D assets with text to create "z-axis" depth.
*   **DO** use `primary_fixed_dim` (#00e2ee) for small links to ensure AAA accessibility against the dark background.
*   **DO** keep 80% of the interface "dark and quiet" to allow the 20% of neon accents to truly "pop."

### Don't:
*   **DON'T** use 100% white (#ffffff). Use `on_surface` (#dee5ff) to prevent "eye-sear" in dark mode.
*   **DON'T** use hard-edged shadows or 1px solid white borders. This destroys the "Synthetic Ether" illusion.
*   **DON'T** use standard ease-in-out transitions. Use custom cubic-beziers (e.g., `0.22, 1, 0.36, 1`) for a "snappy yet fluid" high-end feel.