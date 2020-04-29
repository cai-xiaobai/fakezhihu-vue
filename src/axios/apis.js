import service from './service'
export const get = (url, data) => {
  return service({
      method: 'get',
      url,
      params: data
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const post = (url, data) => {
  return service({
      method: 'post',
      url,
      data
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const del = (url, data) => {
  return service({
    method: 'delete',
    url,
    ...data
  });
};

export const put = (url, data) => {
  return service({
    method: 'put',
    url,
    data
  });
};