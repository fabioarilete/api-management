import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://fabioarilete:betelita2023@cluster0.4chmfzz.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
