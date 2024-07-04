import DefaultLayout from '../layouts/DefaultlLayout/DefaultLayout.js'; // Đảm bảo đúng tên và đường dẫn
import home from '../pages/home';

const publicRoutes = [
    { path: '/', component: home
        , layout: DefaultLayout 
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
