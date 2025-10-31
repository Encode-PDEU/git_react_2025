// A fake function that takes time to get data
function getDataFromServer() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Here is your data!");
      }, 2000); 
    });
  }
  
  // An async function that uses await
  async function showData() {
    console.log("Getting data...");
    
    const data = await getDataFromServer();
    
    console.log(data);
    console.log("Done!");
  }
  
  showData();
  
  console.log("This line runs while waiting for the data...");