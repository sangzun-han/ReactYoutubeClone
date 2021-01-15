#2021.01.15

- 업로드시 썸네일 생성

- 업로드시 오류 filepath :
  The type property is special in mongoose, so when you say type: String, mongoose interprets it as a type declaration. In the above schema, mongoose thinks asset is a string, not an object. Do this instead:

```
const holdingSchema = new Schema({
  // This is how you tell mongoose you mean `asset` is an object with
  // a string property `type`, as opposed to telling mongoose that `asset`
  // is a string.
  asset: {
    type: { type: String },
    ticker: String
  }
});
```
