# Gegebaskı design direction

## Review and thesis

The site should make a custom 3D print feel approachable and carefully made. Its audience includes hobbyists, tabletop players and people developing practical parts. The primary action is discussing a model over WhatsApp.

The previous design hid most content until JavaScript ran, used small low-contrast text, repeated decorated cards and had an empty portfolio. The redesign begins with readable content and native disclosures, then simplifies navigation, typography and imagery.

This is a responsive website. Apple HIG foundations apply; native app tab bars, window controls and other platform-specific navigation do not.

## Tokens planned before layout

| Role | Light | Dark | Contrast against matching surface |
| --- | --- | --- | --- |
| Surface | #ffffff | #101012 | — |
| Secondary surface | #f5f5f7 | #1c1c1f | — |
| Content | #1d1d1f | #f5f5f7 | 16.83:1 / 17.46:1 |
| Secondary content | #626268 | #a5a5ad | 5.56:1 on light secondary / 7.77:1 on dark surface |
| Link / focus | #0066cc | #80b5ff | 5.57:1 / 9.02:1 |
| Primary button | #0066cc with #ffffff text | same | 5.57:1 |

System sans-serif throughout: display 48–80 px, section title 36–56 px, card title 28–36 px, body 17–20 px, utility 13–14 px. Use rem units with responsive caps and no thin weights. Controls have a minimum 44 px hit region.

## Layout

Large, quiet product photography leads into a dark close-up of the dual-nozzle system; lighter accessory stories and practical use cases follow.

Regular:
```
[ Brand              Services  Equipment  Materials   Contact ]
[                  Large service headline                     ]
[                 Short explanation / actions                 ]
[                 Wide X2D product photograph                 ]
[                    Service possibilities                    ]
[ X2D: customer benefit          Dual-nozzle photograph        ]
[ AMS 2 Pro story                Space Pi story                ]
[                 Materials / use cases                       ]
[ 1 Send model  | 2 Quote | 3 Print and check | 4 Delivery      ]
[ Tabletop partnership           Common questions              ]
[                 Start a conversation                        ]
```

Compact: same reading order, one column; a disclosure menu replaces the desktop links. Photos retain meaningful product framing. Technical specifications remain optional native details elements.

## Signature and restraint

The signature is the transition from the bright X2D studio scene to a dark, large-scale view of the two nozzles. It belongs to this workshop's equipment and explains separate support material. Real manufacturer equipment images replace decorative emoji and fictitious portfolio pictures. Material swatches are labeled as illustrative finishes.

One short entrance animation on the hero copy; no scroll hijacking, parallax or content hidden pending JavaScript. Respect reduced motion, reduced transparency, higher contrast and OS dark appearance. A compact sticky contact action replaces a competing floating badge.

## References actually consulted

From the apple-design skill's `references/hig/`:

- `accessibility.md › Vision`: “Support larger text sizes.” Check 200% text and keyboard navigation.
- `layout.md › Best practices`: “Make essential information easy to find by giving it sufficient space.”
- `typography.md › Conveying hierarchy`: “Minimize the number of typefaces you use”.
- `color.md › Inclusive color`: “Avoid relying solely on color”.
- `designing-for-ios.md › Best practices`: prioritize the primary task and reduce competing controls.
- `buttons.md › Best practices`: “Always include a press state for a custom button.”
- `motion.md › Best practices`: “Make motion optional.”
- `writing.md › Getting started`: “Be clear.” Equipment copy describes customer benefits in everyday Turkish.
- `branding.md › Best practices`: “Ensure branding always defers to content.”

The photography, light/dark editorial rhythm and Turkish headlines are design judgments, not HIG mandates. The plan is specific to this service: the printer explains how parts are made, and the accessories explain preparation. Remove the empty gallery and animated status badges; neither provides customer evidence.

## Final review and verification

**Summary: Good.** The page now leads with the custom printing service, uses an identifiable X2D image story, and keeps equipment specifications behind native disclosures. The final restraint pass removed decorative status indicators, repetitive badges and the empty gallery.

Verified locally in Chromium on 15 September 2026:

- No horizontal overflow at 1440, 1024, 820, 800, 768, 600, 390, 375 and 320 px viewport widths.
- No horizontal overflow with 200% root text size at 1440, 768, 390 and 320 px; corrected intrinsic grid widths and allowed the navigation to wrap.
- Every image successfully decoded after scrolling into view; no failing HTTP responses or JavaScript errors.
- All fragment links resolve. Contact destinations and the 50 g shipping minimum remain intact. Delivery copy was subsequently updated to shipping only, including Eskişehir, at the owner's request.
- Keyboard skip link, menu Escape/focus restoration, keyboard FAQ operation and all technical disclosures work.
- Mobile menu and FAQs work with JavaScript disabled.
- Visible mobile links and disclosure controls meet the 44 px minimum height.
- Light and dark appearance inspected; reduced-motion mode disables the entrance animation. Navigation uses opaque surfaces, so it does not depend on transparency.
- JavaScript syntax and Git whitespace checks pass.

**Remaining limitation (Medium):** Manufacturer imagery demonstrates equipment but does not demonstrate the business's own print quality. Add genuine project photographs when available. This review does not claim screen-reader testing on physical Apple hardware; native HTML semantics and keyboard behavior were checked in Chromium.
