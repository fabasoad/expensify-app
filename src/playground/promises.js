const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Yevhen',
            age: 31
        });
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second promise');
        }, 1500);
    });
}).then((str) => {
    console.log('Does this run?', str);
}).catch((error) => {
    console.log('error', error);
});

console.log('after');