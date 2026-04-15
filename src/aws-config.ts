export const awsConfig = {
    Auth: {
      Cognito: {
        userPoolId: 'eu-central-1_7ayY2J6Ye',
        userPoolClientId: '63u9oo4v5uq2jm1uc0cl71cttg',
        identityPoolId: 'eu-central-1:7ccc652d-a572-4b89-ab12-03b7f40ec435',
        loginWith: {
          email: true,
          username: true
        }
      }
    },
    Storage: {
      S3: {
        bucket: 'markusfiletransferbucket',
        region: 'eu-central-1'
      }
    }
  };