import Home from './Home'
import App from './App'

export const routes = [
    { path: '/home', component: Home },
    { path: '/', exact: true, component: App },
];