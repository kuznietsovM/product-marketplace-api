import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app.module";

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = 80
  app.enableCors();

  app.listen(port, async () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
