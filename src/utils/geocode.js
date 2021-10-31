const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hhaXNoYXYxMjMiLCJhIjoiY2t2YXV6dGZoYWd6NTJwbnp0NWVrdXJrcCJ9.l3YaHG7Wmjj4vn4YjrhYuQ&limit=1'
    request({url, json: true}, (error, {body}) => {
         if(error){
             callback('Unable To Connect To Location Services', undefined)
         }else if(body.features.length === 0) {
             
            callback('Unable To Find Location. Try Another Search', undefined)
         }else{
             callback(undefined,{
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location: body.features[0].place_name
             })
         }
    })
}

    module.exports = geocode