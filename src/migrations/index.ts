import * as migration_20241222_202902_migration from './20241222_202902_migration';

export const migrations = [
  {
    up: migration_20241222_202902_migration.up,
    down: migration_20241222_202902_migration.down,
    name: '20241222_202902_migration'
  },
];
