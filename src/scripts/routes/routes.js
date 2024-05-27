import MainPage from "../views/pages/main-page";
import DetailPage from "../views/pages/detail-page";
import LikePage from "../views/pages/like-page";

const routes = {
    '/' : MainPage,
    '/detail/:id' : DetailPage,
    '/like' : LikePage,
};

export default routes;