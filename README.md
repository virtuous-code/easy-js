# easy-js
A lib to make the complex and daily used functions easy to use.

## Install
* npm i @youmaole/easy-js
* yarn add @youmaole/easy-js

## Import
```
import { store, json, string, array } from '@youmaole/easy-js'; // for version 1.x.x
import { store, json } '@youmaole/easy-js'; // for version 2.x.x
```

## Deprecated methods
The deprecated methods will not be removed, available to use. But not be maintained.

## Usage for local storage
**Methods for storing data in local(by localStorage):**
```store.saveL(key, value)```
- Example: store.saveL('test', {text: 'this is a test string for saving local'});

**Methods for getting data from local:**
```store.readL(key)```
- Example: store.readL('test');

**Methods for deleting data(single) from local:**
```store.deleteL(key)```
- Example: store.deleteL('test');

**Methods for deleting all data from local:**
```store.deleteA()```
- Example: store.deleteA();

## Usage for json
**Methods for covert object to string:**
```json.toStr(obj)```
- Example: json.toStr({key: 'this is a test object'});

**Methods for covert string to object:**
```json.toObj(str)```
- Example:
```
var objectString = json.toStr({key: 'this is a test object'});
var object = json.toObj(objectString);
```

## Usage for string V2
**Methods to upper case:**
```
//string.ymlUpper()
const test = '123xyzabc';
test.ymlUpper(); // 123XYZABC
```
**Methods to lower case:**
```
//string.ymlLower()
const test = '123XYZABC';
test.ymlLower(); // 123xyzabc
```
**Methods to trim all space:**
```
//string.ymlTrim()
const test = '123 X Y Z A B C';
test.ymlTrim(); // 123XYZABC
```
**Methods to replace all:**
```
//string.ymlReplace(source, target)
const test = 'abcabdabeabfab';
test.ymlReplace('ab', '-'); // -c-d-e-f-

```
**Methods to compare string ignore case:**
```
//string.ymlCompareIgnoreCase(target)
const test = 'ABC';
test.ymlCompareIgnoreCase('abC'); // true
```
**Methods to compare string ignore space:**
```
//string.compareIgnoreSpace(target)
const test = 'ABC';
test.compareIgnoreSpace('A BC'); // true
```

## Usage for array V2
**Methods to compare array with sort:**
```
//array.ymlCompareWithSort(target)
const test = [1, 2, 'a'];
test.ymlCompareWithSort(['a', 2, 1]); // true
test.ymlCompareWithSort([1, 2, 'a', 3]); // false
```

**Methods to compare array with sort:**
```
//array.ymlCompareWithoutSort(target)
cosnt test = [1, 2, 'a'];
test.ymlCompareWithoutSort(['a', 2, 1]); // false
test.ymlCompareWithoutSort([1, 2, 'a']); // true
```
**Methods to delete element from array by indexes quickly:**
```
//array.ymlDelete(indexes)
const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
test.ymlDelete([9, 2, 7, 1]); // [1, 4, 5, 6, 7, 9]
```
**Methods to unique not object element:**
```
//array.ymlUnique()
const test = [1,2,3,4,2,2,1,3];
test.ymlUnique(); // [1,2,3,4]
```
**Methods to unique object element by specified field:**
```
//array.ymlUniqueObject(field)
const test = [{a:1, b: 2}, {a: 1, b: 3}];
test.ymlUniqueObject('a'); // [{a: 1, b: 3}]
```
**Methods to sum:**
```
//array.ymlSum()
const test = [1,2,3,4,5];
test.ymlSum(); // 15
```

## Usage for object(beta) (Warning in react project)
**Methods to compare the values of object without nested object:**
```
//object.ymlEqual(target)
const test = {a: 1, b: 2};
test.ymlEqual({a: 1, b: 2}); // true
```
**Methods to check contained object without nested object:**
```
//object.ymlContains(target)
const test = {a: 1, b: 2};
test.ymlContains({a: 1}); // true
test.ymlContains({a: 1, c: 2}); // false
```

## Usage for string @deprecated
**Methods to upper case:**
```string.upper(str)```
- Example: string.upper('abc'); //ABC

**Methods to lower case:**
```string.lower(str)```
- Example: string.lower('ABC'); //abc

**Methods to trim all space:**
```string.trim(str)```
- Example: string.trim('ab c d e f g  '); //abcdefg

**Methods to replace all:**
```string.replace(str, ori, tar)```
- Example: string.replace('abcabdabeabfab', 'ab', '-'); //-c-d-e-f-

**Methods to compare string ignore case:**
```string.compareIgnoreCase(str1, str2)```
- Example: string.compareIgnoreCase('ABC', 'abC'); //true

**Methods to compare string ignore space:**
```string.compareIgnoreSpace(str1, str2)```
- Example: string.compareIgnoreSpace('ABC', 'A BC'); //true

## Usage for array @deprecated
**Methods to compare array with sort:**
```array.compareWithSort(array1, array2)```
- Example: array.compareWithSort([1, 2, 'a'], ['a', 2, 1]); //true
- Example: array.compareWithSort([1, 2, 'a', 3], ['a', 2, 1]); //false

**Methods to compare array with sort:**
```array.compareWithoutSort(array1, array2)```
- Example: array.compareWithoutSort([1, 2, 'a'], ['a', 2, 1]); //false
- Example: array.compareWithoutSort([1, 2, 'a'], [1, 2, 'a']); //true

**Methods to delete element from array by indexes quickly:**
```array.delete(sourceArray, indexesArray)```
- Example: array.delete([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [9, 2, 7, 1]); //[1, 4, 5, 6, 7, 9]

## Note
- Convert the date object to string before storing to local
- No possible to handle object element in array compare functions
