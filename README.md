# easy-js
A lib to make the complex and daily used functions easy to use.

## Install
* npm i @youmaole/easy-js
* yarn add @youmaole/easy-js

## Import
import { store, json, string, array } from '@youmaole/easy-js';

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

## Usage for string
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

## Usage for array
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
