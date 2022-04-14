//node는 비동기처리 함수임을 알 수 있음
console.log('안녕하세요');

setTimeout(() => {
  console.log('Set Time out');
}, 2000);

console.log('끝');

//condition = true: 성공하면 resolve되고 then으로 전달
//condition = false: reject되면 catch로

const condition: boolean = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject(new Error('reject !! error'));
  }
});

promise
  .then((resolveData): void => {
    console.log(resolveData);
  })
  .catch(error => console.log(error));

const restaurant = (callback: () => void, time: number) => {
  //함수를 인자로 받을 수 있음
  setTimeout(callback, time);
};

//promise 체이닝 실습
const order = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    restaurant(() => {
      console.log('레스토랑 진행 상황 - 음식 주문');
      resolve('음식 주문 시작');
    }, 1000);
  });
};

const cook = (progress: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    restaurant(() => {
      console.log('레스토랑 진행 상황 - 음식 조리 중');
      resolve(`${progress} -> 음식 조리 중`);
    }, 2000);
  });
};

const serving = (progress: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    restaurant(() => {
      console.log('레스토랑 진행 상황 - 음식 서빙 중');
      resolve(`${progress} -> 음식 서빙 중`);
    }, 2500);
  });
};

const eat = (progress: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    restaurant(() => {
      console.log('레스토랑 진행 상황 - 음식 먹는 중');
      resolve(`${progress} -> 음식 먹는 중`);
    }, 3000);
  });
};

order()
  .then(progress => cook(progress))
  .then(progress => serving(progress))
  .then(progress => eat(progress))
  .then(progress => console.log(progress));
//여기에 단일 catch로 모든 reject 받아올 수 있음

Promise.resolve(123)
  .then(res => {
    throw new Error('에러 발생'); //에러 만들어 줌
    return 456;
  })
  .then(res => {
    console.log(res); //에러 발생했기 때문에 절대 실행되지 않음!!
    return Promise.resolve(789);
  })
  .catch(error => {
    console.log(error.message);
  });

let asyncFunc1 = (msg: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`asyncFun1 - ${msg}`);
    }, 1000);
  });
};
let asyncFunc2 = (msg: string): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`asyncFun2 - ${msg}`);
    }, 1500);
  });
};

let promiseMain1 = (): void => {
  asyncFunc1('server part')
    .then((result: string) => {
      console.log(result);
      return asyncFunc2('채정아');
    })
    .then((result: string) => {
      console.log(result);
    });
};

promiseMain1();

const asyncMain = async () => {
  let result = await asyncFunc1('server part');
  console.log(result);
  result = await asyncFunc2('채정아');
  console.log(result);
};

asyncMain();
