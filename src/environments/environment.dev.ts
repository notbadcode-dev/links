import { IEnvironment } from './environment.interface';
import { ENVIRONMENT as productionEnvironment } from './environment.prod';

export const ENVIRONMENT: IEnvironment = {
    applicationId: productionEnvironment.applicationId,
    production: false,
    host: 'http://localhost:3200',
    authApi: 'http://localhost:9000/api/auth',
    linkApi: 'http://localhost:9001/api/link',
};
