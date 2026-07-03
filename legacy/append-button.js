const fs = require('fs');
const path = require('path');
const dir = __dirname;

const css = `
/* ===================================
   Liquid Optical Button (User Custom)
   =================================== */

@property --angle-1 {
  syntax: "<angle>";
  inherits: false;
  initial-value: -75deg;
}

@property --angle-2 {
  syntax: "<angle>";
  inherits: false;
  initial-value: -45deg;
}

.liquid-btn-wrap {
  position: relative;
  z-index: 2;
  border-radius: 999vw;
  background: transparent;
  pointer-events: none;
  transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
  display: inline-flex;
  font-size: 0.9375rem; /* Adjusted for navbar */
  vertical-align: middle;
}

/* For hero buttons we can scale them up */
.hero .liquid-btn-wrap {
  font-size: 1.125rem;
}

.liquid-btn-shadow {
  --shadow-cuttoff-fix: 2em;
  position: absolute;
  width: calc(100% + var(--shadow-cuttoff-fix));
  height: calc(100% + var(--shadow-cuttoff-fix));
  top: calc(0% - var(--shadow-cuttoff-fix) / 2);
  left: calc(0% - var(--shadow-cuttoff-fix) / 2);
  filter: blur(clamp(2px, 0.125em, 12px));
  -webkit-filter: blur(clamp(2px, 0.125em, 12px));
  -moz-filter: blur(clamp(2px, 0.125em, 12px));
  -ms-filter: blur(clamp(2px, 0.125em, 12px));
  overflow: visible;
  pointer-events: none;
}

.liquid-btn-shadow::after {
  content: "";
  position: absolute;
  z-index: 0;
  inset: 0;
  border-radius: 999vw;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
  width: calc(100% - var(--shadow-cuttoff-fix) - 0.25em);
  height: calc(100% - var(--shadow-cuttoff-fix) - 0.25em);
  top: calc(var(--shadow-cuttoff-fix) - 0.5em);
  left: calc(var(--shadow-cuttoff-fix) - 0.875em);
  padding: 0.125em;
  box-sizing: border-box;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
  overflow: visible;
  opacity: 1;
}

.liquid-btn {
  --border-width: clamp(1px, 0.0625em, 4px);
  all: unset;
  cursor: pointer;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  pointer-events: auto;
  z-index: 3;
  background: linear-gradient(
    -75deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.05)
  );
  border-radius: 999vw;
  box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
    inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
    0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2),
    0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.2),
    0 0 0 0 rgba(255, 255, 255, 1);
  backdrop-filter: blur(clamp(1px, 0.125em, 4px));
  -webkit-backdrop-filter: blur(clamp(1px, 0.125em, 4px));
  -moz-backdrop-filter: blur(clamp(1px, 0.125em, 4px));
  -ms-backdrop-filter: blur(clamp(1px, 0.125em, 4px));
  transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.liquid-btn:hover {
  transform: scale(0.975);
  backdrop-filter: blur(0.01em);
  -webkit-backdrop-filter: blur(0.01em);
  -moz-backdrop-filter: blur(0.01em);
  -ms-backdrop-filter: blur(0.01em);
  box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
    inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
    0 0.15em 0.05em -0.1em rgba(0, 0, 0, 0.25),
    0 0 0.05em 0.1em inset rgba(255, 255, 255, 0.5),
    0 0 0 0 rgba(255, 255, 255, 1);
}

.liquid-btn span {
  position: relative;
  display: block;
  user-select: none;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.05em;
  font-weight: 600;
  font-size: 1em;
  color: #111 !important; /* Forces dark text on the white button */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0em 0.25em 0.05em rgba(0, 0, 0, 0.1);
  transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
  padding-inline: 1.5em;
  padding-block: 0.875em;
  white-space: nowrap;
}

.liquid-btn:hover span {
  text-shadow: 0.025em 0.025em 0.025em rgba(0, 0, 0, 0.12);
}

.liquid-btn span::after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  width: calc(100% - var(--border-width));
  height: calc(100% - var(--border-width));
  top: calc(0% + var(--border-width) / 2);
  left: calc(0% + var(--border-width) / 2);
  box-sizing: border-box;
  border-radius: 999vw;
  overflow: clip;
  background: linear-gradient(
    var(--angle-2),
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 40% 50%,
    rgba(255, 255, 255, 0) 55%
  );
  z-index: 3;
  mix-blend-mode: screen;
  pointer-events: none;
  background-size: 200% 200%;
  background-position: 0% 50%;
  background-repeat: no-repeat;
  transition: background-position calc(400ms * 1.25) cubic-bezier(0.25, 1, 0.5, 1),
    --angle-2 calc(400ms * 1.25) cubic-bezier(0.25, 1, 0.5, 1);
}

.liquid-btn:hover span::after {
  background-position: 25% 50%;
}

.liquid-btn:active span::after {
  background-position: 50% 15%;
  --angle-2: -15deg;
}

.liquid-btn::after {
  content: "";
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: 999vw;
  width: calc(100% + var(--border-width));
  height: calc(100% + var(--border-width));
  top: calc(0% - var(--border-width) / 2);
  left: calc(0% - var(--border-width) / 2);
  padding: var(--border-width);
  box-sizing: border-box;
  background: conic-gradient(
      from var(--angle-1) at 50% 50%,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0) 5% 40%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 60% 95%,
      rgba(0, 0, 0, 0.5)
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1), --angle-1 500ms ease;
  box-shadow: inset 0 0 0 calc(var(--border-width) / 2) rgba(255, 255, 255, 0.5);
  pointer-events: none;
}

.liquid-btn:hover::after {
  --angle-1: -125deg;
}

.liquid-btn:active::after {
  --angle-1: -75deg;
}

.liquid-btn-wrap:has(.liquid-btn:hover) .liquid-btn-shadow {
  filter: blur(clamp(2px, 0.0625em, 6px));
  -webkit-filter: blur(clamp(2px, 0.0625em, 6px));
  -moz-filter: blur(clamp(2px, 0.0625em, 6px));
  -ms-filter: blur(clamp(2px, 0.0625em, 6px));
  transition: filter 400ms cubic-bezier(0.25, 1, 0.5, 1);
}

.liquid-btn-wrap:has(.liquid-btn:hover) .liquid-btn-shadow::after {
  top: calc(var(--shadow-cuttoff-fix) - 0.875em);
  opacity: 1;
}

.liquid-btn-wrap:has(.liquid-btn:active) {
  transform: rotate3d(1, 0, 0, 25deg);
}

.liquid-btn-wrap:has(.liquid-btn:active) .liquid-btn {
  box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
    inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
    0 0.125em 0.125em -0.125em rgba(0, 0, 0, 0.2),
    0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.2),
    0 0.225em 0.05em 0 rgba(0, 0, 0, 0.05),
    0 0.25em 0 0 rgba(255, 255, 255, 0.75),
    inset 0 0.25em 0.05em 0 rgba(0, 0, 0, 0.15);
}

.liquid-btn-wrap:has(.liquid-btn:active) .liquid-btn-shadow {
  filter: blur(clamp(2px, 0.125em, 12px));
}

.liquid-btn-wrap:has(.liquid-btn:active) .liquid-btn-shadow::after {
  top: calc(var(--shadow-cuttoff-fix) - 0.5em);
  opacity: 0.75;
}

.liquid-btn-wrap:has(.liquid-btn:active) span {
  text-shadow: 0.025em 0.25em 0.05em rgba(0, 0, 0, 0.12);
}

/* Secondary Dark Variation if needed */
.liquid-btn-dark .liquid-btn {
  background: linear-gradient(
    -75deg,
    rgba(20, 20, 20, 0.8),
    rgba(40, 40, 40, 0.9),
    rgba(20, 20, 20, 0.8)
  );
  box-shadow: inset 0 0.125em 0.125em rgba(255, 255, 255, 0.05),
    inset 0 -0.125em 0.125em rgba(0, 0, 0, 0.8),
    0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}
.liquid-btn-dark .liquid-btn span {
  color: #fff !important;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}
.liquid-btn-dark .liquid-btn::after {
  background: conic-gradient(
      from var(--angle-1) at 50% 50%,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0) 5% 40%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 60% 95%,
      rgba(255, 255, 255, 0.1)
    );
  box-shadow: inset 0 0 0 calc(var(--border-width) / 2) rgba(255, 255, 255, 0.05);
}
.liquid-btn-dark .liquid-btn span::after {
    background: linear-gradient(
    var(--angle-2),
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 40% 50%,
    rgba(255, 255, 255, 0) 55%
  );
}
`;

fs.appendFileSync(path.join(dir, 'assets/css/style.css'), css);
console.log('Appended button CSS.');
