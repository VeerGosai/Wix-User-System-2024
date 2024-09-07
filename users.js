import { currentUser } from 'wix-users';
import { userHasRole } from 'backend/wix-users-backend';
import wixData from 'wix-data';



$w.onReady(async function () {
    const user = currentUser;
    const isLoggedIn = user.loggedIn;

    if (isLoggedIn) {
        const isTeacher = await userHasRole(user.id, 'Teacher');
        if (!isTeacher) {
            wixLocation.to('/access-denied');
        }
    } else {
        wixLocation.to('/login');
    }
});

// Save progress
export function saveProgress(courseId, progress) {
    const user = currentUser;
    if (user.loggedIn) {
        const userId = user.id;
        const progressRecord = {
            userId: userId,
            courseId: courseId,
            progress: progress
        };
        
        wixData.insert('UserProgress', progressRecord)
            .then(() => {
                console.log('Progress saved');
            })
            .catch((err) => {
                console.error('Error saving progress:', err);
            });
    }
}

// Retrieve progress for a course
export function getProgress(courseId) {
    const user = currentUser;
    if (user.loggedIn) {
        const userId = user.id;
        
        return wixData.query('UserProgress')
            .eq('userId', userId)
            .eq('courseId', courseId)
            .find()
            .then((results) => {
                if (results.items.length > 0) {
                    return results.items[0].progress;
                } else {
                    return 0; // Default progress
                }
            });
    }
}

// Save progress
export function saveProgress(courseId, progress) {
    const user = currentUser;
    if (user.loggedIn) {
        const userId = user.id;
        const progressRecord = {
            userId: userId,
            courseId: courseId,
            progress: progress
        };
        
        wixData.insert('UserProgress', progressRecord)
            .then(() => {
                console.log('Progress saved');
            })
            .catch((err) => {
                console.error('Error saving progress:', err);
            });
    }
}

// Retrieve progress for a course
export function getProgress(courseId) {
    const user = currentUser;
    if (user.loggedIn) {
        const userId = user.id;
        
        return wixData.query('UserProgress')
            .eq('userId', userId)
            .eq('courseId', courseId)
            .find()
            .then((results) => {
                if (results.items.length > 0) {
                    return results.items[0].progress;
                } else {
                    return 0; // Default progress
                }
            });
    }
}

// Fetch all users
export function fetchAllUsers() {
    return wixData.query('Users').find()
        .then((results) => {
            return results.items;
        });
}

// Update user role
export function updateUserRole(userId, newRole) {
    return roles.assignRole(userId, newRole);
}

