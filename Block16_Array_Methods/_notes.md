# WIIFM
Developers often need to build applications which perform various operations on lists of data. Those lists of data are often represented as arrays.


# Overview

Short prompts will be used to cover the underlying concepts followed by a demo which utilizes several concepts which will be similar to the workshop prompt(s).


# Learning Objectives
- Using the forEach method of an array to iterate over it's values and indexes.  
- Using the map method to create a new array from the value in an existing array
- Using the filter method to get the subset of an array.
- Using the find method to find a specific item in an array.
- Using the reduce method to generate a value based on the items in an array.
- The slice method returns a new array based on the index values which are passed to it.

# Slide Deck should include
- arrays have built in methods
- the methods forEach, map, filter, find, and reduce are similar in that they all take callbacks.
- the callbacks are called, you (the developer) do not call them
- forEach returns nothing, it loops
- map returns a new array with the same length as the array it was called with. The values of the new array are determined by what is returned from the callback method.
- filter returns a new array which is made of all, some, none of the values of the array. A truthy value returned from the callback will include that item in the new array
- find returns at most one value.
- reduce can return any type of value which is desired. It reduces the array to something else.
- slice returns a new array based on the indexes which are passed to it.


# Utilizes
