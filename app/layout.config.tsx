import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';


/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: (
      <div style={{ display: 'flex',gap:"3px", alignItems: 'center' }}>
         <div
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #D37CF0, #583ECA)',
            marginLeft: 8,
          }}
        />
        ThunderUI
       
      </div>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
