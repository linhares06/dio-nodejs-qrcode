async function calculateShippingCost(packageDetails) {
  let baseCost = 5.0; // Base cost for handling
  let weightCost = packageDetails.weight * 2.0; // Cost based on weight
    
  // Additional cost based on destination
  let destinationMultiplier = packageDetails.distance * 0.01;
    
  // Calculate total cost
  let totalCost = (baseCost + weightCost) * destinationMultiplier;
  return totalCost.toFixed(2); // return cost with 2 decimal places
}

export default calculateShippingCost;