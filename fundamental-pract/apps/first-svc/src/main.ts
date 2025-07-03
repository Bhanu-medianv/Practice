import { NestFactory } from '@nestjs/core';
import { FirstSvcModule } from './first-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(FirstSvcModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
