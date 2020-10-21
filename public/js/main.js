// Global variables
const calendar = $(".calendar");

// ===============================================
//              Populate calendar
// ===============================================

// There are eight columns (label + 7 days) and 24 rows.
for (let i = 0; i < 24; i++) {

    // Make the row
    let newRow = $("<div>");
    newRow.addClass(`calRow`);
    newRow.addClass(`s1`);

    // add columns
    for (let j = 0; j < 8; j++) {

        // Make the column
        let newBox = $("<div></div>");
        newBox.addClass(`calendar-box`);
        newBox.addClass(`data-row-${i}`);
        newBox.addClass(`data-col-${j}`);
        newBox.text(`row ${i} col ${j}`);

        // Append column to row
        newRow.append(newBox);
    }

    // Append row to calendar
    calendar.append(newRow);
}