import React from 'react'
import App from '../containers/App'
import Main from '../components/layouts/Main'
import Home from '../components/Home'
import About from '../components/About'
import NotFound from '../containers/NotFound'

function ComponentWithLayout(Layout, Component){
    return () => (
        <Layout>
            <Component/>
        </Layout>
    )
}

export default [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: ComponentWithLayout(Main, Home),
            },
            {
                path: '/about',
                component: ComponentWithLayout(Main, About),
            },
            {
                component: NotFound
            }
        ]
    }
]
