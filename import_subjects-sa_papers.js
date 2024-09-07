$w.onReady(function () {
    $w('#btnOld').onClick(() => {
        $w("#btnDone").enable()
        const dropdown1 = $w('#dropdown1');
        const dropdown2 = $w('#dropdown2');
        const dropdownHL = $w('#dropdown3');
        const dropdownFAL= $w('#dropdown4');
        const dropdownMath = $w('#dropdown5');
        const dropdownSubject1 = $w('#dropdown6');
        const dropdownSubject2 = $w('#dropdown7');
        const dropdownSubject3 = $w('#dropdown8');

        dropdown1.show();
        dropdown2.show();
        dropdownHL.show();
        dropdownFAL.show();
        dropdownMath.show();
        dropdownSubject1.show();
        dropdownSubject2.show();
        dropdownSubject3.show();
        
        currentMember
        .getMember()
        .then((member) => {        const id = member._id;
            const userName = `${member.contactDetails.firstName}`;
            const userSubject1 = `${member.contactDetails.customFields['custom.subject-1'].value}`;
            const userSubject2 = `${member.contactDetails.customFields['custom.subject-2'].value}`;
            const userSubject3 = `${member.contactDetails.customFields['custom.subject-3'].value}`;
            const userSubject4 = `${member.contactDetails.customFields['custom.subject-4'].value}`;
            const userSubject5 = `${member.contactDetails.customFields['custom.subject-5'].value}`;
            const userSubject6 = `${member.contactDetails.customFields['custom.subject-6'].value}`;
            const userGrade = `${member.contactDetails.customFields['custom.grade'].value}`;
            const userCurriculum = `${member.contactDetails.customFields['custom.curriculum'].value}`;

            if (userCurriculum === "IEB" && userGrade === "Grade 12") {	
            //
                dropdown2.options = [
                    { label: "Grade 12", value: "Grade 12" }
                ];
                dropdownHL.options = [
                    
                    { label: "Afrikaans HL", value: "Afrikaans HL" },
                    { label: "English HL", value: "English HL" },
                    { label: "German HL", value: "German HL" },
                    { label: "Gujarati HL", value: "Gujarati HL" },
                    { label: "Hindi HL", value: "Hindi HL" },
                    { label: "Portuguese HL", value: "Portuguese HL" },
                    { label: "Sepedi HL", value: "Sepedi HL" },
                    { label: "Sesotho HL", value: "Sesotho HL" },
                    { label: "Siswati HL", value: "Siswati HL" },
                    { label: "Tamil HL", value: "Tamil HL" },
                    { label: "Telugu HL", value: "Telugu HL" },
                    { label: "Urdu HL", value: "Urdu HL" },
                    { label: "Zulu HL", value: "Zulu HL" }
                ];
                dropdownFAL.options = [
                    
                    { label: "Afrikaans FAL", value: "Afrikaans FAL" },
                    { label: "English FAL", value: "English FAL" },
                    { label: "Gujarati FAL", value: "Gujarati FAL" },
                    { label: "Hindi FAL", value: "Hindi FAL" },
                    { label: "Portuguese FAL", value: "Portuguese FAL" },
                    { label: "Sepedi FAL", value: "Sepedi FAL" },
                    { label: "Sesotho FAL", value: "Sesotho FAL" },
                    { label: "Setswana FAL", value: "Setswana FAL" },
                    { label: "Siswati FAL", value: "Siswati FAL" },
                    { label: "Tamali FAL", value: "Tamali FAL" },
                    { label: "Urdu FAL", value: "Urdu FAL" },
                    { label: "Xhosa FAL", value: "Xhosa FAL" },
                    { label: "Xitsonga FAL", value: "Xitsonga FAL" },
                    { label: "Zulu FAL", value: "Zulu FAL" }
                ];
                dropdownMath.options = [
                    
                    { label: "Mathematical Literacy", value: "Mathematical Literacy" },
                    { label: "Mathematics", value: "Mathematics" },
                    { label: "Technical Mathematics", value: "Technical Mathematics" }
                ];
                dropdownSubject1.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Agricultural Management Practice", value: "Agricultural Management Practice" },
                    { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                    { label: "AP Afrikaans", value: "AP Afrikaans" },
                    { label: "AP English", value: "AP English" },
                    { label: "AP Math", value: "AP Math" },
                    { label: "AP Physics", value: "AP Physics" },
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
                    { label: "Equine Studies", value: "Equine Studies" },
                    { label: "French SAL", value: "French SAL" },
                    { label: "Geography", value: "Geography" },
                    { label: "German SAL", value: "German SAL" },
                    { label: "Greek SAL", value: "Greek SAL" },
                    { label: "Gujarati SAL", value: "Gujarati SAL" },
                    { label: "Hebrew SAL", value: "Hebrew SAL" },
                    { label: "Hindi SAL", value: "Hindi SAL" },
                    { label: "History", value: "History" },
                    { label: "Hospitality Studies", value: "Hospitality Studies" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Italian SAL", value: "Italian SAL" },
                    { label: "Latin SAL", value: "Latin SAL" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Mandarin SAL", value: "Mandarin SAL" },
                    { label: "Maritime Economics", value: "Maritime Economics" },
                    { label: "Mechanical Technology", value: "Mechanical Technology" },
                    { label: "Music", value: "Music" },
                    { label: "Nautical Science", value: "Nautical Science" },
                    { label: "Physical Sciences", value: "Physical Sciences" },
                    { label: "Portuguese SAL", value: "Portuguese SAL" },
                    { label: "Serbian SAL", value: "Serbian SAL" },
                    { label: "Spanish SAL", value: "Spanish SAL" },
                    { label: "Sport and Exercise", value: "Sport and Exercise" },
                    { label: "Tamali SAL", value: "Tamali SAL" },
                    { label: "Technical Sciences", value: "Technical Sciences" },
                    { label: "Telugu SAL", value: "Telugu SAL" },
                    { label: "Tourism", value: "Tourism" },
                    { label: "Urdu SAL", value: "Urdu SAL" },
                    { label: "Visual Arts", value: "Visual Arts" }
                ];
                dropdownSubject2.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Agricultural Management Practice", value: "Agricultural Management Practice" },
                    { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                    { label: "AP Afrikaans", value: "AP Afrikaans" },
                    { label: "AP English", value: "AP English" },
                    { label: "AP Math", value: "AP Math" },
                    { label: "AP Physics", value: "AP Physics" },
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
                    { label: "Equine Studies", value: "Equine Studies" },
                    { label: "French SAL", value: "French SAL" },
                    { label: "Geography", value: "Geography" },
                    { label: "German SAL", value: "German SAL" },
                    { label: "Greek SAL", value: "Greek SAL" },
                    { label: "Gujarati SAL", value: "Gujarati SAL" },
                    { label: "Hebrew SAL", value: "Hebrew SAL" },
                    { label: "Hindi SAL", value: "Hindi SAL" },
                    { label: "History", value: "History" },
                    { label: "Hospitality Studies", value: "Hospitality Studies" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Italian SAL", value: "Italian SAL" },
                    { label: "Latin SAL", value: "Latin SAL" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Mandarin SAL", value: "Mandarin SAL" },
                    { label: "Maritime Economics", value: "Maritime Economics" },
                    { label: "Mechanical Technology", value: "Mechanical Technology" },
                    { label: "Music", value: "Music" },
                    { label: "Nautical Science", value: "Nautical Science" },
                    { label: "Physical Sciences", value: "Physical Sciences" },
                    { label: "Portuguese SAL", value: "Portuguese SAL" },
                    { label: "Serbian SAL", value: "Serbian SAL" },
                    { label: "Spanish SAL", value: "Spanish SAL" },
                    { label: "Sport and Exercise", value: "Sport and Exercise" },
                    { label: "Tamali SAL", value: "Tamali SAL" },
                    { label: "Technical Sciences", value: "Technical Sciences" },
                    { label: "Telugu SAL", value: "Telugu SAL" },
                    { label: "Tourism", value: "Tourism" },
                    { label: "Urdu SAL", value: "Urdu SAL" },
                    { label: "Visual Arts", value: "Visual Arts" }
                ];
                dropdownSubject3.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Agricultural Management Practice", value: "Agricultural Management Practice" },
                    { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                    { label: "AP Afrikaans", value: "AP Afrikaans" },
                    { label: "AP English", value: "AP English" },
                    { label: "AP Math", value: "AP Math" },
                    { label: "AP Physics", value: "AP Physics" },
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
                    { label: "Equine Studies", value: "Equine Studies" },
                    { label: "French SAL", value: "French SAL" },
                    { label: "Geography", value: "Geography" },
                    { label: "German SAL", value: "German SAL" },
                    { label: "Greek SAL", value: "Greek SAL" },
                    { label: "Gujarati SAL", value: "Gujarati SAL" },
                    { label: "Hebrew SAL", value: "Hebrew SAL" },
                    { label: "Hindi SAL", value: "Hindi SAL" },
                    { label: "History", value: "History" },
                    { label: "Hospitality Studies", value: "Hospitality Studies" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Italian SAL", value: "Italian SAL" },
                    { label: "Latin SAL", value: "Latin SAL" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Mandarin SAL", value: "Mandarin SAL" },
                    { label: "Maritime Economics", value: "Maritime Economics" },
                    { label: "Mechanical Technology", value: "Mechanical Technology" },
                    { label: "Music", value: "Music" },
                    { label: "Nautical Science", value: "Nautical Science" },
                    { label: "Physical Sciences", value: "Physical Sciences" },
                    { label: "Portuguese SAL", value: "Portuguese SAL" },
                    { label: "Serbian SAL", value: "Serbian SAL" },
                    { label: "Spanish SAL", value: "Spanish SAL" },
                    { label: "Sport and Exercise", value: "Sport and Exercise" },
                    { label: "Tamali SAL", value: "Tamali SAL" },
                    { label: "Technical Sciences", value: "Technical Sciences" },
                    { label: "Telugu SAL", value: "Telugu SAL" },
                    { label: "Tourism", value: "Tourism" },
                    { label: "Urdu SAL", value: "Urdu SAL" },
                    { label: "Visual Arts", value: "Visual Arts" }
                ];

            } else if (userCurriculum === "Government" && userGrade === "Grade 10") {	
            //
                dropdown2.options = [
                    { label: "Grade 10", value: "Grade 10" },
                    { label: "Grade 11", value: "Grade 11" },
                    { label: "Grade 12", value: "Grade 12" }
                ];
                dropdownHL.options = [
                    
                    { label: "English HL", value: "English HL" }
                ];
                dropdownFAL.options = [
                    
                    { label: "Afrikaans FAL", value: "Afrikaans FAL" },
                    { label: "English FAL", value: "English FAL" }
                ];
                dropdownMath.options = [
                    
                    { label: "Mathematics", value: "Mathematics" },
                    { label: "Mathematical Literacy", value: "Mathematical Literacy" },
                    { label: "Technical Mathematics", value: "Technical Mathematics" }
                ];
                dropdownSubject1.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Afrikaans SAL", value: "Afrikaans SAL" },
                    { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                    { label: "Business Studies", value: "Business Studies" },
                    { label: "Civil Technology", value: "Civil Technology" },
                    { label: "Economics", value: "Economics" },
                    { label: "Electrical Technology", value: "Electrical Technology" },
                    { label: "Geography", value: "Geography" },
                    { label: "History", value: "History" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Mechanical Technology", value: "Mechanical Technology" },
                    { label: "Physical Science", value: "Physical Science" },
                    { label: "Technical Sciences", value: "Technical Sciences" }
                ];
                dropdownSubject2.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Afrikaans SAL", value: "Afrikaans SAL" },
                    { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                    { label: "Business Studies", value: "Business Studies" },
                    { label: "Civil Technology", value: "Civil Technology" },
                    { label: "Economics", value: "Economics" },
                    { label: "Electrical Technology", value: "Electrical Technology" },
                    { label: "Geography", value: "Geography" },
                    { label: "History", value: "History" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Mechanical Technology", value: "Mechanical Technology" },
                    { label: "Physical Science", value: "Physical Science" },
                    { label: "Technical Sciences", value: "Technical Sciences" }
                ];
                dropdownSubject3.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Afrikaans SAL", value: "Afrikaans SAL" },
                    { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                    { label: "Business Studies", value: "Business Studies" },
                    { label: "Civil Technology", value: "Civil Technology" },
                    { label: "Economics", value: "Economics" },
                    { label: "Electrical Technology", value: "Electrical Technology" },
                    { label: "Geography", value: "Geography" },
                    { label: "History", value: "History" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Mechanical Technology", value: "Mechanical Technology" },
                    { label: "Physical Science", value: "Physical Science" },
                    { label: "Technical Sciences", value: "Technical Sciences" }
                ];

            } else if (userCurriculum === "Government" && userGrade === "Grade 11") {
            //
                dropdown2.options = [
                    { label: "Grade 10", value: "Grade 10" },
                    { label: "Grade 11", value: "Grade 11" },
                    { label: "Grade 12", value: "Grade 12" }
                ];

                dropdownHL.options = [
                    
                    { label: "Afrikaans HL", value: "Afrikaans HL" },
                    { label: "English HL", value: "English HL" },
                    { label: "Xhosa HL", value: "Xhosa HL" }
                ];
                dropdownFAL.options = [
                    
                    { label: "Afrikaans FAL", value: "Afrikaans FAL" },
                    { label: "English FAL", value: "English FAL" },
                    { label: "Xhosa FAL", value: "Xhosa FAL" }
                ];
                dropdownMath.options = [
                    
                    { label: "Mathematics", value: "Mathematics" },
                    { label: "Mathematics Literacy", value: "Mathematics Literacy" }
                ];
                dropdownSubject1.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                    { label: "Business Studies", value: "Business Studies" },
                    { label: "Civil Technology", value: "Civil Technology" },
                    { label: "Computer Applications Technology", value: "Computer Applications Technology" },
                    { label: "Consumer Studies", value: "Consumer Studies" },
                    { label: "Dance Studies", value: "Dance Studies" },
                    { label: "Design", value: "Design" },
                    { label: "Dramatic Arts", value: "Dramatic Arts" },
                    { label: "Economics", value: "Economics" },
                    { label: "Engineering Graphic and Design", value: "Engineering Graphic and Design" },
                    { label: "Geography", value: "Geography" },
                    { label: "History", value: "History" },
                    { label: "Hospitality Studies", value: "Hospitality Studies" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Music", value: "Music" },
                    { label: "Physical Sciences", value: "Physical Sciences" },
                    { label: "Tourism", value: "Tourism" },
                    { label: "Visual Arts", value: "Visual Arts" }
                ];
                dropdownSubject2.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                    { label: "Business Studies", value: "Business Studies" },
                    { label: "Civil Technology", value: "Civil Technology" },
                    { label: "Computer Applications Technology", value: "Computer Applications Technology" },
                    { label: "Consumer Studies", value: "Consumer Studies" },
                    { label: "Dance Studies", value: "Dance Studies" },
                    { label: "Design", value: "Design" },
                    { label: "Dramatic Arts", value: "Dramatic Arts" },
                    { label: "Economics", value: "Economics" },
                    { label: "Engineering Graphic and Design", value: "Engineering Graphic and Design" },
                    { label: "Geography", value: "Geography" },
                    { label: "History", value: "History" },
                    { label: "Hospitality Studies", value: "Hospitality Studies" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Music", value: "Music" },
                    { label: "Physical Sciences", value: "Physical Sciences" },
                    { label: "Tourism", value: "Tourism" },
                    { label: "Visual Arts", value: "Visual Arts" }
                ];
                dropdownSubject3.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Agricultural Sciences", value: "Agricultural Sciences" },
                    { label: "Business Studies", value: "Business Studies" },
                    { label: "Civil Technology", value: "Civil Technology" },
                    { label: "Computer Applications Technology", value: "Computer Applications Technology" },
                    { label: "Consumer Studies", value: "Consumer Studies" },
                    { label: "Dance Studies", value: "Dance Studies" },
                    { label: "Design", value: "Design" },
                    { label: "Dramatic Arts", value: "Dramatic Arts" },
                    { label: "Economics", value: "Economics" },
                    { label: "Engineering Graphic and Design", value: "Engineering Graphic and Design" },
                    { label: "Geography", value: "Geography" },
                    { label: "History", value: "History" },
                    { label: "Hospitality Studies", value: "Hospitality Studies" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Music", value: "Music" },
                    { label: "Physical Sciences", value: "Physical Sciences" },
                    { label: "Tourism", value: "Tourism" },
                    { label: "Visual Arts", value: "Visual Arts" }
                ];

            } else if (userCurriculum === "Government" && userGrade === "Grade 12") {	
            //
                dropdown2.options = [
                    { label: "Grade 10", value: "Grade 10" },
                    { label: "Grade 11", value: "Grade 11" },
                    { label: "Grade 12", value: "Grade 12" }
                ];
                dropdownHL.options = [
                    
                    { label: "Afrikaans HL", value: "Afrikaans HL" },
                    { label: "English HL", value: "English HL" },
                    { label: "Ndebele HL", value: "Ndebele HL" },
                    { label: "Sepedi HL", value: "Sepedi HL" },
                    { label: "Sesotho HL", value: "Sesotho HL" },
                    { label: "Setswana HL", value: "Setswana HL" },
                    { label: "Siswati HL", value: "Siswati HL" },
                    { label: "Tshivenda HL", value: "Tshivenda HL" },
                    { label: "Xhosa HL", value: "Xhosa HL" },
                    { label: "Xitsonga HL", value: "Xitsonga HL" },
                    { label: "Zulu HL", value: "Zulu HL" }
                ];
                dropdownFAL.options = [
                    
                    { label: "Afrikaans FAL", value: "Afrikaans FAL" },
                    { label: "English FAL", value: "English FAL" },
                    { label: "Ndebele FAL", value: "Ndebele FAL" },
                    { label: "Sepedi FAL", value: "Sepedi FAL" },
                    { label: "Sesotho FAL", value: "Sesotho FAL" },
                    { label: "Setswana FAL", value: "Setswana FAL" },
                    { label: "Siswati FAL", value: "Siswati FAL" },
                    { label: "Tshivenda FAL", value: "Tshivenda FAL" },
                    { label: "Xhosa FAL", value: "Xhosa FAL" },
                    { label: "Xitsonga FAL", value: "Xitsonga FAL" },
                    { label: "Zulu FAL", value: "Zulu FAL" }
                ];
                dropdownMath.options = [
                    
                    { label: "Mathematical Literacy", value: "Mathematical Literacy" },
                    { label: "Mathematics", value: "Mathematics" },
                    { label: "Technical Mathematics", value: "Technical Mathematics" }
                ];
                dropdownSubject1.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Afrikaans SAL", value: "Afrikaans SAL" },
                    { label: "Agricultural Management Practices", value: "Agricultural Management Practices" },
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
                    { label: "English SAL", value: "English SAL" },
                    { label: "Geography", value: "Geography" },
                    { label: "History", value: "History" },
                    { label: "Hospitality Studies", value: "Hospitality Studies" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Marine Science", value: "Marine Science" },
                    { label: "Mechanical Technology", value: "Mechanical Technology" },
                    { label: "Music", value: "Music" },
                    { label: "Ndebele SAL", value: "Ndebele SAL" },
                    { label: "Physical Science", value: "Physical Science" },
                    { label: "Religion Studies", value: "Religion Studies" },
                    { label: "Sepedi SAL", value: "Sepedi SAL" },
                    { label: "Sesotho SAL", value: "Sesotho SAL" },
                    { label: "Setswana SAL", value: "Setswana SAL" },
                    { label: "Siswati SAL", value: "Siswati SAL" },
                    { label: "Technical Science", value: "Technical Science" },
                    { label: "Tourism", value: "Tourism" },
                    { label: "Visual Arts", value: "Visual Arts" },
                    { label: "Xhosa SAL", value: "Xhosa SAL" },
                    { label: "Zulu SAL", value: "Zulu SAL" }
                ];
                dropdownSubject2.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Afrikaans SAL", value: "Afrikaans SAL" },
                    { label: "Agricultural Management Practices", value: "Agricultural Management Practices" },
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
                    { label: "English SAL", value: "English SAL" },
                    { label: "Geography", value: "Geography" },
                    { label: "History", value: "History" },
                    { label: "Hospitality Studies", value: "Hospitality Studies" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Marine Science", value: "Marine Science" },
                    { label: "Mechanical Technology", value: "Mechanical Technology" },
                    { label: "Music", value: "Music" },
                    { label: "Ndebele SAL", value: "Ndebele SAL" },
                    { label: "Physical Science", value: "Physical Science" },
                    { label: "Religion Studies", value: "Religion Studies" },
                    { label: "Sepedi SAL", value: "Sepedi SAL" },
                    { label: "Sesotho SAL", value: "Sesotho SAL" },
                    { label: "Setswana SAL", value: "Setswana SAL" },
                    { label: "Siswati SAL", value: "Siswati SAL" },
                    { label: "Technical Science", value: "Technical Science" },
                    { label: "Tourism", value: "Tourism" },
                    { label: "Visual Arts", value: "Visual Arts" },
                    { label: "Xhosa SAL", value: "Xhosa SAL" },
                    { label: "Zulu SAL", value: "Zulu SAL" }
                ];
                dropdownSubject3.options = [
                    
                    { label: "Accounting", value: "Accounting" },
                    { label: "Afrikaans SAL", value: "Afrikaans SAL" },
                    { label: "Agricultural Management Practices", value: "Agricultural Management Practices" },
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
                    { label: "English SAL", value: "English SAL" },
                    { label: "Geography", value: "Geography" },
                    { label: "History", value: "History" },
                    { label: "Hospitality Studies", value: "Hospitality Studies" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Life Science", value: "Life Science" },
                    { label: "Marine Science", value: "Marine Science" },
                    { label: "Mechanical Technology", value: "Mechanical Technology" },
                    { label: "Music", value: "Music" },
                    { label: "Ndebele SAL", value: "Ndebele SAL" },
                    { label: "Physical Science", value: "Physical Science" },
                    { label: "Religion Studies", value: "Religion Studies" },
                    { label: "Sepedi SAL", value: "Sepedi SAL" },
                    { label: "Sesotho SAL", value: "Sesotho SAL" },
                    { label: "Setswana SAL", value: "Setswana SAL" },
                    { label: "Siswati SAL", value: "Siswati SAL" },
                    { label: "Technical Science", value: "Technical Science" },
                    { label: "Tourism", value: "Tourism" },
                    { label: "Visual Arts", value: "Visual Arts" },
                    { label: "Xhosa SAL", value: "Xhosa SAL" },
                    { label: "Zulu SAL", value: "Zulu SAL" }
                ];

            }

            dropdown1.value = userCurriculum;
            dropdown2.value = userGrade;
            dropdownHL.value = userSubject1;
            dropdownFAL.value = userSubject2;
            dropdownMath.value = userSubject3;
            dropdownSubject1.value = userSubject4;
            dropdownSubject2.value = userSubject5;
            dropdownSubject3.value = userSubject6;

        })
        .catch((error) => {
            console.error(error);

        });   
            


    });


});