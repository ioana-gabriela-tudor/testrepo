let personType = 'enrolled member';
let message = '';

switch (personType) {
    case "employee":
        message = "Employees have access to Dietary Services";
        break;
    case "enrolled member":
        message = "Enrolled Members have access to Dietary Services and one-on-one interaction with a dietician";
        break;
    case "subscriber":
        message = "Subscribers have partial access to Dietary Services";
        break;
    default:
        message = "Please enroll or subscribe to Dietary Services";
}

console.log('User message:', message);