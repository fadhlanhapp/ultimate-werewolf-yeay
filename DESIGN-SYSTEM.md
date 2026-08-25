# Ultimate Werewolf adoption note

This standalone page consumes the canonical Gathr design system at [`/opt/gathr/frontend/docs/design-system.md`](../../gathr/frontend/docs/design-system.md). It does not define a bespoke game palette. The stylesheet maps the canonical tokens to compact CSS variables while preserving the page's existing IDs, generated markup, game logic, API adapter, and responsive behavior.

Game-specific safety constraints:

- Role cards use one neutral paper surface for every alignment; team information is textual only.
- Moderator controls, player names, role text, Night Walker order, and timer remain the visual priority.
- The app uses the canonical Quicksand substitute, flat color blocks, 5px controls, 15px cards, pill badges, and the yellow ring as its only elevation cue.
