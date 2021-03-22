# easy-js
A lib to make the complex and daily used functions easy to use.

## Install
* npm i @youmaole/easy-js
* yarn add @youmaole/easy-js

## Import
import { store, json } from '@youmaole/easy-js';

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

## Note
- Convert the date object to string before storing to local