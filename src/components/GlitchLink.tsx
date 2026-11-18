import type { CSSProperties, ElementType, ReactNode } from 'react';

const GLITCH_STYLES = `
.glitch-link {
  --glitch-space: 3px;
  --glitch-space-2: -3px;
  position: relative;
  display: inline-block;
  width: fit-content;
  max-width: 100%;
  white-space: pre-wrap;
}

.glitch-link__text {
  position: relative;
  z-index: 2;
  display: block;
  white-space: inherit;
  transition: none;
}

.glitch-link::before,
.glitch-link::after {
  position: absolute;
  z-index: 1;
  inset: 0;
  content: attr(data-glitch);
  pointer-events: none;
  white-space: pre-wrap;
  opacity: 0;
  transition:
    transform 220ms cubic-bezier(.22, 1, .36, 1),
    opacity 140ms ease-out;
}

.glitch-link::before {
  color: var(--glitch-primary);
  transform: translate(0, 0);
}

.glitch-link::after {
  color: var(--glitch-secondary);
  transform: translate(0, 0);
}

.glitch-link:hover::before {
  opacity: 0.9;
  transform: translate(var(--glitch-space), 0);
  animation: glitch 700ms linear infinite alternate;
}

.glitch-link:hover::after {
  opacity: 0.9;
  transform: translate(var(--glitch-space-2), 0);
  animation: glitch 700ms linear infinite alternate-reverse;
}

@keyframes glitch {
  0% { color: cyan; }
  25% { color: blue; }
  50% { color: magenta; }
  75% { color: yellow; }
  100% { color: lightgreen; }
}

@media (prefers-reduced-motion: reduce) {
  .glitch-link__text,
  .glitch-link::before,
  .glitch-link::after {
    transition: none;
  }
}
`;

export type GlitchLinkProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  space?: number;
  space2?: number;
  style?: CSSProperties;
};

export default function GlitchLink({
  children,
  as: Component = 'span',
  className = '',
  space = 3,
  space2 = -3,
  style
}: GlitchLinkProps) {
  const text = typeof children === 'string' || typeof children === 'number'
    ? String(children)
    : '';

  const colors = {
    '--glitch-space': `${space}px`,
    '--glitch-space-2': `${space2}px`,
  } as CSSProperties;

  return (
    <>
      <style>{GLITCH_STYLES}</style>
      <Component
        className={`glitch-link ${className}`.trim()}
        data-glitch={text}
        style={{ ...colors, ...style }}
      >
        <span className="glitch-link__text">
          {children}
        </span>
      </Component>
    </>
  );
}
