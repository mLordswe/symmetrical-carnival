const waterPerWatering = 50;
const waterBucket = 250;
const timesToWater = 4;

plantsNeedWater = () => {
  let plants = document.getElementById("plants").value; //tar värdet från html input
  wateredPlants = plants * waterPerWatering * timesToWater; //räknar totala mängden vatten
  console.log(wateredPlants);
  let bucketAmount = wateredPlants / waterBucket; //tar totala vatten och delar det för att få ut mängd dunkar
  bucketAmount = Math.ceil(bucketAmount);
  console.log(bucketAmount);
  let fertAmount = plants * waterPerWatering * 1; //gör samma som ovan fast med gödsel
  let fertBags = fertAmount / waterBucket;
  fertBags = Math.ceil(fertBags);
  console.log(plants);
  document.getElementById(
    "summa"
  ).innerHTML = `Du behöver ${bucketAmount} vattendunkar och ${fertBags} gödsel för ${plants} plantor `;
};
document.getElementById("skicka").addEventListener("click", plantsNeedWater);
