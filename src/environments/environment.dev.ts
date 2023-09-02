import { IEnvironment } from './environment.interface';
import { environment as productionEnvironment } from './environment.prod';

export const environment: IEnvironment = {
    applicationId: productionEnvironment.applicationId,
    production: false,
    host: 'http://localhost:3200',
    authApi: 'http://localhost:9000/api/auth',
    linkApi: 'http://localhost:9001/api/link',
};
