const hqBlocks = 42;
const distanceBlocks = 43;

function distanceFromHqInBlocks (distanceBlocks) {
    let result 
    if (distanceBlocks <= 42) {
        result = 42 - distanceBlocks;
    } else if (distanceBlocks > 42) {
       result = distanceBlocks - 42;
    }
    return result;
}

function distanceFromHqInFeet (pickUp) {
    let result;
    result = distanceFromHqInBlocks(pickUp) * 264;
    return result;
}

function distanceTravelledInFeet (start, destination) {
    let result
    if (destination <= start) {
        result = (start - destination) * 264;
    } else if (destination > start) {
        result = (destination - start) * 264;
    }
    return result;
}

function calculatesFarePrice (start, destination) {
    let result;
    if (distanceTravelledInFeet(start, destination) <= 400) {
        result = 0
        return result
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        result = (distanceTravelledInFeet(start, destination) - 400) * 0.02;
        return result
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        result = 25
        return result
    } else {
        result = "cannot travel that far";
        return result
    }
    //return result;
}