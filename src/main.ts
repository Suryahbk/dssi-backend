import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002)
    .then(() => {
      console.log("Successfully running on port 3002")
    })
    .catch((error) => {
      console.log(error)
    })
}
bootstrap();
