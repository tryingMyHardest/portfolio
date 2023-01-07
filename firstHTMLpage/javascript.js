// Function used to add 2 rows to the calculator, allowing user to enter another boat option
function addBoat(){
		
    //Create/populate 2 arrays to hold options for both select elements
    const boats = ["Boat", "Kayak", "One Person Kayak", "Two Person Kayak", "Canoe", "Row Boat", "Paddle Board", "Sailboat", "Small Sailboat(4 People)", "Large Sailboat(10+ People)"];
    const hours = ["Number of Hours", "1", "2", "3", "4", "5", "6", "Day Rental (~12hrs)"];
    
    //Create the two new select elements to go into the table
    const newBoats = document.createElement("select");
    const newHours = document.createElement("select");
    
    //Use a for loop to step through the boat array & use the values to set the options in the boat select element
    for(var i = 0; i < boats.length; i++){
        //If the index is equal to the position of an option group name, we are going to set that value as an optgroup
        if(i == 1 || i == 7){
            //Create the new optgroup element
            const newOptGrp = document.createElement("optgroup");
            
            //Set the optgroup's label attribute to the appropriate value
            newOptGrp.setAttribute("label", boats[i]);
            
            //Use short for loop to set the Option group's sub-options
            for(var v = 1; v <= 2; v++){
                //Create the new option element & set the appropriate name through the boats array
                const newOption = document.createElement("option");
                const optText = document.createTextNode(boats[i+v]);
                
                //Attach the name to the option element
                newOption.appendChild(optText);
            
                //Set the value attribute of the option to its corrisponding index value in the array
                newOption.setAttribute('value', i+v);
                
                //Attach the new sub-option element to the option group element
                newOptGrp.appendChild(newOption);
            }
            
            //Once the option group element is complete, attach it to the new boat select element
            newBoats.appendChild(newOptGrp);
            
            //increment the index by 2 to account for the sub-options (there are two sub boats in each optgroup)
            i+=2;
        }else{
            //If it is not an optgroup name or suboption name value, create a new option element & set the appropriate name
            const newOption = document.createElement("option");
            const optText = document.createTextNode(boats[i]);
            
            //Attach the name of the boat to the option element
            newOption.appendChild(optText);
        
            //Set the value attribute of the option to the corresponding index value in the array
            newOption.setAttribute('value', i);
            
            //Attach the new option element to the select element
            newBoats.appendChild(newOption);
        }
    }
    
    //Create a new delete button element & set its attributes
    const newDelete = document.createElement("input");
    newDelete.setAttribute("type", "button");
    newDelete.setAttribute("value", "Delete");
    newDelete.setAttribute("onclick", "deleteBoat(this)");
    
    //Use a for loop to step through the hours array & set the options in the new hours select element
    for(i = 0; i < hours.length; i++){
        const newOption = document.createElement("option");
        const optText = document.createTextNode(hours[i]);
        
        newOption.appendChild(optText);
        
        newOption.setAttribute('value', i);
        
        newHours.appendChild(newOption);
    }
    
    //Get the table data from the document & create a table object
    var table = document.getElementById("priceTable");
    
    //Insert a new row at the end by using index -1
    var row = table.insertRow(-1);
    
    //Create the 3 cells (left to right) to hold the boat information/delete button
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    //Populate these 3 cells with the appropriate text/elements
    cell1.innerHTML = "Choose Boat:";
    cell2.appendChild(newBoats);
    cell3.appendChild(newDelete);
    
    //Insert a 2nd new row at the end using index -1
    var row2 = table.insertRow(-1);
    
    //Create 2 new cells to hold the hour information
    var cell4 = row2.insertCell(0);
    var cell5 = row2.insertCell(1);
    
    //Populate the cells with appropriate text/elements
    cell4.innerHTML = "Choose how many hours:";
    cell5.appendChild(newHours);
}

//Function used to calculate the cost of the table
function cost(){
    //Create & populate array with the corresponding cost per hour for each boat in the select element. Use 0's for any optGroups or default options
    const price = [0, 0, 10.00, 15.00, 12.50, 12.50, 8.00, 0,  25.00, 50.00];
    
    //Get table data from document & create a table object
    var table = document.getElementById("priceTable");
    var grandTotal = 0;
    
    //Use for loop to step through the appropriate cells in the table to collect & calculate values
    for(var i = 0; i < table.rows.length; i+=2){
        //Use row/cell indexes with the childnode index to get the value of the selection from the select elements
        var boatValue = table.rows[i].cells[1].childNodes[0].value;
        var hourValue = table.rows[i+1].cells[1].childNodes[0].value;
        //Use the boat value to get the correct pricing * multiply it by the hour value. Then add to grand total
        grandTotal = grandTotal + hourValue * price[boatValue];
    }
    
    //Set the total on the document to the grandTotal variable set to 2 decimal places
    document.getElementById("total").value = "Total: $" + grandTotal.toFixed(2);
}

//Function used to delete boats from the table
function deleteBoat(delButton){
    //Get table data from document & create table object
    var table = document.getElementById("priceTable");
    //Get the row data from the delete button through parent nodes & create row object
    var row = delButton.parentNode.parentNode;
    //Set row index for the delete button's row by using the row object & rowindex method
    var rIndex = row.rowIndex;
    
    //Use short forloop to delete the two rows. Since delete button is in the top of the 2 rows, its original row index can be used to delete both rows
    for(var i=0; i<2; i++){
        table.deleteRow(rIndex);
    }
    
    //Call the cost function to update the total on screen for the user
    cost();
}