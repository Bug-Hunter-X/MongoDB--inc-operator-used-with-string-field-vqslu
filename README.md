# MongoDB $inc operator used with string field

This repository demonstrates a common error in MongoDB: using the `$inc` operator with a string field.  The `$inc` operator is designed for numerical fields and will throw an error if used incorrectly. 

The `bug.js` file contains the erroneous code. The `bugSolution.js` file shows the correct way to handle this situation.