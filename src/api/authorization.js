import { saveTokenToLocalStorage } from '../shared/utils/authHelper';
//import primer from './axiosSetup';

export const login = (
  username = 'primer.candidate@primer.test',
  password = 'Candidate1234',
  grant_type = 'password'
) => {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);
  params.append('grant_type', grant_type);
  const accessToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyYmYzZTFlYi1mZDg3LTQ2MzItYmUyNC1kMGM0NmQ4N2RmMWMiLCJleHAiOjE2NjA3MjI2NTMuNzQyOTc2LCJ1c2VyX2lkIjoiMmJmM2UxZWItZmQ4Ny00NjMyLWJlMjQtZDBjNDZkODdkZjFjIiwicHJpbWVyX2FjY291bnRfaWQiOiI3ZTY1Yzk5Mi03MmQ4LTQwYWUtYmE1OC1jZmJlMzRjNTE3YzgiLCJzY29wZXMiOiJhY2NvdW50czpyZWFkIGFjY291bnRzOnN3aXRjaCBhY2NvdW50czp3cml0ZSBhcGlfa2V5czpyZWFkIGFwaV9rZXlzOndyaXRlIGNoZWNrb3V0LWNvbmZpZzpyZWFkIGNoZWNrb3V0LWNvbmZpZzp3cml0ZSBkaXNwdXRlczpyZWFkIGludml0YXRpb25zOnJlYWQgaW52aXRhdGlvbnM6d3JpdGUgbWV0cmljczpyZWFkIG5vdGlmaWNhdGlvbnM6cmVhZCBub3RpZmljYXRpb25zOndyaXRlIHBheW1lbnRfbWV0aG9kczpyZWFkIHBheW1lbnRfbWV0aG9kczp3cml0ZSBwcmltZXItYWRhcHQ6cmVhZCBwcm9jZXNzb3JzOnJlYWQgcHJvY2Vzc29yczp3cml0ZSBwcm9maWxlOnJlYWQgcHJvZmlsZTp3cml0ZSByZWNvbmNpbGlhdGlvbjpyZWFkIHRocmVlX2RzOm9uYm9hcmQgdHJhbnNhY3Rpb25zOmNhbmNlbCB0cmFuc2FjdGlvbnM6cmVhZCB0cmFuc2FjdGlvbnM6cmVmdW5kIHVzZXItcm9sZXM6d3JpdGUgdXNlcl9yb2xlczp3cml0ZSB1c2VyczpyZWFkIHVzZXJzOndyaXRlIHdvcmtmbG93czpyZWFkIHdvcmtmbG93czp3cml0ZSIsImV4cGlyYXRpb25fZGVsYXkiOjI0MH0.64QhSzytUsaeEvnF4nCYHC-94pNX6U_YdKfBnTcRtgQ';
  saveTokenToLocalStorage(accessToken);
  // return primer
  //   .post(`/auth/login`, params)
  //   .then((res) => {
  //     const accessToken = res.data.accessToken;
  //     saveTokenToLocalStorage(accessToken);
  //     return res.data;
  //   })
  //   .catch((err) => err);
};

export const checkAuthState = () => {
  return localStorage.primerAccessToken !== undefined;
};
