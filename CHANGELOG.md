# ChangeLog #

## 3.1.0 - January 22, 2014

## 3.0.0 - December 13, 2013
* Moved files to dist directory.
* Improved record performance.
** Reverted so record does mutate passed in custom ctors. This is not ideal but
  greatly increases performance when using `new`.
** Performance of records with custom ctor for `new` same as direct ctor call.
** `create` around 10x faster.

## 2.1.0 - November 23, 2013
* Fixed object operations to preserve existing property descriptors.
* Added `copy` for arrays.

## 2.0.1 - November 1, 2013
* Changed record to not modify passed in `ctor` or `proto` object.

## 2.0.0 - October 30, 2013 ##
* Rewrote object to get rid of all the `defineProperty` stuff and just support
  `value` and `enumerable`. `configurable`, `writable`, and `setters` make no
  sense on immtable objects. `getters` maybe, but often not.
** Now just has `setProperty`, `setPropertyies`, and `deleteProperty`.

## 1.4.0 - October 23, 2013 ##
* Added `record.extend` for adding additional keys to some base record.

## 1.3.1 - October 23, 2013 ##
* Modified object operations to reduce number of copied properties.

## 1.3.0 - October 22, 2013 ##
* Added record module for declaring easy to work with immutable objects.

## 1.2.0 - August 28, 2013 ##
* Changed delete to never copy the property over instead of just setting
  it to undefined.

## 1.1.0 - July 15, 2013 ##
* Changed copy to grab constructor from prototype instead of object directly.
  This allows objects like {'constructor': ... } to be copied.

## 1.0.0 - May 20, 2013 ##
* Removed seal and freeze which don't make much sense for nonmutable objects.

## 0.2.0 - April 1, 2013 ##
* Added delete property.

## 0.1.0 - March 2, 2013 ##
* Initial release.
