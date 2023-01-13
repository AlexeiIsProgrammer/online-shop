export default class gettingJSON {
    static getItems() {
        const json = require('../../db.json');
        
        return json.products;
    }
    
    static getItemsById(id) {
        const json = require('../../db.json');
        
        return json.products[id];
    }
}
