import { Home, Flight, SearchFlight } from '~/pages';
import { DefaultLayout, HeaderOnly } from '~/layouts';

const publicRoutes = [
    { id: 0, path: '/', component: Home, layout: DefaultLayout },
    { id: 1, path: '/flight', component: Flight, layout: DefaultLayout },
    { id: 2, path: '/results/:ticketType', component: SearchFlight, layout: HeaderOnly },
];

export { publicRoutes };
