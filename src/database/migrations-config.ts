import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmConfigService } from './typeorm-config';

const database = new TypeOrmConfigService();
export const dataConfigmigrations = new DataSource(
  database.createTypeOrmOptions() as DataSourceOptions,
);
