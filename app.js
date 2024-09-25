let plants = 1;
const waterPerWatering = 50;
const waterBucket = 250;
const timesToWater = 4;

plantsNeedWater = () => {
  wateredPlants = plants * waterPerWatering * timesToWater;
  console.log(wateredPlants);
  let bucketAmount = wateredPlants / waterBucket;
  bucketAmount = Math.ceil(bucketAmount);
  console.log(bucketAmount);
};
plantsNeedWater();
