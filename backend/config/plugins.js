module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET_NAME')
      }
    }
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY')
      },
      settings: {
        defaultFrom: 'supitcha.b@codium.co',
        defaultReplyTo: 'supitcha.b@codium.co'
      }
    }
  },
  'upload-cloudflare': {
    enabled: true,
    resolve: './src/plugins/upload-cloudflare'
  },
});