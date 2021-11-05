import Chat from "./components/chat";
import Login from "./components/login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./util/const";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        component: Chat
    }
]