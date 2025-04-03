import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Modern OJS',
    description: 'Documentation for Modern Open Journal Systems',
    base: '/modern-ojs/',
    srcDir: 'docs',
    appearance: false,
    lastUpdated: false,

    themeConfig: {
        logo: {
            light: '/logo.svg',
            dark: '/logo.svg',
            alt: 'MOJS Logo'
        },
        siteTitle: 'MOJS Docs',
        outlineTitle: 'On this page',
        darkModeSwitchLabel: false,
        sidebarMenuLabel: false,
        returnToTopLabel: false,
        docFooter: {
            prev: false,
            next: false
        },
        footer: false,
        lightModeSwitchTitle: false,
        darkModeSwitchTitle: false,
        langMenuLabel: false,
        skipToContentLabel: false,
        externalLinkIcon: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/docs/' },
            { text: 'GitHub', link: 'https://github.com/balinesthesia/modern-ojs' }
        ],
        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    { text: 'Introduction', link: '/docs/' },
                    { text: 'Local Setup', link: '/docs/LOCAL_SETUP' },
                    { text: 'Development', link: '/docs/DEVELOPMENT' }
                ]
            },
            {
                text: 'Core Features',
                items: [
                    { text: 'Deployment', link: '/docs/DEPLOYMENT' },
                    { text: 'Testing', link: '/docs/TESTING' },
                    { text: 'Security', link: '/docs/SECURITY' },
                    { text: 'Monitoring', link: '/docs/MONITORING' }
                ]
            },
            {
                text: 'Advanced Topics',
                items: [
                    { text: 'Performance', link: '/docs/PERFORMANCE' },
                    { text: 'Scaling', link: '/docs/SCALING' },
                    { text: 'Migration', link: '/docs/MIGRATION' },
                    { text: 'Backup & Recovery', link: '/docs/BACKUP_RECOVERY' }
                ]
            },
            {
                text: 'Maintenance',
                items: [
                    { text: 'Maintenance', link: '/docs/MAINTENANCE' },
                    { text: 'Troubleshooting', link: '/docs/TROUBLESHOOTING' },
                    { text: 'CI/CD', link: '/docs/CI_CD' },
                    { text: 'Development Tools', link: '/docs/DEVELOPMENT_TOOLS' }
                ]
            },
            {
                text: 'Community',
                items: [
                    { text: 'Contributing', link: '/docs/CONTRIBUTING' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/balinesthesia/modern-ojs' }
        ]
    }
})
