# TypeScript React Utilities for Developers

## Install, Build, & Run

```
yarn install
yarn build
node dist/index.js data/input.txt
```

## Explanation

Turn this list of properties...

```
fooBar,
booFar,
foo,
bar,
biz,
baz,
boopDoop,
boop,
doop
```

...into this:

```
interface FooBar {
 readonly fooBar: any
 readonly booFar: any
 readonly foo: any
 readonly bar: any
 readonly biz: any
 readonly baz: any
 readonly boopDoop: any
 readonly boop: any
 readonly doop: any
}
fooBar={fooBar}
booFar={booFar}
foo={foo}
bar={bar}
biz={biz}
baz={baz}
boopDoop={boopDoop}
boop={boop}
doop={doop}
```
