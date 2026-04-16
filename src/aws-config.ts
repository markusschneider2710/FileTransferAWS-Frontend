export const awsConfig = {
    Auth: {
      Cognito: {
        userPoolId: 'xyz',
        userPoolClientId: 'xyz',
        identityPoolId: 'xyz',
        loginWith: {
          email: true,
          username: true
        }
      }
    },
    Storage: {
      S3: {
        bucket: 'xyz',
        region: 'eu-central-1'
      }
    }
  };
