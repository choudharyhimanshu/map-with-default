# map-with-default

## What is this package?

npm package containing **a class similar to Map**, but have a default value for a missing key.

## Where to use it?

You might be wondering what is the use of having a default value for a map? Even I was surprised by seeing it fit at so many places in my regular projects to ease the life.

### Here are some sample usages:

1). A good replacement for switch-case?

```ts
function fileIconToUse(format: string): string {
  switch(format) {
    case 'pdf':
      return 'file-pdf'
    case 'xls':
      return 'file-excel'
    case 'zip':
      return 'file-archive'
    default:
      return 'file'
  }
}

const fileIconMap = new MapWithDefault<string, string>([
  ['pdf', 'file-pdf'],
  ['xls', 'file-excel'],
  ['zip', 'file-archive']
], 'file');

```
2). Could replace your select list array?

```ts
const isSelected = [false, false, false];
<Checkbox checked={isSelected[index]} />

const isSelectedMap = new MapWithDefault<number, boolean>([], false);
<Checkbox checked={isSelectedMap.get(index)} />

// With efficient reset/clear?

```
