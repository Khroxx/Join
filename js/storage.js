const STORAGE_TOKEN = '7WOZYJPVRPLQU2QHOLVJAIBW8PYK5CJ3FKQF8720';
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

// function to set give value to storage
async function setItem(key, value){
    const payload = {key, value, token:STORAGE_TOKEN};
    return fetch(STORAGE_URL, {method: 'POST', body: JSON.stringify(payload)})
    .then(res => res.json());
}

// function to retrieve value from storage
async function getItem(key){
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => {
        if(res.data){
            return res.data.value;
        }throw `Could not find datawith key "${key}.`;
    });
}