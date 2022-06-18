export const testData = [
  {
    amount: 396,
    amountAuthorized: 394,
    amountCaptured: 0,
    amountRefunded: 2,
    currencyCode: 'USD',
    customer: null,
    date: '2020-12-08T14:33:41.450551+00:00',
    id: '46Fu49zz',
    lastPaymentError: null,
    metadata: null,
    orderId: 'wHOgwKmQaqwSuYbwxdswyY',
    paymentInstrument: {
      token: 'vUAxVUgYRqu8aSBksHEYJHwxNjA3NDM4MDIx',
      analyticsId: 'NKS8fpx0VlG4IaO8-E5NQEY1',
      tokenType: 'SINGLE_USE',
      paymentInstrumentType: 'PAYMENT_CARD',
      paymentInstrumentData: {
        last4Digits: '0005',
        first6Digits: null,
        expirationMonth: '03',
        expirationYear: '2030',
        cardholderName: 'F. B. BAZ ESQ',
        network: 'American Express',
        isNetworkTokenized: false,
        binData: {
          network: 'AMEX',
          issuerCountryCode: null,
          issuerName: null,
          issuerCurrencyCode: null,
          regionalRestriction: 'UNKNOWN',
          accountNumberType: 'UNKNOWN',
          accountFundingType: 'UNKNOWN',
          prepaidReloadableIndicator: 'NOT_APPLICABLE',
          productUsageType: 'UNKNOWN',
          productCode: 'AMEX',
          productName: 'AMEX',
        },
      },
      threeDSecureAuthentication: null,
    },
    processor: 'BRAINTREE',
    processorMerchantId: 'acct_1GORcsGZqNWFwi8c',
    requiredAction: null,
    statementDescriptor: null,
    status: 'AUTHORIZED',
    vaultedPaymentInstrument: null,
    transactions: [
      {
        id: '44ee7bda-3f3c-489f-9cd8-2040d24b8789',
        paymentError: null,
        processor: 'BRAINTREE',
        processorMerchantId: 'acct_1GORcsGZqNWFwi8c',
        processorTransactionId: 'pi_1Hw7G5GZqNWFwi8cufT0eBRD',
        status: 'AUTHORIZED',
        type: 'SALE',
        requiredAction: null,
        statementDescriptor: null,
      },
    ],
  },
  {
    amount: 394,
    amountAuthorized: 394,
    amountCaptured: 0,
    amountRefunded: 0,
    currencyCode: 'USD',
    customer: null,
    date: '2020-12-08T14:33:41.450551+00:00',
    id: '46Fu49az',
    lastPaymentError: null,
    metadata: null,
    orderId: 'wHOgwKmQaqwSuYbwxdswoY',
    paymentInstrument: {
      token: 'vUAxVUgYRqu8aSBksHEYJHwxNjA3NDM4MDIx',
      analyticsId: 'NKS8fpx0VlG4IaO8-E5NQEY1',
      tokenType: 'SINGLE_USE',
      paymentInstrumentType: 'PAYMENT_CARD',
      paymentInstrumentData: {
        last4Digits: '0005',
        first6Digits: null,
        expirationMonth: '03',
        expirationYear: '2030',
        cardholderName: 'F. B. BAZ ESQ',
        network: 'American Express',
        isNetworkTokenized: false,
        binData: {
          network: 'AMEX',
          issuerCountryCode: null,
          issuerName: null,
          issuerCurrencyCode: null,
          regionalRestriction: 'UNKNOWN',
          accountNumberType: 'UNKNOWN',
          accountFundingType: 'UNKNOWN',
          prepaidReloadableIndicator: 'NOT_APPLICABLE',
          productUsageType: 'UNKNOWN',
          productCode: 'AMEX',
          productName: 'AMEX',
        },
      },
      threeDSecureAuthentication: null,
    },
    processor: 'STRIPE',
    processorMerchantId: 'acct_1GORcsGZqNWFwi8c',
    requiredAction: null,
    statementDescriptor: null,
    status: 'AUTHORIZED',
    vaultedPaymentInstrument: null,
    transactions: [
      {
        id: '44ee7bda-3f3c-489f-9cd8-2040d24b8789',
        paymentError: null,
        processor: 'STRIPE',
        processorMerchantId: 'acct_1GORcsGZqNWFwi8c',
        processorTransactionId: 'pi_1Hw7G5GZqNWFwi8cufT0eBRD',
        status: 'AUTHORIZED',
        type: 'SALE',
        requiredAction: null,
        statementDescriptor: null,
      },
    ],
  },
];
