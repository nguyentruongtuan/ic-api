import { Module } from '@nestjs/common';
import {
  Client,
  ClientProxyFactory,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'PRODUCT_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [
              `amqp://${process.env.RMQ_ENDPOINT}:${process.env.RMQ_PORT}`,
            ],
            queue: "product_queue"
          },
        });
      },
    },
    {
      provide: 'LOGGER_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [
              `amqp://${process.env.RMQ_ENDPOINT}:${process.env.RMQ_PORT}`,
            ],
            queue: "logger_queue"
          },
        });
      },
    },
  ],
})
export class AppModule {}
