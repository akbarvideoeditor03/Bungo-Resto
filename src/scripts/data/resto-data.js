import ENDPOINT_OF_API from "../globals/endpoint";

class RestoApiSource {
    static async restoMainPage() {
        const response = await fetch(ENDPOINT_OF_API.MAIN_PAGE);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async restoDetailPage(id) {
        const response = await fetch(ENDPOINT_OF_API.DETAIL_PAGE(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
        
    }
}

export default RestoApiSource;