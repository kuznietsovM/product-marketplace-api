import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app.module";

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.listen(3001, async () => {
    console.log(`> Ready on http://localhost:3001`);
  });
})();
