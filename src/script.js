function createUser(firstName, lastName) {
  const newObj = {
    firstName: firstName,
    lastName: lastName,
  }
  return newObj;
}

let user = {
  firstName: 'Stan',
  lastName: 'Lee',
}

function getFullName(user) {
  if (user && user.firstName && user.lastName) {
      return user.firstName + ' ' + user.lastName;
  } else {
      return '';
  }
}

let params = {
  styling: {
      sizes: {
          width: '100px',
          height: '200px'
      }
  }
};

function getWidth(params) {
  if(params.styling && params.styling.sizes) {
    return params.styling.sizes.width;
  }
  return null;
}

function extendObject(obj, isValid) {
  let newObj = { ...obj };
  newObj.isValid = isValid;
  return newObj
}

let prices = {
  apples: 1000,
  oranges: 1600,
  cucumbers: 1300,
  month: 'December',
  currency: 'USD',
  health: Infinity,
  isPayed: false
};

function sumPrices(prices) {
  if (typeof prices === "object" && prices !== null) {
    return Object.values(prices).filter(value => typeof value === 'number' && isFinite(value))
    .reduce((sum, value) => sum + value, 0);
  }
  return 0;
}

function createUserWithFullName(firstName, lastName) {
  const object = {
    firstName: firstName,
    lastName: lastName,

    setFirstName: function(newFirstName) {
      this.firstName = newFirstName;
    },

    setLastName: function(newLastName) {
      this.lastName = newLastName;
    },

    getFullName: function() {
      return this.firstName + " " + this.lastName;
    },
  }
  return object;
}

const newUser = createUserWithFullName('Bill', 'Murray');
console.log(newUser.getFullName());