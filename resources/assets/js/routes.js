import DashboardComp from './components/Dashboard.vue';
import ProfileComp from './components/Profile.vue';
import Users from './components/Users.vue';

export default 
    [
        {
            path: '/dashboard',
            component: DashboardComp
        },
        {
            path: '/profile',
            component: ProfileComp
        },
        {
            path: '/users',
            component: Users
        }
    ]
