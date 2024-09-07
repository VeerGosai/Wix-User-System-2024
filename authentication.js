import { authentication, register } from 'wix-users';

$w.onReady(function () {
    $w('#registerButton').onClick(async () => {
        const email = $w('#emailInput').value;
        const password = $w('#passwordInput').value;
        const firstName = $w('#firstNameInput').value;
        const lastName = $w('#lastNameInput').value;

        try {
            const user = await register(email, password, { 
                contactInfo: {
                    firstName: firstName,
                    lastName: lastName
                }
            });

            // After registration, assign the user the 'Student' role by default
            assignUserRole(user.id, 'Student');

            // Automatically log in the user
            await authentication.login(email, password);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    });
});
import { assignUserRole } from './wix-users-backend';
