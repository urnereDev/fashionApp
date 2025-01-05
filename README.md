# Fashion App

Bu proje, Expo kullanarak oluşturulmuş bir moda uygulamasıdır.

## Başlarken

### Gereksinimler

- Node.js
- npm veya yarn
- Expo CLI

### Kurulum

1. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

2. Uygulamayı başlatın:

   ```bash
   npx expo start
   ```

### Stripe Entegrasyonu

Bu uygulama, Stripe ödeme işlemleri için kullanılmaktadır. Stripe API anahtarlarınızı `.env` dosyasına eklemeyi unutmayın:
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_PUBLISH_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXX
### Ödeme İşlemleri

Ödeme işlemleri için `PaymentRoutes.ts` dosyasında Stripe ile ilgili ayarlar yapılmıştır. Aşağıdaki kod, Stripe'ı başlatmak için kullanılmaktadır:
typescript:routers/PaymentRoutes.ts
const stripe = require("stripe")(
process.env.STRIPE_SECRET_KEY!
);

