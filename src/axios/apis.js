import service from './service'
// export const post = (url, data) => {
//   return new Promise(
//     function (resolve, reject) {
//       service({
//           method: 'post',
//           url,
//           data
//         }).then(function (response) {
//           resolve(response)
//         })
//         .catch(function (rej) {
//           reject(rej)
//         });
//       // 一段耗时的异步操作
//       // 数据处理完成
//       // reject('失败') // 数据处理出错
//     }
//   )
// };
export const post = (url, data) => {
  return service({
    method: 'post',
    url,
    data
  })
};

export const get = (url, data) => {
  return service({
    method: 'get',
    url,
    params: data
  })
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