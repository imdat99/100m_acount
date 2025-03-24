import { RouteObject } from 'react-router'
import { PATH_HOME, PATH_PERSONALINFO } from './lib/constant'
import Layout from './views/components/Layout'
import Notfound from './views/components/Notfound'
import FallbackRouter from './views/components/FallbackRouter'
const router: RouteObject[] = [
    {
        path: PATH_HOME,
        Component: Layout,
        ErrorBoundary: Notfound,
        HydrateFallback: FallbackRouter,
        children: [
            {
                index: true,
                lazy: async () => ({
                    Component: (await import("./views/pages/Home")).default,
                }),
            },
            {
                path: PATH_PERSONALINFO,
                lazy: async () => ({
                    Component: (await import("./views/pages/PersonalInfo")).default,
                }),
            }
        ]
    }
]
export default router