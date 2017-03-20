function toQueryString(name, query){
    return `${name}=${encodeURIComponent(query[name])}`;
}

function querify(query){
    const queryNames = Object.keys(query);
    if(!queryNames.length){ return ''; }
    return `?${queryNames.map((name)=>toQueryString(name, query)).join('&')}`;
}

module.exports = querify;