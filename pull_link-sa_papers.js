//Main function to pull subjects from database
function PullSubjects() {

    //Check if logged in and shows "My Subjects" Sectiomn]]n 
    if (!currentUser.loggedIn) {
        $w('#sectionMySubjects').collapse();
        return;
    }
    if (currentUser.loggedIn) {
        $w('#sectionMySubjects').expand(); 
    }

    //Query FullData/Contacts for values
    currentMember
        .getMember()
        .then((member) => {
            const id = member._id;
            const slug = `${member.profile.slug}`;
            const userName = `${member.contactDetails.firstName}`;
            const Subject1 = `${member.contactDetails.customFields['custom.subject-1'].value}`;
            const Subject2 = `${member.contactDetails.customFields['custom.subject-2'].value}`;
            const Subject3 = `${member.contactDetails.customFields['custom.subject-3'].value}`;
            const Subject4 = `${member.contactDetails.customFields['custom.subject-4'].value}`;
            const Subject5 = `${member.contactDetails.customFields['custom.subject-5'].value}`;
            const Subject6 = `${member.contactDetails.customFields['custom.subject-6'].value}`;
            const Grade = `${member.contactDetails.customFields['custom.grade'].value}`;
            const Curriculum = `${member.contactDetails.customFields['custom.curriculum'].value}`;

            
            //Program Edit Button Link
            const tabName = 'my-subjects';
            const currentlUrl = wixLocation.url;
            const mysubjectURL = currentlUrl + '/' + tabName + '/' + slug + '/my-account'; 

            //Welcome Back Name Label & Other Label
            $w('#txtWelcomeBack').text = "Welcome Back " + userName + "!" 
            $w('#txtGrdCur').text = Curriculum + " " + Grade

            //Assign Buttons
            const btnSubject1 = $w('#btnSubject1');
            const btnSubject2 = $w('#btnSubject2');
            const btnSubject3 = $w('#btnSubject3');
            const btnSubject4 = $w('#btnSubject4');
            const btnSubject5 = $w('#btnSubject5');
            const btnSubject6 = $w('#btnSubject6');
            const btnSubjectLO = $w('#btnSubjectLO');

            //Label Buttons
            btnSubject1.label = Subject1;
            btnSubject2.label = Subject2;
            btnSubject3.label = Subject3;
            btnSubject4.label = Subject4;
            btnSubject5.label = Subject5;
            btnSubject6.label = Subject6;
            btnSubjectLO.label = 'Life Orientation';

            //If Subject Blank
            if (Subject1 === "" || Subject1 === "Blank") {
                btnSubject1.label = "n/a";
            }
            if (Subject2 === "" || Subject2 === "Blank") {
                btnSubject2.label = "n/a";
            }
            if (Subject3 === "" || Subject3 === "Blank") {
                btnSubject3.label = "n/a";
            }
            if (Subject4 === "" || Subject4 === "Blank") {
                btnSubject4.label = "n/a";
            }
            if (Subject5 === "" || Subject5 === "Blank") {
                btnSubject5.label = "n/a";
            }
            if (Subject6 === "" || Subject6 === "Blank") {
                btnSubject6.label = "n/a";
            }
 
            
            
            //IF "Blank" it will go to "My Subjects" Section
            //Button 1
            btnSubject1.link = (
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Afrikaans HL") ? "https://www.sapapers.co.za/ieb/afrikaans-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "English HL") ? "https://www.sapapers.co.za/ieb/english-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "German HL") ? "https://www.sapapers.co.za/ieb/german-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Gujarati HL") ? "https://www.sapapers.co.za/ieb/gujarati-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Hindi HL") ? "https://www.sapapers.co.za/ieb/hindi-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Portuguese HL") ? "https://www.sapapers.co.za/ieb/portuguese-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Sepedi HL") ? "https://www.sapapers.co.za/ieb/sepedi-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Sesotho HL") ? "https://www.sapapers.co.za/ieb/sesotho-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Siswati HL") ? "https://www.sapapers.co.za/ieb/siswati-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Tamil HL") ? "https://www.sapapers.co.za/ieb/tamil-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Telugu HL") ? "https://www.sapapers.co.za/ieb/telugu-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Urdu HL") ? "https://www.sapapers.co.za/ieb/urdu-hl" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject1 === "Zulu HL") ? "https://www.sapapers.co.za/ieb/zulu-hl" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject1 === "English HL") ? "https://www.sapapers.co.za/grade-10/english-hl" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject1 === "Afrikaans HL") ? "https://www.sapapers.co.za/grade-11/afrikaans-hl" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject1 === "English HL") ? "https://www.sapapers.co.za/grade-11/english-hl" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject1 === "Xhosa HL") ? "https://www.sapapers.co.za/grade-11/xhosa-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "Afrikaans HL") ? "https://www.sapapers.co.za/grade-12-afrikaans-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "English HL") ? "https://www.sapapers.co.za/grade-12-english-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "Ndebele HL") ? "https://www.sapapers.co.za/grade-12/ndebele-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "Sepedi HL") ? "https://www.sapapers.co.za/grade-12/sepedi-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "Sesotho HL") ? "https://www.sapapers.co.za/grade-12/sesotho-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "Setswana HL") ? "https://www.sapapers.co.za/grade-12/setswana-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "Siswati HL") ? "https://www.sapapers.co.za/grade-12/siswati-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "Tshivenda HL") ? "https://www.sapapers.co.za/grade-12/tshivenda-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "Xhosa HL") ? "https://www.sapapers.co.za/grade-12/xhosa-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "Xitsonga HL") ? "https://www.sapapers.co.za/grade-12/xitsonga-hl" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject1 === "Zulu HL") ? "https://www.sapapers.co.za/grade-12/zulu-hl" :
                (Subject1 === "") ? mysubjectURL :
                (Subject1 === "Blank") ? mysubjectURL :
                ""
            );
            
            //Button 2
            btnSubject2.link = (
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Afrikaans FAL") ? "https://www.sapapers.co.za/ieb/afrikaans-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "English FAL") ? "https://www.sapapers.co.za/ieb/english-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Gujarati FAL") ? "https://www.sapapers.co.za/ieb/gujarati-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Hindi FAL") ? "https://www.sapapers.co.za/ieb/hindi-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Portuguese FAL") ? "https://www.sapapers.co.za/ieb/portuguese-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Sepedi FAL") ? "https://www.sapapers.co.za/ieb/sepedi-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Sesotho FAL") ? "https://www.sapapers.co.za/ieb/sesotho-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Setswana FAL") ? "https://www.sapapers.co.za/ieb/setswana-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Siswati FAL") ? "https://www.sapapers.co.za/ieb/siswati-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Tamali FAL") ? "https://www.sapapers.co.za/ieb/tamali-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Urdu FAL") ? "https://www.sapapers.co.za/ieb/urdu-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Xhosa FAL") ? "https://www.sapapers.co.za/ieb/xhosa-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Xitsonga FAL") ? "https://www.sapapers.co.za/ieb/xitsonga-fal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject2 === "Zulu FAL") ? "https://www.sapapers.co.za/ieb/zulu-fal" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject2 === "Afrikaans FAL") ? "https://www.sapapers.co.za/grade-10/afrikaans-fal" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject2 === "English FAL") ? "https://www.sapapers.co.za/grade-10/english-fal" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject2 === "Afrikaans FAL") ? "https://www.sapapers.co.za/grade-11/afrikaans-fal" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject2 === "English FAL") ? "https://www.sapapers.co.za/grade-11/english-fal" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject2 === "Xhosa FAL") ? "https://www.sapapers.co.za/grade-11/xhosa-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "Afrikaans FAL") ? "https://www.sapapers.co.za/grade-12-afrikaans-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "English FAL") ? "https://www.sapapers.co.za/grade-12-english-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "Ndebele FAL") ? "https://www.sapapers.co.za/grade-12/ndebele-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "Sepedi FAL") ? "https://www.sapapers.co.za/grade-12/sepedi-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "Sesotho FAL") ? "https://www.sapapers.co.za/grade-12/sesotho-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "Setswana FAL") ? "https://www.sapapers.co.za/grade-12/setswana-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "Siswati FAL") ? "https://www.sapapers.co.za/grade-12/siswati-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "Tshivenda FAL") ? "https://www.sapapers.co.za/grade-12/tshivenda-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "Xhosa FAL") ? "https://www.sapapers.co.za/grade-12/xhosa-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "Xitsonga FAL") ? "https://www.sapapers.co.za/grade-12/xitsonga-fal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject2 === "Zulu FAL") ? "https://www.sapapers.co.za/grade-12/zulu-fal" :
                (Subject2 === "") ? mysubjectURL :
                (Subject2 === "Blank") ? mysubjectURL :
                ""
            );
            
            //Button 3
            btnSubject3.link = (
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject3 === "Mathematical Literacy") ? "https://www.sapapers.co.za/ieb/mathematical-literacy" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject3 === "Mathematics") ? "https://www.sapapers.co.za/ieb/mathematics" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject3 === "Technical Mathematics") ? "https://www.sapapers.co.za/ieb/technical-mathematics" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject3 === "Mathematics") ? "https://www.sapapers.co.za/grade-10/mathematics" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject3 === "Mathematical Literacy") ? "https://www.sapapers.co.za/grade-10/mathematical-literacy" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject3 === "Technical Mathematics") ? "https://www.sapapers.co.za/grade-10/technical-mathematics" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject3 === "Mathematics") ? "https://www.sapapers.co.za/grade-11/mathematics" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject3 === "Mathematics Literacy") ? "https://www.sapapers.co.za/grade-11/mathematics-literacy" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject3 === "Mathematical Literacy") ? "https://www.sapapers.co.za/grade-12-mathematical-literacy" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject3 === "Mathematics") ? "https://www.sapapers.co.za/grade-12-mathematics" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject3 === "Technical Mathematics") ? "https://www.sapapers.co.za/grade-12/technical-mathematics" :
                (Subject3 === "") ? mysubjectURL :
                (Subject3 === "Blank") ? mysubjectURL :
                ""
            );
            //Button 4
            btnSubject4.link = (
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Accounting") ? "https://www.sapapers.co.za/ieb/accounting" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Agricultural Management Practice") ? "https://www.sapapers.co.za/ieb/agricultural-management-practice" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Agricultural Sciences") ? "https://www.sapapers.co.za/ieb/agricultural-sciences" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "AP Afrikaans") ? "https://www.sapapers.co.za/ieb/ap-afrikaans" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "AP English") ? "https://www.sapapers.co.za/ieb/ap-english" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "AP Math") ? "https://www.sapapers.co.za/ieb/ap-math" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "AP Physics") ? "https://www.sapapers.co.za/ieb/ap-physics" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Arabic SAL") ? "https://www.sapapers.co.za/ieb/arabic-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Business Studies") ? "https://www.sapapers.co.za/ieb/business-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Civil Technology") ? "https://www.sapapers.co.za/ieb/civil-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Computer Applications Technology") ? "https://www.sapapers.co.za/ieb/computer-applications-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Consumer Studies") ? "https://www.sapapers.co.za/ieb/consumer-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Dance Studies") ? "https://www.sapapers.co.za/ieb/dance-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Design") ? "https://www.sapapers.co.za/ieb/design" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Dramatic Arts") ? "https://www.sapapers.co.za/ieb/dramatic-arts" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Economics") ? "https://www.sapapers.co.za/ieb/economics" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Electrical Technology") ? "https://www.sapapers.co.za/ieb/electrical-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Engineering Graphics and Design") ? "https://www.sapapers.co.za/ieb/engineering-graphics-and-design" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Equine Studies") ? "https://www.sapapers.co.za/ieb/equine-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "French SAL") ? "https://www.sapapers.co.za/ieb/french-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Geography") ? "https://www.sapapers.co.za/ieb/geography" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "German SAL") ? "https://www.sapapers.co.za/ieb/german-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Greek SAL") ? "https://www.sapapers.co.za/ieb/greek-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Gujarati SAL") ? "https://www.sapapers.co.za/ieb/gujarati-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Hebrew SAL") ? "https://www.sapapers.co.za/ieb/hebrew-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Hindi SAL") ? "https://www.sapapers.co.za/ieb/hindi-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "History") ? "https://www.sapapers.co.za/ieb/history" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Hospitality Studies") ? "https://www.sapapers.co.za/ieb/hospitality-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Information Technology") ? "https://www.sapapers.co.za/ieb/information-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Italian SAL") ? "https://www.sapapers.co.za/ieb/italian-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Latin SAL") ? "https://www.sapapers.co.za/ieb/latin-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Life Science") ? "https://www.sapapers.co.za/ieb/life-science" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Mandarin SAL") ? "https://www.sapapers.co.za/ieb/mandarin-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Maritime Economics") ? "https://www.sapapers.co.za/ieb/maritime-economics" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Mechanical Technology") ? "https://www.sapapers.co.za/ieb/mechanical-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Music") ? "https://www.sapapers.co.za/ieb/music" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Nautical Science") ? "https://www.sapapers.co.za/ieb/nautical-science" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Physical Sciences") ? "https://www.sapapers.co.za/ieb/physical-sciences" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Portuguese SAL") ? "https://www.sapapers.co.za/ieb/portuguese-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Serbian SAL") ? "https://www.sapapers.co.za/ieb/serbian-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Spanish SAL") ? "https://www.sapapers.co.za/ieb/spanish-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Sport and Exercise") ? "https://www.sapapers.co.za/ieb/sport-and-exercise" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Tamali SAL") ? "https://www.sapapers.co.za/ieb/tamali-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Technical Sciences") ? "https://www.sapapers.co.za/ieb/technical-sciences" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Telugu SAL") ? "https://www.sapapers.co.za/ieb/telugu-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Tourism") ? "https://www.sapapers.co.za/ieb/tourism" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Urdu SAL") ? "https://www.sapapers.co.za/ieb/urdu-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject4 === "Visual Arts") ? "https://www.sapapers.co.za/ieb/visual-arts" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Accounting") ? "https://www.sapapers.co.za/grade-10/accounting" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Afrikaans SAL") ? "https://www.sapapers.co.za/grade-10/afrikaans-sal" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-10/agricultural-sciences" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Business Studies") ? "https://www.sapapers.co.za/grade-10/business-studies" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Civil Technology") ? "https://www.sapapers.co.za/grade-10/civil-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Economics") ? "https://www.sapapers.co.za/grade-10/economics" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Electrical Technology") ? "https://www.sapapers.co.za/grade-10/electrical-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Geography") ? "https://www.sapapers.co.za/grade-10/geography" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "History") ? "https://www.sapapers.co.za/grade-10/history" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Information Technology") ? "https://www.sapapers.co.za/grade-10/information-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Life Science") ? "https://www.sapapers.co.za/grade-10/life-science" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Mechanical Technology") ? "https://www.sapapers.co.za/grade-10/mechanical-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Physical Science") ? "https://www.sapapers.co.za/grade-10/physical-science" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject4 === "Technical Sciences") ? "https://www.sapapers.co.za/grade-10/technical-sciences" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Accounting") ? "https://www.sapapers.co.za/grade-11-accounting" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-11/agricultural-sciences" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Business Studies") ? "https://www.sapapers.co.za/grade-11-business-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Civil Technology") ? "https://www.sapapers.co.za/grade-11/civil-technology" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Computer Applications Technology") ? "https://www.sapapers.co.za/grade-11/computer-applications-technology" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Consumer Studies") ? "https://www.sapapers.co.za/grade-11/consumer-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Dance Studies") ? "https://www.sapapers.co.za/grade-11/dance-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Design") ? "https://www.sapapers.co.za/grade-11/design" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Dramatic Arts") ? "https://www.sapapers.co.za/grade-11/dramatic-arts" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Economics") ? "https://www.sapapers.co.za/grade-11-economics" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Engineering Graphic and Design") ? "https://www.sapapers.co.za/grade-11/engineering-graphic-and-design" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Geography") ? "https://www.sapapers.co.za/grade-11-geography" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "History") ? "https://www.sapapers.co.za/grade-11/history" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Hospitality Studies") ? "https://www.sapapers.co.za/grade-11/hospitality-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Information Technology") ? "https://www.sapapers.co.za/grade-11/information-technology" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Life Science") ? "https://www.sapapers.co.za/grade-11-life-science" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Music") ? "https://www.sapapers.co.za/grade-11/music" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Physical Sciences") ? "https://www.sapapers.co.za/grade-11/physical-science" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Tourism") ? "https://www.sapapers.co.za/grade-11/tourism" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject4 === "Visual Arts") ? "https://www.sapapers.co.za/grade-11/visual-arts" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Accounting") ? "https://www.sapapers.co.za/grade-12-accounting" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Afrikaans SAL") ? "https://www.sapapers.co.za/grade-12/afrikaans-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Agricultural Management Practices") ? "https://www.sapapers.co.za/grade-12/agricultural-management-practices" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-12/agricultural-sciences" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Agricultural Technology") ? "https://www.sapapers.co.za/grade-12/agricultural-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Business Studies") ? "https://www.sapapers.co.za/grade-12-business-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Civil Technology") ? "https://www.sapapers.co.za/grade-12/civil-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Computer Applications Technology") ? "https://www.sapapers.co.za/grade-12-computer-applications-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Consumer Studies") ? "https://www.sapapers.co.za/grade-12/consumer-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Dance Studies") ? "https://www.sapapers.co.za/grade-12/dance-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Design") ? "https://www.sapapers.co.za/grade-12/design" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Dramatic Arts") ? "https://www.sapapers.co.za/grade-12/dramatic-arts" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Economics") ? "https://www.sapapers.co.za/grade-12-economics" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Electrical Technology") ? "https://www.sapapers.co.za/grade-12/electrical-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Engineering Graphic and Design") ? "https://www.sapapers.co.za/grade-12/engineering-graphic-and-design" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "English SAL") ? "https://www.sapapers.co.za/grade-12/english-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Geography") ? "https://www.sapapers.co.za/grade-12-geography" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "History") ? "https://www.sapapers.co.za/grade-12-history" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Hospitality Studies") ? "https://www.sapapers.co.za/grade-12/hospitality-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Information Technology") ? "https://www.sapapers.co.za/grade-12-information-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Life Science") ? "https://www.sapapers.co.za/grade-12-life-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Marine Science") ? "https://www.sapapers.co.za/grade-12/marine-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Mechanical Technology") ? "https://www.sapapers.co.za/grade-12/mechanical-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Music") ? "https://www.sapapers.co.za/grade-12/music" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Ndebele SAL") ? "https://www.sapapers.co.za/grade-12/ndebele-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Physical Science") ? "https://www.sapapers.co.za/grade-12-physical-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Religion Studies") ? "https://www.sapapers.co.za/grade-12/religion-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Sepedi SAL") ? "https://www.sapapers.co.za/grade-12/sepedi-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Sesotho SAL") ? "https://www.sapapers.co.za/grade-12/sesotho-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Setswana SAL") ? "https://www.sapapers.co.za/grade-12/setswana-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Siswati SAL") ? "https://www.sapapers.co.za/grade-12/siswati-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Technical Science") ? "https://www.sapapers.co.za/grade-12/technical-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Tourism") ? "https://www.sapapers.co.za/grade-12/tourism" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Visual Arts") ? "https://www.sapapers.co.za/grade-12/visual-arts" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Xhosa SAL") ? "https://www.sapapers.co.za/grade-12/xhosa-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject4 === "Zulu SAL") ? "https://www.sapapers.co.za/grade-12/zulu-sal" :
                (Subject4 === "") ? mysubjectURL :
                (Subject4 === "Blank") ? mysubjectURL :
                "" 
            );
            //Button 5
            btnSubject5.link = (
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Accounting") ? "https://www.sapapers.co.za/ieb/accounting" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Agricultural Management Practice") ? "https://www.sapapers.co.za/ieb/agricultural-management-practice" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Agricultural Sciences") ? "https://www.sapapers.co.za/ieb/agricultural-sciences" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "AP Afrikaans") ? "https://www.sapapers.co.za/ieb/ap-afrikaans" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "AP English") ? "https://www.sapapers.co.za/ieb/ap-english" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "AP Math") ? "https://www.sapapers.co.za/ieb/ap-math" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "AP Physics") ? "https://www.sapapers.co.za/ieb/ap-physics" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Arabic SAL") ? "https://www.sapapers.co.za/ieb/arabic-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Business Studies") ? "https://www.sapapers.co.za/ieb/business-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Civil Technology") ? "https://www.sapapers.co.za/ieb/civil-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Computer Applications Technology") ? "https://www.sapapers.co.za/ieb/computer-applications-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Consumer Studies") ? "https://www.sapapers.co.za/ieb/consumer-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Dance Studies") ? "https://www.sapapers.co.za/ieb/dance-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Design") ? "https://www.sapapers.co.za/ieb/design" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Dramatic Arts") ? "https://www.sapapers.co.za/ieb/dramatic-arts" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Economics") ? "https://www.sapapers.co.za/ieb/economics" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Electrical Technology") ? "https://www.sapapers.co.za/ieb/electrical-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Engineering Graphics and Design") ? "https://www.sapapers.co.za/ieb/engineering-graphics-and-design" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Equine Studies") ? "https://www.sapapers.co.za/ieb/equine-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "French SAL") ? "https://www.sapapers.co.za/ieb/french-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Geography") ? "https://www.sapapers.co.za/ieb/geography" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "German SAL") ? "https://www.sapapers.co.za/ieb/german-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Greek SAL") ? "https://www.sapapers.co.za/ieb/greek-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Gujarati SAL") ? "https://www.sapapers.co.za/ieb/gujarati-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Hebrew SAL") ? "https://www.sapapers.co.za/ieb/hebrew-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Hindi SAL") ? "https://www.sapapers.co.za/ieb/hindi-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "History") ? "https://www.sapapers.co.za/ieb/history" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Hospitality Studies") ? "https://www.sapapers.co.za/ieb/hospitality-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Information Technology") ? "https://www.sapapers.co.za/ieb/information-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Italian SAL") ? "https://www.sapapers.co.za/ieb/italian-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Latin SAL") ? "https://www.sapapers.co.za/ieb/latin-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Life Science") ? "https://www.sapapers.co.za/ieb/life-science" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Mandarin SAL") ? "https://www.sapapers.co.za/ieb/mandarin-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Maritime Economics") ? "https://www.sapapers.co.za/ieb/maritime-economics" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Mechanical Technology") ? "https://www.sapapers.co.za/ieb/mechanical-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Music") ? "https://www.sapapers.co.za/ieb/music" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Nautical Science") ? "https://www.sapapers.co.za/ieb/nautical-science" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Physical Sciences") ? "https://www.sapapers.co.za/ieb/physical-sciences" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Portuguese SAL") ? "https://www.sapapers.co.za/ieb/portuguese-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Serbian SAL") ? "https://www.sapapers.co.za/ieb/serbian-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Spanish SAL") ? "https://www.sapapers.co.za/ieb/spanish-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Sport and Exercise") ? "https://www.sapapers.co.za/ieb/sport-and-exercise" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Tamali SAL") ? "https://www.sapapers.co.za/ieb/tamali-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Technical Sciences") ? "https://www.sapapers.co.za/ieb/technical-sciences" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Telugu SAL") ? "https://www.sapapers.co.za/ieb/telugu-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Tourism") ? "https://www.sapapers.co.za/ieb/tourism" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Urdu SAL") ? "https://www.sapapers.co.za/ieb/urdu-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject5 === "Visual Arts") ? "https://www.sapapers.co.za/ieb/visual-arts" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Accounting") ? "https://www.sapapers.co.za/grade-10/accounting" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Afrikaans SAL") ? "https://www.sapapers.co.za/grade-10/afrikaans-sal" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-10/agricultural-sciences" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Business Studies") ? "https://www.sapapers.co.za/grade-10/business-studies" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Civil Technology") ? "https://www.sapapers.co.za/grade-10/civil-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Economics") ? "https://www.sapapers.co.za/grade-10/economics" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Electrical Technology") ? "https://www.sapapers.co.za/grade-10/electrical-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Geography") ? "https://www.sapapers.co.za/grade-10/geography" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "History") ? "https://www.sapapers.co.za/grade-10/history" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Information Technology") ? "https://www.sapapers.co.za/grade-10/information-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Life Science") ? "https://www.sapapers.co.za/grade-10/life-science" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Mechanical Technology") ? "https://www.sapapers.co.za/grade-10/mechanical-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Physical Science") ? "https://www.sapapers.co.za/grade-10/physical-science" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject5 === "Technical Sciences") ? "https://www.sapapers.co.za/grade-10/technical-sciences" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Accounting") ? "https://www.sapapers.co.za/grade-11-accounting" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-11/agricultural-sciences" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Business Studies") ? "https://www.sapapers.co.za/grade-11-business-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Civil Technology") ? "https://www.sapapers.co.za/grade-11/civil-technology" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Computer Applications Technology") ? "https://www.sapapers.co.za/grade-11/computer-applications-technology" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Consumer Studies") ? "https://www.sapapers.co.za/grade-11/consumer-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Dance Studies") ? "https://www.sapapers.co.za/grade-11/dance-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Design") ? "https://www.sapapers.co.za/grade-11/design" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Dramatic Arts") ? "https://www.sapapers.co.za/grade-11/dramatic-arts" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Economics") ? "https://www.sapapers.co.za/grade-11-economics" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Engineering Graphic and Design") ? "https://www.sapapers.co.za/grade-11/engineering-graphic-and-design" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Geography") ? "https://www.sapapers.co.za/grade-11-geography" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "History") ? "https://www.sapapers.co.za/grade-11/history" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Hospitality Studies") ? "https://www.sapapers.co.za/grade-11/hospitality-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Information Technology") ? "https://www.sapapers.co.za/grade-11/information-technology" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Life Science") ? "https://www.sapapers.co.za/grade-11-life-science" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Music") ? "https://www.sapapers.co.za/grade-11/music" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Physical Sciences") ? "https://www.sapapers.co.za/grade-11/physical-science" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Tourism") ? "https://www.sapapers.co.za/grade-11/tourism" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject5 === "Visual Arts") ? "https://www.sapapers.co.za/grade-11/visual-arts" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Accounting") ? "https://www.sapapers.co.za/grade-12-accounting" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Afrikaans SAL") ? "https://www.sapapers.co.za/grade-12/afrikaans-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Agricultural Management Practices") ? "https://www.sapapers.co.za/grade-12/agricultural-management-practices" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-12/agricultural-sciences" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Agricultural Technology") ? "https://www.sapapers.co.za/grade-12/agricultural-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Business Studies") ? "https://www.sapapers.co.za/grade-12-business-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Civil Technology") ? "https://www.sapapers.co.za/grade-12/civil-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Computer Applications Technology") ? "https://www.sapapers.co.za/grade-12-computer-applications-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Consumer Studies") ? "https://www.sapapers.co.za/grade-12/consumer-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Dance Studies") ? "https://www.sapapers.co.za/grade-12/dance-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Design") ? "https://www.sapapers.co.za/grade-12/design" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Dramatic Arts") ? "https://www.sapapers.co.za/grade-12/dramatic-arts" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Economics") ? "https://www.sapapers.co.za/grade-12-economics" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Electrical Technology") ? "https://www.sapapers.co.za/grade-12/electrical-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Engineering Graphic and Design") ? "https://www.sapapers.co.za/grade-12/engineering-graphic-and-design" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "English SAL") ? "https://www.sapapers.co.za/grade-12/english-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Geography") ? "https://www.sapapers.co.za/grade-12-geography" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "History") ? "https://www.sapapers.co.za/grade-12-history" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Hospitality Studies") ? "https://www.sapapers.co.za/grade-12/hospitality-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Information Technology") ? "https://www.sapapers.co.za/grade-12-information-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Life Science") ? "https://www.sapapers.co.za/grade-12-life-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Marine Science") ? "https://www.sapapers.co.za/grade-12/marine-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Mechanical Technology") ? "https://www.sapapers.co.za/grade-12/mechanical-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Music") ? "https://www.sapapers.co.za/grade-12/music" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Ndebele SAL") ? "https://www.sapapers.co.za/grade-12/ndebele-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Physical Science") ? "https://www.sapapers.co.za/grade-12-physical-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Religion Studies") ? "https://www.sapapers.co.za/grade-12/religion-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Sepedi SAL") ? "https://www.sapapers.co.za/grade-12/sepedi-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Sesotho SAL") ? "https://www.sapapers.co.za/grade-12/sesotho-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Setswana SAL") ? "https://www.sapapers.co.za/grade-12/setswana-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Siswati SAL") ? "https://www.sapapers.co.za/grade-12/siswati-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Technical Science") ? "https://www.sapapers.co.za/grade-12/technical-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Tourism") ? "https://www.sapapers.co.za/grade-12/tourism" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Visual Arts") ? "https://www.sapapers.co.za/grade-12/visual-arts" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Xhosa SAL") ? "https://www.sapapers.co.za/grade-12/xhosa-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject5 === "Zulu SAL") ? "https://www.sapapers.co.za/grade-12/zulu-sal" :
                (Subject5 === "") ? mysubjectURL :
                (Subject5 === "Blank") ? mysubjectURL :
                ""  
            );
            //Button 6
            btnSubject6.link = (
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Accounting") ? "https://www.sapapers.co.za/ieb/accounting" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Agricultural Management Practice") ? "https://www.sapapers.co.za/ieb/agricultural-management-practice" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Agricultural Sciences") ? "https://www.sapapers.co.za/ieb/agricultural-sciences" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "AP Afrikaans") ? "https://www.sapapers.co.za/ieb/ap-afrikaans" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "AP English") ? "https://www.sapapers.co.za/ieb/ap-english" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "AP Math") ? "https://www.sapapers.co.za/ieb/ap-math" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "AP Physics") ? "https://www.sapapers.co.za/ieb/ap-physics" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Arabic SAL") ? "https://www.sapapers.co.za/ieb/arabic-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Business Studies") ? "https://www.sapapers.co.za/ieb/business-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Civil Technology") ? "https://www.sapapers.co.za/ieb/civil-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Computer Applications Technology") ? "https://www.sapapers.co.za/ieb/computer-applications-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Consumer Studies") ? "https://www.sapapers.co.za/ieb/consumer-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Dance Studies") ? "https://www.sapapers.co.za/ieb/dance-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Design") ? "https://www.sapapers.co.za/ieb/design" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Dramatic Arts") ? "https://www.sapapers.co.za/ieb/dramatic-arts" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Economics") ? "https://www.sapapers.co.za/ieb/economics" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Electrical Technology") ? "https://www.sapapers.co.za/ieb/electrical-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Engineering Graphics and Design") ? "https://www.sapapers.co.za/ieb/engineering-graphics-and-design" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Equine Studies") ? "https://www.sapapers.co.za/ieb/equine-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "French SAL") ? "https://www.sapapers.co.za/ieb/french-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Geography") ? "https://www.sapapers.co.za/ieb/geography" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "German SAL") ? "https://www.sapapers.co.za/ieb/german-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Greek SAL") ? "https://www.sapapers.co.za/ieb/greek-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Gujarati SAL") ? "https://www.sapapers.co.za/ieb/gujarati-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Hebrew SAL") ? "https://www.sapapers.co.za/ieb/hebrew-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Hindi SAL") ? "https://www.sapapers.co.za/ieb/hindi-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "History") ? "https://www.sapapers.co.za/ieb/history" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Hospitality Studies") ? "https://www.sapapers.co.za/ieb/hospitality-studies" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Information Technology") ? "https://www.sapapers.co.za/ieb/information-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Italian SAL") ? "https://www.sapapers.co.za/ieb/italian-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Latin SAL") ? "https://www.sapapers.co.za/ieb/latin-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Life Science") ? "https://www.sapapers.co.za/ieb/life-science" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Mandarin SAL") ? "https://www.sapapers.co.za/ieb/mandarin-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Maritime Economics") ? "https://www.sapapers.co.za/ieb/maritime-economics" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Mechanical Technology") ? "https://www.sapapers.co.za/ieb/mechanical-technology" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Music") ? "https://www.sapapers.co.za/ieb/music" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Nautical Science") ? "https://www.sapapers.co.za/ieb/nautical-science" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Physical Sciences") ? "https://www.sapapers.co.za/ieb/physical-sciences" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Portuguese SAL") ? "https://www.sapapers.co.za/ieb/portuguese-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Serbian SAL") ? "https://www.sapapers.co.za/ieb/serbian-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Spanish SAL") ? "https://www.sapapers.co.za/ieb/spanish-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Sport and Exercise") ? "https://www.sapapers.co.za/ieb/sport-and-exercise" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Tamali SAL") ? "https://www.sapapers.co.za/ieb/tamali-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Technical Sciences") ? "https://www.sapapers.co.za/ieb/technical-sciences" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Telugu SAL") ? "https://www.sapapers.co.za/ieb/telugu-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Tourism") ? "https://www.sapapers.co.za/ieb/tourism" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Urdu SAL") ? "https://www.sapapers.co.za/ieb/urdu-sal" :
                (Curriculum === "IEB" && Grade === "Grade 12" && Subject6 === "Visual Arts") ? "https://www.sapapers.co.za/ieb/visual-arts" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Accounting") ? "https://www.sapapers.co.za/grade-10/accounting" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Afrikaans SAL") ? "https://www.sapapers.co.za/grade-10/afrikaans-sal" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-10/agricultural-sciences" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Business Studies") ? "https://www.sapapers.co.za/grade-10/business-studies" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Civil Technology") ? "https://www.sapapers.co.za/grade-10/civil-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Economics") ? "https://www.sapapers.co.za/grade-10/economics" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Electrical Technology") ? "https://www.sapapers.co.za/grade-10/electrical-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Geography") ? "https://www.sapapers.co.za/grade-10/geography" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "History") ? "https://www.sapapers.co.za/grade-10/history" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Information Technology") ? "https://www.sapapers.co.za/grade-10/information-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Life Science") ? "https://www.sapapers.co.za/grade-10/life-science" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Mechanical Technology") ? "https://www.sapapers.co.za/grade-10/mechanical-technology" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Physical Science") ? "https://www.sapapers.co.za/grade-10/physical-science" :
                (Curriculum === "Government" && Grade === "Grade 10" && Subject6 === "Technical Sciences") ? "https://www.sapapers.co.za/grade-10/technical-sciences" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Accounting") ? "https://www.sapapers.co.za/grade-11-accounting" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-11/agricultural-sciences" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Business Studies") ? "https://www.sapapers.co.za/grade-11-business-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Civil Technology") ? "https://www.sapapers.co.za/grade-11/civil-technology" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Computer Applications Technology") ? "https://www.sapapers.co.za/grade-11/computer-applications-technology" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Consumer Studies") ? "https://www.sapapers.co.za/grade-11/consumer-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Dance Studies") ? "https://www.sapapers.co.za/grade-11/dance-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Design") ? "https://www.sapapers.co.za/grade-11/design" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Dramatic Arts") ? "https://www.sapapers.co.za/grade-11/dramatic-arts" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Economics") ? "https://www.sapapers.co.za/grade-11-economics" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Engineering Graphic and Design") ? "https://www.sapapers.co.za/grade-11/engineering-graphic-and-design" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Geography") ? "https://www.sapapers.co.za/grade-11-geography" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "History") ? "https://www.sapapers.co.za/grade-11/history" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Hospitality Studies") ? "https://www.sapapers.co.za/grade-11/hospitality-studies" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Information Technology") ? "https://www.sapapers.co.za/grade-11/information-technology" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Life Science") ? "https://www.sapapers.co.za/grade-11-life-science" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Music") ? "https://www.sapapers.co.za/grade-11/music" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Physical Sciences") ? "https://www.sapapers.co.za/grade-11/physical-science" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Tourism") ? "https://www.sapapers.co.za/grade-11/tourism" :
                (Curriculum === "Government" && Grade === "Grade 11" && Subject6 === "Visual Arts") ? "https://www.sapapers.co.za/grade-11/visual-arts" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Accounting") ? "https://www.sapapers.co.za/grade-12-accounting" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Afrikaans SAL") ? "https://www.sapapers.co.za/grade-12/afrikaans-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Agricultural Management Practices") ? "https://www.sapapers.co.za/grade-12/agricultural-management-practices" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Agricultural Sciences") ? "https://www.sapapers.co.za/grade-12/agricultural-sciences" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Agricultural Technology") ? "https://www.sapapers.co.za/grade-12/agricultural-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Business Studies") ? "https://www.sapapers.co.za/grade-12-business-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Civil Technology") ? "https://www.sapapers.co.za/grade-12/civil-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Computer Applications Technology") ? "https://www.sapapers.co.za/grade-12-computer-applications-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Consumer Studies") ? "https://www.sapapers.co.za/grade-12/consumer-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Dance Studies") ? "https://www.sapapers.co.za/grade-12/dance-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Design") ? "https://www.sapapers.co.za/grade-12/design" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Dramatic Arts") ? "https://www.sapapers.co.za/grade-12/dramatic-arts" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Economics") ? "https://www.sapapers.co.za/grade-12-economics" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Electrical Technology") ? "https://www.sapapers.co.za/grade-12/electrical-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Engineering Graphic and Design") ? "https://www.sapapers.co.za/grade-12/engineering-graphic-and-design" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "English SAL") ? "https://www.sapapers.co.za/grade-12/english-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Geography") ? "https://www.sapapers.co.za/grade-12-geography" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "History") ? "https://www.sapapers.co.za/grade-12-history" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Hospitality Studies") ? "https://www.sapapers.co.za/grade-12/hospitality-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Information Technology") ? "https://www.sapapers.co.za/grade-12-information-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Life Science") ? "https://www.sapapers.co.za/grade-12-life-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Marine Science") ? "https://www.sapapers.co.za/grade-12/marine-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Mechanical Technology") ? "https://www.sapapers.co.za/grade-12/mechanical-technology" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Music") ? "https://www.sapapers.co.za/grade-12/music" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Ndebele SAL") ? "https://www.sapapers.co.za/grade-12/ndebele-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Physical Science") ? "https://www.sapapers.co.za/grade-12-physical-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Religion Studies") ? "https://www.sapapers.co.za/grade-12/religion-studies" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Sepedi SAL") ? "https://www.sapapers.co.za/grade-12/sepedi-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Sesotho SAL") ? "https://www.sapapers.co.za/grade-12/sesotho-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Setswana SAL") ? "https://www.sapapers.co.za/grade-12/setswana-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Siswati SAL") ? "https://www.sapapers.co.za/grade-12/siswati-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Technical Science") ? "https://www.sapapers.co.za/grade-12/technical-science" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Tourism") ? "https://www.sapapers.co.za/grade-12/tourism" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Visual Arts") ? "https://www.sapapers.co.za/grade-12/visual-arts" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Xhosa SAL") ? "https://www.sapapers.co.za/grade-12/xhosa-sal" :
                (Curriculum === "Government" && Grade === "Grade 12" && Subject6 === "Zulu SAL") ? "https://www.sapapers.co.za/grade-12/zulu-sal" :
                (Subject6 === "") ? mysubjectURL :
                (Subject6 === "Blank") ? mysubjectURL :
                ""
            );
            //Button LO
            btnSubjectLO.link = (
                (Curriculum === "Government" && Grade === "Grade 10") ? "https://www.sapapers.co.za/grade-10/life-orientation" :
                (Curriculum === "Government" && Grade === "Grade 11") ? "https://www.sapapers.co.za/grade-11/life-orientation" :
                (Curriculum === "Government" && Grade === "Grade 12") ? "https://www.sapapers.co.za/grade-12-life-orientation" :
                (Curriculum === "IEB" && Grade === "Grade 12") ? "https://www.sapapers.co.za/ieb/life-orientation" :
                ""
            );

            //console.log(member)
            return member;
            
        })
        .catch((error) => {
            console.error(error);
    });
   
}