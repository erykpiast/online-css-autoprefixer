import xhr from 'xhr';


function getJson(url) {
    return new Promise(function(resolve, reject) {
        xhr({
            method: 'GET',
            uri: url
        }, function (err, resp, body) {
            if(!err) {
                try {
                    body = JSON.parse(body);
                } catch(e) {
                    err = e;
                }
            }

            if(err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
}

export default getJson;