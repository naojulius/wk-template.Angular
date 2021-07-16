export const MENU = [
    {
        title: 'Dashboard',
        icon: {
            name: 'menu',
            type: 'outline'
        },
        link: 'dashboard/home',
        home: true,
        data: {
            headerTitle: 'DashBoard'
        }
    },
    {
        title: 'Utilisateurs',
        icon: {
            name: 'users',
            type: 'outline'
        },
        link: 'dashboard/user',
        home: true,
        data: {
            headerTitle: 'Utilisateurs'
        }
    },
    {
        title: 'Login',
        icon: {
            name: 'login',
            type: 'outline'
        },
        link: 'authentication',
        home: true,
        data: {
            headerTitle: 'Login'
        }
    },
    {
        title: 'Registration',
        icon: {
            name: 'user',
            type: 'outline'
        },
        link: 'authentication/registration',
        home: true,
        data: {
            headerTitle: 'Registration'
        }
    },
    {
        title: 'Password reset',
        icon: {
            name: 'arrowCircleRight',
            type: 'outline'
        },
        link: 'authentication/password-renewal',
        home: true,
        data: {
            headerTitle: 'Reset Password'
        }
    },
];
