$w.onReady(function () {

    $w("#section12").collapse(); 
    
    // Dropdown 1 selection
    $w("#dropdown1").onChange((event) => {
        const selectedOption = event.target.value;
        const dropdown2 = $w("#dropdown2");

        // Clear
        dropdown2.options = [];

        // If First Dropdown is Gov or IEB (Add Both because IEB 8 to 11 returns "All Subjects")
        if (selectedOption === "IEB" || selectedOption === "Government") {
            dropdown2.show();
            // Add Grade options to dropdown2
            dropdown2.options = [
                { label: "Grade 8", value: "Grade 8" },
                { label: "Grade 9", value: "Grade 9" },
                { label: "Grade 10", value: "Grade 10" },
                { label: "Grade 11", value: "Grade 11" },
                { label: "Grade 12", value: "Grade 12" }
            ];
        } else {
            dropdown2.hide();
        }
    });
});

$w.onReady(function () {
    //Dropdown selection 2
    $w("#dropdown2").onChange((event) => {
        const dropdown3 = $w("#dropdown3");
        const dropdown2 = $w("#dropdown2");
        const dropdown1 = $w("#dropdown1");
        const selectedOption2 = event.target.value;
        const selectedOption1 = dropdown1.value;

        // Clear
        dropdown3.options = [];
        dropdown3.show();

        // Match and Add to dropdown 3 based off selected options
        if (selectedOption1 === "Government" && selectedOption2 === "Grade 8") {
            dropdown3.options = [
                { label: "Afrikaans", value: "Afrikaans" },
                { label: "Creative Arts", value: "Creative Arts" },
                { label: "Economic Management Sciences", value: "Economic Management Sciences" },
                { label: "English", value: "English" },
                { label: "Geography", value: "Geography" },
                { label: "History", value: "History" },
                { label: "Life Orientation", value: "Life Orientation" },
                { label: "Mathamatics", value: "Mathamatics" },
                { label: "Natural Science", value: "Natural Science" },
                { label: "Technology", value: "Technology" },
                { label: "Zulu", value: "Zulu" }
            ];
        } else if (selectedOption1 === "Government" && selectedOption2 === "Grade 9") {
            dropdown3.options = [
                { label: "Afrikaans HL", value: "Afrikaans HL" },
                { label: "Afrikaans FAL", value: "Afrikaans FAL" },
                { label: "English HL", value: "English HL" },
                { label: "Englsih FAL", value: "Englsih FAL" },
                { label: "Sesotho HL", value: "Sesotho HL" },
                { label: "isiXhosa HL", value: "isiXhosa HL" },
                { label: "isiXhosa FAL", value: "isiXhosa FAL" },
                { label: "Economic and Management Sciences", value: "Economic and Management Sciences" },
                { label: "Mathematics", value: "Mathematics" },
                { label: "Natural Sciences", value: "Natural Sciences" }
            ];
        } else if (selectedOption1 === "Government" && selectedOption2 === "Grade 10") {
            dropdown3.options = [
                { label: "Afrikaans FAL", value: "Afrikaans FAL" },
                { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                { label: "Accounting", value: "Accounting" },
                { label: "Business Studies", value: "Business Studies" },
                { label: "Economics", value: "Economics" },
                { label: "English HL", value: "English HL" },
                { label: "English FAL", value: "English FAL" },
                { label: "Geography", value: "Geography" },
                { label: "History", value: "History" },
                { label: "Information Technology", value: "Information Technology" },
                { label: "Life Sciences", value: "Life Sciences" },
                { label: "Life Orientation", value: "Life Orientation" },
                { label: "Mathematics", value: "Mathematics" },
                { label: "Mathematical Lit", value: "Mathematical Lit" },
                { label: "Physical Sciences", value: "Physical Sciences" }
            ];
        } else if (selectedOption1 === "Government" && selectedOption2 === "Grade 11") {
            dropdown3.options = [
                { label: "Accounting", value: "Accounting" },
                { label: "Afrikaans FAL", value: "Afrikaans FAL" },
                { label: "Afrikaans HL", value: "Afrikaans HL" },
                { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                { label: "Business Studies", value: "Business Studies" },
                { label: "Consumer Studies", value: "Consumer Studies" },
                { label: "Civil Technology", value: "Civil Technology" },
                { label: "Computer Applications Technology", value: "Computer Applications Technology" },
                { label: "Design", value: "Design" },
                { label: "Dramatic Arts", value: "Dramatic Arts" },
                { label: "Dance Studies", value: "Dance Studies" },
                { label: "Economics", value: "Economics" },
                { label: "Engineering Graphic and Design", value: "Engineering Graphic and Design" },
                { label: "English HL", value: "English HL" },
                { label: "English FAL", value: "English FAL" },
                { label: "Geography", value: "Geography" },
                { label: "History", value: "History" },
                { label: "Hospitality Studies", value: "Hospitality Studies" },
                { label: "Information Technology", value: "Information Technology" },
                { label: "Life Sciences", value: "Life Sciences" },
                { label: "Life Orientation", value: "Life Orientation" },
                { label: "Mathematics", value: "Mathematics" },
                { label: "Mathematical Lit", value: "Mathematical Lit" },
                { label: "Music", value: "Music" },
                { label: "Physical Sciences", value: "Physical Sciences" },
                { label: "Tourism", value: "Tourism" },
                { label: "Visual Arts", value: "Visual Arts" },
                { label: "Xhosa HL", value: "Xhosa HL" },
                { label: "Xhosa FAL", value: "Xhosa FAL" }
            ];
        } else if (selectedOption1 === "Government" && selectedOption2 === "Grade 12") {
            dropdown3.options = [
                { label: "Accounting", value: "Accounting" },
                { label: "Afrikaans FAL", value: "Afrikaans FAL" },
                { label: "Afrikaans HL", value: "Afrikaans HL" },
                { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                { label: "Agricultural Technology", value: "Agricultural Technology" },
                { label: "Business Studies", value: "Business Studies" },
                { label: "Civil Technology", value: "Civil Technology" },
                { label: "Computer Applications Technology", value: "Computer Applications Technology" },
                { label: "Consumer Studies", value: "Consumer Studies" },
                { label: "Dance Studies", value: "Dance Studies" },
                { label: "Design", value: "Design" },
                { label: "Dramatic Arts", value: "Dramatic Arts" },
                { label: "Economics", value: "Economics" },
                { label: "Electrical Technology", value: "Electrical Technology" },
                { label: "Engineering Graphic and Design", value: "Engineering Graphic and Design" },
                { label: "English FAL", value: "English FAL" },
                { label: "English HL", value: "English HL" },
                { label: "Geography", value: "Geography" },
                { label: "History", value: "History" },
                { label: "Hospitality Studies", value: "Hospitality Studies" },
                { label: "Information Technology", value: "Information Technology" },
                { label: "Life Orientation", value: "Life Orientation" },
                { label: "Life Sciences", value: "Life Sciences" },
                { label: "Mathematical Lit", value: "Mathematical Lit" },
                { label: "Mathematics", value: "Mathematics" },
                { label: "Mechanical Technology", value: "Mechanical Technology" },
                { label: "Music", value: "Music" },
                { label: "Ndebele FAL", value: "Ndebele FAL" },
                { label: "Ndebele HL", value: "Ndebele HL" },
                { label: "Physical Sciences", value: "Physical Sciences" },
                { label: "Religion Studies", value: "Religion Studies" },
                { label: "Sepedi FAL", value: "Sepedi FAL" },
                { label: "Sepedi HL", value: "Sepedi HL" },
                { label: "Sesotho FAL", value: "Sesotho FAL" },
                { label: "Sesotho HL", value: "Sesotho HL" },
                { label: "Setswana FAL", value: "Setswana FAL" },
                { label: "Setswana HL", value: "Setswana HL" },
                { label: "Siswati FAL", value: "Siswati FAL" },
                { label: "Siswati HL", value: "Siswati HL" },
                { label: "Technical Mathematics", value: "Technical Mathematics" },
                { label: "Technical Science", value: "Technical Science" },
                { label: "Tourism", value: "Tourism" },
                { label: "Visual Arts", value: "Visual Arts" },
                { label: "Xhosa FAL", value: "Xhosa FAL" },
                { label: "Xhosa HL", value: "Xhosa HL" },
                { label: "Zulu FAL", value: "Zulu FAL" },
                { label: "Zulu HL", value: "Zulu HL" }

            ];
        } else if (selectedOption1 === "IEB" && selectedOption2 === "Grade 8") {
            // Show "All Subjects" option when IEB Grade 8 is selected
            dropdown3.options = [{ label: "All Subjects", value: "All Subjects" }];
        } else if (selectedOption1 === "IEB" && selectedOption2 === "Grade 9") {
            // Show "All Subjects" option when IEB Grade 9 is selected
            dropdown3.options = [{ label: "All Subjects", value: "All Subjects" }];
        } else if (selectedOption1 === "IEB" && selectedOption2 === "Grade 10") {
            // Show "All Subjects" option when IEB Grade 10 is selected
            dropdown3.options = [{ label: "All Subjects", value: "All Subjects" }];
        } else if (selectedOption1 === "IEB" && selectedOption2 === "Grade 11") {
            // Show "All Subjects" option when IEB Grade 11 is selected
            dropdown3.options = [{ label: "All Subjects", value: "All Subjects" }];
        } else if (selectedOption1 === "IEB" && selectedOption2 === "Grade 12") {
            dropdown3.options = [
                { label: "Accounting", value: "Accounting" },
                { label: "Afrikaans FAL", value: "Afrikaans FAL" },
                { label: "Afrikaans HL", value: "Afrikaans HL" },
                { label: "Agricultural Management Practice", value: "Agricultural Management Practice" },
                { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                { label: "AP Afrikaans", value: "AP Afrikaans" },
                { label: "AP English", value: "AP English" },
                { label: "AP Math", value: "AP Math" },
                { label: "Arabic SAL", value: "Arabic SAL" },
                { label: "Business Studies", value: "Business Studies" },
                { label: "Civil Technology", value: "Civil Technology" },
                { label: "Computer Applications Technology", value: "Computer Applications Technology" },
                { label: "Consumer Studies", value: "Consumer Studies" },
                { label: "Dance Studies", value: "Dance Studies" },
                { label: "Design", value: "Design" },
                { label: "Dramatic Arts", value: "Dramatic Arts" },
                { label: "Economics", value: "Economics" },
                { label: "Electrical Technology", value: "Electrical Technology" },
                { label: "Engineering Graphics and Design", value: "Engineering Graphics and Design" },
                { label: "English FAL", value: "English FAL" },
                { label: "English HL", value: "English HL" },
                { label: "Equine Studies", value: "Equine Studies" },
                { label: "French SAL", value: "French SAL" },
                { label: "Geography", value: "Geography" },
                { label: "German HL", value: "German HL" },
                { label: "German SAL", value: "German SAL" },
                { label: "Greek SAL", value: "Greek SAL" },
                { label: "Gujarati FAL", value: "Gujarati FAL" },
                { label: "Gujarati SAL", value: "Gujarati SAL" },
                { label: "Hebrew SAL", value: "Hebrew SAL" },
                { label: "Hindi FAL", value: "Hindi FAL" },
                { label: "Hindi HL", value: "Hindi HL" },
                { label: "Hindi SAL", value: "Hindi SAL" },
                { label: "History", value: "History" },
                { label: "Hospitality Studies", value: "Hospitality Studies" },
                { label: "Information Technology", value: "Information Technology" },
                { label: "Italian SAL", value: "Italian SAL" },
                { label: "Latin SAL", value: "Latin SAL" },
                { label: "Life Orientation", value: "Life Orientation" },
                { label: "Life Science", value: "Life Science" },
                { label: "Mandarin SAL", value: "Mandarin SAL" },
                { label: "Maritime Economics", value: "Maritime Economics" },
                { label: "Mathematical Literacy", value: "Mathematical Literacy" },
                { label: "Mathematics", value: "Mathematics" },
                { label: "Mechanical Technology", value: "Mechanical Technology" },
                { label: "Music", value: "Music" },
                { label: "Nautical Science", value: "Nautical Science" },
                { label: "Physical Sciences", value: "Physical Sciences" },
                { label: "Portuguese FAL", value: "Portuguese FAL" },
                { label: "Portuguese HL", value: "Portuguese HL" },
                { label: "Portuguese SAL", value: "Portuguese SAL" },
                { label: "Sepedi FAL", value: "Sepedi FAL" },
                { label: "Sepedi HL", value: "Sepedi HL" },
                { label: "Serbian SAL", value: "Serbian SAL" },
                { label: "Sesotho FAL", value: "Sesotho FAL" },
                { label: "Sesotho HL", value: "Sesotho HL" },
                { label: "Setswana FAL", value: "Setswana FAL" },
                { label: "Siswati FAL", value: "Siswati FAL" },
                { label: "Siswati HL", value: "Siswati HL" },
                { label: "Spanish SAL", value: "Spanish SAL" },
                { label: "Sport and Exercise", value: "Sport and Exercise" },
                { label: "Tamali FAL", value: "Tamali FAL" },
                { label: "Tamali SAL", value: "Tamali SAL" },
                { label: "Technical Mathematics", value: "Technical Mathematics" },
                { label: "Technical Sciences", value: "Technical Sciences" },
                { label: "Telugu SAL", value: "Telugu SAL" },
                { label: "Tourism", value: "Tourism" },
                { label: "Urdu FAL", value: "Urdu FAL" },
                { label: "Urdu SAL", value: "Urdu SAL" },
                { label: "Visual Arts", value: "Visual Arts" },
                { label: "Xhosa FAL", value: "Xhosa FAL" },
                { label: "Xitsonga FAL", value: "Xitsonga FAL" },
                { label: "Zulu FAL", value: "Zulu FAL" },
                { label: "Zulu HL", value: "Zulu HL" }
            ];
        } else {
            // Hide when no conditions
            dropdown3.hide();
        }
    });
});

$w.onReady(function () {
    // Dropdown 3 Selection
    $w("#dropdown3").onChange((event) => {
        const dropdown3 = $w("#dropdown3");
        const dropdown2 = $w("#dropdown2");
        const dropdown1 = $w("#dropdown1");
        const selectedOption3 = event.target.value;
        const selectedOption2 = dropdown2.value;
        const selectedOption1 = dropdown1.value;
        const buttonSubject = $w("#buttonSubject");

        // Button Lable setup
        buttonSubject.label = selectedOption1 + " " + selectedOption2 + " " + selectedOption3;


        // Set the link of button based off 3 selections from dropdown
        buttonSubject.link = (
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "Afrikaans") ? "https://www.sapapers.co.za/gov-grade-8/afrikaans" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "Creative Arts") ? "https://www.sapapers.co.za/gov-grade-8/creative-arts" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "Economic Management Sciences") ? "https://www.sapapers.co.za/gov-grade-8/economic-management-sciences" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "English") ? "https://www.sapapers.co.za/gov-grade-8/english" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "Geography") ? "https://www.sapapers.co.za/gov-grade-8/geography" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "History") ? "https://www.sapapers.co.za/gov-grade-8/history" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "Life Orientation") ? "https://www.sapapers.co.za/gov-grade-8/life-orientation" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "Mathamatics") ? "https://www.sapapers.co.za/gov-grade-8/mathamatics" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "Natural Science") ? "https://www.sapapers.co.za/gov-grade-8/natural-science" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "Technology") ? "https://www.sapapers.co.za/gov-grade-8/technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 8" && selectedOption3 === "Zulu") ? "https://www.sapapers.co.za/gov-grade-8/isizulu" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 9" && selectedOption3 === "Afrikaans FAL") ? "https://www.sapapers.co.za/gov-grade-9/afrikaans-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 9" && selectedOption3 === "Afrikaans HL") ? "https://www.sapapers.co.za/gov-grade-9/afrikaans-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 9" && selectedOption3 === "Economic and Management Sciences") ? "https://www.sapapers.co.za/gov-grade-9/economic-and-management-sciences" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 9" && selectedOption3 === "English HL") ? "https://www.sapapers.co.za/gov-grade-9/english-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 9" && selectedOption3 === "Englsih FAL") ? "https://www.sapapers.co.za/gov-grade-9/englsih-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 9" && selectedOption3 === "Mathematics") ? "https://www.sapapers.co.za/gov-grade-9/mathematics" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 9" && selectedOption3 === "Natural Sciences") ? "https://www.sapapers.co.za/gov-grade-9/natural-sciences" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 9" && selectedOption3 === "Sesotho HL") ? "https://www.sapapers.co.za/gov-grade-9/sesotho-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 9" && selectedOption3 === "isiXhosa FAL") ? "https://www.sapapers.co.za/gov-grade-9/isixhosa-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 9" && selectedOption3 === "isiXhosa HL") ? "https://www.sapapers.co.za/gov-grade-9/isixhosa-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Accounting") ? "https://www.sapapers.co.za/grade-10/accounting" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Afrikaans FAL") ? "https://www.sapapers.co.za/grade-10/afrikaans-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Afrikaans SAL") ? "https://www.sapapers.co.za/grade-10/afrikaans-sal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-10/agricultural-sciences" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Business Studies") ? "https://www.sapapers.co.za/grade-10/business-studies" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Civil Technology") ? "https://www.sapapers.co.za/grade-10/civil-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Economics") ? "https://www.sapapers.co.za/grade-10/economics" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Electrical Technology") ? "https://www.sapapers.co.za/grade-10/electrical-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "English FAL") ? "https://www.sapapers.co.za/grade-10/english-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "English HL") ? "https://www.sapapers.co.za/grade-10/english-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Geography") ? "https://www.sapapers.co.za/grade-10/geography" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "History") ? "https://www.sapapers.co.za/grade-10/history" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Information Technology") ? "https://www.sapapers.co.za/grade-10/information-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Life Orientation") ? "https://www.sapapers.co.za/grade-10/life-orientation" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Life Science") ? "https://www.sapapers.co.za/grade-10/life-science" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Maathematics") ? "https://www.sapapers.co.za/grade-10/maathematics" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Mathematical Literacy") ? "https://www.sapapers.co.za/grade-10/mathematical-literacy" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Mechanical Technology") ? "https://www.sapapers.co.za/grade-10/mechanical-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Physical Science") ? "https://www.sapapers.co.za/grade-10/physical-science" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Technical Mathematics") ? "https://www.sapapers.co.za/grade-10/technical-mathematics" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 10" && selectedOption3 === "Technical Sciences") ? "https://www.sapapers.co.za/grade-10/technical-sciences" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Afrikaans FAL") ? "https://www.sapapers.co.za/grade-11/afrikaans-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Afrikaans HL") ? "https://www.sapapers.co.za/grade-11/afrikaans-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-11/agricultural-sciences" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Civil Technology") ? "https://www.sapapers.co.za/grade-11/civil-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Computer Applications Technology") ? "https://www.sapapers.co.za/grade-11/computer-applications-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Consumer Studies") ? "https://www.sapapers.co.za/grade-11/consumer-studies" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Dance Studies") ? "https://www.sapapers.co.za/grade-11/dance-studies" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Design") ? "https://www.sapapers.co.za/grade-11/design" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Dramatic Arts") ? "https://www.sapapers.co.za/grade-11/dramatic-arts" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Engineering Graphic and Design") ? "https://www.sapapers.co.za/grade-11/engineering-graphic-and-design" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "English FAL") ? "https://www.sapapers.co.za/grade-11/english-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "English HL") ? "https://www.sapapers.co.za/grade-11/english-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "History") ? "https://www.sapapers.co.za/grade-11/history" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Hospitality Studies") ? "https://www.sapapers.co.za/grade-11/hospitality-studies" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Information Technology") ? "https://www.sapapers.co.za/grade-11/information-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Life Orientation") ? "https://www.sapapers.co.za/grade-11/life-orientation" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Mathematics Literacy") ? "https://www.sapapers.co.za/grade-11/mathematics-literacy" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Music") ? "https://www.sapapers.co.za/grade-11/music" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Tourism") ? "https://www.sapapers.co.za/grade-11/tourism" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Visual Arts") ? "https://www.sapapers.co.za/grade-11/visual-arts" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Xhosa FAL") ? "https://www.sapapers.co.za/grade-11/xhosa-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Xhosa HL") ? "https://www.sapapers.co.za/grade-11/xhosa-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Afrikaans HL") ? "https://www.sapapers.co.za/grade-12/afrikaans-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Agricultural Management") ? "https://www.sapapers.co.za/grade-12/agricultural-management" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Agricultural Technology") ? "https://www.sapapers.co.za/grade-12/agricultural-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Civil Technology") ? "https://www.sapapers.co.za/grade-12/civil-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Computer Applications Technology") ? "https://www.sapapers.co.za/grade-12/computer-applications-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Consumer Studies") ? "https://www.sapapers.co.za/grade-12/consumer-studies" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Dance Studies") ? "https://www.sapapers.co.za/grade-12/dance-studies" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Design") ? "https://www.sapapers.co.za/grade-12/design" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Dramatic Arts") ? "https://www.sapapers.co.za/grade-12/dramatic-arts" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Electrical Technology") ? "https://www.sapapers.co.za/grade-12/electrical-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Engineering Graphic and Design") ? "https://www.sapapers.co.za/grade-12/engineering-graphic-and-design" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "English HL") ? "https://www.sapapers.co.za/grade-12/english-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Hospitality Studies") ? "https://www.sapapers.co.za/grade-12/hospitality-studies" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Infomation Technology") ? "https://www.sapapers.co.za/grade-12/infomation-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Life Orientation") ? "https://www.sapapers.co.za/grade-12/life-orientation" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Marine Science") ? "https://www.sapapers.co.za/grade-12/marine-science" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Mechanical Technology") ? "https://www.sapapers.co.za/grade-12/mechanical-technology" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Music") ? "https://www.sapapers.co.za/grade-12/music" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Ndebele FAL") ? "https://www.sapapers.co.za/grade-12/ndebele-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Ndebele HL") ? "https://www.sapapers.co.za/grade-12/ndebele-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Religion Studies") ? "https://www.sapapers.co.za/grade-12/religion-studies" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Sepedi FAL") ? "https://www.sapapers.co.za/grade-12/sepedi-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Sepedi HL") ? "https://www.sapapers.co.za/grade-12/sepedi-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Sesotho FAL") ? "https://www.sapapers.co.za/grade-12/sesotho-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Sesotho HL") ? "https://www.sapapers.co.za/grade-12/sesotho-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Setswana FAL") ? "https://www.sapapers.co.za/grade-12/setswana-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Setswana HL") ? "https://www.sapapers.co.za/grade-12/setswana-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Siswati FAL") ? "https://www.sapapers.co.za/grade-12/siswati-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Siswati HL") ? "https://www.sapapers.co.za/grade-12/siswati-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Technical Mathematics") ? "https://www.sapapers.co.za/grade-12/technical-mathematics" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Technical Science") ? "https://www.sapapers.co.za/grade-12/technical-science" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Visual Arts") ? "https://www.sapapers.co.za/grade-12/visual-arts" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Xhosa FAL") ? "https://www.sapapers.co.za/grade-12/xhosa-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Xhosa HL") ? "https://www.sapapers.co.za/grade-12/xhosa-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Xitsonga FAL") ? "https://www.sapapers.co.za/grade-12/xitsonga-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Xitsonga HL") ? "https://www.sapapers.co.za/grade-12/xitsonga-hl" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Zulu FAL") ? "https://www.sapapers.co.za/grade-12/zulu-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Zulu HL") ? "https://www.sapapers.co.za/grade-12/zulu-hl" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "AP Afrikaans") ? "https://www.sapapers.co.za/ieb/ap-afrikaans" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "AP English") ? "https://www.sapapers.co.za/ieb/ap-english" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "AP Math") ? "https://www.sapapers.co.za/ieb/ap-math" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Accounting") ? "https://www.sapapers.co.za/ieb/accounting" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Afrikaans FAL") ? "https://www.sapapers.co.za/ieb/afrikaans-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Afrikaans HL") ? "https://www.sapapers.co.za/ieb/afrikaans-hl" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Agricultural Management Practice") ? "https://www.sapapers.co.za/ieb/agricultural-management-practice" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Agricultural Sciences") ? "https://www.sapapers.co.za/ieb/agricultural-sciences" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Arabic SAL") ? "https://www.sapapers.co.za/ieb/arabic-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Business Studies") ? "https://www.sapapers.co.za/ieb/business-studies" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Civil Technology") ? "https://www.sapapers.co.za/ieb/civil-technology" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Computer Applications Technology") ? "https://www.sapapers.co.za/ieb/computer-applications-technology" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Consumer Studies") ? "https://www.sapapers.co.za/ieb/consumer-studies" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Dance Studies") ? "https://www.sapapers.co.za/ieb/dance-studies" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Design") ? "https://www.sapapers.co.za/ieb/design" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Dramatic Arts") ? "https://www.sapapers.co.za/ieb/dramatic-arts" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Economics") ? "https://www.sapapers.co.za/ieb/economics" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Electrical Technology") ? "https://www.sapapers.co.za/ieb/electrical-technology" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Engineering Graphics and Design") ? "https://www.sapapers.co.za/ieb/engineering-graphics-and-design" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "English FAL") ? "https://www.sapapers.co.za/ieb/english-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "English HL") ? "https://www.sapapers.co.za/ieb/english-hl" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Equine Studies") ? "https://www.sapapers.co.za/ieb/equine-studies" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "French SAL") ? "https://www.sapapers.co.za/ieb/french-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Geography") ? "https://www.sapapers.co.za/ieb/geography" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "German HL") ? "https://www.sapapers.co.za/ieb/german-hl" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "German SAL") ? "https://www.sapapers.co.za/ieb/german-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Greek SAL") ? "https://www.sapapers.co.za/ieb/greek-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Gujarati FAL") ? "https://www.sapapers.co.za/ieb/gujarati-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Gujarati SAL") ? "https://www.sapapers.co.za/ieb/gujarati-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Hebrew SAL") ? "https://www.sapapers.co.za/ieb/hebrew-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Hindi FAL") ? "https://www.sapapers.co.za/ieb/hindi-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Hindi HL") ? "https://www.sapapers.co.za/ieb/hindi-hl" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Hindi SAL") ? "https://www.sapapers.co.za/ieb/hindi-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "History") ? "https://www.sapapers.co.za/ieb/history" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Hospitality Studies") ? "https://www.sapapers.co.za/ieb/hospitality-studies" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Information Technology") ? "https://www.sapapers.co.za/ieb/information-technology" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Italian SAL") ? "https://www.sapapers.co.za/ieb/italian-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Latin SAL") ? "https://www.sapapers.co.za/ieb/latin-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Life Orientation") ? "https://www.sapapers.co.za/ieb/life-orientation" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Life Science") ? "https://www.sapapers.co.za/ieb/life-science" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Mandarin SAL") ? "https://www.sapapers.co.za/ieb/mandarin-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Maritime Economics") ? "https://www.sapapers.co.za/ieb/maritime-economics" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Mathematical Literacy") ? "https://www.sapapers.co.za/ieb/mathematical-literacy" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Mathematics") ? "https://www.sapapers.co.za/ieb/mathematics" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Mechanical Technology") ? "https://www.sapapers.co.za/ieb/mechanical-technology" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Music") ? "https://www.sapapers.co.za/ieb/music" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Nautical Science") ? "https://www.sapapers.co.za/ieb/nautical-science" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Physical Sciences") ? "https://www.sapapers.co.za/ieb/physical-sciences" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Portuguese FAL") ? "https://www.sapapers.co.za/ieb/portuguese-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Portuguese HL") ? "https://www.sapapers.co.za/ieb/portuguese-hl" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Portuguese SAL") ? "https://www.sapapers.co.za/ieb/portuguese-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Sepedi FAL") ? "https://www.sapapers.co.za/ieb/sepedi-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Sepedi HL") ? "https://www.sapapers.co.za/ieb/sepedi-hl" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Serbian SAL") ? "https://www.sapapers.co.za/ieb/serbian-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Sesotho FAL") ? "https://www.sapapers.co.za/ieb/sesotho-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Sesotho HL") ? "https://www.sapapers.co.za/ieb/sesotho-hl" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Setswana FAL") ? "https://www.sapapers.co.za/ieb/setswana-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Siswati FAL") ? "https://www.sapapers.co.za/ieb/siswati-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Siswati HL") ? "https://www.sapapers.co.za/ieb/siswati-hl" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Spanish SAL") ? "https://www.sapapers.co.za/ieb/spanish-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Sport and Exercise") ? "https://www.sapapers.co.za/ieb/sport-and-exercise" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Tamali FAL") ? "https://www.sapapers.co.za/ieb/tamali-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Tamali SAL") ? "https://www.sapapers.co.za/ieb/tamali-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Technical Mathematics") ? "https://www.sapapers.co.za/ieb/technical-mathematics" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Technical Sciences") ? "https://www.sapapers.co.za/ieb/technical-sciences" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Telugu SAL") ? "https://www.sapapers.co.za/ieb/telugu-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Tourism") ? "https://www.sapapers.co.za/ieb/tourism" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Urdu FAL") ? "https://www.sapapers.co.za/ieb/urdu-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Urdu SAL") ? "https://www.sapapers.co.za/ieb/urdu-sal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Visual Arts") ? "https://www.sapapers.co.za/ieb/visual-arts" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Xhosa FAL") ? "https://www.sapapers.co.za/ieb/xhosa-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Xitsonga FAL") ? "https://www.sapapers.co.za/ieb/xitsonga-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Zulu FAL") ? "https://www.sapapers.co.za/ieb/zulu-fal" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 12" && selectedOption3 === "Zulu HL") ? "https://www.sapapers.co.za/ieb/zulu-hl" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 11" && selectedOption3 === "All Subjects") ? "https://www.sapapers.co.za/ieb-grade-11-past-papers" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 10" && selectedOption3 === "All Subjects") ? "https://www.sapapers.co.za/ieb-grade-10-past-papers" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 9" && selectedOption3 === "All Subjects") ? "https://www.sapapers.co.za/ieb-grade-9-past-papers" :
            (selectedOption1 === "IEB" && selectedOption2 === "Grade 8" && selectedOption3 === "All Subjects") ? "https://www.sapapers.co.za/ieb-grade-8-past-papers" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Accounting") ? "https://www.sapapers.co.za/grade-11-accounting" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Business Studies") ? "https://www.sapapers.co.za/grade-11-business-studies" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Economics") ? "https://www.sapapers.co.za/grade-11-economics" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Geography") ? "https://www.sapapers.co.za/grade-11-geography" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Life Science") ? "https://www.sapapers.co.za/grade-11-life-science" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Mathematics") ? "https://www.sapapers.co.za/grade-11-mathematics" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 11" && selectedOption3 === "Physical Science") ? "https://www.sapapers.co.za/grade-11-physical-science" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Accounting") ? "https://www.sapapers.co.za/grade-12-accounting" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Afrikaans FAL") ? "https://www.sapapers.co.za/grade-12-afrikaans-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-12-agricultural-sciences" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Business Studies") ? "https://www.sapapers.co.za/grade-12-business-studies" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Economics") ? "https://www.sapapers.co.za/grade-12-economics" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "English FAL") ? "https://www.sapapers.co.za/grade-12-english-fal" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Geography") ? "https://www.sapapers.co.za/grade-12-geography" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "History") ? "https://www.sapapers.co.za/grade-12-history" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Life Science") ? "https://www.sapapers.co.za/grade-12-life-science" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Mathematical Literacy") ? "https://www.sapapers.co.za/grade-12-mathematical-literacy" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Mathematics") ? "https://www.sapapers.co.za/grade-12-mathematics" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Physical Science") ? "https://www.sapapers.co.za/grade-12-physical-science" :
            (selectedOption1 === "Government" && selectedOption2 === "Grade 12" && selectedOption3 === "Tourism") ? "https://www.sapapers.co.za/grade-12-tourism" :
            ""
        );
		buttonSubject.show();
    });
});