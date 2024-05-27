import CONFIG from "./config";

const ENDPOINT_OF_API = {
    MAIN_PAGE: `${CONFIG.urlApi}/list`,
    DETAIL_PAGE: (id) => `${CONFIG.urlApi}/detail/${id}`
};

export default ENDPOINT_OF_API;