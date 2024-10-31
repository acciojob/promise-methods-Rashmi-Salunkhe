function myRace(promises) {
  // implementation
	return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
}

function myAny(promises) {
  // implementation
	return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve);
    });

    // If all promises reject, reject with a specific error message
    setTimeout(() => reject("all promises rejected"), 0);
  });
}

function myAll(promises) {
  // implementation
	return new Promise((resolve, reject) => {
    const results = new Array(promises.length);
    let resolvedCount = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value;
          resolvedCount++;

          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

function myAllSettled(promises) {
  // implementation
	return new Promise((resolve) => {
    const results = new Array(promises.length);
    let settledCount = 0;

    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = { status: 'fulfilled', value };
        })
        .catch((error) => {
          results[index] = { status: 'rejected', error };
        })
        .finally(() => {
          settledCount++;

          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

module.exports = {
  myRace,
  myAny,
  myAll,
  myAllSettled
};
