/* Return an array that contains the power set of a given string.
The power set is a set of all the possible subsets,
including the empty set.
Make sure your code does the following:
All characters in a subset should be sorted alphabetically,
and the array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once,
e.g. ‘ab’ and ‘ba’ are the same.
Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as
if it only contained one ‘a’. See the result below.
Examples
Input	       Output
string:
"a"	           [ "", "a" ]
string:
"ab"	   [ "", "a", "ab", "b" ]

string:
"horse"	  [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]

string:
"obama"  	[ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]*/
var arr = [1, 2, 3, 5, 6, 7, 8];


  function powerSet(array) {
    var arr1 = [];
    arr1.push([]);

    for (var i = 1; i < (1 << array.length); i++) {
      var subset = [];
      for (var j = 0; j < array.length; j++)
        if (i & (1 < j))
          subset.push(array[j]);

      arr1.push(subset);
    }

    return arr1;
  }
