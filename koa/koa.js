const Koa = require('koa');
const app = new Koa();

const one = (ctx, next) => {
  console.log('>> one');
  ctx.afff = 'hello'
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('>> two');
  next(); 
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  console.log(ctx.afff);
  next();
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3002);
console.log("应用启动成功，localhost:3002");