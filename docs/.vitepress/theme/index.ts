import { h } from 'vue'
import CustomNav from './CustomNav.vue'
import './custom.css'

// Create a minimal theme without VitePress branding
export default {
    Layout: () => {
        return h('div', { class: 'theme' }, [
            h(CustomNav),
            h('main', { class: 'page' }, [
                h('div', { class: 'container' }, [
                    // Content will be injected here by VitePress
                    h('div', { class: 'content' })
                ])
            ])
        ])
    },
    enhanceApp({ app }) {
        // register global components if needed
    }
} 