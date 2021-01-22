module.exports = {
    range(limit, callback) {
        const data = [];
        
        for(let i = 1; i <= limit; i++) {
            data.push(callback());
        }
    
        return data;
    }
}