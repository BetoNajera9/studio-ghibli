// This file is used in development environment

db = db.getSiblingDB('studio-ghibli');

db.createUser({
  user: 'banpay',
  pwd: '1q2w3e4r',
  roles: [
    {
      role: 'readWrite',
      db: 'studio-ghibli',
    },
  ],
});

db.createCollection('userfulls');
