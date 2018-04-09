
const homeInventory = {};

homeInventory.furniture = [];
homeInventory.crafts = [];
homeInventory.electronics = [];

const couch = {
  name: "Sectional couch",
  location: "Living room",
  description: "Best place to sit and hang out with friends"
}

const desk = {
  name: "Home office desk",
  location: "Office",
  description: "Where I work when I am working from home"
}

const bedframe = {
  name: "Bedframe",
  location: "Bedroom",
  description: "The headboard and frame that was built last summer and feels quite rustic"
}

const table = {
  name: "Kitchen table",
  location: "Kitchen",
  description: "The homemade table that we use to eat on"
}

const flag = {
  name: "Homemade TN flag",
  location: "Living room",
  description: "The flag that I made last summer that's hanging in the living room"
}

const pictureFrame = {
  name: "Picture frames",
  location: "Living room",
  description: "The rustic picture frames that are hung in the living room as decorations"
}

const endTable = {
  name: "End tables",
  location: "Bedroom",
  description: "Built last summer - has been quite the conversation piece when people visit our house"
}

const television = {
  name: "TV",
  location: "Office",
  description: "Large TV hung in the office to use as an external monitor"
}

const alexa = {
  name: "Alexa",
  location: "Living room",
  description: "Our personal assistant that creepily listens to everything that we're doing"
}

const google = {
  name: "Google WiFi",
  location: "Living room",
  description: "What has saved our lives by always making sure we have the fastest internet"
}

homeInventory.electronics.push(television, alexa, google)
homeInventory.crafts.push(flag, pictureFrame, endTable)
homeInventory.furniture.push(couch, desk, bedframe, table)

const saveToDatabase = (databaseObject, homeInventory) => {
  const stringifiedDatabase = JSON.stringify(homeInventory);
  localStorage.setItem(databaseObject, stringifiedDatabase)
}

const loadDatabase = () => {
  const databaseString = localStorage.getItem('Inventory');
  let parsed =  JSON.parse(databaseString) 
  console.log(parsed)
}

saveToDatabase('Inventory', homeInventory);
loadDatabase();

