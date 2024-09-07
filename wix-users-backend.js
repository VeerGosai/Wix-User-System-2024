import { roles } from 'wix-users-backend';

// Define roles
const STUDENT_ROLE = 'Student';
const TEACHER_ROLE = 'Teacher';
const ADMIN_ROLE = 'Admin';

// Assign a role to a user
export function assignUserRole(userId, role) {
    return roles.assignRole(userId, role);
}

// Remove a role from a user
export function removeUserRole(userId, role) {
    return roles.removeRole(userId, role);
}

// Check if a user has a role
export function userHasRole(userId, role) {
    return roles.listRoles(userId)
        .then(userRoles => userRoles.includes(role));
}
