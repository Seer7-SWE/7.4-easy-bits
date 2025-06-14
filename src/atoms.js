// import {atom} from "recoil";

// export const networkAtom =atom({
//     key: "networkAtom",
//     default: 102
// });

// export const jobsAtom =atom({
//     key: "networkAtom",
//     default: 0
// });

// export const notificationsAtom =atom({
//     key: "networkAtom",
//     default: 12
// });

// export const messagingAtom =atom({
//     key: "networkAtom",
//     default: 0
// });

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const messagingAtomCount = get(notificationsAtom);
//         const notificationsAtomCount = get(messagingAtom);
//         return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
//     }
// })



import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: {}
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs +
        allNotifications.notifications +
        allNotifications.messaging
    }
})