# Gegebaskı design direction

## Purpose and customer journey

The site markets the owner's custom 3D printing service and earns relevant quote inquiries. It should answer: what can I order, why work with this person, and how do I start?

The owner's ten years of experience lead the introduction. Mechanical engineering background, CAD and mechanism knowledge, and project/thesis research into polymers and additive manufacturing explain practical decisions about fit, use, materials and print direction. These are owner-provided facts, not claims of certification or formal specialization.

A restrained Apple-inspired hierarchy uses system typography, generous spacing, accessible blue actions and an open light introduction followed by a dark personal-experience section. This is a responsive website; native Apple app controls are not copied.

## Tokens

| Role | Light | Dark | Contrast against matching surface |
| --- | --- | --- | --- |
| Surface | #ffffff | #101012 | — |
| Secondary surface | #f5f5f7 | #1c1c1f | — |
| Content | #1d1d1f | #f5f5f7 | 16.83:1 / 17.46:1 |
| Secondary content | #626268 | #a5a5ad | 5.56:1 on light secondary / 7.77:1 on dark surface |
| Link / focus | #0066cc | #80b5ff | 5.57:1 / 9.02:1 |
| Primary button | #0066cc with #ffffff text | same | 5.57:1 |

Responsive rem typography, clear heading levels, minimum 44 px controls, and minmax(0, 1fr) grids support enlarged text.

## Reading order

1. Custom printing headline, ten years of experience, primary WhatsApp quote action.
2. Three ways to begin: ready model, an idea, or several copies.
3. Concrete applications: prototypes/small batches, replacement parts/fixtures, games/objects. Each has a contextual quote link.
4. Direct owner communication and relevant engineering/materials background.
5. A compact visible X2D image and customer-benefit section; print dimensions remain in a native disclosure.
6. Existing Masaüstü Ekibi logo and the established working relationship.
7. Material selection by intended use, with explicitly illustrative swatches.
8. Four ordering steps, shipping-only FAQ, and final quote action.

Compact screens preserve this order in one column. A native disclosure menu replaces desktop navigation. The original Masaüstü Ekibi logo remains visible. One manufacturer X2D photograph supports the concise equipment section, with a source caption; no manufacturer store links compete with the service inquiry.

## Content restraint and conversion

A short visible equipment section explains separate supports, compatible color changes and filament drying in customer terms. Shipping is simply nationwide cargo; the 50 g order minimum and recipient-paid shipping remain explicit in FAQs.

WhatsApp links carry context-specific drafts; the visitor chooses whether to send. No automatic messaging, fabricated portfolio, testimonials, customer counts, pricing or guaranteed engineering tolerances are introduced. The social preview image promotes Gegebaskı and the printing service.

The hero has a short entrance animation. Desktop wheel movement is eased with a 100 ms exponential time constant, preserving total wheel distance and stopping its animation loop at rest. Direction changes respond immediately; pointer, touch, keyboard, focus, anchor/history navigation and reduced-motion changes cancel the animation. Touch scrolling, zoom gestures and nested scrolling areas remain native. The page uses the real document scrollbar, with no transformed wrapper, scroll snapping or content dependent on JavaScript visibility. Reduced motion disables custom easing and native smooth anchor transitions. OS dark appearance and opaque navigation surfaces are supported.

The easing curve is a design judgment for the requested feel, not a claim about Apple website implementation. `motion.md › Providing feedback`: “Let people cancel motion.” `scroll-views.md › Best practices`: “Support default scrolling gestures and keyboard shortcuts.”

## References consulted in the apple-design skill

- accessibility.md › Vision: “Support larger text sizes.”
- layout.md › Best practices: “Make essential information easy to find by giving it sufficient space.”
- typography.md › Conveying hierarchy: “Minimize the number of typefaces you use”.
- color.md › Inclusive color: “Avoid relying solely on color”.
- designing-for-ios.md › Best practices: prioritize the primary task and reduce competing controls.
- buttons.md › Best practices: “Always include a press state for a custom button.”
- motion.md › Best practices: “Make motion optional.”
- writing.md › Getting started: “Be clear.”
- branding.md › Best practices: “Ensure branding always defers to content.”

The service-first reading order, dark experience section and contextual inquiry links are design judgments for this business, not HIG mandates.

## Verification and practical limits

Locally verified in Chromium in September 2026:

- Responsive widths from 320 to 1440 px and 200% root text sizing.
- Real logo loads, equipment is collapsed initially, and fragment destinations resolve.
- Contact URL phone number and draft text checked without sending messages.
- Native menu and FAQ operation, keyboard Escape/focus restoration, and no-JavaScript behavior.
- Light/dark appearance and reduced motion.
- JavaScript syntax, whitespace and HTTP/browser-error checks.

Genuine photographs of completed work would provide stronger proof of print quality. None were invented. The separate weekend growth plan makes producing a real case example a recurring business task. Local testing does not establish conversion rates, revenue growth or physical-device screen-reader compatibility.
