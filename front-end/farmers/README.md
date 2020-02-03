# Farmers

Farmers Search Component

## Requirements
> Angular 8.3.23

> Node JS 10.17.0


## Install front-end

```
npm install
```

## Configure front-end

```
// replace {API-HOST} with farmers api host in
// app/environments/environment.ts and app/environments/environment.prod.ts
// default: farmersApiUrl = 'http://localhost:3000'

export const environment = {
  ...
  farmersApiUrl: 'http://{API-HOST}'
};

```

## Run front-end

```
// Running local: ng serve --open 

ng serve

```