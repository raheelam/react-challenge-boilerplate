import primer from './axiosSetup';
import axios from 'axios';
import { login } from './authorization';
import { testData } from '../testData';

const generateQuery = (obj) => {
  return Object.keys(obj)
    .filter((key) => obj[key] !== 'ALL' && obj[key])
    .map((key, index) => {
      if (index === 0) {
        return `?${key}=${obj[key]}`;
      } else {
        return `&${key}=${obj[key]}`;
      }
    });
};

let tokenSource;

export const getAllPayments = () => {
  return { data: testData };
  // return primer
  //   .get(`/payments`)
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .catch((err) => {

  //     console.log(err.response.data);
  //     if (checkIsAuthError(err)) return reAuthorize();
  //     return err;
  //   });
};

export const getFilteredPayments = (filters) => {
  if (typeof tokenSource !== typeof undefined) {
    tokenSource.cancel();
  }
  tokenSource = axios.CancelToken.source();

  const temp = testData.filter((payment) =>
    filters.order_id !== ''
      ? payment.orderId == filters.order_id
      : (filters.currency_code !== 'ALL'
          ? payment.currencyCode == filters.currency_code
          : true) &&
        (filters.payment_instrument_type !== 'ALL'
          ? payment.paymentInstrument.paymentInstrumentType ==
            filters.payment_instrument_type
          : true) &&
        (filters.processor !== 'ALL'
          ? payment.processor == filters.processor
          : true) &&
        (filters.status !== 'ALL' ? payment.status == filters.status : true)
  );

  return { data: temp };
  //params:{} use axios params
  // const query = generateQuery(filters).join('');

  // return primer
  //   .get(`/payments${query}`, { cancelToken: tokenSource.token })
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .catch((err) => {
  //     if (axios.isCancel(err)) return { cancelPrevQuery: true };
  //     if (checkIsAuthError(err)) return reAuthorize();
  //     return err;
  //   });
};

export const getPaymentDetail = (paymentId) => {
  return testData.filter((payment) => payment.id === paymentId)?.[0];
  // return primer
  //   .get(`/payments/${paymentId}`)
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .catch((err) => {
  //     if (checkIsAuthError(err)) return reAuthorize();
  //     return err;
  //   });
};

export const reAuthorize = () => {
  localStorage.removeItem('primerAccessToken');
  return login().then(() => window.location.reload());
};

export const checkIsAuthError = (err) => {
  return (
    err.isAxiosError &&
    err.response.data.error.errorId === 'InvalidAuthCredentials'
  );
};
