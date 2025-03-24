import { createElement, startTransition } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'

const root = createRoot(document.getElementById('root')!)

hydrate()
async function hydrate() {
    const routes = (await import('./Routes')).default
    // const lazyMatches = matchRoutes(routes, window.location)?.filter(
    //     (m) => m.route.lazy
    // )

    // if (lazyMatches && lazyMatches?.length > 0) {
    //     await Promise.all(
    //         lazyMatches.map(async (m) => {
    //             if(!m.route.lazy) return
    //             const routeModule = await m.route.lazy();
    //             Object.assign(m.route, { ...routeModule, lazy: undefined })
    //         })
    //     )
    // }

    const router = createBrowserRouter(routes)
    startTransition(() => {
        root.render(createElement(RouterProvider, { router } ))
    })
}