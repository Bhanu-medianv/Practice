import { NestFactory } from '@nestjs/core';
import { ThirdSvcModule } from './third-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(ThirdSvcModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
