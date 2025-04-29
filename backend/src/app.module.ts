import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { DepartmentModule } from './department/department.module';
import { SubDepartmentModule } from './sub-department/sub-department.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { TokenService } from './token/token.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    GraphQLModule.forRootAsync({
      imports: [ConfigModule, AppModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: async (
        configService: ConfigService,
        tokenService: TokenService,
      ) => {
        return {
          installSubscriptionHandlers: true,
          playground: true,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          sortSchema: true,
          subscriptions: {
            'graphql-ws': true,
            'subscriptions-transport-ws': true,
          },
          onConnect: (connectionParams) => {
            const token = tokenService.extractToken(connectionParams);

            if (!token) {
              throw new Error('Token not provided');
            }
            const user = tokenService.validateToken(token);
            if (!user) {
              throw new Error('Invalid token');
            }
            return { user };
          },
          context: ({ req, res, connection }) => {
            if (connection) {
              return { req, res, user: connection.context.user }; // Injecting pubSub into context
            }
            return { req, res };
          },
        };
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DepartmentModule,
    SubDepartmentModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, TokenService],
})
export class AppModule {}
