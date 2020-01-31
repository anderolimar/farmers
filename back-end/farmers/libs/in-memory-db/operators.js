const Operators = {
    "$eq" : (ref, value) => {
        return ref == value;
    },
    "$lt" : (ref, value) => {
        return ref < value;
    },
    "$le" : (ref, value) => {
        return ref <= value;
    },    
    "$gt" : (ref, value) => {
        return ref > value;
    },    
    "$ge" : (ref, value) => {
        return ref >= value;
    },
    "$ne" : (ref, value) => {
        return ref != value;
    },
    "$in" : (ref, value) => {
      return value.includes(ref);
    },
    "$lk" : (ref, value) => {
      console.log(`ref: ${ref}, value: ${value} = ${(ref.toLowerCase().indexOf(value) > -1)}`)     
      return ref.toLowerCase().indexOf(value) > -1;
    }         
}

module.exports = Operators;