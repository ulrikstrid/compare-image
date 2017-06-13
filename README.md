# Compare Image

A small library to compare ImageData objects.

## Install

`npm install compare-image`

## API

The library exposes 2 functions at the moment.

```ts
isSame(a: ImageData, b: ImageData): boolean
```

```ts
isSubset(imageData: ImageData, subset: ImageData): boolean
```

## Example

```ts
import * as compareImage from 'compare-image'

const imageDataA = new ImageData(10, 10);
const imageDataB = new ImageData(10, 10);

compareImage.isSame(imageDataA, imageDataB); // true


const imageDataC = new ImageData(5, 5);
imageDataA.fill(255);
imageDataC.fill(255);

compareImage.isSubset(imageDataA, imageDataC); // true
```

Look at the tests for more examples.
