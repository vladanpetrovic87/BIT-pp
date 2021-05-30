
try {

    console.log('Start of try runs'); // (1)
    
    // ...no errors here
    
    console.log('End of try runs'); // (2)
    
    } catch (err) {
    
    console.log('ignored, no errors'); // (3)
    
    }
    
    console.log("...Execution continues");




try {

    console.log('Start of try runs'); // (1)
    
    lalala; // error, variable is not defined!
    
    console.log('Never reached'); // (2)
    
    } catch (err) {
    
    console.log('Error has occurred!'); // (3)
    
    }
    
    console.log("...Execution continues");




try {

    console.log('Start of try runs'); // (1)
    
    lalala; // error, variable is not defined!
    
    console.log('Never reached'); // (2)
    
    } catch (err) {
    
    console.log(err.message); // (3)
    
    }
    
    console.log("...Execution continues");



throw {

name: "MyError",

message: "OMG! Something wrong happened"

}



try {

    console.log(Some);
    
    } catch (e) {
    
    console.log(e.message);
    
    } finally {
    
    console.log('Some other code');
    
    }
        