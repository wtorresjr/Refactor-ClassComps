export const toQueryString = (params) => {
console.log('this is params -----', params);

  const parts = [];
  for (let key in params) {
    let val = encodeURIComponent(params[key]);

    if (params[key]) {
      parts.push(`${key}=${val}`);
    }
  }
  return parts.join('&');
}
